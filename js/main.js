var player = new Player("Steve", '@', {x: 0, y: 0}, 4, []);
var map = new Map(10, 10);
var moveManager = new MoveManager(map, player);
var renderer = new DebugRenderer(map, player);
var debug_ascii_ui = document.getElementById("debug_ascii_ui");

function update(event) {
    let dx = 0;
    let dy = 0;
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
        default:
            break;
    }
    moveManager.move(player.coordinates.x + dx, player.coordinates.y + dy);
    renderer.show(debug_ascii_ui);
}

renderer.show(debug_ascii_ui);
document.addEventListener('keydown', update);