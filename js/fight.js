class Fight {

    constructor(monsterFirst, monsterSecond) {
        this.monsterFirst = monsterFirst;
        this.monsterSecond = monsterSecond;
        this.currentMonster = monsterFirst;
        this.defenseMonster = monsterSecond;
    }

    swap() {
        [this.currentMonster, this.defenseMonster] = [this.defenseMonster, this.currentMonster];
    }

    isFinish() {
        return this.monsterFirst.isDead() || this.monsterSecond.isDead();
    }

    getWinner() {
        if (!this.isFinish) return null;
        
        return (this.monsterFirst.currentHealth > 0) ? this.monsterFirst : this.monsterSecond;
    }

    HealWinner() {
        this.getWinner().Heal();
    }

}   