let canvas_game = document.getElementById("game");
let context = canvas_game.getContext('2d');

const loader = new ImageLoader(
    [
        {
            name: 'land',
            src: "./images/land.png"
        },
        {
            name: 'rock',
            src: "./images/rock.png"
        },
        {
            name: 'hero',
            src: "./images/hero.png"
        }
    ],
    (progress) => {
        console.log(progress);
        if (progress == 1) {
            draw();
        }
    }
)
const map = new Map();

const SIZE_BLOCK = 100;

function draw() {
    let land = loader.get('land');
    let rock = loader.get('rock');
    let hero = loader.get('hero');

    for (let y = 0; y < map.size_y(); ++y) {
        for (let x = 0; x < map.size_x(); ++x) {

            let block_x = x * SIZE_BLOCK;
            let block_y = y * SIZE_BLOCK;
            
            if (map.get(x, y) == 1) {
                context.drawImage(land, block_x, block_y, SIZE_BLOCK, SIZE_BLOCK);
                context.drawImage(rock, block_x, block_y, SIZE_BLOCK, SIZE_BLOCK);
            } else if (map.get(x, y)  == 0) {
                context.drawImage(land, block_x, block_y, SIZE_BLOCK, SIZE_BLOCK);
            }
        }
    }
    context.drawImage(hero, 0, 0, SIZE_BLOCK, SIZE_BLOCK);
}