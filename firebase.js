import firebase from 'firebase';


// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtp2qZB3-gZuqXkm3TXkGyeoA5GL7G6B0",
  authDomain: "netflix-20f1d.firebaseapp.com",
  projectId: "netflix-20f1d",
  storageBucket: "netflix-20f1d.appspot.com",
  messagingSenderId: "922093655632",
  appId: "1:922093655632:web:1b7cef5959dcd07c316355",
  measurementId: "G-620ND1W9MP"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
// const analytics = getAnalytics(app);

export{ auth }
export default db;