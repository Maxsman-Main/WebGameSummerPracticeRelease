import {Player} from './creatures/player';
import {Monster, Pridurok} from './creatures/monster';
import {FieldRenderer} from './scenes/fieldRenderer';
import {SceneManager} from './scenes/sceneManager';
import {GameState} from './gameState';
import {I2DCoordinates} from './interfaces';
import {FightRenderer} from "./scenes/fightRenderer";
import {SelectMonsterRenderer} from './scenes/selectMonsterRenderer'
import {Fight} from './logic/fight';
import {Compare} from "./utils/compare";

/* Global variables */
const gameState = new GameState(
    new Player("Steve", "hero", 0, 0, 4, [new Pridurok()]),
    []
);
const sceneManager = new SceneManager(gameState);

/* Renderers */
const fieldRenderer = new FieldRenderer(gameState,  sceneManager.getSceneInfo('field').element, cellClickListener);
let fightRenderer: FightRenderer = null;
let selectMonsterRenderer: SelectMonsterRenderer = null;

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
    } else if (Compare.shallowEqual(coordinates, gameState.player.getCoordinates())) {
        if (gameState.map.getCell(coordinates).monster == null)
            return;
        selectMonsterRenderer = new SelectMonsterRenderer(
            sceneManager.getSceneInfo('select-monster').element,
            gameState.player,
            OKButtonInSelectClickListener
        )
        selectMonsterRenderer.update();
        sceneManager.showScene('select-monster');
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
            gameState.player.addMonster(gameState.fight.defenseMonster);
            gameState.fight.defenseMonster.loot();
            console.log(`added monster: ${gameState.fight.defenseMonster.getString()}`)
            gameState.map.getCell(
                gameState.player.getCoordinates()
            ).loot();
        } else {
            gameState.player.deleteMonster(gameState.fight.currentMonster);
            console.log(`deleted: ${gameState.fight.currentMonster.getString()}`)
        }
        sceneManager.showScene('field');
    }
    gameState.fight.swap();
    fightRenderer.update();
}

/* Click Listener for X button in fight */
function NESXButtonClickListener() {
    gameState.fight.currentMonster.defenseHimself();
    gameState.fight.swap();
    fightRenderer.update();
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
        NESZButtonClickListener,
        NESXButtonClickListener
    );
    fightRenderer.update();
    gameState.fight = new Fight(...monsters);
}