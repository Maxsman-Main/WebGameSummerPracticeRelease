import {I2DCoordinates} from '../interfaces';
import {Map} from '../map/map';
import {Player} from '../creatures/player';
import {Compare} from "../utils/compare";

export class MoveManager {

    private map: Map;

    constructor(map: Map) {
        this.map = map;
    }

    public outOfBoundsOfArray(coordinates: I2DCoordinates): boolean {
        return Compare.isInRange(coordinates.x, 0, this.map.getSize().x - 1) &&
                Compare.isInRange(coordinates.y, 0, this.map.getSize().y - 1);
    }

    public adjacentCellHorizOrVer(player: Player, coordinates: I2DCoordinates): boolean {
        return (Math.abs(coordinates.x - player.getCoordinates().x) +
                Math.abs(coordinates.y - player.getCoordinates().y) == 1);
    }

    public haveEnoughMovement(player: Player, coordinates: I2DCoordinates): boolean {
        return player.availableMoves >= this.map.getCell(coordinates).transitionCost;
    }

    /**
     * Coordinates are correct if the map range is included
     * and point to an adjacent cell horizontally or vertically
     * @returns
     * @param coordinates
     */
    public isCorrectCoordinates(player: Player,coordinates: I2DCoordinates): boolean {
        return this.outOfBoundsOfArray(coordinates) &&
        this.adjacentCellHorizOrVer(player, coordinates) &&
        this.haveEnoughMovement(player, coordinates);
    }

    public move(player: Player, coordinates: I2DCoordinates): boolean {
        if (this.isCorrectCoordinates(player, coordinates)) {
            console.log(`${player.name} moved to (${coordinates.x}, ${coordinates.y})`);
            player.move(coordinates, this.map.getCell(coordinates).transitionCost);
            return true;
        } else {
            console.log(`${player.name} not moved to (${coordinates.x}, ${coordinates.y})`);
            return false;
        }
    }
}