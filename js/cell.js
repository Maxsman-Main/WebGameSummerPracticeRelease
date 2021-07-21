class Cell {

    constructor(label, type, transitionСostMinMax, possibleTypeCreatures) {
        // char
        this.label = label;
        // string
        this.type = type;
        // transitionСostMinMax is [number, number], alias [min, max]
        // transitionСost is number
        this.transitionСost = Util.random.apply(this, transitionСostMinMax);
        // possibleTypeCreatures is [Creature, ...]
        this.possibleTypeCreatures = Util.randomItemFromArray(possibleTypeCreatures);
    }

}