import {Map} from './map';
import {I2Dcoordinates, IHasCssClass} from './interfaces';
import {GameState} from './gameState';
import {Utils} from "./utils";

export class FieldRenderer {

    private map: Map;
    private gameState: GameState;
    private gameField: HTMLElement;
    private readonly mouseListener: any;
    
    constructor(gameState: GameState, gameField: HTMLElement, mouseListener: any) {
        this.map = gameState.map;
        this.gameState = gameState;
        this.gameField = gameField;
        this.mouseListener = mouseListener; 
    }

    public appendTable() {
        let table = document.createElement('table');
        for (let y = 0; y < this.map.getSize().y; ++y) {
            let row = document.createElement('tr');
            for (let x = 0; x  < this.map.getSize().x; ++x) {
                let cell = document.createElement('td');
                cell.addEventListener('click', this.mouseListener);
                row.appendChild(cell);
            }
            table.appendChild(row);
        }
        this.gameField.innerHTML = "";
        this.gameField.appendChild(table);
    }

    private getTable(): HTMLTableElement {
        return <HTMLTableElement> this.gameField.children[0];
    }

    private getCell(coordinates: I2Dcoordinates): Element {
        return this.getTable().rows[coordinates.y].cells[coordinates.x];
    }

    static getHTMLSprite(obj: IHasCssClass): HTMLElement {
        let HTMLSprite = document.createElement('div');
        HTMLSprite.classList.add('sprite');
        HTMLSprite.classList.add(obj.cssClass);
        return HTMLSprite;
    }

    private getCreaturesList() {
        return [
            this.gameState.player,
            ...this.gameState.creatures
        ]
    }

    public fillTable() {
        for (let y = 0; y < this.map.getSize().y; ++y) {
            for (let x = 0; x < this.map.getSize().x; ++x) {
                let mapCell = this.map.getCell({ x: x, y: y });
                let HTMLCell = this.getCell({ x: x, y: y });
                HTMLCell.innerHTML = "";
                HTMLCell.appendChild(FieldRenderer.getHTMLSprite(mapCell));
            }
        }
        const creaturesList = this.getCreaturesList();
        for (let i = 0; i < creaturesList.length; ++i) {
            let creature = creaturesList[i];
            this.getCell(creature.getCoordinates()).appendChild(FieldRenderer.getHTMLSprite(creature));
        }
    }

    public updateCells(coordinates: I2Dcoordinates[]): void {
        for (let i = 0; i < coordinates.length; ++i) {
            let mapCell = this.map.getCell(coordinates[i]);
            let HTMLCell = this.getCell(coordinates[i]);
            HTMLCell.innerHTML = "";
            HTMLCell.appendChild(FieldRenderer.getHTMLSprite(mapCell));

            const creaturesList = this.getCreaturesList();
            for (let j = 0; j < creaturesList.length; ++j) {
                if(Utils.shallowEqual(creaturesList[j].getCoordinates(), coordinates[i])) {
                    HTMLCell.appendChild(FieldRenderer.getHTMLSprite(creaturesList[j]));
                }
            }
        }
    }
}