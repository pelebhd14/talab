
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDxhBsheEj1cD4P9ASA-14Eo78lXjwbbeA",
  authDomain: "taleb-data.firebaseapp.com",
  projectId: "taleb-data",
  storageBucket: "taleb-data.firebasestorage.app",
  messagingSenderId: "975353666773",
  appId: "1:975353666773:web:9d6cf9b6e2aa5f412e965c",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);