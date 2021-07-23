import { Creature } from './creature';
import { Chudila } from './monster';
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

export class LandCell extends Cell {

    constructor() {
        super('l', '', [1, 2], [new Chudila()]);
    }
}

export class MountCell extends Cell {

    constructor() {
        super('m', '', [3, 5], [new Chudila()]);
    }
}