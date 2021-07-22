class Monster extends Creature {

    constructor(name, sprite, label, type, health, defense, attack, attackBooster) {
        super(name, sprite, label);
        this.type = type; 
        this.health = health;
        this.defense = defense;
        this.attack = attack;
        this.attackBooster = attackBooster;
    }
}

class Chudila extends Monster {
    constructor() {
        super("Chudila", "./image/chudila.png", "c", "red", 100, 4, 20, 1);
    }
}