export class Creature {
    
    private name: string;
    private sprite: string;
    // label is some char, used for debugging
    private label: string;

    constructor(name: string, sprite : string, label: string) {
        this.name = name;
        this.sprite = sprite;
        this.label = label;
    }

    public getName(): string {
        return this.name;
    }

    public getSprite(): string {
        return this.sprite;
    }

    public getLabel(): string {
        return this.label;
    }

}