class Map {

    constructor() {
        this.data = [
            [0, 1, 0, 0, 0, 0],
            [1, 1, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
        ]
    }

    get(x, y) {
        return this.data[y][x];
    }

    sizeY() {
        return this.data.length;
    }

    sizeX() {
        return this.data[0].length;
    }
}