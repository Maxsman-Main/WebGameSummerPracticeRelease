import { Map } from './map';
import { Player } from './player'; 
import { IDrawableInField, IHasCssClass } from './interfaces';

export class FieldRenderer {

    private map: Map;
    private creatures: IDrawableInField[];
    private gameField: HTMLElement;
    
    constructor(map: Map, creatures: IDrawableInField[], gameField: HTMLElement) {
        this.map = map;
        this.creatures = creatures;
        this.gameField = gameField;
    }

    public appendTable() {
        let table = document.createElement('table');
        for (let y = 0; y < this.map.getSize().y; ++y) {
            let row = document.createElement('tr');
            for (let x = 0; x  < this.map.getSize().x; ++x) {
                let cell = document.createElement('td');
                row.appendChild(cell);
            }
            table.appendChild(row);
        }
        this.gameField.innerHTML = table.outerHTML;
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
                let mapCell = this.map.getCell(x, y);
                this.getCell(x, y).innerHTML =
                    FieldRenderer.getHTMLSprite(mapCell).outerHTML;
            }
        }
        for (let i = 0; i < this.creatures.length; ++i) {
            let creature = this.creatures[i];
            this.getCell(
                creature.getCoordinates().x,
                creature.getCoordinates().y
            ).appendChild(FieldRenderer.getHTMLSprite(creature));
        }
    }
}