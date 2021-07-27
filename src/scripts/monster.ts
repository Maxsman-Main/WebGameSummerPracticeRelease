import {Creature} from "./creature";

export class Monster extends Creature {

    private readonly _type: string;
    public get type(): string {
        return this._type;
    }

    private readonly _maxHeath: number;
    public get maxHeath(): number {
        return this._maxHeath;
    }

    private _health: number;
    public get health(): number {
        return this._health;
    }

    private _defense: number;
    public get defense(): number {
        return this._defense;
    }

    private readonly _attack: number;
    public get attack(): number {
        return this._attack;
    }

    private readonly _attackBooster: number;
    public get attackBooster(): number {
        return this._attackBooster;
    }

    private _looted: boolean;
    public get looted(): boolean {
        return this._looted;
    }

    constructor(name: string, cssClass: string, label: string, type: string,
        health: number, defense: number, attack: number,
        attackBooster: number, looted: boolean) {
        super(name, cssClass, label);
        this._type = type;
        this._maxHeath = health;
        this._health = health;
        this._defense = defense;
        this._attack = attack;
        this._attackBooster = attackBooster;
        this._looted = looted;
    }

    public beAttacked(enemy: Monster) {
        const damage = this.defense - (enemy.attack + enemy.attackBooster);
        if (damage >= 0){
            this._health -= 1;
        }
        else{
            this._health += damage;
        }
    }

    public defenseHimself() {
        this._defense += 5;
    }

    public isDead() {
        return this._health <= 0;
    }

    public Heal() {
       this._health = this.maxHeath;
    }

    public getString() {
        return `${this.name}, hp: ${this.health}, defence: ${this.defense}, attack: ${this.attack}`;
    }

    public loot() {
        this._looted = true;
    }

}

export class Pridurok extends Monster {

    constructor() {
        super('Pridurok', 'pridurok', 'p', 'red', 120, 5, 30, 30, true);
    }
}

export class Chudila extends Monster {

    constructor() {
        super('Chudila', 'chudila', 'c', 'red', 100, 4, 20, 10, false);
    }
}