
import { initializeApp } from "firebase/app";
import { getFirestore}from 'firebase/firestore'


//import {auth} from 'firebase/auth'



const firebaseConfig = {
  apiKey: "AIzaSyCkuHwgWrAsqEoIdhcybSAVkY1K40CrtXY",
  authDomain: "auth-f6f8a.firebaseapp.com",
  projectId: "auth-f6f8a",
  storageBucket: "auth-f6f8a.appspot.com",
  messagingSenderId: "307003376039",
  appId: "1:307003376039:web:67544bb26ab521dcd0b682",
  measurementId: "G-MV4SEH7MSD"
};




// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const database = getFirestore(app)
//export const auth = getAuth(app)

