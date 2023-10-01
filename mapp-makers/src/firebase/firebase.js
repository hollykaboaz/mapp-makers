import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore  } from "firebase/firestore";

const firebaseConfig = {

    apiKey: "AIzaSyALV5N4O19MoD6-WVxDkHxXu2xS6IT-y4c",
  
    authDomain: "trial-23d2b.firebaseapp.com",
  
    projectId: "trial-23d2b",
  
    storageBucket: "trial-23d2b.appspot.com",
  
    messagingSenderId: "433928021185",
  
    appId: "1:433928021185:web:335968545d7f25655d2040",
  
    measurementId: "G-BDSE8TP0DN"
  
  };
  


// Initialize Firebase

const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth(app);

export { auth, db };