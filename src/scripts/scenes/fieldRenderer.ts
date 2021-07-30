import {Map} from '../map/map';
import {I2DCoordinates, IDrawableInField, IHasCssClass, IRenderer} from '../interfaces';
import {Compare} from "../utils/compare";
import {Player} from "../creatures/player";

export class FieldRenderer implements IRenderer {
    private element: Element;
    private readonly cellClickListener: any;
    private readonly buttonZClickListener: any;
    private readonly buttonXClickListener: any;
    
    constructor(gameField: HTMLElement, mouseListener: any, buttonZClickListener: any, buttonXClickListener: any) {
        this.element = gameField;
        this.cellClickListener = mouseListener;
        this.buttonZClickListener = buttonZClickListener;
        this.buttonXClickListener = buttonXClickListener;
    }

    /**
     * Generates a table and append it to this.element
     */
    public render(map: Map): void {
        let table = this.getTable();
        table.innerHTML = "";
        for (let y = 0; y < map.getSize().y; ++y) {
            let row = document.createElement('tr');
            for (let x = 0; x  < map.getSize().x; ++x) {
                let cell = document.createElement('td');
                cell.addEventListener('click', this.cellClickListener);
                row.appendChild(cell);
            }
            table.appendChild(row);
        }
        this.getZButton().addEventListener('click', this.buttonZClickListener);
        this.getXButton().addEventListener('click', this.buttonXClickListener);
    }

    private getTable(): HTMLTableElement {
        return <HTMLTableElement> this.element.getElementsByClassName('table')[0];
    }

    private getButtons(): HTMLCollection {
        return this.element.getElementsByClassName("buttons")[0].children;
    }

    private getZButton(): Element {
        return this.getButtons()[0];
    }

    private getXButton(): Element {
        return this.getButtons()[1];
    }

    private getInfoElement(): Element {
        return this.element.getElementsByClassName('info')[0];
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

    public update(map: Map, creatures: IDrawableInField[]): void {
        for (let y = 0; y < map.getSize().y; ++y) {
            for (let x = 0; x < map.getSize().x; ++x) {
                let mapCell = map.getCell({ x: x, y: y });
                let HTMLCell = this.getCell({ x: x, y: y });
                HTMLCell.innerHTML = "";
                HTMLCell.appendChild(FieldRenderer.getHTMLSprite(mapCell));
            }
        }
        for (let i = 0; i < creatures.length; ++i) {
            let creature = creatures[i];
            this.getCell(creature.getCoordinates()).appendChild(FieldRenderer.getHTMLSprite(creature));
        }
    }

    /**
     * Updates cells only at specific coordinates. Needed to draw CSS animation only for specific cells.
     * @param map
     * @param coordinates
     * @param creatures
     */
    public updateCells(map: Map, coordinates: I2DCoordinates[], creatures: IDrawableInField[]): void {
        for (let i = 0; i < coordinates.length; ++i) {
            let mapCell = map.getCell(coordinates[i]);
            let HTMLCell = this.getCell(coordinates[i]);
            HTMLCell.innerHTML = "";
            HTMLCell.appendChild(FieldRenderer.getHTMLSprite(mapCell));

            for (let j = 0; j < creatures.length; ++j) {
                if (Compare.shallowEqual(creatures[j].getCoordinates(), coordinates[i])) {
                    HTMLCell.appendChild(FieldRenderer.getHTMLSprite(creatures[j]));
                }
            }
        }
    }

    public updateInfo(player: Player): void {
        this.getInfoElement().innerHTML = `Available moves: ${player.availableMoves}`;
    }
}