import {SceneManager} from './scenes/sceneManager';
import {FightScene} from "./scenes/fightScene";
import {FieldScene} from './scenes/fieldScene';
import {SelectMonsterScene} from './scenes/selectMonsterScene'
import {StartScene} from "./scenes/startScene";

import {GameState} from './gameState';

import {firebase, firebaseConnection} from './firebase';

/* Global variables */
const DEFAULT_START_AVAILABLE_MOVES = 5;
const gameState: GameState = null;

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
function startButtonClickListener() {

    function tryConnect() {
        firebaseConnection.tryConnect(
            () => {
                console.log("founded");
            },
            () => {
                console.log('created');
            },
            () => {
                console.log("reconnected");
            },
            () => {
                console.log("error");
            },
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