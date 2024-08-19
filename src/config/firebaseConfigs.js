// firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDP2oP9kIlJxXylbG7h3pVp1CUdD9NU8Qk",
    authDomain: "mahapola-83297.firebaseapp.com",
    projectId: "mahapola-83297",
    storageBucket: "mahapola-83297.appspot.com",
    messagingSenderId: "12322556312",
    appId: "1:12322556312:web:f4bcddd634b6da934643ed",
    measurementId: "G-JSFH0QHN2Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const analytics = getAnalytics(app);

const auth = getAuth(app); 

export { app, analytics , auth};
