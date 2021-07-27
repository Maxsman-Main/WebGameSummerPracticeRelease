import {Monster} from "../creatures/monster"

export class Fight {
    private _currentMonster: Monster;
    public get currentMonster(): Monster {
        return this._currentMonster;
    }
    private _defenseMonster: Monster;
    public get defenseMonster(): Monster {
        return this._defenseMonster;
    }

    constructor(monsterFirst: Monster, monsterSecond: Monster) {
        this._currentMonster = monsterFirst;
        this._defenseMonster = monsterSecond;
    }

    public swap() {
        [this._currentMonster, this._defenseMonster] = [this.defenseMonster, this.currentMonster];
    }

    public isFinish(): boolean {
        return this.currentMonster.isDead() || this.defenseMonster.isDead();
    }

    public getWinner() {
        if (!this.isFinish) return null;

        return (this.currentMonster.isDead()) ? this.defenseMonster : this.currentMonster;
    }

}