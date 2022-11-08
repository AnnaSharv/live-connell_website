import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCoT1CNQEzEWf4Syz1XUmy-2JzNKAO8chQ",
  authDomain: "connelladmin.firebaseapp.com",
  projectId: "connelladmin",
  storageBucket: "connelladmin.appspot.com",
  messagingSenderId: "708697853774",
  appId: "1:708697853774:web:038ebfead1b906fb9dd81f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);