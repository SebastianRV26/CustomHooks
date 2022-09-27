import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getFunctions } from "firebase/functions";
import { getStorage } from "firebase/storage";

// TODO: move this to react enviroment variables
const firebaseConfig = {
  apiKey: "apiKey here",
  authDomain: "projectId-abcd1.firebaseapp.com",
  projectId: "projectId-abcd1",
  storageBucket: "projectId-abcd1.appspot.com",
  messagingSenderId: "111111111111",
  appId: "1:111111111111:web:1a234567bc09c12345678d",
  measurementId: "G-A0AAAA1AA1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const functions = getFunctions(app);
const storage = getStorage(app);

export { db, auth, functions, storage };
