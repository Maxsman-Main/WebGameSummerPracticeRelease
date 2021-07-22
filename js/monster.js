class Monster extends Creature {

    constructor(name, sprite, label, type, health, defense, attack, attackBooster) {
        super(name, sprite, label);
        this.type = type; 
        this.maxHealth = health;
        this.currentHealth = health;
        this.defense = defense;
        this.attack = attack;
        this.attackBooster = attackBooster;
    }

    attackEnemy(enemy){
        enemy.currentHealth -= (this.attack - enemy.defense + this.attackBooster);
    }

    defenseHimself(){
        this.defense += 5;
    }


    isDead() {
        return this.currentHealth <= 0;
    }

    Heal() {
        this.currentHealth = this.maxHealth;
    }

    getString() {
        return `${this.name}, ${this.currentHealth}`;
    }

}

class Chudila extends Monster {
    constructor() {
        super("Chudila", "./image/chudila.png", "c", "red", 100, 4, 20, 1);
    }
}