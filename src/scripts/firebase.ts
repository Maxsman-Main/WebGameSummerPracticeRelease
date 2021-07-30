import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore'
import 'firebase/database'
import DocumentData = firebase.firestore.DocumentData;
import QuerySnapshot = firebase.firestore.QuerySnapshot;

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

class FirebaseConnection {
    private readonly db: firebase.firestore.Firestore;
    private collections: any;

    constructor(db: firebase.firestore.Firestore) {
        this.db = db;
        this.collections = {
            users: this.db.collection('users'),
            rooms: this.db.collection('rooms'),
            room: (uid: string) => this.db.collection('rooms').doc(uid),
            cells: (uid: string) => this.db.collection('rooms').doc(uid).collection('cells')
        };
    }

    public getDatabase() {
        return this.db;
    }

    public getCurrentUser() {
        return firebase.auth().currentUser;
    }

    public tryConnect(callback_found: () => void, callback_created: () => void, callback_error: () => void) {
        this.createUser(() => {
            this.tryFindRoom(callback_found, () => {
                    this.tryCreateRoom(callback_created, callback_error);
                },
                callback_error
            );
        });
    }

    public createUser(callback_func: () => void) {
        this.ifUserIsNotExist(
            (created: boolean) => {
                if (!created) {
                    this.collections.users.add({
                            'uid': this.getCurrentUser().uid,
                            'name': this.getCurrentUser().displayName
                        }
                    ).then(() => {
                        callback_func();
                    }).catch((error: any) => {
                        console.log(error);
                    })
                } else {
                    callback_func();
                }
        });
    }

    public tryFindRoom(callback_found: () => void, callback_not_found: () => void, callback_error: () => void) {
        this.collections.rooms.where("guest_uid", "==", "")
            .get()
            .then((querySnapshot: QuerySnapshot<DocumentData>) => {
                console.log(`free rooms: ${querySnapshot.size}`);
                if (querySnapshot.size >= 1) { // connect
                    let uid = querySnapshot.docs[0].id;
                    this.collections.room(uid).set({
                        'guest_uid': this.getCurrentUser().uid
                    }, { merge: true });
                } else {
                    callback_not_found();
                }
            })
            .catch((error: any) => {
                callback_error();
                console.log(error);
            });
    }

    public tryCreateRoom(callback_created: () => void, callback_error: () => void) {
        this.collections.rooms.add({
            'host_uid': this.getCurrentUser().uid,
            'guest_uid': ''
        })
            .then(() => {
                callback_created();
            }).catch((error: any) => {
                callback_error();
                console.log(error);
            });
    }

    public ifUserIsNotExist(callback_func: (created: boolean) => void) {
        this.collections.users.where("uid", "==", this.getCurrentUser().uid)
            .get()
            .then((querySnapshot: QuerySnapshot<DocumentData>) => {
                console.assert(querySnapshot.size == 1 || querySnapshot.size == 0);
                callback_func(querySnapshot.size != 0);
            })
            .catch((error: any) => {
                console.log(error);
            });
    }
}

let firebaseConnection = new FirebaseConnection(firebase.firestore());

export {
    firebase,
    firebaseConnection
}