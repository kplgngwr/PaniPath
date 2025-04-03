import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDC83Gzlj8ApLkyKppwl7uvnFQQxMOj4-8",
  authDomain: "tekathon-b1a98.firebaseapp.com",
  projectId: "tekathon-b1a98",
  storageBucket: "tekathon-b1a98.appspot.com",
  messagingSenderId: "47926223877",
  appId: "1:47926223877:web:39cb0aa3f0755e7e52686c",
  measurementId: "G-PSERBC5PSN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db };
