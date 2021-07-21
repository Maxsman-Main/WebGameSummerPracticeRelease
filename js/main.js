var player = new Player("Steve", '@', {x: 0, y: 0}, 4, []);
var map = new Map(10, 10);
var moveManager = new MoveManager(map, player);

var renderer = new DebugRenderer(map, player);

renderer.show();

moveManager.move(0, 1);
moveManager.move(1, 1);
moveManager.move(2, 3);

document.addEventListener('keydown', (new KeyboardListener()).action);