import { Player } from './player';
import { Chudila } from './monster';
import { Map } from './map';
import { MoveManager } from './moveManager';
import { DebugRenderer } from './debugRenderer';
import { Fight } from './fight';
import { FieldRenderer } from './fieldRenderer';

var map = new Map(5, 5);
var player = new Player("Steve", null, '@', 0, 0, 4, [ new Chudila()]);
var gameField = document.getElementById('game-field');
var renderer = new FieldRenderer(map, player, gameField);
renderer.appendTable();
renderer.fillTable();