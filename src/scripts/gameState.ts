import {Player} from './creatures/player';
import {Map} from './map/map';
import {MoveManager} from './logic/moveManager';
import {IDrawableInField} from './interfaces';
import {Fight} from "./logic/fight";

export class GameState {
    public player: Player;
    public creatures: IDrawableInField[];
    public map: Map;
    public moveManager: MoveManager;
    public fight: Fight;

    constructor(player: Player, map: Map, creatures: IDrawableInField[]) {
        this.player = player;
        this.creatures = [player, ...creatures];
        this.map = new Map(5, 5);
        this.moveManager = new MoveManager(this.map, this.player);
        this.fight = null;
    }
}