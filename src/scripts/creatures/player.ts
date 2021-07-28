import {Creature} from "./creature";
import {Monster} from "./monster";
import {I2DCoordinates, IDrawableInField} from "../interfaces";

export class Player extends Creature implements IDrawableInField {
    private x: number;
    private y: number;

    private _availableMoves: number;
    public get availableMoves(): number {
        return this._availableMoves;
    }
    public setAvailableMoves(value: number): void {
        this._availableMoves = value;
    }
    public resetAvailableMoves(): void {
        this._availableMoves = 0;
    }

    private readonly _availableMonsters: Monster[];
    public get availableMonsters(): Monster[] {
        return this._availableMonsters;
    }

    constructor(name: string, cssClass: string, x: number, y: number, availableMoves: number,
                availableMonsters: Monster[]) {
        super(name, cssClass);
        this.x = x;
        this.y = y;
        this._availableMoves = availableMoves;
        this._availableMonsters = availableMonsters;
    }

    /**
     * set new coordinates
     * @param coordinates
     * @param moves
     */
    public move(coordinates: I2DCoordinates, moves: number): void {
        this.x = coordinates.x;
        this.y = coordinates.y;
        this._availableMoves -= moves;
    }

    public getCoordinates(): I2DCoordinates  {
        return { x: this.x, y: this.y };
    }

    public addMonster(monster: Monster): void {
        this._availableMonsters.push(monster);
    }

    public deleteMonster(monster: Monster): void {
        const index = this.availableMonsters.indexOf(monster);
        console.assert(index != -1);
        if (index > -1) {
            this.availableMonsters.splice(index, 1);
        }
    }
}