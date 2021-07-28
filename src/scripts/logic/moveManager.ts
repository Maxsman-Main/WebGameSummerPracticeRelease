import {I2DCoordinates} from '../interfaces';
import {Map} from '../map/map';
import {Player} from '../creatures/player';
import {Compare} from "../utils/compare";

export class MoveManager {

    private player: Player;
    private map: Map;

    constructor(map: Map, player: Player) {
        this.map = map;
        this.player = player;
    }

    public outOfBoundsOfArray(coordinates: I2DCoordinates): boolean {
        return Compare.isInRange(coordinates.x, 0, this.map.getSize().x) &&
                Compare.isInRange(coordinates.y, 0, this.map.getSize().y);
    }

    public adjacentCellHorizOrVer(coordinates: I2DCoordinates): boolean {
        return (Math.abs(coordinates.x - this.player.getCoordinates().x) +
                Math.abs(coordinates.y - this.player.getCoordinates().y) == 1);
    }

    public haveEnoughMovement(coordinates: I2DCoordinates): boolean {
        return this.player.availableMoves >= this.map.getCell(coordinates).transitionCost;
    }

    /**
     * Coordinates are correct if the map range is included
     * and point to an adjacent cell horizontally or vertically
     * @returns
     * @param coordinates
     */
    public isCorrectCoordinates(coordinates: I2DCoordinates): boolean {
        return this.outOfBoundsOfArray(coordinates) &&
        this.adjacentCellHorizOrVer(coordinates) &&
        this.haveEnoughMovement(coordinates);
    }

    public move(coordinates: I2DCoordinates): boolean {
        if (this.isCorrectCoordinates(coordinates)) {
            console.log(`${this.player.name} moved to (${coordinates.x}, ${coordinates.y})`);
            this.player.move(coordinates, this.map.getCell(coordinates).transitionCost);
            return true;
        } else {
            console.log(`${this.player.name} not moved to (${coordinates.x}, ${coordinates.y})`);
            return false;
        }
    }
}