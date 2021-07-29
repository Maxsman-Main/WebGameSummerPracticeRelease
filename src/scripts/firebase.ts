import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore'
import 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyD3q-5oL3uBVysZM_rb486eG_FtespBNg4",
    authDomain: "projectx-web-game.firebaseapp.com",
    projectId: "projectx-web-game",
    storageBucket: "projectx-web-game.appspot.com",
    messagingSenderId: "955125960594",
    appId: "1:955125960594:web:3e1f30bccb0d4ff5bdbb4b",
    measurementId: "G-PSSP5QF2DC"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore;

export {
    firebase,
    db
}