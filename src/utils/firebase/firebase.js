// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { FIREBASE_KEY } from "../constants";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: FIREBASE_KEY,
  authDomain: "netflix-gpt-3024f.firebaseapp.com",
  projectId: "netflix-gpt-3024f",
  storageBucket: "netflix-gpt-3024f.firebasestorage.app",
  messagingSenderId: "306189115477",
  appId: "1:306189115477:web:fb0831ce4b5fdb8d3334dc",
  measurementId: "G-81MN7KRHB3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
export {auth}