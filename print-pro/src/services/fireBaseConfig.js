// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
import { getFirestore, collection, addDoc } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyD3gHKUaNmY3LIW6TKnycZEKQfofZWqesY",
  authDomain: "printprowizard-cb861.firebaseapp.com",
  projectId: "printprowizard-cb861",
  storageBucket: "printprowizard-cb861.appspot.com",
  messagingSenderId: "653263417655",
  appId: "1:653263417655:web:d1436cc8453102b7eceab2",
  measurementId: "G-BWXMFS9ZK0"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)
const db = getFirestore(app);
export {app, auth, db, collection, addDoc}