import {Dragon, Monster} from '../creatures/monster';
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
        super('land', [1, 2], [new Dragon()]);
    }
}

export class VolcanoCell extends Cell {
    constructor() {
        super('volcano', [3, 5], [new Dragon()]);
    }
}

export class ForestCell extends Cell {
    constructor() {
        super('forest', [3, 5], [new Dragon()]);
    }
}

export class LakeCell extends Cell {
    constructor() {
        super('lake', [3, 5], [new Dragon()]);
    }
}
export class DarkCastleCell extends Cell {
    constructor() {
        super('dark_castle', [3, 5], [new Dragon()]);
    }
}

export class WhiteCastleCell extends Cell {
    constructor() {
        super('white_castle', [3, 5], [new Dragon()]);
    }
}
