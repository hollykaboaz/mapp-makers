import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore  } from "firebase/firestore";

const firebaseConfig = {

  apiKey: "AIzaSyDS5ET7NiuWAiOzD37keiI0fKH6yhudPxQ",
  authDomain: "mapp-d9952.firebaseapp.com",
  databaseURL: "https://mapp-d9952-default-rtdb.firebaseio.com",
  projectId: "mapp-d9952",
  storageBucket: "mapp-d9952.appspot.com",
  messagingSenderId: "294714815316",
  appId: "1:294714815316:web:749b0806590391c9598ec1",
  measurementId: "G-W95MH4KWP7"

};
  

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth(app);

// Initialize App Check with reCAPTCHA
const appCheck = initializeAppCheck(app, {
  provider: new ReCaptchaV3Provider('6LdhuWsoAAAAAOZzmixISGygbzcJErHKmc0tC0Ni'),
});


export { auth, db };