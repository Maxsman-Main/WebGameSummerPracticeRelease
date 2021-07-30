import {Cell, LandCell, VolcanoCell, ForestCell, LakeCell, WhiteCastleCell, DarkCastleCell, BossCell} from './cell';
import {I2DCoordinates} from '../interfaces';
import {Random} from '../utils/random';
import {Compare} from '../utils/compare';
import {ComplexityChanger} from '../complexityChanger'

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
                obj: VolcanoCell,
                rand: {
                    min: 1,
                    max: 10
                }
            },
            {
                obj: ForestCell,
                rand: {
                    min: 11,
                    max: 30
                }
            },
            {
                obj: LakeCell,
                rand: {
                    min: 31,
                    max: 35
                }
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
                    if (Compare.isInRange(randNum, possibleCells[i].rand.min, possibleCells[i].rand.max)) {
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
        let defaultPositions = [
            { x: 0, y: 0, obj: LandCell},
            { x: 0, y: sizeY - 1, obj: LandCell},
            { x: sizeX - 1, y: sizeY - 1, obj: WhiteCastleCell},
            { x: sizeX - 1, y: 0, obj: DarkCastleCell},
            { x: sizeX - 1, y: 2, obj: BossCell}
        ]
        for (let i = 0; i < defaultPositions.length; ++i) {
            let objectForCreate = defaultPositions[i].obj;
            data[defaultPositions[i].y][defaultPositions[i].x] = new objectForCreate();
        }
        console.log(`Map: generated, (${sizeX}, ${sizeY})`);
        let compChanger = new ComplexityChanger(data);
        compChanger.balanceMap();
        return data;
    }
}