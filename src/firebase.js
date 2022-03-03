// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import firebase from "firebase";
// import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB43up4CgEd8sqSzAaMthcuFbpKsdv_uuA",
  authDomain: "tiktokclone-2fc41.firebaseapp.com",
  projectId: "tiktokclone-2fc41",
  storageBucket: "tiktokclone-2fc41.appspot.com",
  messagingSenderId: "111421343083",
  appId: "1:111421343083:web:d2aceec657c1807412f82e",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();
// const db = getFirestore(app);
export default db;
