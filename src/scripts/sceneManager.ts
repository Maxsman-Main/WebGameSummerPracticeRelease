import { ISceneInfo } from './interfaces';
import { GameState } from './gameState';

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

    public getSceneInfo(name: string) {
        let scenes = this.gameState.scenes;
        for (let i = 0; i < scenes.length; ++i) {
            if (scenes[i].name == name) {
                return scenes[i];
            }
        }
        throw new Error("The scene does not exist");
    }

    public showScene(name: string) {
        this._currentScene = name;
        console.log(`ShowScene ${name}, ${this.gameState.scenes.length}`)
        let scene = this.getSceneInfo(name);
        for (let i = 0; i < this.gameState.scenes.length; ++i) {
            this.gameState.scenes[i].element.classList.add('hide');
            console.log(this.gameState.scenes[i].name, i);
        }
        scene.element.classList.remove('hide');
    }

}