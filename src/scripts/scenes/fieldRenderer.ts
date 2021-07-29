import {Map} from '../map/map';
import {I2DCoordinates, IDrawableInField, IHasCssClass, IRenderer} from '../interfaces';
import {GameState} from '../gameState';
import {Compare} from "../utils/compare";

export class FieldRenderer implements IRenderer {
    private map: Map;
    private gameState: GameState;
    private element: Element;
    private readonly cellClickListener: any;
    private readonly buttonZClickListener: any;
    private readonly buttonXClickListener: any;
    
    constructor(gameState: GameState, gameField: HTMLElement, mouseListener: any, buttonZClickListener: any,
                buttonXClickListener: any) {
        this.map = gameState.map;
        this.gameState = gameState;
        this.element = gameField;
        this.cellClickListener = mouseListener;
        this.buttonZClickListener = buttonZClickListener;
        this.buttonXClickListener = buttonXClickListener;
    }

    /**
     * Generates a table and append it to this.element
     */
    public render(): void {
        let table = this.getTable();
        table.innerHTML = "";
        for (let y = 0; y < this.map.getSize().y; ++y) {
            let row = document.createElement('tr');
            for (let x = 0; x  < this.map.getSize().x; ++x) {
                let cell = document.createElement('td');
                cell.addEventListener('click', this.cellClickListener);
                row.appendChild(cell);
            }
            table.appendChild(row);
        }
        let buttons = this.element.getElementsByClassName("buttons")[0].children;
        console.log(this.element);
        console.log(buttons);
        buttons[0].addEventListener('click', this.buttonZClickListener);
        buttons[1].addEventListener('click', this.buttonXClickListener);
    }

    private getTable(): HTMLTableElement {
        return <HTMLTableElement> this.element.getElementsByClassName('table')[0];
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