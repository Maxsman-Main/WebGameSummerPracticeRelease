import { IHasCssClass } from "./interfaces";

export class Creature implements IHasCssClass {
    
    private _name: string;
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }

    private _cssClass: string;
    public get cssClass(): string {
        return this._cssClass;
    }

    // _label is some char, used for debugging
    private _label: string;

    public get label(): string {
        return this._label;
    }

    constructor(name: string, cssClass : string, label: string) {
        this._name = name;
        this._cssClass = cssClass;
        this._label = label;
    }

}