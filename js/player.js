class Player extends Creature {

    /**
     * @param {number} name 
     * @param {image} sprite 
     * @param {string} label some char, used for debugging
     * @param {number} x 
     * @param {number} y 
     * @param {number} availableMoves 
     * @param {[Creatures, ...]} availableCreatures 
     */
    constructor(name, sprite, label, x, y, availableMoves, availableCreatures) {
        super(name, sprite, label);
        this.x = x;
        this.y = y;
        this.availableMoves = availableMoves;
        this.availableCreatures = availableCreatures;
    }

    /**
     * @param {number} x
     * @param {number} y 
     */
    move(x, y) {
        this.x = x;
        this.y = y;
    }

    /**
     * @returns {[number, number]}
     */
    getCoordinates() {
        return [this.x, this.y];
    }

}