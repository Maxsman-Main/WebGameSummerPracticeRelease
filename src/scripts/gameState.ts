import {Player} from './creatures/player';
import {Map} from './map/map';
import {MoveManager} from './logic/moveManager';
import {IDrawableInField} from './interfaces';
import {Fight} from "./logic/fight";

export class GameState {
    public player: Player;
    public player2: Player;
    public creatures: IDrawableInField[];
    public map: Map;
    public moveManager: MoveManager;
    public fight: Fight;

    constructor(player: Player, player2: Player, map: Map) {
        this.player = player;
        this.player2 = player2;
        this.map = map;
        this.moveManager = new MoveManager(this.map, this.player);
        this.fight = null;
    }
}