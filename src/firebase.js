import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAYRPBDWnaX5pmiQfFCUeFz3FoSEipd2mA",
  authDomain: "kinara-56786.firebaseapp.com",
  projectId: "kinara-56786",
  storageBucket: "kinara-56786.firebasestorage.app",
  messagingSenderId: "1052088542324",
  appId: "1:1052088542324:web:809c9844ad2b6a95eddd21"
};

const app = initializeApp(firebaseConfig);   // initialize firebase

export const auth = getAuth(app);            // create auth instance