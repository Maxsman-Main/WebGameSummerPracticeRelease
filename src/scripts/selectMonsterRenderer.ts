import {IRenderer} from "./interfaces";
import {Player} from "./player";
import {Monster} from "./monster";

export class SelectMonsterRenderer implements IRenderer {
    private domElement: HTMLElement;
    private player: Player;
    private readonly OkButtonListener: any;

    constructor(domElement: HTMLElement, player: Player, OkButtonListener: any) {
        this.domElement = domElement;
        this.player = player;
        this.OkButtonListener = OkButtonListener;
    }

    public render(): void {
    }

    public update(): void {
        let select = this.domElement.getElementsByClassName('select')[0];

        select.innerHTML = "";
        for (let i = 0; i < this.player.availableMonters.length; ++i) {
            let option = document.createElement('option');
            option.value = `${i}`;
            option.innerText = this.player.availableMonters[i].getString();
            select.appendChild(option);
        }

        let OkButton = this.domElement.getElementsByClassName('ok')[0];
        OkButton.addEventListener('click', this.OkButtonListener);
    }

    public getChoosenMonster(): Monster {
        let select = <HTMLSelectElement>this.domElement.getElementsByClassName('select')[0];
        let index = select.value;
        console.log(index);
        return this.player.availableMonters[
            parseInt(index)
            ];
    }
}