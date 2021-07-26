import {Monster} from "./monster";
import {IRenderer} from "./interfaces";

export class FightRenderer implements IRenderer {

    private gameFight: HTMLElement;
    private monsters: [Monster, Monster];
    private readonly NESZButtonClickListener: any;
    private readonly NESXButtonClickListener: any;

    constructor(gameFight: HTMLElement, monsters: [Monster, Monster], listener_1: any, listener_2: any) {
        this.gameFight = gameFight;
        this.monsters = monsters;
        this.NESZButtonClickListener = listener_1;
        this.NESXButtonClickListener = listener_2;
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
                sprite.classList.add('mirrorY');
            }
            health.innerHTML = `${this.monsters[i].health}`;
            defense.innerHTML = `${this.monsters[i].defense}`;
        }
        let buttons = this.gameFight.getElementsByClassName('action-btn')[0].children;
        console.assert(buttons.length == 2);
        buttons[0].addEventListener('click', this.NESZButtonClickListener);
        buttons[1].addEventListener('click', this.NESXButtonClickListener);
    }

}