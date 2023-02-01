// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2xuof2JIhS7iP6Ty0CPBCPcdVPFXtGVQ",
  authDomain: "connelldev-425a8.firebaseapp.com",
  projectId: "connelldev-425a8",
  storageBucket: "connelldev-425a8.appspot.com",
  messagingSenderId: "205575222965",
  appId: "1:205575222965:web:7f9ab6d399065a220d70fc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

