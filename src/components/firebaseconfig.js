// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCEXjnXumA13MJl_OCHYHN4jQ9-PwJOzo4",
  authDomain: "aula-pdm-eff0e.firebaseapp.com",
  projectId: "aula-pdm-eff0e",
  storageBucket: "aula-pdm-eff0e.appspot.com",
  messagingSenderId: "960029493573",
  appId: "1:960029493573:web:d06374c10c6377ead6d62c",
  measurementId: "G-CCN9FJJFVH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getAnalytics(app);