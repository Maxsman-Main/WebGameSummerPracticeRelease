class MoveManager {

    constructor(map, player) {
        this.map = map;
        this.player = player;
    }

    isCorrectCoordinates(x, y) {
        return (Math.abs(x - this.player.coordinates.x) +
                Math.abs(y - this.player.coordinates.y) == 1);
    }

    move(x, y) {
        if (this.isCorrectCoordinates(x, y)) {
            console.log(`${this.player.name} moved to (${x}, ${y})`);
            var cell = this.map.getCell(x, y);
            cell.type = "empty";
            cell.label = "0";
            this.player.move(x, y);
        } else {
            console.log(`${this.player.name} not moved to (${x}, ${y})`);
        }
    }

}