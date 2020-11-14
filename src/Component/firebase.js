import firebase from "firebase";

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyBLVfZE3cJ5rCCSkML-60mhJ_Z9SaH-h6Y",
  authDomain: "olx-relpica.firebaseapp.com",
  databaseURL: "https://olx-relpica.firebaseio.com",
  projectId: "olx-relpica",
  storageBucket: "olx-relpica.appspot.com",
  messagingSenderId: "570697519668",
  appId: "1:570697519668:web:6bf47285f8f9ac46383061",
  measurementId: "G-PXJ890V18T",
});

const auth = firebase.auth();

export { auth };
