// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBP5vFWSfvqXQX2Ku3NPHxc5rmYnrRlMTI",
  authDomain: "hotelforest-ddf42.firebaseapp.com",
  projectId: "hotelforest-ddf42",
  storageBucket: "hotelforest-ddf42.firebasestorage.app",
  messagingSenderId: "637978579104",
  appId: "1:637978579104:web:5e56dde70ad1c76c9ef9c5",
  measurementId: "G-NQPKGK9JC2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)

