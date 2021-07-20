class Scene {

    static SIZE_BLOCK = 100;

    constructor(game) {
        this.game = game;
    }

    render() {
        throw 'Not implemented!';
    }

    renderImage(img, x, y) {
        this.game.context.drawImage(img, x, y, Scene.SIZE_BLOCK, Scene.SIZE_BLOCK);
    }

}