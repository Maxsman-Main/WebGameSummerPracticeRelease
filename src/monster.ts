import { Creature } from "./creature";

export class Monster extends Creature {

    private _type: string;
    public get type(): string {
        return this._type;
    }

    private _maxHeath: number;
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

    private _attack: number;
    public get attack(): number {
        return this._attack;
    }

    private _attackBooster: number;
    public get attackBooster(): number {
        return this._attackBooster;
    }

    constructor(name: string, sprite:string, label: string, type: string,
        health: number, defense: number, attack: number,
        attackBooster: number) {
        super(name, sprite, label);
        this._type = type;
        this._maxHeath = health;
        this._health = health;
        this._defense = defense;
        this._attack = attack;
        this._attackBooster = attackBooster;
    }

    public beAttacked(enemy: Monster) {
        this._health -= (enemy.attack - 
                         this._defense + enemy.attackBooster);
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
        return `${this.name} ${this.health}`;
    }

}

export class Chudila extends Monster {

    constructor() {
        super('Chudila', '.image/chudila.png', 'c', 'red', 100, 4, 20, 10);
    }
}