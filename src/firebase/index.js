
import { getFirestore } from 'firebase/firestore';
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD8nfk0I6Tp8HLaeu1oLnXPr0pXsmucTuo",
  authDomain: "pet-shop-4eb7a.firebaseapp.com",
  projectId: "pet-shop-4eb7a",
  storageBucket: "pet-shop-4eb7a.appspot.com",
  messagingSenderId: "830126096038",
  appId: "1:830126096038:web:6faf3ad7ab15c4366e7e67"
};


const app = initializeApp(firebaseConfig);


const db = getFirestore(app);
const auth = getAuth(app);
export { auth , db }; 
