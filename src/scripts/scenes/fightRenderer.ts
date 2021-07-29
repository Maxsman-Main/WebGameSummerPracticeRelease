import {Monster} from "../creatures/monster";
import {IRenderer} from "../interfaces";

export class FightRenderer implements IRenderer {
    private element: HTMLElement;
    private monsters: [Monster, Monster];
    private readonly NESZButtonClickListener: any;
    private readonly NESXButtonClickListener: any;

    constructor(gameFight: HTMLElement, monsters: [Monster, Monster], listener_1: any, listener_2: any) {
        this.element = gameFight;
        this.monsters = monsters;
        this.NESZButtonClickListener = listener_1;
        this.NESXButtonClickListener = listener_2;
    }

    public render(): void {
        this.getZButton().addEventListener('click', this.NESZButtonClickListener);
        this.getXButton().addEventListener('click', this.NESXButtonClickListener);
    }

    private getMonsterDivs(): HTMLCollection {
        return this.element.getElementsByClassName("monsters")[0].children;
    }

    private static getSprite(elem: Element) {
        return elem.getElementsByClassName('sprite')[0];
    }

    private static getHealth(elem: Element) {
        return elem.getElementsByClassName('health')[0];
    }

    private static getDefense(elem: Element) {
        return elem.getElementsByClassName('defense')[0];
    }

    private getButtons() {
        return this.element.getElementsByClassName('action-btn')[0].children;
    }

    private getZButton() {
        return this.getButtons()[0];
    }

    private getXButton() {
        return this.getButtons()[1];
    }

    public update(): void {
        let monsterDivs = this.getMonsterDivs();
        for (let i = 0; i < monsterDivs.length; ++i) {
            let sprite = FightRenderer.getSprite(monsterDivs[i]);
            let health = FightRenderer.getHealth(monsterDivs[i]);
            let defense = FightRenderer.getDefense(monsterDivs[i]);

            sprite.className = `sprite ${this.monsters[i].cssClass}`;
            if (i == 1) {
                sprite.classList.add('mirrorY');
            }
            health.innerHTML = `${this.monsters[i].health}`;
            defense.innerHTML = `${this.monsters[i].defense}`;
        }
    }
}