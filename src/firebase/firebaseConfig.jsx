import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth} from "firebase/auth";



const firebaseConfig = {
    apiKey: "AIzaSyB9D4-G_EJphqDtiDVjKD-KvFl8ADbgYjA",
    authDomain: "foodorderingapp-de748.firebaseapp.com",
    databaseURL: "https://foodorderingapp-de748-default-rtdb.firebaseio.com",
    projectId: "foodorderingapp-de748",
    storageBucket: "foodorderingapp-de748.firebasestorage.app",
    messagingSenderId: "476052575924",
    appId: "1:476052575924:web:a5b9e24efb0bddfb6469e1"
  };

  const app = initializeApp(firebaseConfig);

  
  

  export const auth=getAuth(app);
  export const db=getFirestore(app);
  export default app;
  