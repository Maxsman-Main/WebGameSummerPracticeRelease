import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore'
import 'firebase/database'
import DocumentData = firebase.firestore.DocumentData;
import QuerySnapshot = firebase.firestore.QuerySnapshot;
import DocumentReference = firebase.firestore.DocumentReference;
import DocumentSnapshot = firebase.firestore.DocumentSnapshot;

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
    private readonly collections: any;

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

    public getCollections() {
        return this.collections;
    }

    public subscribeToUpdateCoordinates(room: DocumentReference<DocumentData>,
                                        user_uid: string,
                                        callback: () => void) {
        room.collection('user_pos').doc(user_uid)
            .get()
            .then((value: DocumentSnapshot<DocumentData>) => {
                value.ref.onSnapshot((doc: DocumentSnapshot<DocumentData>) => {
                    console.log(doc);
                });
            })
            .catch((error: any) => {
                console.log(`error: subscribe to coordinates (${error})`);
            });
    }

    public tryConnect(callbackStartAsHost: (roomRef: DocumentReference<DocumentData>, roomDoc: DocumentData) => void,
                      callbackStartAsGuest: (roomRef: DocumentReference<DocumentData>, roomDoc: DocumentData) => void) {
        this.tryCreateUser(() => {
            this.tryGetRoomForJoin((room: DocumentReference<DocumentData>) => {
                if (room != null) {
                    // connect
                    this.tryConnectToRoom(room, (room) => {
                        room.get()
                            .then((value: DocumentSnapshot<DocumentData>) => {
                                callbackStartAsGuest(room, value.data());
                            });
                    });
                } else {
                    // create and wait guest connection
                    this.tryCreateRoom((room) => {
                        console.log('Room is created. I wait guest connection');
                        room.onSnapshot((doc: DocumentSnapshot<DocumentData>) => {
                            if (doc.data().guest_uid != '') {
                                callbackStartAsHost(room, doc.data());
                            }
                        })
                    });
                }
            });
        });
    }

    public tryConnectToRoom(room: DocumentReference<DocumentData>,
                            callback: (room: DocumentReference<DocumentData>) => void) {
        let newData = {
            'guest_uid': this.getCurrentUser().uid
        }
        room.update(newData)
            .then(() => {
                callback(room);
            })
            .catch((error: any) => {
                console.log(`error: connect to room (${error})`);
            });
    }

    public tryCreateRoom(callback: (docRef: DocumentReference<DocumentData>) => void) {

        const room = {
            'host_uid': this.getCurrentUser().uid,
            'guest_uid': '',
        }

        this.collections.rooms.add(room)
            .then((docRef: DocumentReference<DocumentData>) => {
                callback(docRef);
            })
            .catch((error: any) => {
                console.log(`error: create room (${error})`);
            });
    }

    public tryGetRoomForJoin(callback: (room: DocumentReference<DocumentData>) => void) {
        this.collections.rooms.where('guest_uid', '==', '')
            .get()
            .then((querySnapshot: QuerySnapshot) => {
                if (querySnapshot.size >= 1) {
                    callback(querySnapshot.docs[0].ref);
                } else {
                    callback(null);
                }
            })
            .catch((error: any) => {
                console.log(`error: get room for joint (${error})`);
            });
    }

    public tryCreateUser(callback_ok: () => void) {
        this.ifUserIsNotExist((created: boolean) => {
            const user = {
                'uid': this.getCurrentUser().uid,
                'name': this.getCurrentUser().displayName
            };
            if (!created) {
                this.collections.users.add(user)
                    .then(() => {
                        callback_ok();
                    }).catch((error: any) => {
                        console.log(`error: create user (${error})`);
                    });
            } else {
                callback_ok();
            }
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