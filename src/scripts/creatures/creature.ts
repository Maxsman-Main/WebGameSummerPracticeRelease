import {IHasCssClass} from "../interfaces";

export class Creature implements IHasCssClass {
    
    private _name: string;
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }

    private readonly _cssClass: string;
    public get cssClass(): string {
        return this._cssClass;
    }

    constructor(name: string, cssClass : string) {
        this._name = name;
        this._cssClass = cssClass;
    }

}