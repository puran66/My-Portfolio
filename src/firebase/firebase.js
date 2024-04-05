// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAzCxeq8hjeeY-7f65ehow6KyKz5VAul74",
  authDomain: "portfolio-6f4d8.firebaseapp.com",
  projectId: "portfolio-6f4d8",
  storageBucket: "portfolio-6f4d8.appspot.com",
  messagingSenderId: "158275097758",
  appId: "1:158275097758:web:6f2153e0832e0de841578f",
  measurementId: "G-GTGQD4VDRL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const dataBase = getDatabase(app);
