class DebugRenderer {

    constructor(map, player, divDom) {
        this.map = map;
        this.player = player;
        this.divDom = divDom;
    }

    showField() {
        console.log("DebugRender: show runned")
        let table = document.createElement('table');
        for (let y = 0; y < this.map.sizeY; ++y) {
            let tr = document.createElement('tr');
            for (let x = 0; x < this.map.sizeX; ++x) {
                let td = document.createElement('td');
                if (this.player.x == x && this.player.y == y) {
                    td.innerText = `${player.label}`;
                    console.log(this.map.getCell(x, y).creature)
                } else {
                    td.innerText = `${this.map.getCell(x, y).label}`;
                }
                tr.appendChild(td);
            }
            table.appendChild(tr);
        }
        console.log("DebugRender: show ended")
        this.divDom.innerHTML = table.outerHTML;
    }

    showFight(fight) {
        console.log(fight);
        let container = document.createElement('div');
        let first = document.createElement('p');
        first.innerText = fight.monsterFirst.getString();
        let second = document.createElement('p');
        second.innerText = fight.monsterSecond.getString();
        container.appendChild(first);
        container.appendChild(second);
        this.divDom.innerHTML = container.outerHTML;
    }

}