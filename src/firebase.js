import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAi0QqC8vJMwEIoDqvIiaxHvy4LA6Znsrk",
    authDomain: "clone-33e18.firebaseapp.com",
    projectId: "clone-33e18",
    storageBucket: "clone-33e18.appspot.com",
    messagingSenderId: "822278607259",
    appId: "1:822278607259:web:ef61455d9fded8626e913e"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider};
