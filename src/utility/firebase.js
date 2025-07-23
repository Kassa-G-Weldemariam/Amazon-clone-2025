import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9pWnafQW5z5yIgaIEaTGan5YN3zAeLCA",
  authDomain: "clone-8362f.firebaseapp.com",
  projectId: "clone-8362f",
  storageBucket: "clone-8362f.firebasestorage.app",
  messagingSenderId: "537352334760",
  appId: "1:537352334760:web:1b8da6ec2af2091550019d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const db=getFirestore(app);
