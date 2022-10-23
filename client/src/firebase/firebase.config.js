// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAsgPkIzgCi5sHw9Vtf3cLqtFtz66Ukwtc",
    authDomain: "henrygaming-f47e7.firebaseapp.com",
    projectId: "henrygaming-f47e7",
    storageBucket: "henrygaming-f47e7.appspot.com",
    messagingSenderId: "757479473256",
    appId: "1:757479473256:web:76070136383f773fbdbbdd",
    measurementId: "G-9HE6J73Z3P",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
