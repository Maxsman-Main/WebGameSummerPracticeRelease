import { Creature } from "./creature";
import { Monster } from "./monster";
import { I2Dcoordinates, IDrawableInField } from "./interfaces";

export class Player extends Creature implements IDrawableInField {

    private x: number;
    private y: number;

    private _availableMoves: number;
    public get availableMoves(): number {
        return this._availableMoves;
    }

    private _availableMonsters: Monster[];
    public get availableMonters(): Monster[] {
        return this._availableMonsters;
    }

    constructor(name: string, cssClass: string, label: string,
        x: number, y: number, availableMoves: number,
        availableMonsters: Monster[]) {
        super(name, cssClass, label);
        this.x = x;
        this.y = y;
        this._availableMoves = availableMoves;
        this._availableMonsters = availableMonsters;
    }

    public move(coordinates: I2Dcoordinates) {
        this.x = coordinates.x;
        this.y = coordinates.y;
    }

    public getCoordinates(): I2Dcoordinates  {
        return { x: this.x, y: this.y };
    }

    public addMonster(monster: Monster) {
        this._availableMonsters.push(monster);
    }

    public deleteMonster(monster: Monster) {
        const index = this._availableMonsters.indexOf(monster);

        const newArray = (index > -1) ? [
            ...this._availableMonsters.slice(0, index),
            ...this._availableMonsters.slice(index + 1)
        ] : this._availableMonsters;

        this._availableMonsters = newArray;
    }

}