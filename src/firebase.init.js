// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDtM_x9sDOAxdA6BdVUstsIZjEpPrBiexg",
    authDomain: "user-information-42841.firebaseapp.com",
    projectId: "user-information-42841",
    storageBucket: "user-information-42841.appspot.com",
    messagingSenderId: "99988556476",
    appId: "1:99988556476:web:64efb6f474ac525c93deb9",
    measurementId: "G-S0W0B61720"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;