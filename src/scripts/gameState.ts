import {Player} from './creatures/player';
import {Map} from './map/map';
import {MoveManager} from './logic/moveManager';
import {IDrawableInField} from './interfaces';
import {Fight} from "./logic/fight";
import firebase from "firebase";
import DocumentReference = firebase.firestore.DocumentReference;
import DocumentData = firebase.firestore.DocumentData;

export class GameState {
    public player: Player;
    public player2: Player;
    public player_uid: string;
    public player2_uid: string;
    public map: Map;
    public moveManager: MoveManager;
    public fight: Fight;
    public roomRef: DocumentReference<DocumentData>;
    public roomDoc: DocumentData;

    constructor(player: Player, player_uid: string, player2: Player, player2_uid: string, map: Map,
                roomRef: DocumentReference<DocumentData>, roomDoc: DocumentData) {
        this.player = player;
        this.player_uid = player_uid;
        this.player2 = player2;
        this.player2_uid = player2_uid;
        this.map = map;
        this.moveManager = new MoveManager(this.map, this.player);
        this.fight = null;
        this.roomRef = roomRef;
        this.roomDoc = roomDoc;
    }

    public getCreatures(): IDrawableInField[] {
        return [this.player, this.player2];
    }
}