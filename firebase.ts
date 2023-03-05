// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSRZJZDoKD_hcCHpp0F5BdC7FDCxVDj54",
  authDomain: "netflix-clone-99c0a.firebaseapp.com",
  projectId: "netflix-clone-99c0a",
  storageBucket: "netflix-clone-99c0a.appspot.com",
  messagingSenderId: "570660560272",
  appId: "1:570660560272:web:8516fa779cc4c243366715"
};

// Initialize Firebase if its not already initialized because of NEXTJS
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }