import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAwsed79AtMXIrqtJZMWc2C-ANoksTbk7I",
  authDomain: "solid-b83e9.firebaseapp.com",
  projectId: "solid-b83e9",
  storageBucket: "solid-b83e9.appspot.com",
  messagingSenderId: "520223087142",
  appId: "1:520223087142:web:2aa18107ae4779fed5a4e7",
  measurementId: "G-7RE8ZEP9YP"
};

try {
  firebase.initializeApp(firebaseConfig);
} catch(err){
  if (!/already exists/.test(err.message)) {
    console.error('Firebase initialization error', err.stack)}
}
export const db = firebase.firestore();
export const storageRef = firebase.storage();

const fire = firebase;
export default fire;