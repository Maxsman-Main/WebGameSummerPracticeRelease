import { Map } from './map';
import { Player } from './player';
import { Fight } from './fight';

export class DebugRenderer {

    private map: Map;
    private player: Player;
    private div: HTMLElement;

    constructor(map: Map, player: Player, div: HTMLElement) {
        this.map = map;
        this.player = player;
        this.div = div;
    }

    public showField() {
        console.log("DebugRender: show runned")
        let table = document.createElement('table');
        for (let y = 0; y < this.map.getSize().y; ++y) {
            let tr = document.createElement('tr');
            for (let x = 0; x < this.map.getSize().x; ++x) {
                let td = document.createElement('td');
                if (this.player.getCoordinates().x == x &&
                    this.player.getCoordinates().y == y) {
                    td.innerText = `${this.player.label}`;
                    console.log(this.map.getCell(x, y).creature)
                } else {
                    td.innerText = `${this.map.getCell(x, y).label}`;
                }
                tr.appendChild(td);
            }
            table.appendChild(tr);
        }
        console.log("DebugRender: show ended")
        this.div.innerHTML = table.outerHTML;
    }

    public showFight(fight: Fight) {
        console.log(fight);
        let container = document.createElement('div');
        let first = document.createElement('p');
        first.innerText = fight.monsterFirst.getString();
        let second = document.createElement('p');
        second.innerText = fight.monsterSecond.getString();
        container.appendChild(first);
        container.appendChild(second);
        this.div.innerHTML = container.outerHTML;
    }
}