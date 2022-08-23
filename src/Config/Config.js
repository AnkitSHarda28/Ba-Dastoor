import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1R0eMLEZyZDeNwvVBg3uytfrkiuz7wPU",
  authDomain: "badastoor-86ddb.firebaseapp.com",
  databaseURL: "https://badastoor-86ddb-default-rtdb.firebaseio.com",
  projectId: "badastoor-86ddb",
  storageBucket: "badastoor-86ddb.appspot.com",
  messagingSenderId: "13492825038",
  appId: "1:13492825038:web:d1bf5caebb916b4f97599f",
  measurementId: "G-0JG6HHQWW1",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const fs = firebase.firestore();
const storage = firebase.storage();

export { auth, fs, storage };
