import {Chudila, Monster} from '../creatures/monster';
import {Random} from '../utils/random';
import {IHasCssClass} from '../interfaces';

export class Cell implements IHasCssClass {
    private readonly _cssClass: string;
    public get cssClass(): string {
        return this._cssClass;
    }

    /**
     * The cost of the transition for the player moving to this cell
     * @private
     */
    private readonly _transitionCost: number;
    public get transitionCost(): number {
        return this._transitionCost;
    }

    private readonly _monster: Monster;
    public get monster(): Monster{
        return this._monster;
    }

    /**
     * is it possible to fight this monster in the cell
     * @private
     */
    private _looted: boolean;
    public get looted(): boolean {
        return this._looted;
    }
    public loot(): void {
        this._looted = false;
    }

    /**
     *
     * @param cssClass
     * @param transitionCostMinMax is minimum and maximum value
     * @param possibleCreatures
     */
    constructor(cssClass: string, transitionCostMinMax : [number, number], possibleCreatures: Monster[]) {
        this._cssClass = cssClass;
        this._transitionCost = Random.inRange(...transitionCostMinMax);
        this._monster = Random.oneItemFromArray(possibleCreatures);
    }
}

export class LandCell extends Cell {
    constructor() {
        super('land', [1, 2], [new Chudila()]);
    }
}

export class MountCell extends Cell {
    constructor() {
        super('mount', [3, 5], [new Chudila()]);
    }
}