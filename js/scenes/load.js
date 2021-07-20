class LoadScene extends Scene {

    render(progress) {
        Logger.debug(this, "render");
        let land = this.game.imageLoader.get('land');
        for (let y = 0; y < this.game.map.sizeY(); ++y) {
            for (let x = 0; x < this.game.map.sizeX(); ++x) {
                let block_x = x * Scene.SIZE_BLOCK;
                let block_y = y * Scene.SIZE_BLOCK;
                this.renderImage(land, block_x, block_y);
            }
        }
        let width = this.game.canvasDOM.width;
        let height = this.game.canvasDOM.height;

        let padding = 5;
        let lineWidth = 400;
        let lineHeight = 30;
        
        this.game.context.fillStyle = '#64524F';
        this.game.context.fillRect((width / 2) - (lineWidth / 2),
                                   (height / 2) - (lineHeight / 2),
                                   lineWidth, lineHeight);
        this.game.context.fillStyle = '#443742';
        this.game.context.fillRect((width / 2) - (lineWidth / 2) + padding,
                                   (height / 2) - (lineHeight / 2) + padding,
                                   (lineWidth - padding * 2) * progress, 
                                   lineHeight - padding * 2);
    }

}