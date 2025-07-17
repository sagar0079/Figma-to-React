// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAoC-h5m2kEgVIixiX6prYR-BhgUCIscSw",
  authDomain: "fire-vite-contact.firebaseapp.com",
  projectId: "fire-vite-contact",
  storageBucket: "fire-vite-contact.appspot.com",
  messagingSenderId: "492571299653",
  appId: "1:492571299653:web:4dd08ec356769bb1e7782c",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
