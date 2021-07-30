import {SceneManager} from './scenes/sceneManager';
import {FightScene} from "./scenes/fightScene";
import {FieldScene} from './scenes/fieldScene';
import {SelectMonsterScene} from './scenes/selectMonsterScene'
import {StartScene} from "./scenes/startScene";

import {GameState} from './gameState';
import {Player} from "./creatures/player";
import {Map} from "./map/map";

import {firebase, firebaseConnection} from './firebase';
import DocumentData = firebase.firestore.DocumentData;
import DocumentReference = firebase.firestore.DocumentReference;
import DocumentSnapshot = firebase.firestore.DocumentSnapshot;
import {Cell} from "./map/cell";
import {I2DCoordinates} from "./interfaces";

/* Global variables */
const DEFAULT_START_AVAILABLE_MOVES = 5;
const DEFAULT_PLAYER_1_POS: [number, number] = [0, 0];
const DEFAULT_PLAYER_2_POS: [number, number] = [0, 4];
const DEFAULT_MAP_SIZE: [number, number] = [5, 5];
let gs: GameState = null;

/**
 * Scenes
 */
const fieldScene = new FieldScene(
    document.getElementById('game-field'),
    cellClickListener,
    NESZButtonInFieldClickListener,
    NESXButtonInFieldClickListener
);
let fightScene = new FightScene(
    document.getElementById('game-fight'),
    NESZButtonInFightClickListener,
    NESXButtonInFightClickListener
);
let selectMonsterScene = new SelectMonsterScene(
    document.getElementById('game-select-monster'),
    OKButtonInSelectClickListener
);
let startScene = new StartScene(
    document.getElementById('game-start'),
    startButtonClickListener
);

fightScene.render();
startScene.render();

/**
 * Scene Manager
 */
let sceneManager = new SceneManager([
    {
        name: 'field',
        scene: fieldScene
    },
    {
        name: 'fight',
        scene: fightScene
    },
    {
        name: 'select',
        scene: selectMonsterScene
    },
    {
        name: 'start',
        scene: startScene
    }
])
sceneManager.showScene('start');

/**
 * Start scene
 */

function createGameState(amIHost: boolean, map: Map, roomRef: DocumentReference<DocumentData>, roomDoc: DocumentData) {
    let player = new Player('Host', 'hero_1', ...DEFAULT_PLAYER_1_POS,
        DEFAULT_START_AVAILABLE_MOVES);
    let player2 = new Player('Guest', 'hero_2', ...DEFAULT_PLAYER_2_POS, 0)
    let player_uid = roomDoc.player_uid;
    let player2_uid = roomDoc.player2_uid;
    if (amIHost) {
        gs = new GameState(player, player_uid, player2, player2_uid, map, roomRef, roomDoc);
    } else {
        gs = new GameState(player2, player2_uid, player, player_uid, map, roomRef, roomDoc);
    }
}

function subscribe(isHost: boolean, roomRef: DocumentReference<DocumentData>) {
    firebaseConnection.subscribeToUpdateCoordinates(
        roomRef,
        isHost,
        (coordinates:I2DCoordinates) => {
            if (gs != null) {
                gs.player2.move(coordinates, 0);
                if (fieldScene != null)
                    fieldScene.update(gs.map, [gs.player, gs.player2]);
            }
        });
}

function startButtonClickListener() {

    function tryConnect() {
        firebaseConnection.tryConnect(
            (roomRef: DocumentReference<DocumentData>, roomDoc: DocumentData) => {
                // as host!
                console.log(`I am host. My room is ${roomRef.id}`);
                console.log(`${roomDoc.guest_uid}`);
                createGameState(true, new Map(...DEFAULT_MAP_SIZE), roomRef, roomDoc);
                fieldScene.render(gs.map);
                fieldScene.update(gs.map, [gs.player, gs.player2]);
                sceneManager.showScene('field');
                // send map
                subscribe(false, roomRef);
            },
            (roomRef: DocumentReference<DocumentData>, roomDoc:DocumentData) => {
                // as guest!
                console.log(`I am guest. My room is ${roomRef.id}`);
                console.log(`${roomDoc.host_uid}`);
                // get map
                createGameState(false, new Map(...DEFAULT_MAP_SIZE), roomRef, roomDoc);
                fieldScene.render(gs.map);
                fieldScene.update(gs.map, [gs.player, gs.player2]);
                sceneManager.showScene('field');
                subscribe(true, roomRef);
            }
        )
    }

    let button = document.getElementById("start-btn");
    button.classList.toggle("hide");
    let loader = document.getElementById("loader");
    loader.classList.toggle("hide");

    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            console.log('was already logged in');
            tryConnect();
        } else {
            let provider = new firebase.auth.GoogleAuthProvider();
            firebase.auth().signInWithPopup(provider).then(function (result) {
                console.log('logged in');
                tryConnect();
            }).catch(function (error) {
                console.log(error);
                console.log("Bad!");
            });
        }
    });
}

/**
 * Fight Scene
 */
function NESZButtonInFightClickListener() {
}
function NESXButtonInFightClickListener() {
}

/**
 * Field Scene
 */
function cellClickListener(event: MouseEvent) {
    function getCoordinatesOfCell(target: EventTarget): I2DCoordinates {
        let element = <HTMLElement>target;
        const td = <HTMLTableCellElement>element.parentElement;
        const row = <HTMLTableRowElement>td.parentElement;
        return { x: td.cellIndex, y: row.rowIndex };
    }

    const coordinates = getCoordinatesOfCell(event.target);
    if (gs.moveManager.move(coordinates)) {
        fieldScene.updateInfo(gs.player);
        fieldScene.update(gs.map, [gs.player, gs.player2]);
        firebaseConnection.updateCoordinate(gs.roomRef, gs.player.name == "Host", coordinates);
        //fieldRenderer.updateCells([old_coordinate, gs.player.getCoordinates()]);
    }
}
function NESZButtonInFieldClickListener() {
}
function NESXButtonInFieldClickListener() {
}

/**
 * Select Scene
 */
function OKButtonInSelectClickListener() {
}