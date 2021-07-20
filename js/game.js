class Game {

    constructor(canvasDOM) {
        this.canvasDOM = canvasDOM;
        this.context = canvasDOM.getContext('2d');
        this.currentScene = new LoadScene(this);
        this.imageLoader = new ImageLoader(
            [
                { name: 'land', src: "./images/land.png" },
                { name: 'rock', src: "./images/rock.png" },
                { name: 'hero', src: "./images/hero.png" },
            ],
            (progress) => {
                this.currentScene.render(progress);
                if (progress == 1) {
                    setTimeout(() => {
                        this.currentScene = new FieldScene(this);
                    this.loop();
                    }, 700);
                    
                }
            }
        )
        this.map = new Map();
    }


    loop() {
        this.currentScene.render();
    }
}