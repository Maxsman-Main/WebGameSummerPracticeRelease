import {Creature} from "./creature";
import {Monster} from "./monster";
import {I2DCoordinates, IDrawableInField} from "../interfaces";

export class Player extends Creature implements IDrawableInField {
    private x: number;
    private y: number;

    private readonly _availableMoves: number;
    public get availableMoves(): number {
        return this._availableMoves;
    }

    private _availableMonsters: Monster[];
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
     */
    public move(coordinates: I2DCoordinates): void {
        this.x = coordinates.x;
        this.y = coordinates.y;
    }

    public getCoordinates(): I2DCoordinates  {
        return { x: this.x, y: this.y };
    }

    public addMonster(monster: Monster): void {
        this._availableMonsters.push(monster);
    }

    public deleteMonster(monster: Monster): void {
        const index = this._availableMonsters.indexOf(monster);

        this._availableMonsters = (index > -1) ? [
            ...this._availableMonsters.slice(0, index),
            ...this._availableMonsters.slice(index + 1)
        ] : this._availableMonsters;
    }
}