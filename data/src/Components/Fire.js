import React, { useState } from 'react'
import './Fire.css'


import { createUserWithEmailAndPassword, signOut, sendEmailVerification, signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth'
import { auth } from './Config/Config'

function Fire() {

    const [mail, setEmail] = useState('');
    const [pass, setPassword] = useState('');


    const signUp = async () => {
        try {
            await createUserWithEmailAndPassword(auth, mail, pass)
        } catch (error) {
            console.log(error)

        }
    }
    const logout = async () => {
        await signOut(auth)

    }

    const signIn = async () => {
        await signInWithEmailAndPassword(auth, mail, pass)
    }

    const verifyEmail = async () => {
        await sendEmailVerification(auth.currentUser)
    }

    const reset = async () => {
        await sendPasswordResetEmail(auth,mail)
    }


    console.log(auth?.currentUser);

    return (
        <div className='banner'>
            <div className="forms" >
                <h3>Register Form</h3>

                <input type="text" placeholder='   Enter your email'
                    value={mail} onChange={(e) => setEmail(e.target.value)} />  <br />


                <input type="password" placeholder='   Enter your password'
                    value={pass} onChange={(e) => setPassword(e.target.value)} /><br />


                <button onClick={signUp}>Sign Up</button><br />
                <button onClick={signIn}>New Sign In</button><br />
                <button onClick={logout}>Sign Out</button><br />
                <button onClick={verifyEmail}>Email Verify</button><br />
                <button onClick={reset}>RESeT</button><br />








            </div>
        </div>
    )
}

export default Fire
