import {ISceneInfo} from '../interfaces';

export class SceneManager {
    _currentScene: string;
    scenes: ISceneInfo[];

    public get currentScene(): ISceneInfo {
        return this.getSceneInfo(this._currentScene);
    }

    constructor(scenes: ISceneInfo[]) {
        this._currentScene = "";
        this.scenes = scenes;
    }

    public getSceneInfo(name: string): ISceneInfo {
        for (let i = 0; i < this.scenes.length; ++i) {
            if (this.scenes[i].name == name) {
                return this.scenes[i];
            }
        }
        throw new Error("The scene does not exist");
    }

    public showScene(name: string): void {
        this._currentScene = name;
        let scene = this.getSceneInfo(name).scene;
        for (let i = 0; i < this.scenes.length; ++i) {
            this.scenes[i].scene.getElement().classList.add('hide');
        }
        scene.getElement().classList.remove('hide');
    }
}