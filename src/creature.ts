export class Creature {
    
    private _name: string;
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }

    private _sprite: string;
    public get sprite(): string {
        return this._sprite;
    }

    // _label is some char, used for debugging
    private _label: string;

    public get label(): string {
        return this._label;
    }

    constructor(name: string, sprite : string, label: string) {
        this._name = name;
        this._sprite = sprite;
        this._label = label;
    }

}