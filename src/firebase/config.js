import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyD3Cqubd88b3GJEmxuXFx-PT3Nq-exopmM",
    authDomain: "my-money-37f46.firebaseapp.com",
    projectId: "my-money-37f46",
    storageBucket: "my-money-37f46.appspot.com",
    messagingSenderId: "34027595257",
    appId: "1:34027595257:web:816ef2a37be80f6e9e0928"
  };

firebase.initializeApp(firebaseConfig);

// services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

// timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp };