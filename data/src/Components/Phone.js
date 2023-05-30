import React, { useState } from 'react'
import './phone.css'
import { auth } from './Config/Config'
import { RecaptchaVerifier, signInWithPhoneNumber ,signOut} from 'firebase/auth'


function Phone() {

  

  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState('');
  const [user, setUser] = useState(null);

console.log(auth.currentUser);
  const sendOtp = async() => {
 
      let  recaptchaVerifier =  await new RecaptchaVerifier("recaptcha",  {}, auth)
      

      let confirmation = await signInWithPhoneNumber(auth, phone, recaptchaVerifier);

      setUser(confirmation);

      console.log(confirmation);
  }

  const verifyOtp = async() => {
await user.confirmation(otp)
  }

  const logOut = async() => {
    await signOut(auth);

  }


  return (
    <div>
      <div className="phone">

        <input type="number" placeholder='phone number' value={phone} onChange={(e) => setPhone(e.target.value)} />

        
    
        <button onClick={sendOtp}  >send the OTP</button>

        <div id='recaptcha'></div>

        <input type="text" placeholder='enter OTP' value={otp} onChange={(e) => setOtp(e.target.value)} />
        <button onClick={verifyOtp}   >confirm OTP</button>
        <button onClick={logOut} >  logout</button>
      </div>
    </div>
  )
}

export default Phone
