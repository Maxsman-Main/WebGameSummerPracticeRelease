import { Map } from './map';
import { Player } from './player'; 

export class FieldRenderer {

    private map: Map;
    private player: Player;
    private gameField: HTMLElement;
    
    constructor(map: Map, player: Player, gameField: HTMLElement) {
        this.map = map;
        this.player = player;
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

    public fillTable() {
        let table: HTMLTableElement = <HTMLTableElement> this.gameField.children[0];
        for (let y = 0; y < this.map.getSize().y; ++y) {
            for (let x = 0; x < this.map.getSize().x; ++x) {
                let mapCell = this.map.getCell(x, y);

                let HTMLSprite = document.createElement('div');
                HTMLSprite.classList.add('sprite');
                HTMLSprite.classList.add(mapCell.cssClass);
                
                table.rows[y].cells[x].innerHTML = HTMLSprite.outerHTML;
            }
        }
        // render player
    }
}