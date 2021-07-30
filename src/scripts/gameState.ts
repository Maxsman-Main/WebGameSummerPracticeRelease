import {Player} from './creatures/player';
import {Map} from './map/map';
import {MoveManager} from './logic/moveManager';
import {IDrawableInField} from './interfaces';
import {Fight} from "./logic/fight";

export class GameState {
    public player: Player;
    public player2: Player;
    public currentPlayer: Player;
    public map: Map;
    public moveManager: MoveManager;
    public fight: Fight;
    public blocked: boolean;

    constructor(player: Player, player2: Player, map: Map) {
        this.player = player;
        this.player2 = player2;
        this.currentPlayer = player;
        this.map = map;
        this.moveManager = new MoveManager(this.map, this.player);
        this.fight = null;
        this.blocked = false;
    }

    public getCreatures(): IDrawableInField[] {
        return [this.player, this.player2];
    }

    public getNext() {
        return (this.currentPlayer == this.player) ? this.player2 : this.player;
    }

    public getCurrent() {
        return this.currentPlayer;
    }

    public swapPlayers() {
        this.currentPlayer.resetAvailableMoves();
        this.currentPlayer = this.getNext();
    }
}