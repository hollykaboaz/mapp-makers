// Import the functions you need from the SDKs you need
import * as firebase from "firebase/app";
import "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const analytics = getAnalytics(app);