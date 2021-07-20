class FieldScene extends Scene {

    render() {
        Logger.debug(this, "render");
        let land = this.game.imageLoader.get('land');
        let rock = this.game.imageLoader.get('rock');
        let hero = this.game.imageLoader.get('hero');
    
        for (let y = 0; y < this.game.map.sizeY(); ++y) {
            for (let x = 0; x < this.game.map.sizeX(); ++x) {
    
                let block_x = x * Scene.SIZE_BLOCK;
                let block_y = y * Scene.SIZE_BLOCK;

                switch (this.game.map.get(x, y)) {
                    case 0:
                        this.renderImage(land, block_x, block_y);
                      break;
                    case 1:
                        this.renderImage(land, block_x, block_y);
                        this.renderImage(rock, block_x, block_y);
                        break;
                }
            }
        }
        this.renderImage(hero, 0, 0);
    }

}