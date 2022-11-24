// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXi_HnxLEEJmsXMJqjrJUO3PigFWFFDnc",
  authDomain: "alimentos-be10e.firebaseapp.com",
  projectId: "alimentos-be10e",
  storageBucket: "alimentos-be10e.appspot.com",
  messagingSenderId: "380607303984",
  appId: "1:380607303984:web:8ec2b85f1ee8c7ce1af8f5",
  measurementId: "G-6XHCGYVN3V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;