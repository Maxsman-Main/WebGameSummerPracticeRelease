import { Creature } from "./creature";
import { Monster } from "./monster";

export class Player extends Creature {

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

    constructor(name: string, sprite : string, label: string,
        x: number, y: number, availableMoves: number,
        availableMonsters: Monster[]) {
        super(name, sprite, label);
        this.x = x;
        this.y = y;
        this._availableMoves = availableMoves;
        this._availableMonsters = availableMonsters;
    }

    public move(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    public getCoordinates() : { x: number, y: number } {
        return { x: this.x, y: this.y };
    }

    public addMoster(monster: Monster) {
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