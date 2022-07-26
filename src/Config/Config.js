import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCV69FT7dxxsvTUNc2ctZ3t6Vwnnb_iR24",
  authDomain: "ba-dastoor.firebaseapp.com",
  projectId: "ba-dastoor",
  storageBucket: "ba-dastoor.appspot.com",
  messagingSenderId: "216280604732",
  appId: "1:216280604732:web:e62009d01ed8f30619e339",
  measurementId: "G-FWCJWV0DBJ",
};
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const fs = firebase.firestore();
const storage = firebase.storage();

export { auth, fs, storage };
