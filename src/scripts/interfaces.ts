export interface IHasCssClass {
    get cssClass(): string;
}

export interface IHasCoordinates {
    getCoordinates(): I2DCoordinates;
}

export interface IDrawableInField extends IHasCoordinates, IHasCssClass {

}

export interface IScene {
    getElement(): Element;
}

export interface ISceneInfo {
    scene: IScene;
    name: string;
}

export interface I2DCoordinates {
    x: number;
    y: number;
}