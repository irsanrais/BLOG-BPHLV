// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "bphlv-blog.firebaseapp.com",
  projectId: "bphlv-blog",
  storageBucket: "bphlv-blog.appspot.com",
  messagingSenderId: "1034138086805",
  appId: "1:1034138086805:web:1dbeb27a03ddc50ede9a9c",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
