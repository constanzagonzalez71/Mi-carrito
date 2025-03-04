
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAY_0pc7MIfCzU3Q3ShZ1QQG7S1EsciV_g",
  authDomain: "backend-negocioamigurumi.firebaseapp.com",
  projectId: "backend-negocioamigurumi",
  storageBucket: "backend-negocioamigurumi.firebasestorage.app",
  messagingSenderId: "490745136416",
  appId: "1:490745136416:web:3882bb1f147222e1194345",
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);