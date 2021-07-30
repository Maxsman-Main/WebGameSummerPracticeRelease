import {IScene} from "../interfaces";
import {Player} from "../creatures/player";
import {Monster} from "../creatures/monster";

export class SelectMonsterScene implements IScene {
    private element: HTMLElement;
    private player: Player;
    private readonly OkButtonListener: any;

    constructor(domElement: HTMLElement, OkButtonListener: any) {
        this.element = domElement;
        this.player = null;
        this.OkButtonListener = OkButtonListener;
    }

    public setPlayer(player: Player) {
        this.player = player;
    }

    public update(): void {
        let select = this.element.getElementsByClassName('select')[0];
        select.innerHTML = "";
        for (let i = 0; i < this.player.availableMonsters.length; ++i) {
            let option = document.createElement('option');
            option.value = `${i}`;
            option.innerText = this.player.availableMonsters[i].getString();
            select.appendChild(option);
        }
        let OkButton = this.element.getElementsByClassName('ok')[0];
        OkButton.addEventListener('click', this.OkButtonListener);
    }

    public getChosenMonster(): Monster {
        let select = <HTMLSelectElement>this.element.getElementsByClassName('select')[0];
        let index = select.value;
        return this.player.availableMonsters[parseInt(index)];
    }

    public getElement(): Element {
        return this.element;
    }
}