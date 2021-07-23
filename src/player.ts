import { Creature } from "./creature";

export class Player extends Creature {

    private x: number;
    private y: number;
    private availableMoves: number;
    private availableCreatures: Creature[];

    constructor(name: string, sprite : string, label: string,
        x: number, y: number, availableMoves: number,
        availableCreatures: Creature[]) {
        super(name, sprite, label);
        this.x = x;
        this.y = y;
        this.availableMoves = availableMoves;
        this.availableCreatures = availableCreatures;
    }

    public move(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    public getCoordinates() : { x: number, y: number } {
        return { x: this.x, y: this.y };
    }

}