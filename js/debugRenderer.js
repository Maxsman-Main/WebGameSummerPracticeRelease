class DebugRenderer {

    constructor(map, player) {
        this.map = map;
        this.player = player;
    }

    show() {
        console.log("DebugRender: show runned")
        for (let y = 0; y < this.map.sizeY; ++y) {
            let row = `${y}: `;
            for (let x = 0; x < this.map.sizeX; ++x) {
                if (player.coordinates.x == x && this.player.coordinates.y == y) {
                    row += `${player.label} `;
                } else {
                    row += `${this.map.getCell(x, y).label} `;
                }
            }
            console.log(row);
        }
        console.log("DebugRender: show ended")
    }
}