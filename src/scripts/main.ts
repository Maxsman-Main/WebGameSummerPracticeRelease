import {Player} from './creatures/player';
import {Monster, Shark} from './creatures/monster';

import {SceneManager} from './scenes/sceneManager';
import {FightRenderer} from "./scenes/fightRenderer";
import {FieldRenderer} from './scenes/fieldRenderer';
import {SelectMonsterRenderer} from './scenes/selectMonsterRenderer'
import {StartRenderer} from "./scenes/startRenderer";

import {GameState} from './gameState';

import {I2DCoordinates} from './interfaces';

import {Fight} from './logic/fight';

import {firebase, firebaseConnection} from './firebase';

/* Global variables */
const DEFAULT_START_AVAILABLE_MOVES = 5;
const gameState = new GameState(
    new Player("Steve", "hero_1", 0, 0, 4, [new Shark()]),
    []
);
const sceneManager = new SceneManager(gameState);

/* Renderers */
const fieldRenderer = new FieldRenderer(
    gameState,
    sceneManager.getSceneInfo('field').element,
    cellClickListener,
    NESZButtonInFieldClickListener,
    NESXButtonInFieldClickListener
);
let fightRenderer: FightRenderer = null;
let selectMonsterRenderer: SelectMonsterRenderer = null;
let startRenderer = new StartRenderer(
    sceneManager.getSceneInfo('start').element,
    startButtonClickListener
);
startRenderer.render();

/* Prepare field */
fieldRenderer.render();
fieldRenderer.update();
sceneManager.showScene('start');

/* Start button */
function startButtonClickListener() {
    let button = document.getElementById("start-btn");
    button.classList.toggle("hide");
    let loader = document.getElementById("loader");
    loader.classList.toggle("hide");
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            let uid = user.uid;
            tryConnect();
        } else {
            let provider = new firebase.auth.GoogleAuthProvider();
            firebase.auth().signInWithPopup(provider).then(function (result) {
                tryConnect();
            }).catch(function (error) {
                console.log(error);
                console.log("Bad!");
            });
        }
    });
}

function tryConnect() {
    firebaseConnection.tryConnect(
        () => {
            console.log("founded");
        },
        () => {
            console.log("created");
        },
        () => {
            console.log("reconnected");
        },
        () => {
            console.log("error");
        },
    )
}

/* Click Listener for all cells in field */
function cellClickListener(event: MouseEvent) {

    function getCoordinatesOfCell(target: EventTarget): I2DCoordinates {
        let element = <HTMLElement>target;
        const td = <HTMLTableCellElement>element.parentElement;
        const row = <HTMLTableRowElement>td.parentElement;
        return {
            x: td.cellIndex,
            y: row.rowIndex
        }
    }

    const coordinates = getCoordinatesOfCell(event.target);
    let old_coordinate: I2DCoordinates = gameState.player.getCoordinates();
    if (gameState.moveManager.move(coordinates)) {
        fieldRenderer.updateInfo();
        fieldRenderer.updateCells([
            old_coordinate,
            gameState.player.getCoordinates()
        ]);
    }
}

function NESZButtonInFightClickListener() {
    gameState.fight.attackCurrent();
    if (gameState.fight.isFinish()) {
        gameState.fight.finish();
        fieldRenderer.updateInfo();
        sceneManager.showScene('field');
    }
    gameState.fight.swap();
    fightRenderer.update();
}

function NESXButtonInFightClickListener() {
    gameState.fight.defendCurrent();
    gameState.fight.swap();
    fightRenderer.update();
}

function NESZButtonInFieldClickListener() {
    let coordinates = gameState.player.getCoordinates();
    if (gameState.map.getCell(coordinates).monster.looted)
        return;
    if (gameState.player.availableMoves <= 0)
        return;
    selectMonsterRenderer = new SelectMonsterRenderer(
        sceneManager.getSceneInfo('select-monster').element,
        gameState.player,
        OKButtonInSelectClickListener
    )
    selectMonsterRenderer.update();
    sceneManager.showScene('select-monster');
}

function NESXButtonInFieldClickListener() {
    gameState.player.resetAvailableMoves();
    console.log("Reset");
    gameState.player.setAvailableMoves(10);
    fieldRenderer.updateInfo();
}

/* Click Listener for OK button in select-monster */
function OKButtonInSelectClickListener() {
    sceneManager.showScene('fight');
    let monsters: [Monster, Monster] = [
        selectMonsterRenderer.getChosenMonster(),
        gameState.map.getCell(gameState.player.getCoordinates()).monster
    ]
    fightRenderer = new FightRenderer(
        sceneManager.getSceneInfo('fight').element,
        monsters,
        NESZButtonInFightClickListener,
        NESXButtonInFightClickListener
    );
    fightRenderer.render();
    fightRenderer.update();
    gameState.fight = new Fight(gameState.player, ...monsters);
}

window.addEventListener("keydown", function (event) {
    if (event.key == "r") {
        console.log(gameState.player.availableMoves);
    }
}, true);