import {Player} from './creatures/player';
import {Map} from './map/map';
import {MoveManager} from './logic/moveManager';
import {IDrawableInField, ISceneInfo} from './interfaces';
import {Fight} from "./logic/fight";

export class GameState {

    public player: Player;
    public creatures: IDrawableInField[];
    public map: Map;
    public moveManager: MoveManager;
    public scenes: ISceneInfo[];
    public fight: Fight;

    constructor(player: Player, creatures: IDrawableInField[]) {
        this.player = player;
        this.creatures = creatures;
        this.map = new Map(5, 5);
        this.moveManager = new MoveManager(this.map, this.player);
        this.scenes = [
            {
                name: 'field',
                element: document.getElementById('game-field')
            },
            {
                name: 'fight',
                element: document.getElementById('game-fight')
            },
            {
                name: 'select-monster',
                element: document.getElementById('game-select-monster')
            }
        ]
        this.fight = null;
    }

}