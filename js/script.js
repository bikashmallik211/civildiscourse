// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBuDbslgaInn-UoWR1F-Z7_MZfw7JO5F4w",
  authDomain: "civildiscourse-a453d.firebaseapp.com",
  projectId: "civildiscourse-a453d",
  storageBucket: "civildiscourse-a453d.firebasestorage.app",
  messagingSenderId: "615565870121",
  appId: "1:615565870121:web:46e5db45842435a1a1c838",
  measurementId: "G-21QJRQK7GF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);