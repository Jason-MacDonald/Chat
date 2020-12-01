import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

firebase.initializeApp({
    apiKey: "AIzaSyDibRQz79BeEnnspA6vbv_K8ObJFrG-q04",
    authDomain: "chat-1d122.firebaseapp.com",
    databaseURL: "https://chat-1d122.firebaseio.com",
    projectId: "chat-1d122",
    storageBucket: "chat-1d122.appspot.com",
    messagingSenderId: "412948901291",
    appId: "1:412948901291:web:30ff9a5fbd1bea038ab6ee",
    measurementId: "G-TBC492400F"
});

export const auth = firebase.auth();