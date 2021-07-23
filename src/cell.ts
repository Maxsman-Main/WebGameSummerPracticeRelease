import { Creature } from './creature';
import { Utils } from './utils';

export class Cell {

    private _label: string;
    public get label(): string {
        return this._label;
    }

    private _type: string;
    public get type(): string {
        return this._type;
    }

    private _transtionCost: number;
    public get transtionCost(): number {
        return this._transtionCost;
    }

    private _creature: Creature;
    public get creature(): Creature {
        return this._creature;
    }

    constructor(label: string, type: string,
        transitionCostMinMax : [number, number], possibleCreatures: Creature[]) {
        this._label = label;
        this._type = type;
        this._transtionCost = Utils.random.apply(this, transitionCostMinMax);
        this._creature = Utils.randomItemFromArray(possibleCreatures);
    }

}