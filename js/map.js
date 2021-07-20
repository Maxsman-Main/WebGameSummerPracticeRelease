class Map {

    constructor() {
        this.data = [
            [0, 1, 0, 0, 0],
            [1, 1, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
        ]
    }

    get(x, y) {
        return this.data[y][x];
    }

    size_y() {
        return this.data.length;
    }

    size_x() {
        return this.data[0].length;
    }
}