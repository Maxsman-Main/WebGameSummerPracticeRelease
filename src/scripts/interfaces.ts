export interface IHasCssClass {
    get cssClass(): string;
}

export interface IHasCoordinates {
    getCoordinates(): I2DCoordinates;
}

export interface IDrawableInField extends IHasCoordinates, IHasCssClass {

}

export interface ISceneInfo {
    name: string;
    element: HTMLElement;
}

export interface I2DCoordinates {
    x: number;
    y: number;
}

export interface IRenderer {
   render(): void;
   update(): void;
}