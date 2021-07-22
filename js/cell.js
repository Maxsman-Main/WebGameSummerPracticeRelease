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
        this.creature = Util.randomItemFromArray(possibleTypeCreatures);
    }

}

class LandCell extends Cell {

    constructor() {
        super("l", "", [1, 2], [Chudila]);
    }
}

class MountCell extends Cell{
    
    constructor() {
        super("m", "", [3, 5], [ Chudila ]);
    }
}