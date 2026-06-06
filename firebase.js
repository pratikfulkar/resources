import { initializeApp } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-app.js";

import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/12.14.0/firebase-auth.js";

import {
  getFirestore,
  doc,
  getDoc,
  setDoc
} from "https://www.gstatic.com/firebasejs/12.14.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCUK8pABvQyI7QXD46-pnXyn4anEnazkfk",
  authDomain: "ai-roadmap-tracker-7c9ef.firebaseapp.com",
  projectId: "ai-roadmap-tracker-7c9ef",
  storageBucket: "ai-roadmap-tracker-7c9ef.firebasestorage.app",
  messagingSenderId: "420820600963",
  appId: "1:420820600963:web:c637586a57f7513c4df3b6"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

const provider = new GoogleAuthProvider();

export async function login() {
  await signInWithPopup(auth, provider);
}

export async function logout() {
  await signOut(auth);
}

export { onAuthStateChanged, doc, getDoc, setDoc };
