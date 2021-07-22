class Player extends Creature {

    constructor(name, sprite, label, coordinates, availableMoves, availableCreatures) {
        super(name, sprite, label);
        // { x: number, y: number }
        this.coordinates = coordinates;
        // number
        this.availableMoves = availableMoves;
        // [Creature, ...]
        this.availableCreatures = availableCreatures;
    }

    move(x, y) {
        this.coordinates.x = x;
        this.coordinates.y = y;
    }

}