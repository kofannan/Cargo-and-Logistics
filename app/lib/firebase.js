import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBekRRao0A0etkwpLQBRbnGwK8AwHU5s-I",
  authDomain: "kofannan-cargo-and-logistics.firebaseapp.com",
  projectId: "kofannan-cargo-and-logistics",
  storageBucket: "kofannan-cargo-and-logistics.firebasestorage.app",
  messagingSenderId: "657267065654",
  appId: "1:657267065654:web:e8755a2123efcff13a6997",
};

// Prevent multiple Firebase initializations in Next.js
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Export Firebase services
export const db = getFirestore(app);
export const auth = getAuth(app);