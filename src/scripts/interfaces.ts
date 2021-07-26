export interface IHasCssClass {
    get cssClass(): string;
}

export interface IHasCoordinates {
    getCoordinates(): I2Dcoordinates;
}

export interface IDrawableInField extends IHasCoordinates, IHasCssClass {

}

export interface ISceneInfo {
    name: string;
    element: HTMLElement;
}

export interface I2Dcoordinates {
    x: number;
    y: number;
}