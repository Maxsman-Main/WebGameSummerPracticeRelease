import {Chudila, Monster} from './monster';
import {Utils} from './utils';
import {IHasCssClass} from './interfaces';

export class Cell implements IHasCssClass {

    private readonly _label: string;
    public get label(): string {
        return this._label;
    }

    private readonly _cssClass: string;
    public get cssClass(): string {
        return this._cssClass;
    }

    private readonly _type: string;
    public get type(): string {
        return this._type;
    }

    private readonly _transitionCost: number;
    public get transitionCost(): number {
        return this._transitionCost;
    }

    private _monsters: Monster;
    public get monster(): Monster{
        return this._monsters;
    }

    public loot() {
        this._monsters = null;
    }

    constructor(label: string, cssClass: string, type: string,
            transitionCostMinMax : [number, number],
            possibleCreatures: Monster[]) {
        this._label = label;
        this._cssClass = cssClass;
        this._type = type;
        this._transitionCost = Utils.random.apply(this, transitionCostMinMax);
        this._monsters = Utils.randomItemFromArray(possibleCreatures);
    }

}

export class LandCell extends Cell {

    constructor() {
        super('l', 'land', '', [1, 2], [new Chudila()]);
    }
}

export class MountCell extends Cell {

    constructor() {
        super('m', 'mount', '', [3, 5], [new Chudila()]);
    }
}