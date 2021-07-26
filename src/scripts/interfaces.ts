export interface IHasCssClass {
    get cssClass(): string;
}

export interface IHasCoordinates {
    getCoordinates(): { x: number, y: number };
}

export interface IDrawableInField extends IHasCoordinates, IHasCssClass {

}

export interface ISceneInfo {
    name: string;
    element: HTMLElement;
}