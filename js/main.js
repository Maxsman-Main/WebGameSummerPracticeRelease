var player = new Player("Steve", null, '@', 0, 0, 4, [ new Chudila()]);
var map = new Map(5, 5);
var moveManager = new MoveManager(map, player);
var debug_ascii_ui = document.getElementById("debug_ascii_ui");
var renderer = new DebugRenderer(map, player, debug_ascii_ui);

var fight = null;

function update(event) {
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
                    player.availableCreatures[0].name = "Huila";
                    fight = new Fight(
                        player.availableCreatures[0],
                        map.getCell(player.x, player.y).creature
                    );
                    renderer.showFight(fight);
                    break;
                default:
                    break;
            }
        }
        if (dx != 0 || dy != 0) {
            moveManager.move(player.x + dx, player.y + dy);
        }
        renderer.showField();
    } else {
        switch (event.code) {
            case 'KeyZ':
                fight.currentMonster.attackEnemy(fight.defenseMonster);
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
            fight.HealWinner();
            fight = null;
        }
    }
}

update();
document.addEventListener('keydown', update);