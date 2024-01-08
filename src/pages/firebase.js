// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVcKABrq8nOgQNWmEQ186OpfA7T6fbtYc",
  authDomain: "restaurant-app-dg.firebaseapp.com",
  projectId: "restaurant-app-dg",
  storageBucket: "restaurant-app-dg.appspot.com",
  messagingSenderId: "806737024059",
  appId: "1:806737024059:web:0b4d8e42ef2a70796df81e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)