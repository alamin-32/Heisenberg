// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCk62hQQ38Y1YI4MEJI_G247oB-x3n84PA",
    authDomain: "assignment-11-3a56a.firebaseapp.com",
    projectId: "assignment-11-3a56a",
    storageBucket: "assignment-11-3a56a.appspot.com",
    messagingSenderId: "174087668808",
    appId: "1:174087668808:web:10f3988511ffffbe03c47d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;