import {Monster} from "../creatures/monster"
import {Player} from "../creatures/player";

export class Fight {
    private _currentMonster: Monster;
    public get currentMonster(): Monster {
        return this._currentMonster;
    }
    private _defenseMonster: Monster;
    public get defenseMonster(): Monster {
        return this._defenseMonster;
    }
    private _winner: Monster;
    private _player: Player;

    constructor(player: Player, monsterFirst: Monster, monsterSecond: Monster) {
        this._currentMonster = monsterFirst;
        this._defenseMonster = monsterSecond;
        this._winner = null;
        this._player = player;
    }

    public swap() {
        [this._currentMonster, this._defenseMonster] = [this.defenseMonster, this.currentMonster];
    }

    public isFinish(): boolean {
        return this.currentMonster.isDead() || this.defenseMonster.isDead();
    }

    public attackCurrent() {
        this.defenseMonster.beAttacked(this.currentMonster);
    }

    public defendCurrent() {
        this.defenseMonster.defenseHimself();
    }

    public finish() {
        this._winner = (this.currentMonster.isDead()) ? this.defenseMonster : this.currentMonster;
        this.currentMonster.Heal();
        this.defenseMonster.Heal();
        /**
         * If the player's monster won, then it is necessary to add the losing monster, otherwise remove the monster
         * from the player.
         *
         * If the monster was once looted, then this is the player's monster.
         */
        if (this._winner.looted) {
            this.defenseMonster.loot();
            this._player.addMonster(this.defenseMonster);
            console.log(`${this._player.name} win`);
        } else {
            this._player.deleteMonster(this.defenseMonster);
            console.log(`${this._player.name} lose`);
        }
        this._player.resetAvailableMoves();
    }
}