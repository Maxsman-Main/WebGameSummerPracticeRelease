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

/* Global variables */
const DEFAULT_START_AVAILABLE_MOVES = 5;
const DEFAULT_PLAYER_1_POS: [number, number] = [0, 0];
const DEFAULT_PLAYER_2_POS: [number, number] = [0, 4];
const DEFAULT_MAP_SIZE: [number, number] = [5, 5];
let gm: GameState = null;

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

function createGameStateForHost() {
    let player_1 = new Player('Host', 'hero_1', ...DEFAULT_PLAYER_1_POS,
        DEFAULT_START_AVAILABLE_MOVES);
    let player_2 = new Player('Guest', 'hero_2', ...DEFAULT_PLAYER_2_POS, 0)
    let map = new Map(...DEFAULT_MAP_SIZE);
    gm = new GameState(player_1, player_2, map);
}

function startButtonClickListener() {

    function tryConnect() {
        firebaseConnection.tryConnect(
            (room: DocumentReference<DocumentData>) => {
                console.log(`I am host. My room is ${room.id}`);
            },
            (room: DocumentReference<DocumentData>) => {
                console.log(`I am guest. My room is ${room.id}`);
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