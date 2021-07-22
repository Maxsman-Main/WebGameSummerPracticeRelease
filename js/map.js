class Map {

    constructor(sizeX, sizeY) {
        this.sizeX = sizeX;
        this.sizeY = sizeY;
        this.data = Map.generate(sizeX, sizeY);
    }

    getCell(x, y) {
        return this.data[y][x];
    }

    static generate(sizeX, sizeY) {
        console.log(`Map: Generate, (${sizeX}, ${sizeY})`);
        var data = [];
        for (let y = 0; y < sizeY; ++y) {
            var row = [];
            for (let x = 0; x < sizeX; ++x) {
                row.push(
                    new Cell("\"", 'land', [10, 20], [
                        new Chudila()
                    ]));
            }
            data.push(row);
        }
        console.log(`Map: Generated, (${sizeX}, ${sizeY})`);
        return data;
    }

}