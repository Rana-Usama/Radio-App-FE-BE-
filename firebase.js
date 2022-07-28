// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMifEKo0-s_qEPusHQWx1TFQffetvxemI",
  authDomain: "fonyenetwork.firebaseapp.com",
  projectId: "fonyenetwork",
  storageBucket: "fonyenetwork.appspot.com",
  messagingSenderId: "204969303876",
  appId: "1:204969303876:web:9c5b1ead821df1eb87c111"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app