
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
  apiKey: 'pAIzaSyBgjGhDzV2sWe5VrZ9tFaX95CA8_q3IhTU',
  authDomain: "mar-abierto-adbbc.firebaseapp.com",
  projectId: "mar-abierto-adbbc",
  storageBucket: "mar-abierto-adbbc.appspot.com",
  messagingSenderId: "390119551132",
  appId: "1:390119551132:web:f42484eb4510076a777d59"
};


export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);