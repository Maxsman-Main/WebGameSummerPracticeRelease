import { Player } from './player';
import { Chudila } from './monster';
import { FieldRenderer } from './fieldRenderer';
import { SceneManager } from './sceneManager';
import { GameState } from './gameState';


var gameState = new GameState(
    new Player("Steve", "hero", '@', 0, 0, 4, [ new Chudila() ]),
    []
);

var sceneManager = new SceneManager(gameState);
var fieldRenderer = new FieldRenderer(
    gameState,
    sceneManager.getSceneInfo('field').element,
    cellClickListener
);
fieldRenderer.appendTable();
fieldRenderer.fillTable();

sceneManager.showScene('field');

function cellClickListener(event: MouseEvent) {

    function getCoordinatesOfCell(target: EventTarget): [number, number] {
        var element = <HTMLElement> target;
        var td = <HTMLTableCellElement> element.parentElement;
        var row = <HTMLTableRowElement> td.parentElement;
        return [td.cellIndex, row.rowIndex];
    }

    var coordinates = getCoordinatesOfCell(event.target);
    if (gameState.moveManager.isCorrentCoordinates(...coordinates)) {
        // move
        gameState.moveManager.move(...coordinates);
        // if monster is alive
        if (gameState.map.getCell(...coordinates).monster != null) {
            console.log("yes");
        }
    } else {
        var coordinatesOfPlayer = gameState.player.getCoordinates();
        if (coordinatesOfPlayer.x == coordinates[0] &&
            coordinatesOfPlayer.y == coordinates[1]) {
            sceneManager.showScene('fight');
        }
    }
    console.log(gameState.player.getCoordinates());
    fieldRenderer.fillTable();
}

document.addEventListener('keypress', (event) => {
    const keyName = event.key;
    console.log(keyName);
    if (keyName.toLowerCase() == '1') {
        sceneManager.showScene('field');
    }
    else if (keyName.toLowerCase() == '2') {
        sceneManager.showScene('fight');
    }
});