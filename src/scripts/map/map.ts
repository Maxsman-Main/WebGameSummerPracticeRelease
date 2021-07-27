import {Cell, LandCell, MountCell} from './cell';
import {I2DCoordinates} from '../interfaces';
import {Random} from '../utils/random';
import {Compare} from "../utils/compare";

export class Map {
    private readonly sizeX: number;
    private readonly sizeY: number;
    private readonly data: Cell[][];

    constructor(sizeX: number, sizeY: number) {
        this.sizeX = sizeX;
        this.sizeY = sizeY;
        this.data = Map.generate(sizeX, sizeY);
    }

    public getCell(coordinates: I2DCoordinates): Cell {
        return this.data[coordinates.y][coordinates.x];
    }

    public getSize(): { x: number, y: number } {
        return { x: this.sizeX, y: this.sizeY };
    }

    static generate(sizeX: number, sizeY: number): Cell[][] {
        const defaultCell = LandCell;
        let possibleCells = [
            {
                obj: MountCell,
                rand: {min: 5, max: 10}
            }
        ]
        console.log(`Map: generate, (${sizeX}, ${sizeY})`);
        const data: Cell[][] = [];
        for (let y = 0; y < sizeY; ++y) {
            const row: Cell[] = [];
            for (let x = 0; x < sizeX; ++x) {
                let randNum = Random.inRange(1, 100);
                let objectForCreate = null;

                for (let i = 0; i < possibleCells.length; ++i) {
                    if (Compare.isInRange(randNum, possibleCells[i].rand.min,
                        possibleCells[i].rand.max)) {
                        objectForCreate = possibleCells[i].obj;
                        break;
                    }
                }

                if (!objectForCreate) {
                    objectForCreate = defaultCell;
                }
                
                row.push(new objectForCreate());
            }
            data.push(row);
        }
        console.log(`Map: generated, (${sizeX}, ${sizeY})`);
        return data;
    }
}