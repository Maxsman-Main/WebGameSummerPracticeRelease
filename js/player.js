class Player extends Creature {

    constructor(name, sprite, label, x, y, availableMoves, availableCreatures) {
        super(name, sprite, label);
        // number
        this.x = x;
        // number
        this.y = y;
        // number
        this.availableMoves = availableMoves;
        // [Creature, ...]
        this.availableCreatures = availableCreatures;
    }

    move(x, y) {
        this.x = x;
        this.y = y;
    }

    getCoordinates() {
        return [this.x, this.y];
    }

}