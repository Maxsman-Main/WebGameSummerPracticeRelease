import {Map} from '../map/map';
import {I2DCoordinates, IDrawableInField, IHasCssClass, IRenderer} from '../interfaces';
import {GameState} from '../gameState';
import {Compare} from "../utils/compare";

export class FieldRenderer implements IRenderer {
    private map: Map;
    private gameState: GameState;
    private element: HTMLElement;
    private readonly mouseListener: any;
    
    constructor(gameState: GameState, gameField: HTMLElement, mouseListener: any) {
        this.map = gameState.map;
        this.gameState = gameState;
        this.element = gameField;
        this.mouseListener = mouseListener; 
    }

    /**
     * Generates a table and append it to this.element
     */
    public render(): void {
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
        this.element.innerHTML = "";
        this.element.appendChild(table);
    }

    private getTable(): HTMLTableElement {
        return <HTMLTableElement> this.element.children[0];
    }

    /**
     * Get cell in table
     * @param coordinates
     * @private
     */
    private getCell(coordinates: I2DCoordinates): Element {
        return this.getTable().rows[coordinates.y].cells[coordinates.x];
    }

    /**
     * Generates div element with some css class
     * @param obj
     */
    static getHTMLSprite(obj: IHasCssClass): HTMLElement {
        let result = document.createElement('div');
        result.classList.add('sprite');
        result.classList.add(obj.cssClass);
        return result;
    }

    private getCreaturesList(): IDrawableInField[] {
        return [this.gameState.player, ...this.gameState.creatures];
    }

    public update(): void {
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

    /**
     * Updates cells only at specific coordinates. Needed to draw CSS animation only for specific cells.
     * @param coordinates
     */
    public updateCells(coordinates: I2DCoordinates[]): void {
        for (let i = 0; i < coordinates.length; ++i) {
            let mapCell = this.map.getCell(coordinates[i]);
            let HTMLCell = this.getCell(coordinates[i]);
            HTMLCell.innerHTML = "";
            HTMLCell.appendChild(FieldRenderer.getHTMLSprite(mapCell));

            const creaturesList = this.getCreaturesList();
            for (let j = 0; j < creaturesList.length; ++j) {
                if (Compare.shallowEqual(creaturesList[j].getCoordinates(), coordinates[i])) {
                    HTMLCell.appendChild(FieldRenderer.getHTMLSprite(creaturesList[j]));
                }
            }
        }
    }
}