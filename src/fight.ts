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

    private currentMonster: Monster;
    private defenseMonster: Monster;

    constructor(monsterFirst: Monster, monsterSecond: Monster) {
        this._monsterFirst = monsterFirst;
        this._monsterSecond = monsterSecond;
        this.currentMonster = monsterFirst;
        this.defenseMonster = monsterSecond;
    }

    public swap() {
        [this.currentMonster, this.defenseMonster] =
            [this.defenseMonster, this.currentMonster];
    }

    public isFinish(): boolean {
        return this.monsterFirst.isDead() && this.monsterSecond.isDead();
    }

    public getWinner() {
        if (!this.isFinish) return null;

        return (this.monsterFirst.isDead()) ? this.monsterSecond :
            this.monsterFirst;
    }

}