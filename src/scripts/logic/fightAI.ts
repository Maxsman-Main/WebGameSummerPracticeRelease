import {Monster} from '../creatures/monster';   
import { Fight } from './fight';
import { Random } from 'scripts/utils/random';

export class FightAI{

    public useAI(currentFight: Fight): void{
        currentFight.currentMonster.beAttacked(currentFight.defenseMonster);
    }
}