import {Monster} from './creatures/monster'
import {Cell,  LandCell, VolcanoCell, ForestCell, LakeCell, WhiteCastleCell, DarkCastleCell} from './map/cell';

export class ComplexityChanger{
    private _currentMapData: Cell[][];

    constructor(map: Cell[][]){
        this._currentMapData = map;
    }

    public balanceMap(): void{
        for(let y = 0; y < this._currentMapData.length; ++y){
            for(let x = 0; x < this._currentMapData[y].length; ++x){
                let currentMonster = this._currentMapData[y][x].monster;
                let newHealthValue = (1 + x / 10) * currentMonster.health;
                currentMonster.BalanceHeal(newHealthValue);
            }
        }
    }    
}