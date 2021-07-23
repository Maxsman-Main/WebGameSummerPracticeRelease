import { Creature } from './creature';
import { Utils } from './utils';

export class Cell {

    private label: string;
    private type: string;
    private transtionCost: number;
    private creature: Creature;

    constructor(label: string, type: string,
        transitionCostMinMax : [number, number], possibleCreatures: Creature[]) {
        this.label = label;
        this.type = type;
        this.transtionCost = Utils.random.apply(this, transitionCostMinMax);
        this.creature = Utils.randomItemFromArray(possibleCreatures);
    }

    public getLabel(): string {
        return this.label;
    }

    public getType(): string {
        return this.type;
    }

    public getTransitionCost(): number {
        return this.transtionCost;
    }

    public getCreature(): Creature {
        return this.creature;
    }
}