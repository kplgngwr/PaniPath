import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8vnVSghQlPiI7Re17-RaFLik2x4jUfuE",
  authDomain: "water-monitoring-e2997.firebaseapp.com",
  databaseURL: "https://water-monitoring-e2997-default-rtdb.firebaseio.com",
  projectId: "water-monitoring-e2997",
  storageBucket: "water-monitoring-e2997.firebasestorage.app",
  messagingSenderId: "208153402903",
  appId: "1:208153402903:web:159c34315514f08ad7c652",
  measurementId: "G-V684M82BNJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db };
