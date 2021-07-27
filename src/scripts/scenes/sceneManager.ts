import {ISceneInfo} from '../interfaces';
import {GameState} from '../gameState';

export class SceneManager {
    gameState: GameState;
    _currentScene: string;
    public get currentScene(): ISceneInfo {
        return this.getSceneInfo(this._currentScene);
    }

    constructor(gameState: GameState) {
        this.gameState = gameState;
        this._currentScene = "";
    }

    public getSceneInfo(name: string): ISceneInfo {
        let scenes = this.gameState.scenes;
        for (let i = 0; i < scenes.length; ++i) {
            if (scenes[i].name == name) {
                return scenes[i];
            }
        }
        throw new Error("The scene does not exist");
    }

    public showScene(name: string): void {
        this._currentScene = name;
        let scene = this.getSceneInfo(name);
        for (let i = 0; i < this.gameState.scenes.length; ++i) {
            this.gameState.scenes[i].element.classList.add('hide');
        }
        scene.element.classList.remove('hide');
    }
}