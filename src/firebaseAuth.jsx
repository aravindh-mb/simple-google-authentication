import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'
// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwFv9Vyl46_i0S8_aIcGA5rmb717wWcMY",
  authDomain: "auth-8f185.firebaseapp.com",
  projectId: "auth-8f185",
  storageBucket: "auth-8f185.appspot.com",
  messagingSenderId: "318652920836",
  appId: "1:318652920836:web:06b13b3a9d2490eebff151"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);


firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
//export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export  const signInWithGoogle = () => auth.signInWithPopup(provider);
export  const signOut=()=> auth.signOut()

export default firebase;
