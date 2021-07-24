import { Monster } from "./monster"

export class Fight {

    private _monsterFirst: Monster;
    public get monsterFirst(): Monster {
        return this._monsterFirst;
    }

    private _monsterSecond: Monster;
    public get monsterSecond(): Monster {
        return this._monsterSecond;
    }

    private _currentMonster: Monster;
    public get currentMonster(): Monster {
        return this._currentMonster;
    }
    private _defenseMonster: Monster;
    public get defenseMonster(): Monster {
        return this._defenseMonster;
    }

    constructor(monsterFirst: Monster, monsterSecond: Monster) {
        this._monsterFirst = monsterFirst;
        this._monsterSecond = monsterSecond;
        this._currentMonster = monsterFirst;
        this._defenseMonster = monsterSecond;
    }

    public swap() {
        [this._currentMonster, this._defenseMonster] =
            [this.defenseMonster, this.currentMonster];
    }

    public isFinish(): boolean {
        return this.monsterFirst.isDead() || this.monsterSecond.isDead();
    }

    public getWinner() {
        if (!this.isFinish) return null;

        return (this.monsterFirst.isDead()) ? this.monsterSecond :
            this.monsterFirst;
    }

}