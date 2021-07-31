import {Player} from "./creatures/player";
import {Map} from "./map/map";
import {MoveManager} from "./logic/moveManager";
import {Fight} from "./logic/fight";
import {Monster} from "./creatures/monster";
import {I2DCoordinates} from "./interfaces";
import {Random} from "./utils/random";

class AI {
    private map: Map;
    private player: Player;
    private moveManager: MoveManager;

    constructor(map: Map, player: Player) {
        this.map = map;
        this.player = player
        this.moveManager = new MoveManager(map);
    }

    public do() {
        if (!this.tryFight()) {
            this.tryMove();
            this.tryFight();
        }
    }

    public tryFight() {
        let cell = this.map.getCell(this.player.getCoordinates());
        if (!cell.monster.looted) {
            let fight = new Fight(this.player, this.getMonsterWithBestAttack(), cell.monster);
            while (!fight.isFinish()) {
                fight.attackCurrent();
                fight.swap();
            }
            fight.finish();
            return true;
        }
        return false;
    }

    public tryMove() {
        let currentCoordinate = this.player.getCoordinates();
        let dx = [0, -1];
        let dy = [1,  0];
        let goodCoordinates: I2DCoordinates[] = [];
        for (let i = 0; i < dx.length; ++i) {
            let coordinate = { x: currentCoordinate.x + dx[i], y: currentCoordinate.y + dy[i] }
            if (this.moveManager.isCorrectCoordinates(this.player, coordinate)) {
                goodCoordinates.push(coordinate);
            }
        }
        let item = Random.oneItemFromArray(goodCoordinates);
        this.moveManager.move(this.player, item);
    }

    public getMonsterWithBestAttack(): Monster {
        let monsterWithBestAttack: Monster = null;
        for (let i = 0; i < this.player.availableMonsters.length; ++i) {
            if (monsterWithBestAttack == null ||
                monsterWithBestAttack.attack > this.player.availableMonsters[i].attack) {
                monsterWithBestAttack = this.player.availableMonsters[i];
            }
        }
        return monsterWithBestAttack;
    }
}
