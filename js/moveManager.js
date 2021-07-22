class MoveManager {

    /**
     * @param {Map} map
     * @param {Player} player
     */
    constructor(map, player) {
        this.map = map;
        this.player = player;
    }

    /**
     * Coordinates are correct if the map range is included
     * and point to an adjacent cell horizontally or vertically 
     * @param {number} x
     * @param {number} y 
     * @returns {boolean}
     */
    isCorrectCoordinates(x, y) {
        return (0 <= x && x < this.map.sizeX) &&
               (0 <= y && y < this.map.sizeY) &&
               (Math.abs(x - this.player.x) +
                Math.abs(y - this.player.y) == 1);
    }

    /**
     * @param {number} x 
     * @param {number} y 
     */
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