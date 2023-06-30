// Import the functions you need from the SDKs you need
import {getFirestore} from "firebase/firestore"
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtmhQcHFoMfvEUwMTUhWD74ni500OKWJc",
  authDomain: "tuto-d4859.firebaseapp.com",
  projectId: "tuto-d4859",
  storageBucket: "tuto-d4859.appspot.com",
  messagingSenderId: "429160352735",
  appId: "1:429160352735:web:f0c5f1d169259e326ed26a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
