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

    public get availableCreatures(): Monster[] {
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

}