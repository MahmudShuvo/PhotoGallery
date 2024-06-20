// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8LBJQY1ohj3oJl_NOZz1u2Ki3BsjVSEc",
  authDomain: "photo-gallery-8b63d.firebaseapp.com",
  projectId: "photo-gallery-8b63d",
  storageBucket: "photo-gallery-8b63d.appspot.com",
  messagingSenderId: "475742438025",
  appId: "1:475742438025:web:2e67ac093d25a6a56b7c58"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app);
export{auth};
