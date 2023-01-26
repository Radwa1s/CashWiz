// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD9Zd2eiGmWXlhkLzAS1RBohb3HLYLW8qU",
  authDomain: "cashwiz-24e86.firebaseapp.com",
  projectId: "cashwiz-24e86",
  storageBucket: "cashwiz-24e86.appspot.com",
  messagingSenderId: "1032850911528",
  appId: "1:1032850911528:web:91ff4d852709ed77cba01d",
  measurementId: "G-4S0LDG72HB",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export const colRef = collection(db, "BudgetTracker");
// export const ExpensessRef = collection(db, "Expensess");
