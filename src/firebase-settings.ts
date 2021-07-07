import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/firestore"

var firebaseConfig = {
  apiKey: "AIzaSyDqrQKtd9G70ZMjTRn6xLVHEwMo8_PWYCE",
  authDomain: "hermes-2cb56.firebaseapp.com",
  projectId: "hermes-2cb56",
  storageBucket: "hermes-2cb56.appspot.com",
  messagingSenderId: "157797851869",
  appId: "1:157797851869:web:28a39cb3ea083513e53134",
  measurementId: "G-9JDZQHTL8F"
}

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore()
const auth = firebase.auth()

export { db, auth, firebase }