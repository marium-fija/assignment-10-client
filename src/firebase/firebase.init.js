// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBiyH209gJ8_BfsfHP3-La3aTOs9WAfD3s",
  authDomain: "gardeners-auth.firebaseapp.com",
  projectId: "gardeners-auth",
  storageBucket: "gardeners-auth.firebasestorage.app",
  messagingSenderId: "428323008295",
  appId: "1:428323008295:web:1cb19eda51bedc02438302"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

