import { Map } from './map';
import { Player } from './player';

export class MoveManager {

    private player: Player;
    private map: Map;

    constructor(map: Map, player: Player) {
        this.map = map;
        this.player = player;
    }

    /**
     * Coordinates are correct if the map range is included
     * and point to an adjacent cell horizontally or vertically 
     * @param x
     * @param y
     * @returns
     */
    public isCorrentCoordinates(x: number, y: number): boolean {
        return (0 <= x && x < this.map.getSize().x) &&
               (0 <= y && y < this.map.getSize().y) &&
               (Math.abs(x - this.player.getCoordinates().x) +
                Math.abs(y - this.player.getCoordinates().y) == 1);
    }

    public move(x: number, y: number) {
        if (this.isCorrentCoordinates(x, y)) {
            console.log(`${this.player.name} moved to (${x}, ${y})`);
            this.player.move(x, y);
            return true;
        } else {
            console.log(`${this.player.name} not moved to (${x}, ${y})`);
            return false;
        }
    }
}