import {Monster} from "./monster";
import {IRenderer} from "./interfaces";

export class FightRenderer implements IRenderer {

    private gameFight: HTMLElement;
    private monsters: [Monster, Monster];

    constructor(gameFight: HTMLElement, monsters: [Monster, Monster]) {
        this.gameFight = gameFight;
        this.monsters = monsters;
    }

    public render(): void {
    }

    public update(): void {
        let monstersDiv = this.gameFight.getElementsByClassName('monsters')[0].children;
        console.assert(monstersDiv.length == this.monsters.length);
        for (let i = 0; i < monstersDiv.length; ++i) {
            let sprite = monstersDiv[i].getElementsByClassName('sprite')[0];
            let health = monstersDiv[i].getElementsByClassName('health')[0];
            let defense = monstersDiv[i].getElementsByClassName('defense')[0];

            sprite.className = `sprite ${this.monsters[i].cssClass}`;
            if (i == 1) {
                sprite.classList.add('sprite');
            }
            health.innerHTML = `${this.monsters[i].health}`;
            defense.innerHTML = `${this.monsters[i].defense}`;
        }
    }

}