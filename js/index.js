let canvas_game = document.getElementById("game");
let context = canvas_game.getContext('2d');

let loader = new ImageLoader(
    [
        {
            name: 'land',
            src: "./images/land.png"
        },
        {
            name: 'rock',
            src: "./images/rock.png"
        }
    ],
    (progress) => {
        console.log(progress);
        if (progress == 1) {
            draw();
        }
    }
)

const SIZE_BLOCK = 100;

function draw() {
    let land = loader.get('land');
    let rock = loader.get('rock');
    for (let y = 0; y < map.length; ++y) {
        for (let x = 0; x < map[y].length; ++x) {
            let block_x = x * SIZE_BLOCK;
            let block_y = y * SIZE_BLOCK;
            if (map[y][x] == 1) {
                context.drawImage(land, block_x, block_y, SIZE_BLOCK, SIZE_BLOCK);
                context.drawImage(rock, block_x, block_y, SIZE_BLOCK, SIZE_BLOCK);
            } else if (map[y][x] == 0) {
                context.drawImage(land, block_x, block_y, SIZE_BLOCK, SIZE_BLOCK);
            }
        }
    }
}