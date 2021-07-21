class DebugRenderer {

    constructor(map, player) {
        this.map = map;
        this.player = player;
    }

    show(div_dom) {
        console.log("DebugRender: show runned")
        let table = document.createElement('table');
        for (let y = 0; y < this.map.sizeY; ++y) {
            let tr = document.createElement('tr');
            for (let x = 0; x < this.map.sizeX; ++x) {
                let td = document.createElement('td');
                if (player.coordinates.x == x && this.player.coordinates.y == y) {
                    td.innerText = `${player.label}`;
                } else {
                    td.innerText = `${this.map.getCell(x, y).label}`;
                }
                tr.appendChild(td);
            }
            table.appendChild(tr);
        }
        console.log("DebugRender: show ended")
        div_dom.innerHTML = table.outerHTML;
    }
}