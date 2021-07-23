import { Player } from './player';
import { Chudila } from './monster';
import { Map } from './map';
import { MoveManager } from './moveManager';
import { DebugRenderer } from './debugRenderer';
import { Fight } from './fight';

var player = new Player("Steve", null, '@', 0, 0, 4, [ new Chudila()]);
var map = new Map(5, 5);
var moveManager = new MoveManager(map, player);
var debug_ascii_ui = document.getElementById("debug_ascii_ui");
console.log(debug_ascii_ui);
var renderer = new DebugRenderer(map, player, debug_ascii_ui);

var fight: Fight = null;

function update(event: KeyboardEvent) {
    if (fight == null) {
        let dx = 0;
        let dy = 0;
        if (event) {
            switch (event.code) {
                case 'KeyW':
                    dx = 0, dy = -1;
                    break;
                case 'KeyA':
                    dx = -1, dy = 0;
                    break;
                case 'KeyS':
                    dx = 0, dy = 1;
                    break;
                case 'KeyD':
                    dx = 1, dy = 0;
                    break;
                case 'KeyE':
                    console.log(player.getCoordinates());
                    player.availableMonters[0].name = "Huila";
                    fight = new Fight(
                        player.availableMonters[0],
                        map.getCell(player.getCoordinates().x,
                                    player.getCoordinates().y).monster
                    );
                    renderer.showFight(fight);
                    break;
                default:
                    break;
            }
        }
        if (dx != 0 || dy != 0) {
            moveManager.move(player.getCoordinates().x + dx,
                             player.getCoordinates().y + dy);
        }
        renderer.showField();
    } else {
        switch (event.code) {
            case 'KeyZ':
                fight.defenseMonster.beAttacked(fight.currentMonster);
                fight.swap();
                break;
            case 'KeyX':
                fight.currentMonster.defenseHimself();
                fight.swap();
                break;
            default:
                console.log(event.code);
                break;
        }
        renderer.showFight(fight);
        if(fight.isFinish()){
            console.log("finish");
            fight.getWinner().Heal();
            fight = null;
        }
    }
}

update(null);
document.addEventListener('keydown', update);