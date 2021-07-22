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
        let defaultCell = LandCell;
        let possibleCells = [
            {
                obj: MountCell,
                rand: [5, 10]
            }
        ];
        
        console.log(`Map: Generate, (${sizeX}, ${sizeY})`);
        var data = [];
        for (let y = 0; y < sizeY; ++y) {
            var row = [];
            for (let x = 0; x < sizeX; ++x) {
                
                let randNum = Util.random(1, 100);
                let objForCreate = null;
                
                for (let i = 0; i < possibleCells.length; ++i) {
                    if (Util.isInRange(randNum, possibleCells[i].rand)) {
                        objForCreate = possibleCells[i].obj;
                        break;
                    }
                }

                if (!objForCreate) {
                    objForCreate = defaultCell;
                }

                row.push(new objForCreate());

            }
            data.push(row);
        }
        console.log(`Map: Generated, (${sizeX}, ${sizeY})`);
        return data;
    }

}