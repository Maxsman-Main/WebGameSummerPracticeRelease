import {IRenderer} from "../interfaces"

export class StartRenderer implements IRenderer {

    private domElement: HTMLElement;
    private readonly startButtonListener: any;

    constructor(domElement: HTMLElement, startButtonListener: any) {
        this.domElement = domElement;
        this.startButtonListener = startButtonListener
    }

    public render() {
        let button = this.domElement.getElementsByClassName('red-btn')[0];
        button.addEventListener('click', this.startButtonListener);
    }

    public update() {

    }
}