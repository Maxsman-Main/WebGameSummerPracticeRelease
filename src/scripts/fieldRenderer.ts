import { Map } from './map';
import { Player } from './player'; 
import { IDrawableInField, IHasCssClass } from './interfaces';
import { GameState } from './gameState';

export class FieldRenderer {

    private map: Map;
    private gameState: GameState;
    private gameField: HTMLElement;
    private mouseListener: any;
    
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

    private getCell(x: number, y:number): Element {
        return this.getTable().rows[y].cells[x];
    }

    static getHTMLSprite(obj: IHasCssClass): HTMLElement {
        let HTMLSprite = document.createElement('div');
        HTMLSprite.classList.add('sprite');
        HTMLSprite.classList.add(obj.cssClass);
        return HTMLSprite;
    }

    public fillTable() {
        for (let y = 0; y < this.map.getSize().y; ++y) {
            for (let x = 0; x < this.map.getSize().x; ++x) {
                let mapCell = this.map.getCell({ x: x, y: y });
                this.getCell(x, y).innerHTML =
                    FieldRenderer.getHTMLSprite(mapCell).outerHTML;
            }
        }
        var listOfCreatures = [
            this.gameState.player,
            ...this.gameState.creatures
        ]
        for (let i = 0; i < listOfCreatures.length; ++i) {
            let creature = listOfCreatures[i];
            this.getCell(
                creature.getCoordinates().x,
                creature.getCoordinates().y
            ).appendChild(FieldRenderer.getHTMLSprite(creature));
        }
    }
}