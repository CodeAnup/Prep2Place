// Import the functions you need from the SDKs you need
import { initializeApp ,getApp, getApps} from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBNO-1K3chLubaIeGQV0oCCNE2FfSWiMhY",
  authDomain: "prep2place-17f49.firebaseapp.com",
  projectId: "prep2place-17f49",
  storageBucket: "prep2place-17f49.firebasestorage.app",
  messagingSenderId: "177386948932",
  appId: "1:177386948932:web:f1ec9a8f69ceeea771af11",
  measurementId: "G-494FM5VDF1"
};

// Initialize Firebase
const app =!getApps.length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);