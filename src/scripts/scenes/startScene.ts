import {IScene} from "../interfaces"

export class StartScene implements IScene {
    private readonly element: HTMLElement;
    private readonly startButtonListener: any;

    constructor(domElement: HTMLElement, startButtonListener: any) {
        this.element = domElement;
        this.startButtonListener = startButtonListener
    }

    public render() {
        let button = this.element.getElementsByClassName('red-btn')[0];
        button.addEventListener('click', this.startButtonListener);
    }

    getElement(): Element {
        return this.element;
    }
}