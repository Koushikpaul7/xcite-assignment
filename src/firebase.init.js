// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_KGEtwKmPAXn0IXaV8-71cRyJGsPKyzM",
  authDomain: "xcite-438d1.firebaseapp.com",
  projectId: "xcite-438d1",
  storageBucket: "xcite-438d1.appspot.com",
  messagingSenderId: "155753017083",
  appId: "1:155753017083:web:d482ceb46c2c6f4b06ca5e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;