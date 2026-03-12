import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyASFkx43iFY27STE9dzqW-cNhz_q1MCBY0",
  authDomain: "kimnara-90e84.firebaseapp.com",
  projectId: "kimnara-90e84",
  storageBucket: "kimnara-90e84.firebasestorage.app",
  messagingSenderId: "417395311458",
  appId: "1:417395311458:web:e3a2f7ac37df2f6171a23b"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);