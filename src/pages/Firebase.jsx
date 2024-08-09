import firebase from "firebase/compat/app";

const firebaseConfig = {
  apiKey: "AIzaSyC_1V3qZj6gz2XlEAI_DXxGIUMnmGTsz0Y",
  authDomain: "auth-de31d.firebaseapp.com",
  projectId: "auth-de31d",
  storageBucket: "auth-de31d.appspot.com",
  messagingSenderId: "1059009359983",
  appId: "1:1059009359983:web:54d605ae4f907ab70b9d9a",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore;
const auth = firebase.auth;

export default db;
export { auth };
