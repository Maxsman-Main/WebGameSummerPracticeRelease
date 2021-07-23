import { Cell } from './cell';

export class Map {

    private sizeX: number;
    private sizeY: number;
    private data: Cell[][];

    constructor(sizeX: number, sizeY: number) {
        this.sizeX = sizeX;
        this.sizeY = sizeY;
        this.data = Map.generate(sizeX, sizeY);
    }

    public getCell(x: number, y: number) {
        return this.data[y][x];
    }

    public getSize(): { x: number, y: number } {
        return { x: this.sizeX, y: this.sizeY };
    }

    static generate(sizeX: number, sizeY: number): Cell[][] {
        return new Cell[sizeX][sizeY];
    }
}