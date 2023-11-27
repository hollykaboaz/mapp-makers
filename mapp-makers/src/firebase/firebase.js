import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, getDocs } from "firebase/firestore";

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

//collection reference for Students
const colRef = collection(db, 'students');

//get data from collection
getDocs(colRef)
  .then((snapshot) => {
    let students = []
    snapshot.docs.forEach((doc) => {
      students.push({ ...doc.data(), id: doc.id })
    })
    console.log(students);
  })
  .catch(err => {
    console.log(err.message);
  })

export { auth, db, app};