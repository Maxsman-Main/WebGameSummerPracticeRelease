import {Player} from './player';
import {Chudila} from './monster';
import {FieldRenderer} from './fieldRenderer';
import {SceneManager} from './sceneManager';
import {GameState} from './gameState';
import {I2DCoordinates} from './interfaces';
import {Utils} from "./utils";
import {FightRenderer} from "./fightRenderer";

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
let fightRenderer: FightRenderer = null;

/* Prepare field */
fieldRenderer.render();
fieldRenderer.update();
sceneManager.showScene('field');

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
        fieldRenderer.updateCells([
            old_coordinate,
            gameState.player.getCoordinates()
        ]);
    } else if (Utils.shallowEqual(coordinates, gameState.player.getCoordinates())) {
        sceneManager.showScene('fight');
        fightRenderer = new FightRenderer(
            sceneManager.getSceneInfo('fight').element,
            [
                gameState.player.availableMonters[0],
                gameState.map.getCell(coordinates).monster
            ],
            NESZButtonClickListener,
            NESXButtonClickListener
        );
        fightRenderer.update();
    }
}

/* Click Listener for Z button in fight */
function NESZButtonClickListener(event: MouseEvent) {
    console.log('clicked', event.target);
    gameState.fight.defenseMonster.beAttacked(gameState.fight.currentMonster);
    if (gameState.fight.isFinish()) {
        gameState.fight.currentMonster.Heal();
        gameState.fight.defenseMonster.Heal();
        if (gameState.fight.getWinner().looted) {
            gameState.player.addMonster(gameState.fight.currentMonster);
            gameState.map.getCell(
                gameState.player.getCoordinates()
            ).loot();
        } else {
            gameState.player.deleteMonster(gameState.fight.defenseMonster);
        }
        sceneManager.showScene('field');
    }
    gameState.fight.swap();
    fightRenderer.update();
}

/* Click Listener for X button in fight */
function NESXButtonClickListener(event: MouseEvent) {
    gameState.fight.currentMonster.defenseHimself();
    gameState.fight.swap();
    fightRenderer.update();
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