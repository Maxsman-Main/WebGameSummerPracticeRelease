import {Player} from './player';
import {Chudila} from './monster';
import {FieldRenderer} from './fieldRenderer';
import {SceneManager} from './sceneManager';
import {GameState} from './gameState';
import {I2Dcoordinates} from './interfaces';

/* Global variables */
const gameState = new GameState(
    new Player("Steve", "hero", '@', 0, 0, 4, [new Chudila()]),
    []
);
const sceneManager = new SceneManager(gameState);
const fieldRenderer = new FieldRenderer(
    gameState,
    sceneManager.getSceneInfo('field').element,
    cellClickListener
);

/* Prepare field */
fieldRenderer.appendTable();
fieldRenderer.fillTable();
sceneManager.showScene('field');

/* Click Listener for all cells in field */
function cellClickListener(event: MouseEvent) {

    function getCoordinatesOfCell(target: EventTarget): I2Dcoordinates {
        let element = <HTMLElement>target;
        const td = <HTMLTableCellElement>element.parentElement;
        const row = <HTMLTableRowElement>td.parentElement;
        return {
            x: td.cellIndex,
            y: row.rowIndex
        }
    }

    const coordinates = getCoordinatesOfCell(event.target);
    let old_coordinate: I2Dcoordinates = gameState.player.getCoordinates();
    if (gameState.moveManager.move(coordinates)) {
        fieldRenderer.updateCells([
            old_coordinate,
            gameState.player.getCoordinates()
        ]);
    } else {
        if (coordinates == gameState.player.getCoordinates())
            sceneManager.showScene('fight');
    }
}

document.addEventListener('keypress', (event) => {
    const keyName = event.key;
    if (keyName.toLowerCase() == '1') {
        sceneManager.showScene('field');
    }
    else if (keyName.toLowerCase() == '2') {
        sceneManager.showScene('fight');
    }
});