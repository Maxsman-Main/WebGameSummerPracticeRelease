import { Monster, Chudila } from './monster';
import { Utils } from './utils';
import { IHasCssClass } from './interfaces';

export class Cell implements IHasCssClass {

    private _label: string;
    public get label(): string {
        return this._label;
    }

    private _cssClass: string;
    public get cssClass(): string {
        return this._cssClass;
    }

    private _type: string;
    public get type(): string {
        return this._type;
    }

    private _transtionCost: number;
    public get transtionCost(): number {
        return this._transtionCost;
    }

    private _monsters: Monster;
    public get monster(): Monster{
        return this._monsters;
    }

    constructor(label: string, cssClass: string, type: string,
            transitionCostMinMax : [number, number],
            possibleCreatures: Monster[]) {
        this._label = label;
        this._cssClass = cssClass;
        this._type = type;
        this._transtionCost = Utils.random.apply(this, transitionCostMinMax);
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