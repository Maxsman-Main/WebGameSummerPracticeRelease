import 'firebase/auth';
import 'firebase/database';
import '@firebase/storage';
import 'firebase/firestore'

import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyD3q-5oL3uBVysZM_rb486eG_FtespBNg4",
    authDomain: "projectx-web-game.firebaseapp.com",
    projectId: "projectx-web-game",
    storageBucket: "projectx-web-game.appspot.com",
    messagingSenderId: "955125960594",
    appId: "1:955125960594:web:3e1f30bccb0d4ff5bdbb4b",
};

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();

export {
    firebase,
    db
}