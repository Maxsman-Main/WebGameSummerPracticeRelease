import { Monster } from "./monster"
export class Fight {

    private monsterFirst: Monster;
    private monsterSecond: Monster;
    private currentMonster: Monster;
    private defenseMonster: Monster;

    constructor(monsterFirst, monsterSecond) {
        this.monsterFirst = monsterFirst;
        this.monsterSecond = monsterSecond;
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