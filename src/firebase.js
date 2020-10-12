import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBq6ENjmpSgM_sen6Kx7GiRv1nqDppeF30",
    authDomain: "chatter-3b54d.firebaseapp.com",
    databaseURL: "https://chatter-3b54d.firebaseio.com",
    projectId: "chatter-3b54d",
    storageBucket: "chatter-3b54d.appspot.com",
    messagingSenderId: "366398925769",
    appId: "1:366398925769:web:4b110308a1bca935c95618",
    measurementId: "G-L4NS9MT2YP"
});

const db = firebaseApp.firestore();

export default db;