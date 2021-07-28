(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });
exports.Creature = void 0;

var Creature = function () {
    function Creature(name, cssClass) {
        _classCallCheck(this, Creature);

        this._name = name;
        this._cssClass = cssClass;
    }

    _createClass(Creature, [{
        key: "name",
        get: function get() {
            return this._name;
        },
        set: function set(value) {
            this._name = value;
        }
    }, {
        key: "cssClass",
        get: function get() {
            return this._cssClass;
        }
    }]);

    return Creature;
}();

exports.Creature = Creature;

},{}],2:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
exports.Chudila = exports.Pridurok = exports.Monster = void 0;
var creature_1 = require("./creature");

var Monster = function (_creature_1$Creature) {
    _inherits(Monster, _creature_1$Creature);

    function Monster(name, cssClass, label, type, health, defense, attack, attackBooster, looted) {
        _classCallCheck(this, Monster);

        var _this = _possibleConstructorReturn(this, (Monster.__proto__ || Object.getPrototypeOf(Monster)).call(this, name, cssClass));

        _this._maxHeath = health;
        _this._health = health;
        _this._defense = defense;
        _this._attack = attack;
        _this._attackBooster = attackBooster;
        _this._looted = looted;
        return _this;
    }

    _createClass(Monster, [{
        key: "loot",
        value: function loot() {
            this._looted = true;
        }
    }, {
        key: "beAttacked",
        value: function beAttacked(enemy) {
            var damage = this.defense - (enemy.attack + enemy.attackBooster);
            if (damage >= 0) {
                this._health -= 1;
            } else {
                this._health += damage;
            }
        }
    }, {
        key: "defenseHimself",
        value: function defenseHimself() {
            this._defense += 5;
        }
    }, {
        key: "isDead",
        value: function isDead() {
            return this._health <= 0;
        }
    }, {
        key: "Heal",
        value: function Heal() {
            this._health = this.maxHeath;
        }
    }, {
        key: "getString",
        value: function getString() {
            return this.name + ", hp: " + this.health + ", defense: " + this.defense + ", attack: " + this.attack;
        }
    }, {
        key: "maxHeath",
        get: function get() {
            return this._maxHeath;
        }
    }, {
        key: "health",
        get: function get() {
            return this._health;
        }
    }, {
        key: "defense",
        get: function get() {
            return this._defense;
        }
    }, {
        key: "attack",
        get: function get() {
            return this._attack;
        }
    }, {
        key: "attackBooster",
        get: function get() {
            return this._attackBooster;
        }
    }, {
        key: "looted",
        get: function get() {
            return this._looted;
        }
    }]);

    return Monster;
}(creature_1.Creature);

exports.Monster = Monster;

var Pridurok = function (_Monster) {
    _inherits(Pridurok, _Monster);

    function Pridurok() {
        _classCallCheck(this, Pridurok);

        return _possibleConstructorReturn(this, (Pridurok.__proto__ || Object.getPrototypeOf(Pridurok)).call(this, 'Pridurok', 'pridurok', 'p', 'red', 120, 5, 30, 30, true));
    }

    return Pridurok;
}(Monster);

exports.Pridurok = Pridurok;

var Chudila = function (_Monster2) {
    _inherits(Chudila, _Monster2);

    function Chudila() {
        _classCallCheck(this, Chudila);

        return _possibleConstructorReturn(this, (Chudila.__proto__ || Object.getPrototypeOf(Chudila)).call(this, 'Chudila', 'chudila', 'c', 'red', 100, 4, 20, 10, false));
    }

    return Chudila;
}(Monster);

exports.Chudila = Chudila;

},{"./creature":1}],3:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
var creature_1 = require("./creature");

var Player = function (_creature_1$Creature) {
    _inherits(Player, _creature_1$Creature);

    function Player(name, cssClass, x, y, availableMoves, availableMonsters) {
        _classCallCheck(this, Player);

        var _this = _possibleConstructorReturn(this, (Player.__proto__ || Object.getPrototypeOf(Player)).call(this, name, cssClass));

        _this.x = x;
        _this.y = y;
        _this._availableMoves = availableMoves;
        _this._availableMonsters = availableMonsters;
        return _this;
    }

    _createClass(Player, [{
        key: "setAvailableMoves",
        value: function setAvailableMoves(value) {
            this._availableMoves = value;
        }
    }, {
        key: "resetAvailableMoves",
        value: function resetAvailableMoves() {
            this._availableMoves = 0;
        }
    }, {
        key: "move",

        /**
         * set new coordinates
         * @param coordinates
         * @param moves
         */
        value: function move(coordinates, moves) {
            this.x = coordinates.x;
            this.y = coordinates.y;
            this._availableMoves -= moves;
        }
    }, {
        key: "getCoordinates",
        value: function getCoordinates() {
            return { x: this.x, y: this.y };
        }
    }, {
        key: "addMonster",
        value: function addMonster(monster) {
            this._availableMonsters.push(monster);
        }
    }, {
        key: "deleteMonster",
        value: function deleteMonster(monster) {
            var index = this.availableMonsters.indexOf(monster);
            console.assert(index != -1);
            if (index > -1) {
                this.availableMonsters.splice(index, 1);
            }
        }
    }, {
        key: "availableMoves",
        get: function get() {
            return this._availableMoves;
        }
    }, {
        key: "availableMonsters",
        get: function get() {
            return this._availableMonsters;
        }
    }]);

    return Player;
}(creature_1.Creature);

exports.Player = Player;

},{"./creature":1}],4:[function(require,module,exports){
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });
exports.GameState = void 0;
var map_1 = require("./map/map");
var moveManager_1 = require("./logic/moveManager");

var GameState = function GameState(player, creatures) {
    _classCallCheck(this, GameState);

    this.player = player;
    this.creatures = creatures;
    this.map = new map_1.Map(5, 5);
    this.moveManager = new moveManager_1.MoveManager(this.map, this.player);
    this.scenes = [{
        name: 'field',
        element: document.getElementById('game-field')
    }, {
        name: 'fight',
        element: document.getElementById('game-fight')
    }, {
        name: 'select-monster',
        element: document.getElementById('game-select-monster')
    }];
    this.fight = null;
};

exports.GameState = GameState;

},{"./logic/moveManager":6,"./map/map":9}],5:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });
exports.Fight = void 0;

var Fight = function () {
    function Fight(player, monsterFirst, monsterSecond) {
        _classCallCheck(this, Fight);

        this._currentMonster = monsterFirst;
        this._defenseMonster = monsterSecond;
        this._winner = null;
        this._player = player;
    }

    _createClass(Fight, [{
        key: "swap",
        value: function swap() {
            var _ref = [this.defenseMonster, this.currentMonster];
            this._currentMonster = _ref[0];
            this._defenseMonster = _ref[1];
        }
    }, {
        key: "isFinish",
        value: function isFinish() {
            return this.currentMonster.isDead() || this.defenseMonster.isDead();
        }
    }, {
        key: "attackCurrent",
        value: function attackCurrent() {
            this.defenseMonster.beAttacked(this.currentMonster);
        }
    }, {
        key: "defendCurrent",
        value: function defendCurrent() {
            this.defenseMonster.defenseHimself();
        }
    }, {
        key: "finish",
        value: function finish() {
            this._winner = this.currentMonster.isDead() ? this.defenseMonster : this.currentMonster;
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
                console.log(this._player.name + " win");
            } else {
                this._player.deleteMonster(this.defenseMonster);
                console.log(this._player.name + " lose");
            }
            this._player.resetAvailableMoves();
        }
    }, {
        key: "currentMonster",
        get: function get() {
            return this._currentMonster;
        }
    }, {
        key: "defenseMonster",
        get: function get() {
            return this._defenseMonster;
        }
    }]);

    return Fight;
}();

exports.Fight = Fight;

},{}],6:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });
exports.MoveManager = void 0;
var compare_1 = require("../utils/compare");

var MoveManager = function () {
    function MoveManager(map, player) {
        _classCallCheck(this, MoveManager);

        this.map = map;
        this.player = player;
    }

    _createClass(MoveManager, [{
        key: "outOfBoundsOfArray",
        value: function outOfBoundsOfArray(coordinates) {
            return compare_1.Compare.isInRange(coordinates.x, 0, this.map.getSize().x - 1) && compare_1.Compare.isInRange(coordinates.y, 0, this.map.getSize().y - 1);
        }
    }, {
        key: "adjacentCellHorizOrVer",
        value: function adjacentCellHorizOrVer(coordinates) {
            return Math.abs(coordinates.x - this.player.getCoordinates().x) + Math.abs(coordinates.y - this.player.getCoordinates().y) == 1;
        }
    }, {
        key: "haveEnoughMovement",
        value: function haveEnoughMovement(coordinates) {
            return this.player.availableMoves >= this.map.getCell(coordinates).transitionCost;
        }
        /**
         * Coordinates are correct if the map range is included
         * and point to an adjacent cell horizontally or vertically
         * @returns
         * @param coordinates
         */

    }, {
        key: "isCorrectCoordinates",
        value: function isCorrectCoordinates(coordinates) {
            return this.outOfBoundsOfArray(coordinates) && this.adjacentCellHorizOrVer(coordinates) && this.haveEnoughMovement(coordinates);
        }
    }, {
        key: "move",
        value: function move(coordinates) {
            if (this.isCorrectCoordinates(coordinates)) {
                console.log(this.player.name + " moved to (" + coordinates.x + ", " + coordinates.y + ")");
                this.player.move(coordinates, this.map.getCell(coordinates).transitionCost);
                return true;
            } else {
                console.log(this.player.name + " not moved to (" + coordinates.x + ", " + coordinates.y + ")");
                return false;
            }
        }
    }]);

    return MoveManager;
}();

exports.MoveManager = MoveManager;

},{"../utils/compare":14}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var player_1 = require("./creatures/player");
var monster_1 = require("./creatures/monster");
var fieldRenderer_1 = require("./scenes/fieldRenderer");
var sceneManager_1 = require("./scenes/sceneManager");
var gameState_1 = require("./gameState");
var fightRenderer_1 = require("./scenes/fightRenderer");
var selectMonsterRenderer_1 = require("./scenes/selectMonsterRenderer");
var fight_1 = require("./logic/fight");
/* Global variables */
var gameState = new gameState_1.GameState(new player_1.Player("Steve", "hero", 0, 0, 4, [new monster_1.Pridurok()]), []);
var sceneManager = new sceneManager_1.SceneManager(gameState);
/* Renderers */
var fieldRenderer = new fieldRenderer_1.FieldRenderer(gameState, sceneManager.getSceneInfo('field').element, cellClickListener);
var fightRenderer = null;
var selectMonsterRenderer = null;
/* Prepare field */
fieldRenderer.render();
fieldRenderer.update();
sceneManager.showScene('field');
/* Click Listener for all cells in field */
function cellClickListener(event) {
    function getCoordinatesOfCell(target) {
        var element = target;
        var td = element.parentElement;
        var row = td.parentElement;
        return {
            x: td.cellIndex,
            y: row.rowIndex
        };
    }
    var coordinates = getCoordinatesOfCell(event.target);
    var old_coordinate = gameState.player.getCoordinates();
    if (gameState.moveManager.move(coordinates)) {
        fieldRenderer.updateCells([old_coordinate, gameState.player.getCoordinates()]);
    }
}
function NESZButtonInFightClickListener() {
    gameState.fight.attackCurrent();
    if (gameState.fight.isFinish()) {
        gameState.fight.finish();
        sceneManager.showScene('field');
    }
    gameState.fight.swap();
    fightRenderer.update();
}
function NESXButtonInFightClickListener() {
    gameState.fight.defendCurrent();
    gameState.fight.swap();
    fightRenderer.update();
}
function NESZButtonInFieldClickListener() {
    var coordinates = gameState.player.getCoordinates();
    if (gameState.map.getCell(coordinates).monster.looted) return;
    if (gameState.player.availableMoves <= 0) return;
    selectMonsterRenderer = new selectMonsterRenderer_1.SelectMonsterRenderer(sceneManager.getSceneInfo('select-monster').element, gameState.player, OKButtonInSelectClickListener);
    selectMonsterRenderer.update();
    sceneManager.showScene('select-monster');
}
/* Click Listener for OK button in select-monster */
function OKButtonInSelectClickListener() {
    sceneManager.showScene('fight');
    var monsters = [selectMonsterRenderer.getChosenMonster(), gameState.map.getCell(gameState.player.getCoordinates()).monster];
    fightRenderer = new fightRenderer_1.FightRenderer(sceneManager.getSceneInfo('fight').element, monsters, NESZButtonInFightClickListener, NESXButtonInFightClickListener);
    fightRenderer.update();
    gameState.fight = new (Function.prototype.bind.apply(fight_1.Fight, [null].concat([gameState.player], monsters)))();
}
window.addEventListener("keydown", function (event) {
    if (event.key == "r") {
        console.log(gameState.player.availableMoves);
    }
}, true);

},{"./creatures/monster":2,"./creatures/player":3,"./gameState":4,"./logic/fight":5,"./scenes/fieldRenderer":10,"./scenes/fightRenderer":11,"./scenes/sceneManager":12,"./scenes/selectMonsterRenderer":13}],8:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });
exports.WhiteCastleCell = exports.DarkCastleCell = exports.LakeCell = exports.ForestCell = exports.VolcanoCell = exports.LandCell = exports.Cell = void 0;
var monster_1 = require("../creatures/monster");
var random_1 = require("../utils/random");

var Cell = function () {
    /**
     *
     * @param cssClass
     * @param transitionCostMinMax is minimum and maximum value
     * @param possibleCreatures
     */
    function Cell(cssClass, transitionCostMinMax, possibleCreatures) {
        var _random_1$Random;

        _classCallCheck(this, Cell);

        this._cssClass = cssClass;
        this._transitionCost = (_random_1$Random = random_1.Random).inRange.apply(_random_1$Random, _toConsumableArray(transitionCostMinMax));
        this._monster = random_1.Random.oneItemFromArray(possibleCreatures);
    }

    _createClass(Cell, [{
        key: "cssClass",
        get: function get() {
            return this._cssClass;
        }
    }, {
        key: "transitionCost",
        get: function get() {
            return this._transitionCost;
        }
    }, {
        key: "monster",
        get: function get() {
            return this._monster;
        }
    }]);

    return Cell;
}();

exports.Cell = Cell;

var LandCell = function (_Cell) {
    _inherits(LandCell, _Cell);

    function LandCell() {
        _classCallCheck(this, LandCell);

        return _possibleConstructorReturn(this, (LandCell.__proto__ || Object.getPrototypeOf(LandCell)).call(this, 'land', [1, 2], [new monster_1.Chudila()]));
    }

    return LandCell;
}(Cell);

exports.LandCell = LandCell;

var VolcanoCell = function (_Cell2) {
    _inherits(VolcanoCell, _Cell2);

    function VolcanoCell() {
        _classCallCheck(this, VolcanoCell);

        return _possibleConstructorReturn(this, (VolcanoCell.__proto__ || Object.getPrototypeOf(VolcanoCell)).call(this, 'volcano', [3, 5], [new monster_1.Chudila()]));
    }

    return VolcanoCell;
}(Cell);

exports.VolcanoCell = VolcanoCell;

var ForestCell = function (_Cell3) {
    _inherits(ForestCell, _Cell3);

    function ForestCell() {
        _classCallCheck(this, ForestCell);

        return _possibleConstructorReturn(this, (ForestCell.__proto__ || Object.getPrototypeOf(ForestCell)).call(this, 'forest', [3, 5], [new monster_1.Chudila()]));
    }

    return ForestCell;
}(Cell);

exports.ForestCell = ForestCell;

var LakeCell = function (_Cell4) {
    _inherits(LakeCell, _Cell4);

    function LakeCell() {
        _classCallCheck(this, LakeCell);

        return _possibleConstructorReturn(this, (LakeCell.__proto__ || Object.getPrototypeOf(LakeCell)).call(this, 'lake', [3, 5], [new monster_1.Chudila()]));
    }

    return LakeCell;
}(Cell);

exports.LakeCell = LakeCell;

var DarkCastleCell = function (_Cell5) {
    _inherits(DarkCastleCell, _Cell5);

    function DarkCastleCell() {
        _classCallCheck(this, DarkCastleCell);

        return _possibleConstructorReturn(this, (DarkCastleCell.__proto__ || Object.getPrototypeOf(DarkCastleCell)).call(this, 'dark_castle', [3, 5], [new monster_1.Chudila()]));
    }

    return DarkCastleCell;
}(Cell);

exports.DarkCastleCell = DarkCastleCell;

var WhiteCastleCell = function (_Cell6) {
    _inherits(WhiteCastleCell, _Cell6);

    function WhiteCastleCell() {
        _classCallCheck(this, WhiteCastleCell);

        return _possibleConstructorReturn(this, (WhiteCastleCell.__proto__ || Object.getPrototypeOf(WhiteCastleCell)).call(this, 'white_castle', [3, 5], [new monster_1.Chudila()]));
    }

    return WhiteCastleCell;
}(Cell);

exports.WhiteCastleCell = WhiteCastleCell;

},{"../creatures/monster":2,"../utils/random":15}],9:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });
exports.Map = void 0;
var cell_1 = require("./cell");
var random_1 = require("../utils/random");
var compare_1 = require("../utils/compare");

var Map = function () {
    function Map(sizeX, sizeY) {
        _classCallCheck(this, Map);

        this.sizeX = sizeX;
        this.sizeY = sizeY;
        this.data = Map.generate(sizeX, sizeY);
    }

    _createClass(Map, [{
        key: "getCell",
        value: function getCell(coordinates) {
            return this.data[coordinates.y][coordinates.x];
        }
    }, {
        key: "getSize",
        value: function getSize() {
            return { x: this.sizeX, y: this.sizeY };
        }
    }], [{
        key: "generate",
        value: function generate(sizeX, sizeY) {
            var defaultCell = cell_1.LandCell;
            var possibleCells = [{
                obj: cell_1.VolcanoCell,
                rand: {
                    min: 1,
                    max: 10
                }
            }, {
                obj: cell_1.ForestCell,
                rand: {
                    min: 11,
                    max: 30
                }
            }, {
                obj: cell_1.LakeCell,
                rand: {
                    min: 31,
                    max: 35
                }
            }];
            console.log("Map: generate, (" + sizeX + ", " + sizeY + ")");
            var data = [];
            for (var y = 0; y < sizeY; ++y) {
                var row = [];
                for (var x = 0; x < sizeX; ++x) {
                    var randNum = random_1.Random.inRange(1, 100);
                    var objectForCreate = null;
                    for (var i = 0; i < possibleCells.length; ++i) {
                        if (compare_1.Compare.isInRange(randNum, possibleCells[i].rand.min, possibleCells[i].rand.max)) {
                            objectForCreate = possibleCells[i].obj;
                            break;
                        }
                    }
                    if (!objectForCreate) {
                        objectForCreate = defaultCell;
                    }
                    row.push(new objectForCreate());
                }
                data.push(row);
            }
            var defaultPositions = [{ x: 0, y: 0, obj: cell_1.LandCell }, { x: 0, y: sizeY - 1, obj: cell_1.LandCell }, { x: sizeX - 1, y: sizeY - 1, obj: cell_1.WhiteCastleCell }, { x: sizeX - 1, y: 0, obj: cell_1.DarkCastleCell }];
            for (var _i = 0; _i < defaultPositions.length; ++_i) {
                console.log(defaultPositions[_i]);
                var _objectForCreate = defaultPositions[_i].obj;
                console.log(_objectForCreate);
                data[defaultPositions[_i].y][defaultPositions[_i].x] = new _objectForCreate();
            }
            console.log("Map: generated, (" + sizeX + ", " + sizeY + ")");
            return data;
        }
    }]);

    return Map;
}();

exports.Map = Map;

},{"../utils/compare":14,"../utils/random":15,"./cell":8}],10:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });
exports.FieldRenderer = void 0;
var compare_1 = require("../utils/compare");

var FieldRenderer = function () {
    function FieldRenderer(gameState, gameField, mouseListener) {
        _classCallCheck(this, FieldRenderer);

        this.map = gameState.map;
        this.gameState = gameState;
        this.element = gameField;
        this.mouseListener = mouseListener;
    }
    /**
     * Generates a table and append it to this.element
     */


    _createClass(FieldRenderer, [{
        key: "render",
        value: function render() {
            var table = document.createElement('table');
            for (var y = 0; y < this.map.getSize().y; ++y) {
                var row = document.createElement('tr');
                for (var x = 0; x < this.map.getSize().x; ++x) {
                    var cell = document.createElement('td');
                    cell.addEventListener('click', this.mouseListener);
                    row.appendChild(cell);
                }
                table.appendChild(row);
            }
            this.element.innerHTML = "";
            this.element.appendChild(table);
        }
    }, {
        key: "getTable",
        value: function getTable() {
            return this.element.children[0];
        }
        /**
         * Get cell in table
         * @param coordinates
         * @private
         */

    }, {
        key: "getCell",
        value: function getCell(coordinates) {
            return this.getTable().rows[coordinates.y].cells[coordinates.x];
        }
        /**
         * Generates div element with some css class
         * @param obj
         */

    }, {
        key: "getCreaturesList",
        value: function getCreaturesList() {
            return [this.gameState.player].concat(_toConsumableArray(this.gameState.creatures));
        }
    }, {
        key: "update",
        value: function update() {
            for (var y = 0; y < this.map.getSize().y; ++y) {
                for (var x = 0; x < this.map.getSize().x; ++x) {
                    var mapCell = this.map.getCell({ x: x, y: y });
                    var HTMLCell = this.getCell({ x: x, y: y });
                    HTMLCell.innerHTML = "";
                    HTMLCell.appendChild(FieldRenderer.getHTMLSprite(mapCell));
                }
            }
            var creaturesList = this.getCreaturesList();
            for (var i = 0; i < creaturesList.length; ++i) {
                var creature = creaturesList[i];
                this.getCell(creature.getCoordinates()).appendChild(FieldRenderer.getHTMLSprite(creature));
            }
        }
        /**
         * Updates cells only at specific coordinates. Needed to draw CSS animation only for specific cells.
         * @param coordinates
         */

    }, {
        key: "updateCells",
        value: function updateCells(coordinates) {
            for (var i = 0; i < coordinates.length; ++i) {
                var mapCell = this.map.getCell(coordinates[i]);
                var HTMLCell = this.getCell(coordinates[i]);
                HTMLCell.innerHTML = "";
                HTMLCell.appendChild(FieldRenderer.getHTMLSprite(mapCell));
                var creaturesList = this.getCreaturesList();
                for (var j = 0; j < creaturesList.length; ++j) {
                    if (compare_1.Compare.shallowEqual(creaturesList[j].getCoordinates(), coordinates[i])) {
                        HTMLCell.appendChild(FieldRenderer.getHTMLSprite(creaturesList[j]));
                    }
                }
            }
        }
    }], [{
        key: "getHTMLSprite",
        value: function getHTMLSprite(obj) {
            var result = document.createElement('div');
            result.classList.add('sprite');
            result.classList.add(obj.cssClass);
            return result;
        }
    }]);

    return FieldRenderer;
}();

exports.FieldRenderer = FieldRenderer;

},{"../utils/compare":14}],11:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });
exports.FightRenderer = void 0;

var FightRenderer = function () {
    function FightRenderer(gameFight, monsters, listener_1, listener_2) {
        _classCallCheck(this, FightRenderer);

        this.element = gameFight;
        this.monsters = monsters;
        this.NESZButtonClickListener = listener_1;
        this.NESXButtonClickListener = listener_2;
    }

    _createClass(FightRenderer, [{
        key: "render",
        value: function render() {}
    }, {
        key: "update",
        value: function update() {
            var monstersDiv = this.element.getElementsByClassName('monsters')[0].children;
            console.assert(monstersDiv.length == this.monsters.length);
            for (var i = 0; i < monstersDiv.length; ++i) {
                var sprite = monstersDiv[i].getElementsByClassName('sprite')[0];
                var health = monstersDiv[i].getElementsByClassName('health')[0];
                var defense = monstersDiv[i].getElementsByClassName('defense')[0];
                sprite.className = "sprite " + this.monsters[i].cssClass;
                if (i == 1) {
                    sprite.classList.add('mirrorY');
                }
                health.innerHTML = "" + this.monsters[i].health;
                defense.innerHTML = "" + this.monsters[i].defense;
            }
            var buttons = this.element.getElementsByClassName('action-btn')[0].children;
            console.assert(buttons.length == 2);
            buttons[0].addEventListener('click', this.NESZButtonClickListener);
            buttons[1].addEventListener('click', this.NESXButtonClickListener);
        }
    }]);

    return FightRenderer;
}();

exports.FightRenderer = FightRenderer;

},{}],12:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });
exports.SceneManager = void 0;

var SceneManager = function () {
    function SceneManager(gameState) {
        _classCallCheck(this, SceneManager);

        this.gameState = gameState;
        this._currentScene = "";
    }

    _createClass(SceneManager, [{
        key: "getSceneInfo",
        value: function getSceneInfo(name) {
            var scenes = this.gameState.scenes;
            for (var i = 0; i < scenes.length; ++i) {
                if (scenes[i].name == name) {
                    return scenes[i];
                }
            }
            throw new Error("The scene does not exist");
        }
    }, {
        key: "showScene",
        value: function showScene(name) {
            this._currentScene = name;
            var scene = this.getSceneInfo(name);
            for (var i = 0; i < this.gameState.scenes.length; ++i) {
                this.gameState.scenes[i].element.classList.add('hide');
            }
            scene.element.classList.remove('hide');
        }
    }, {
        key: "currentScene",
        get: function get() {
            return this.getSceneInfo(this._currentScene);
        }
    }]);

    return SceneManager;
}();

exports.SceneManager = SceneManager;

},{}],13:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectMonsterRenderer = void 0;

var SelectMonsterRenderer = function () {
    function SelectMonsterRenderer(domElement, player, OkButtonListener) {
        _classCallCheck(this, SelectMonsterRenderer);

        this.domElement = domElement;
        this.player = player;
        this.OkButtonListener = OkButtonListener;
    }

    _createClass(SelectMonsterRenderer, [{
        key: "render",
        value: function render() {}
    }, {
        key: "update",
        value: function update() {
            var select = this.domElement.getElementsByClassName('select')[0];
            select.innerHTML = "";
            for (var i = 0; i < this.player.availableMonsters.length; ++i) {
                var option = document.createElement('option');
                option.value = "" + i;
                option.innerText = this.player.availableMonsters[i].getString();
                select.appendChild(option);
            }
            var OkButton = this.domElement.getElementsByClassName('ok')[0];
            OkButton.addEventListener('click', this.OkButtonListener);
        }
    }, {
        key: "getChosenMonster",
        value: function getChosenMonster() {
            var select = this.domElement.getElementsByClassName('select')[0];
            var index = select.value;
            return this.player.availableMonsters[parseInt(index)];
        }
    }]);

    return SelectMonsterRenderer;
}();

exports.SelectMonsterRenderer = SelectMonsterRenderer;

},{}],14:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });
exports.Compare = void 0;

var Compare = function () {
    function Compare() {
        _classCallCheck(this, Compare);
    }

    _createClass(Compare, null, [{
        key: "isInRange",

        /**
         * is the number within the bounds
         * @param x
         * @param min
         * @param max
         */
        value: function isInRange(x, min, max) {
            return min <= x && x <= max;
        }
        /**
         * Checks for dictionary comparisons.
         *
         * In JavaScript and TypeScript, If two elements are elements that implement some kind of interface, then comparing
         * them using comparison operators is false. Even if these objects are equal in value.
         *
         * This function solves the problem and matches the elements by the value of each field.
         *
         * @param a
         * @param b
         */

    }, {
        key: "shallowEqual",
        value: function shallowEqual(a, b) {
            var keys1 = Object.keys(a);
            var keys2 = Object.keys(b);
            if (keys1.length !== keys2.length) {
                return false;
            }
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = keys1[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var key = _step.value;

                    if (a[key] !== b[key]) {
                        return false;
                    }
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            return true;
        }
    }]);

    return Compare;
}();

exports.Compare = Compare;

},{}],15:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });
exports.Random = void 0;

var Random = function () {
    function Random() {
        _classCallCheck(this, Random);
    }

    _createClass(Random, null, [{
        key: "inRange",

        /**
         * @param a
         * @param b
         * @returns random number between a and b, inclusive
         */
        value: function inRange(a, b) {
            return Math.floor(Math.random() * (b - a + 1)) + a;
        }
    }, {
        key: "oneItemFromArray",
        value: function oneItemFromArray(arr) {
            return arr[this.inRange(0, arr.length - 1)];
        }
    }]);

    return Random;
}();

exports.Random = Random;

},{}]},{},[7])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvc2NyaXB0cy9jcmVhdHVyZXMvY3JlYXR1cmUudHMiLCJzcmMvc2NyaXB0cy9jcmVhdHVyZXMvbW9uc3Rlci50cyIsInNyYy9zY3JpcHRzL2NyZWF0dXJlcy9wbGF5ZXIudHMiLCJzcmMvc2NyaXB0cy9nYW1lU3RhdGUudHMiLCJzcmMvc2NyaXB0cy9sb2dpYy9maWdodC50cyIsInNyYy9zY3JpcHRzL2xvZ2ljL21vdmVNYW5hZ2VyLnRzIiwic3JjL3NjcmlwdHMvbWFpbi50cyIsInNyYy9zY3JpcHRzL21hcC9jZWxsLnRzIiwic3JjL3NjcmlwdHMvbWFwL21hcC50cyIsInNyYy9zY3JpcHRzL3NjZW5lcy9maWVsZFJlbmRlcmVyLnRzIiwic3JjL3NjcmlwdHMvc2NlbmVzL2ZpZ2h0UmVuZGVyZXIudHMiLCJzcmMvc2NyaXB0cy9zY2VuZXMvc2NlbmVNYW5hZ2VyLnRzIiwic3JjL3NjcmlwdHMvc2NlbmVzL3NlbGVjdE1vbnN0ZXJSZW5kZXJlci50cyIsInNyYy9zY3JpcHRzL3V0aWxzL2NvbXBhcmUudHMiLCJzcmMvc2NyaXB0cy91dGlscy9yYW5kb20udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7SUNFYSxRO0FBZVQsc0JBQVksSUFBWixFQUEwQixRQUExQixFQUEyQztBQUFBOztBQUN2QyxhQUFLLEtBQUwsR0FBYSxJQUFiO0FBQ0EsYUFBSyxTQUFMLEdBQWlCLFFBQWpCO0FBQ0g7Ozs7NEJBZmM7QUFDWCxtQkFBTyxLQUFLLEtBQVo7QUFDSCxTOzBCQUNlLEssRUFBYTtBQUN6QixpQkFBSyxLQUFMLEdBQWEsS0FBYjtBQUNIOzs7NEJBR2tCO0FBQ2YsbUJBQU8sS0FBSyxTQUFaO0FBQ0g7Ozs7OztBQWJMLFFBQUEsUUFBQSxHQUFBLFFBQUE7Ozs7Ozs7Ozs7Ozs7OztBQ0ZBLElBQUEsYUFBQSxRQUFBLFlBQUEsQ0FBQTs7SUFFYSxPOzs7QUFr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QUFhLEcsRUFBVztBQUNoRCxtQkFBTyxPQUFPLENBQVAsSUFBWSxLQUFLLEdBQXhCO0FBQ0g7QUFFRDs7Ozs7Ozs7Ozs7Ozs7cUNBV29CLEMsRUFBUSxDLEVBQU07QUFDOUIsZ0JBQU0sUUFBUSxPQUFPLElBQVAsQ0FBWSxDQUFaLENBQWQ7QUFDQSxnQkFBTSxRQUFRLE9BQU8sSUFBUCxDQUFZLENBQVosQ0FBZDtBQUVBLGdCQUFJLE1BQU0sTUFBTixLQUFpQixNQUFNLE1BQTNCLEVBQW1DO0FBQy9CLHVCQUFPLEtBQVA7QUFDSDtBQU42QjtBQUFBO0FBQUE7O0FBQUE7QUFROUIscUNBQWdCLEtBQWhCLDhIQUF1QjtBQUFBLHdCQUFkLEdBQWM7O0FBQ25CLHdCQUFJLEVBQUUsR0FBRixNQUFXLEVBQUUsR0FBRixDQUFmLEVBQXVCO0FBQ25CLCtCQUFPLEtBQVA7QUFDSDtBQUNKO0FBWjZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBYzlCLG1CQUFPLElBQVA7QUFFSDs7Ozs7O0FBdENMLFFBQUEsT0FBQSxHQUFBLE9BQUE7Ozs7Ozs7Ozs7OztJQ0FhLE07Ozs7Ozs7O0FBQ1Q7Ozs7O2dDQUtlLEMsRUFBVyxDLEVBQVM7QUFDL0IsbUJBQU8sS0FBSyxLQUFMLENBQVcsS0FBSyxNQUFMLE1BQWlCLElBQUksQ0FBSixHQUFRLENBQXpCLENBQVgsSUFBMEMsQ0FBakQ7QUFDSDs7O3lDQUV1QixHLEVBQVU7QUFDOUIsbUJBQU8sSUFBSSxLQUFLLE9BQUwsQ0FBYSxDQUFiLEVBQWdCLElBQUksTUFBSixHQUFhLENBQTdCLENBQUosQ0FBUDtBQUNIOzs7Ozs7QUFaTCxRQUFBLE1BQUEsR0FBQSxNQUFBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiaW1wb3J0IHtJSGFzQ3NzQ2xhc3N9IGZyb20gXCIuLi9pbnRlcmZhY2VzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQ3JlYXR1cmUgaW1wbGVtZW50cyBJSGFzQ3NzQ2xhc3Mge1xyXG4gICAgXHJcbiAgICBwcml2YXRlIF9uYW1lOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgZ2V0IG5hbWUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbmFtZTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXQgbmFtZSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fbmFtZSA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVhZG9ubHkgX2Nzc0NsYXNzOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgZ2V0IGNzc0NsYXNzKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Nzc0NsYXNzO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgY3NzQ2xhc3MgOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9uYW1lID0gbmFtZTtcclxuICAgICAgICB0aGlzLl9jc3NDbGFzcyA9IGNzc0NsYXNzO1xyXG4gICAgfVxyXG5cclxufSIsImltcG9ydCB7Q3JlYXR1cmV9IGZyb20gXCIuL2NyZWF0dXJlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgTW9uc3RlciBleHRlbmRzIENyZWF0dXJlIHtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgX21heEhlYXRoOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgZ2V0IG1heEhlYXRoKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX21heEhlYXRoO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2hlYWx0aDogbnVtYmVyO1xyXG4gICAgcHVibGljIGdldCBoZWFsdGgoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faGVhbHRoO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2RlZmVuc2U6IG51bWJlcjtcclxuICAgIHB1YmxpYyBnZXQgZGVmZW5zZSgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9kZWZlbnNlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVhZG9ubHkgX2F0dGFjazogbnVtYmVyO1xyXG4gICAgcHVibGljIGdldCBhdHRhY2soKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYXR0YWNrO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVhZG9ubHkgX2F0dGFja0Jvb3N0ZXI6IG51bWJlcjtcclxuICAgIHB1YmxpYyBnZXQgYXR0YWNrQm9vc3RlcigpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9hdHRhY2tCb29zdGVyO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2xvb3RlZDogYm9vbGVhbjtcclxuICAgIHB1YmxpYyBnZXQgbG9vdGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9sb290ZWQ7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgbG9vdCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9sb290ZWQgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgY3NzQ2xhc3M6IHN0cmluZywgbGFiZWw6IHN0cmluZywgdHlwZTogc3RyaW5nLCAgaGVhbHRoOiBudW1iZXIsIGRlZmVuc2U6IG51bWJlcixcclxuICAgICAgICAgICAgICAgIGF0dGFjazogbnVtYmVyLCBhdHRhY2tCb29zdGVyOiBudW1iZXIsIGxvb3RlZDogYm9vbGVhbikge1xyXG4gICAgICAgIHN1cGVyKG5hbWUsIGNzc0NsYXNzKTtcclxuICAgICAgICB0aGlzLl9tYXhIZWF0aCA9IGhlYWx0aDtcclxuICAgICAgICB0aGlzLl9oZWFsdGggPSBoZWFsdGg7XHJcbiAgICAgICAgdGhpcy5fZGVmZW5zZSA9IGRlZmVuc2U7XHJcbiAgICAgICAgdGhpcy5fYXR0YWNrID0gYXR0YWNrO1xyXG4gICAgICAgIHRoaXMuX2F0dGFja0Jvb3N0ZXIgPSBhdHRhY2tCb29zdGVyO1xyXG4gICAgICAgIHRoaXMuX2xvb3RlZCA9IGxvb3RlZDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYmVBdHRhY2tlZChlbmVteTogTW9uc3Rlcik6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IGRhbWFnZSA9IHRoaXMuZGVmZW5zZSAtIChlbmVteS5hdHRhY2sgKyBlbmVteS5hdHRhY2tCb29zdGVyKTtcclxuICAgICAgICBpZiAoZGFtYWdlID49IDApIHtcclxuICAgICAgICAgICAgdGhpcy5faGVhbHRoIC09IDE7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5faGVhbHRoICs9IGRhbWFnZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRlZmVuc2VIaW1zZWxmKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX2RlZmVuc2UgKz0gNTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaXNEZWFkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9oZWFsdGggPD0gMDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgSGVhbCgpOiB2b2lkIHtcclxuICAgICAgIHRoaXMuX2hlYWx0aCA9IHRoaXMubWF4SGVhdGg7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFN0cmluZygpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBgJHt0aGlzLm5hbWV9LCBocDogJHt0aGlzLmhlYWx0aH0sIGRlZmVuc2U6ICR7dGhpcy5kZWZlbnNlfSwgYXR0YWNrOiAke3RoaXMuYXR0YWNrfWA7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBQcmlkdXJvayBleHRlbmRzIE1vbnN0ZXIge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoJ1ByaWR1cm9rJywgJ3ByaWR1cm9rJywgJ3AnLCAncmVkJywgMTIwLCA1LCAzMCwgMzAsIHRydWUpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ2h1ZGlsYSBleHRlbmRzIE1vbnN0ZXIge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoJ0NodWRpbGEnLCAnY2h1ZGlsYScsICdjJywgJ3JlZCcsIDEwMCwgNCwgMjAsIDEwLCBmYWxzZSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge0NyZWF0dXJlfSBmcm9tIFwiLi9jcmVhdHVyZVwiO1xyXG5pbXBvcnQge01vbnN0ZXJ9IGZyb20gXCIuL21vbnN0ZXJcIjtcclxuaW1wb3J0IHtJMkRDb29yZGluYXRlcywgSURyYXdhYmxlSW5GaWVsZH0gZnJvbSBcIi4uL2ludGVyZmFjZXNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQbGF5ZXIgZXh0ZW5kcyBDcmVhdHVyZSBpbXBsZW1lbnRzIElEcmF3YWJsZUluRmllbGQge1xyXG4gICAgcHJpdmF0ZSB4OiBudW1iZXI7XHJcbiAgICBwcml2YXRlIHk6IG51bWJlcjtcclxuXHJcbiAgICBwcml2YXRlIF9hdmFpbGFibGVNb3ZlczogbnVtYmVyO1xyXG4gICAgcHVibGljIGdldCBhdmFpbGFibGVNb3ZlcygpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9hdmFpbGFibGVNb3ZlcztcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXRBdmFpbGFibGVNb3Zlcyh2YWx1ZTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fYXZhaWxhYmxlTW92ZXMgPSB2YWx1ZTtcclxuICAgIH1cclxuICAgIHB1YmxpYyByZXNldEF2YWlsYWJsZU1vdmVzKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX2F2YWlsYWJsZU1vdmVzID0gMDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9hdmFpbGFibGVNb25zdGVyczogTW9uc3RlcltdO1xyXG4gICAgcHVibGljIGdldCBhdmFpbGFibGVNb25zdGVycygpOiBNb25zdGVyW10ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9hdmFpbGFibGVNb25zdGVycztcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIGNzc0NsYXNzOiBzdHJpbmcsIHg6IG51bWJlciwgeTogbnVtYmVyLCBhdmFpbGFibGVNb3ZlczogbnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgYXZhaWxhYmxlTW9uc3RlcnM6IE1vbnN0ZXJbXSkge1xyXG4gICAgICAgIHN1cGVyKG5hbWUsIGNzc0NsYXNzKTtcclxuICAgICAgICB0aGlzLnggPSB4O1xyXG4gICAgICAgIHRoaXMueSA9IHk7XHJcbiAgICAgICAgdGhpcy5fYXZhaWxhYmxlTW92ZXMgPSBhdmFpbGFibGVNb3ZlcztcclxuICAgICAgICB0aGlzLl9hdmFpbGFibGVNb25zdGVycyA9IGF2YWlsYWJsZU1vbnN0ZXJzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogc2V0IG5ldyBjb29yZGluYXRlc1xyXG4gICAgICogQHBhcmFtIGNvb3JkaW5hdGVzXHJcbiAgICAgKiBAcGFyYW0gbW92ZXNcclxuICAgICAqL1xyXG4gICAgcHVibGljIG1vdmUoY29vcmRpbmF0ZXM6IEkyRENvb3JkaW5hdGVzLCBtb3ZlczogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy54ID0gY29vcmRpbmF0ZXMueDtcclxuICAgICAgICB0aGlzLnkgPSBjb29yZGluYXRlcy55O1xyXG4gICAgICAgIHRoaXMuX2F2YWlsYWJsZU1vdmVzIC09IG1vdmVzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRDb29yZGluYXRlcygpOiBJMkRDb29yZGluYXRlcyAge1xyXG4gICAgICAgIHJldHVybiB7IHg6IHRoaXMueCwgeTogdGhpcy55IH07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFkZE1vbnN0ZXIobW9uc3RlcjogTW9uc3Rlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX2F2YWlsYWJsZU1vbnN0ZXJzLnB1c2gobW9uc3Rlcik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRlbGV0ZU1vbnN0ZXIobW9uc3RlcjogTW9uc3Rlcik6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5hdmFpbGFibGVNb25zdGVycy5pbmRleE9mKG1vbnN0ZXIpO1xyXG4gICAgICAgIGNvbnNvbGUuYXNzZXJ0KGluZGV4ICE9IC0xKTtcclxuICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xyXG4gICAgICAgICAgICB0aGlzLmF2YWlsYWJsZU1vbnN0ZXJzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtQbGF5ZXJ9IGZyb20gJy4vY3JlYXR1cmVzL3BsYXllcic7XHJcbmltcG9ydCB7TWFwfSBmcm9tICcuL21hcC9tYXAnO1xyXG5pbXBvcnQge01vdmVNYW5hZ2VyfSBmcm9tICcuL2xvZ2ljL21vdmVNYW5hZ2VyJztcclxuaW1wb3J0IHtJRHJhd2FibGVJbkZpZWxkLCBJU2NlbmVJbmZvfSBmcm9tICcuL2ludGVyZmFjZXMnO1xyXG5pbXBvcnQge0ZpZ2h0fSBmcm9tIFwiLi9sb2dpYy9maWdodFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEdhbWVTdGF0ZSB7XHJcblxyXG4gICAgcHVibGljIHBsYXllcjogUGxheWVyO1xyXG4gICAgcHVibGljIGNyZWF0dXJlczogSURyYXdhYmxlSW5GaWVsZFtdO1xyXG4gICAgcHVibGljIG1hcDogTWFwO1xyXG4gICAgcHVibGljIG1vdmVNYW5hZ2VyOiBNb3ZlTWFuYWdlcjtcclxuICAgIHB1YmxpYyBzY2VuZXM6IElTY2VuZUluZm9bXTtcclxuICAgIHB1YmxpYyBmaWdodDogRmlnaHQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IocGxheWVyOiBQbGF5ZXIsIGNyZWF0dXJlczogSURyYXdhYmxlSW5GaWVsZFtdKSB7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSBwbGF5ZXI7XHJcbiAgICAgICAgdGhpcy5jcmVhdHVyZXMgPSBjcmVhdHVyZXM7XHJcbiAgICAgICAgdGhpcy5tYXAgPSBuZXcgTWFwKDUsIDUpO1xyXG4gICAgICAgIHRoaXMubW92ZU1hbmFnZXIgPSBuZXcgTW92ZU1hbmFnZXIodGhpcy5tYXAsIHRoaXMucGxheWVyKTtcclxuICAgICAgICB0aGlzLnNjZW5lcyA9IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ2ZpZWxkJyxcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQ6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYW1lLWZpZWxkJylcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ2ZpZ2h0JyxcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQ6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYW1lLWZpZ2h0JylcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ3NlbGVjdC1tb25zdGVyJyxcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQ6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYW1lLXNlbGVjdC1tb25zdGVyJylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgICAgICB0aGlzLmZpZ2h0ID0gbnVsbDtcclxuICAgIH1cclxuXHJcbn0iLCJpbXBvcnQge01vbnN0ZXJ9IGZyb20gXCIuLi9jcmVhdHVyZXMvbW9uc3RlclwiXHJcbmltcG9ydCB7UGxheWVyfSBmcm9tIFwiLi4vY3JlYXR1cmVzL3BsYXllclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEZpZ2h0IHtcclxuICAgIHByaXZhdGUgX2N1cnJlbnRNb25zdGVyOiBNb25zdGVyO1xyXG4gICAgcHVibGljIGdldCBjdXJyZW50TW9uc3RlcigpOiBNb25zdGVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY3VycmVudE1vbnN0ZXI7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIF9kZWZlbnNlTW9uc3RlcjogTW9uc3RlcjtcclxuICAgIHB1YmxpYyBnZXQgZGVmZW5zZU1vbnN0ZXIoKTogTW9uc3RlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZmVuc2VNb25zdGVyO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBfd2lubmVyOiBNb25zdGVyO1xyXG4gICAgcHJpdmF0ZSBfcGxheWVyOiBQbGF5ZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IocGxheWVyOiBQbGF5ZXIsIG1vbnN0ZXJGaXJzdDogTW9uc3RlciwgbW9uc3RlclNlY29uZDogTW9uc3Rlcikge1xyXG4gICAgICAgIHRoaXMuX2N1cnJlbnRNb25zdGVyID0gbW9uc3RlckZpcnN0O1xyXG4gICAgICAgIHRoaXMuX2RlZmVuc2VNb25zdGVyID0gbW9uc3RlclNlY29uZDtcclxuICAgICAgICB0aGlzLl93aW5uZXIgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuX3BsYXllciA9IHBsYXllcjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3dhcCgpIHtcclxuICAgICAgICBbdGhpcy5fY3VycmVudE1vbnN0ZXIsIHRoaXMuX2RlZmVuc2VNb25zdGVyXSA9IFt0aGlzLmRlZmVuc2VNb25zdGVyLCB0aGlzLmN1cnJlbnRNb25zdGVyXTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaXNGaW5pc2goKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY3VycmVudE1vbnN0ZXIuaXNEZWFkKCkgfHwgdGhpcy5kZWZlbnNlTW9uc3Rlci5pc0RlYWQoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXR0YWNrQ3VycmVudCgpIHtcclxuICAgICAgICB0aGlzLmRlZmVuc2VNb25zdGVyLmJlQXR0YWNrZWQodGhpcy5jdXJyZW50TW9uc3Rlcik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRlZmVuZEN1cnJlbnQoKSB7XHJcbiAgICAgICAgdGhpcy5kZWZlbnNlTW9uc3Rlci5kZWZlbnNlSGltc2VsZigpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBmaW5pc2goKSB7XHJcbiAgICAgICAgdGhpcy5fd2lubmVyID0gKHRoaXMuY3VycmVudE1vbnN0ZXIuaXNEZWFkKCkpID8gdGhpcy5kZWZlbnNlTW9uc3RlciA6IHRoaXMuY3VycmVudE1vbnN0ZXI7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50TW9uc3Rlci5IZWFsKCk7XHJcbiAgICAgICAgdGhpcy5kZWZlbnNlTW9uc3Rlci5IZWFsKCk7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogSWYgdGhlIHBsYXllcidzIG1vbnN0ZXIgd29uLCB0aGVuIGl0IGlzIG5lY2Vzc2FyeSB0byBhZGQgdGhlIGxvc2luZyBtb25zdGVyLCBvdGhlcndpc2UgcmVtb3ZlIHRoZSBtb25zdGVyXHJcbiAgICAgICAgICogZnJvbSB0aGUgcGxheWVyLlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogSWYgdGhlIG1vbnN0ZXIgd2FzIG9uY2UgbG9vdGVkLCB0aGVuIHRoaXMgaXMgdGhlIHBsYXllcidzIG1vbnN0ZXIuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgaWYgKHRoaXMuX3dpbm5lci5sb290ZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5kZWZlbnNlTW9uc3Rlci5sb290KCk7XHJcbiAgICAgICAgICAgIHRoaXMuX3BsYXllci5hZGRNb25zdGVyKHRoaXMuZGVmZW5zZU1vbnN0ZXIpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgJHt0aGlzLl9wbGF5ZXIubmFtZX0gd2luYCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fcGxheWVyLmRlbGV0ZU1vbnN0ZXIodGhpcy5kZWZlbnNlTW9uc3Rlcik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGAke3RoaXMuX3BsYXllci5uYW1lfSBsb3NlYCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX3BsYXllci5yZXNldEF2YWlsYWJsZU1vdmVzKCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge0kyRENvb3JkaW5hdGVzfSBmcm9tICcuLi9pbnRlcmZhY2VzJztcclxuaW1wb3J0IHtNYXB9IGZyb20gJy4uL21hcC9tYXAnO1xyXG5pbXBvcnQge1BsYXllcn0gZnJvbSAnLi4vY3JlYXR1cmVzL3BsYXllcic7XHJcbmltcG9ydCB7Q29tcGFyZX0gZnJvbSBcIi4uL3V0aWxzL2NvbXBhcmVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBNb3ZlTWFuYWdlciB7XHJcblxyXG4gICAgcHJpdmF0ZSBwbGF5ZXI6IFBsYXllcjtcclxuICAgIHByaXZhdGUgbWFwOiBNYXA7XHJcblxyXG4gICAgY29uc3RydWN0b3IobWFwOiBNYXAsIHBsYXllcjogUGxheWVyKSB7XHJcbiAgICAgICAgdGhpcy5tYXAgPSBtYXA7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSBwbGF5ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG91dE9mQm91bmRzT2ZBcnJheShjb29yZGluYXRlczogSTJEQ29vcmRpbmF0ZXMpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gQ29tcGFyZS5pc0luUmFuZ2UoY29vcmRpbmF0ZXMueCwgMCwgdGhpcy5tYXAuZ2V0U2l6ZSgpLnggLSAxKSAmJlxyXG4gICAgICAgICAgICAgICAgQ29tcGFyZS5pc0luUmFuZ2UoY29vcmRpbmF0ZXMueSwgMCwgdGhpcy5tYXAuZ2V0U2l6ZSgpLnkgLSAxKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWRqYWNlbnRDZWxsSG9yaXpPclZlcihjb29yZGluYXRlczogSTJEQ29vcmRpbmF0ZXMpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gKE1hdGguYWJzKGNvb3JkaW5hdGVzLnggLSB0aGlzLnBsYXllci5nZXRDb29yZGluYXRlcygpLngpICtcclxuICAgICAgICAgICAgICAgIE1hdGguYWJzKGNvb3JkaW5hdGVzLnkgLSB0aGlzLnBsYXllci5nZXRDb29yZGluYXRlcygpLnkpID09IDEpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBoYXZlRW5vdWdoTW92ZW1lbnQoY29vcmRpbmF0ZXM6IEkyRENvb3JkaW5hdGVzKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGxheWVyLmF2YWlsYWJsZU1vdmVzID49IHRoaXMubWFwLmdldENlbGwoY29vcmRpbmF0ZXMpLnRyYW5zaXRpb25Db3N0O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ29vcmRpbmF0ZXMgYXJlIGNvcnJlY3QgaWYgdGhlIG1hcCByYW5nZSBpcyBpbmNsdWRlZFxyXG4gICAgICogYW5kIHBvaW50IHRvIGFuIGFkamFjZW50IGNlbGwgaG9yaXpvbnRhbGx5IG9yIHZlcnRpY2FsbHlcclxuICAgICAqIEByZXR1cm5zXHJcbiAgICAgKiBAcGFyYW0gY29vcmRpbmF0ZXNcclxuICAgICAqL1xyXG4gICAgcHVibGljIGlzQ29ycmVjdENvb3JkaW5hdGVzKGNvb3JkaW5hdGVzOiBJMkRDb29yZGluYXRlcyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm91dE9mQm91bmRzT2ZBcnJheShjb29yZGluYXRlcykgJiZcclxuICAgICAgICB0aGlzLmFkamFjZW50Q2VsbEhvcml6T3JWZXIoY29vcmRpbmF0ZXMpICYmXHJcbiAgICAgICAgdGhpcy5oYXZlRW5vdWdoTW92ZW1lbnQoY29vcmRpbmF0ZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBtb3ZlKGNvb3JkaW5hdGVzOiBJMkRDb29yZGluYXRlcyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICh0aGlzLmlzQ29ycmVjdENvb3JkaW5hdGVzKGNvb3JkaW5hdGVzKSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgJHt0aGlzLnBsYXllci5uYW1lfSBtb3ZlZCB0byAoJHtjb29yZGluYXRlcy54fSwgJHtjb29yZGluYXRlcy55fSlgKTtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIubW92ZShjb29yZGluYXRlcywgdGhpcy5tYXAuZ2V0Q2VsbChjb29yZGluYXRlcykudHJhbnNpdGlvbkNvc3QpO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgJHt0aGlzLnBsYXllci5uYW1lfSBub3QgbW92ZWQgdG8gKCR7Y29vcmRpbmF0ZXMueH0sICR7Y29vcmRpbmF0ZXMueX0pYCk7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge1BsYXllcn0gZnJvbSAnLi9jcmVhdHVyZXMvcGxheWVyJztcclxuaW1wb3J0IHtNb25zdGVyLCBQcmlkdXJva30gZnJvbSAnLi9jcmVhdHVyZXMvbW9uc3Rlcic7XHJcbmltcG9ydCB7RmllbGRSZW5kZXJlcn0gZnJvbSAnLi9zY2VuZXMvZmllbGRSZW5kZXJlcic7XHJcbmltcG9ydCB7U2NlbmVNYW5hZ2VyfSBmcm9tICcuL3NjZW5lcy9zY2VuZU1hbmFnZXInO1xyXG5pbXBvcnQge0dhbWVTdGF0ZX0gZnJvbSAnLi9nYW1lU3RhdGUnO1xyXG5pbXBvcnQge0kyRENvb3JkaW5hdGVzfSBmcm9tICcuL2ludGVyZmFjZXMnO1xyXG5pbXBvcnQge0ZpZ2h0UmVuZGVyZXJ9IGZyb20gXCIuL3NjZW5lcy9maWdodFJlbmRlcmVyXCI7XHJcbmltcG9ydCB7U2VsZWN0TW9uc3RlclJlbmRlcmVyfSBmcm9tICcuL3NjZW5lcy9zZWxlY3RNb25zdGVyUmVuZGVyZXInXHJcbmltcG9ydCB7RmlnaHR9IGZyb20gJy4vbG9naWMvZmlnaHQnO1xyXG5cclxuLyogR2xvYmFsIHZhcmlhYmxlcyAqL1xyXG5jb25zdCBnYW1lU3RhdGUgPSBuZXcgR2FtZVN0YXRlKFxyXG4gICAgbmV3IFBsYXllcihcIlN0ZXZlXCIsIFwiaGVyb1wiLCAwLCAwLCA0LCBbbmV3IFByaWR1cm9rKCldKSxcclxuICAgIFtdXHJcbik7XHJcbmNvbnN0IHNjZW5lTWFuYWdlciA9IG5ldyBTY2VuZU1hbmFnZXIoZ2FtZVN0YXRlKTtcclxuXHJcbi8qIFJlbmRlcmVycyAqL1xyXG5jb25zdCBmaWVsZFJlbmRlcmVyID0gbmV3IEZpZWxkUmVuZGVyZXIoZ2FtZVN0YXRlLCAgc2NlbmVNYW5hZ2VyLmdldFNjZW5lSW5mbygnZmllbGQnKS5lbGVtZW50LCBjZWxsQ2xpY2tMaXN0ZW5lcik7XHJcbmxldCBmaWdodFJlbmRlcmVyOiBGaWdodFJlbmRlcmVyID0gbnVsbDtcclxubGV0IHNlbGVjdE1vbnN0ZXJSZW5kZXJlcjogU2VsZWN0TW9uc3RlclJlbmRlcmVyID0gbnVsbDtcclxuXHJcbi8qIFByZXBhcmUgZmllbGQgKi9cclxuZmllbGRSZW5kZXJlci5yZW5kZXIoKTtcclxuZmllbGRSZW5kZXJlci51cGRhdGUoKTtcclxuc2NlbmVNYW5hZ2VyLnNob3dTY2VuZSgnZmllbGQnKTtcclxuXHJcbi8qIENsaWNrIExpc3RlbmVyIGZvciBhbGwgY2VsbHMgaW4gZmllbGQgKi9cclxuZnVuY3Rpb24gY2VsbENsaWNrTGlzdGVuZXIoZXZlbnQ6IE1vdXNlRXZlbnQpIHtcclxuXHJcbiAgICBmdW5jdGlvbiBnZXRDb29yZGluYXRlc09mQ2VsbCh0YXJnZXQ6IEV2ZW50VGFyZ2V0KTogSTJEQ29vcmRpbmF0ZXMge1xyXG4gICAgICAgIGxldCBlbGVtZW50ID0gPEhUTUxFbGVtZW50PnRhcmdldDtcclxuICAgICAgICBjb25zdCB0ZCA9IDxIVE1MVGFibGVDZWxsRWxlbWVudD5lbGVtZW50LnBhcmVudEVsZW1lbnQ7XHJcbiAgICAgICAgY29uc3Qgcm93ID0gPEhUTUxUYWJsZVJvd0VsZW1lbnQ+dGQucGFyZW50RWxlbWVudDtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB4OiB0ZC5jZWxsSW5kZXgsXHJcbiAgICAgICAgICAgIHk6IHJvdy5yb3dJbmRleFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjb29yZGluYXRlcyA9IGdldENvb3JkaW5hdGVzT2ZDZWxsKGV2ZW50LnRhcmdldCk7XHJcbiAgICBsZXQgb2xkX2Nvb3JkaW5hdGU6IEkyRENvb3JkaW5hdGVzID0gZ2FtZVN0YXRlLnBsYXllci5nZXRDb29yZGluYXRlcygpO1xyXG4gICAgaWYgKGdhbWVTdGF0ZS5tb3ZlTWFuYWdlci5tb3ZlKGNvb3JkaW5hdGVzKSkge1xyXG4gICAgICAgIGZpZWxkUmVuZGVyZXIudXBkYXRlQ2VsbHMoW1xyXG4gICAgICAgICAgICBvbGRfY29vcmRpbmF0ZSxcclxuICAgICAgICAgICAgZ2FtZVN0YXRlLnBsYXllci5nZXRDb29yZGluYXRlcygpXHJcbiAgICAgICAgXSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIE5FU1pCdXR0b25JbkZpZ2h0Q2xpY2tMaXN0ZW5lcigpIHtcclxuICAgIGdhbWVTdGF0ZS5maWdodC5hdHRhY2tDdXJyZW50KCk7XHJcbiAgICBpZiAoZ2FtZVN0YXRlLmZpZ2h0LmlzRmluaXNoKCkpIHtcclxuICAgICAgICBnYW1lU3RhdGUuZmlnaHQuZmluaXNoKCk7XHJcbiAgICAgICAgc2NlbmVNYW5hZ2VyLnNob3dTY2VuZSgnZmllbGQnKTtcclxuICAgIH1cclxuICAgIGdhbWVTdGF0ZS5maWdodC5zd2FwKCk7XHJcbiAgICBmaWdodFJlbmRlcmVyLnVwZGF0ZSgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBORVNYQnV0dG9uSW5GaWdodENsaWNrTGlzdGVuZXIoKSB7XHJcbiAgICBnYW1lU3RhdGUuZmlnaHQuZGVmZW5kQ3VycmVudCgpO1xyXG4gICAgZ2FtZVN0YXRlLmZpZ2h0LnN3YXAoKTtcclxuICAgIGZpZ2h0UmVuZGVyZXIudXBkYXRlKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIE5FU1pCdXR0b25JbkZpZWxkQ2xpY2tMaXN0ZW5lcigpIHtcclxuICAgIGxldCBjb29yZGluYXRlcyA9IGdhbWVTdGF0ZS5wbGF5ZXIuZ2V0Q29vcmRpbmF0ZXMoKTtcclxuICAgIGlmIChnYW1lU3RhdGUubWFwLmdldENlbGwoY29vcmRpbmF0ZXMpLm1vbnN0ZXIubG9vdGVkKVxyXG4gICAgICAgIHJldHVybjtcclxuICAgIGlmIChnYW1lU3RhdGUucGxheWVyLmF2YWlsYWJsZU1vdmVzIDw9IDApXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgc2VsZWN0TW9uc3RlclJlbmRlcmVyID0gbmV3IFNlbGVjdE1vbnN0ZXJSZW5kZXJlcihcclxuICAgICAgICBzY2VuZU1hbmFnZXIuZ2V0U2NlbmVJbmZvKCdzZWxlY3QtbW9uc3RlcicpLmVsZW1lbnQsXHJcbiAgICAgICAgZ2FtZVN0YXRlLnBsYXllcixcclxuICAgICAgICBPS0J1dHRvbkluU2VsZWN0Q2xpY2tMaXN0ZW5lclxyXG4gICAgKVxyXG4gICAgc2VsZWN0TW9uc3RlclJlbmRlcmVyLnVwZGF0ZSgpO1xyXG4gICAgc2NlbmVNYW5hZ2VyLnNob3dTY2VuZSgnc2VsZWN0LW1vbnN0ZXInKTtcclxufVxyXG5cclxuLyogQ2xpY2sgTGlzdGVuZXIgZm9yIE9LIGJ1dHRvbiBpbiBzZWxlY3QtbW9uc3RlciAqL1xyXG5mdW5jdGlvbiBPS0J1dHRvbkluU2VsZWN0Q2xpY2tMaXN0ZW5lcigpIHtcclxuICAgIHNjZW5lTWFuYWdlci5zaG93U2NlbmUoJ2ZpZ2h0Jyk7XHJcbiAgICBsZXQgbW9uc3RlcnM6IFtNb25zdGVyLCBNb25zdGVyXSA9IFtcclxuICAgICAgICBzZWxlY3RNb25zdGVyUmVuZGVyZXIuZ2V0Q2hvc2VuTW9uc3RlcigpLFxyXG4gICAgICAgIGdhbWVTdGF0ZS5tYXAuZ2V0Q2VsbChnYW1lU3RhdGUucGxheWVyLmdldENvb3JkaW5hdGVzKCkpLm1vbnN0ZXJcclxuICAgIF1cclxuICAgIGZpZ2h0UmVuZGVyZXIgPSBuZXcgRmlnaHRSZW5kZXJlcihcclxuICAgICAgICBzY2VuZU1hbmFnZXIuZ2V0U2NlbmVJbmZvKCdmaWdodCcpLmVsZW1lbnQsXHJcbiAgICAgICAgbW9uc3RlcnMsXHJcbiAgICAgICAgTkVTWkJ1dHRvbkluRmlnaHRDbGlja0xpc3RlbmVyLFxyXG4gICAgICAgIE5FU1hCdXR0b25JbkZpZ2h0Q2xpY2tMaXN0ZW5lclxyXG4gICAgKTtcclxuICAgIGZpZ2h0UmVuZGVyZXIudXBkYXRlKCk7XHJcbiAgICBnYW1lU3RhdGUuZmlnaHQgPSBuZXcgRmlnaHQoZ2FtZVN0YXRlLnBsYXllciwgLi4ubW9uc3RlcnMpO1xyXG59XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICBpZiAoZXZlbnQua2V5ID09IFwiclwiKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZ2FtZVN0YXRlLnBsYXllci5hdmFpbGFibGVNb3Zlcyk7XHJcbiAgICB9XHJcbn0sIHRydWUpO1xyXG4iLCJpbXBvcnQge0NodWRpbGEsIE1vbnN0ZXJ9IGZyb20gJy4uL2NyZWF0dXJlcy9tb25zdGVyJztcclxuaW1wb3J0IHtSYW5kb219IGZyb20gJy4uL3V0aWxzL3JhbmRvbSc7XHJcbmltcG9ydCB7SUhhc0Nzc0NsYXNzfSBmcm9tICcuLi9pbnRlcmZhY2VzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBDZWxsIGltcGxlbWVudHMgSUhhc0Nzc0NsYXNzIHtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgX2Nzc0NsYXNzOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgZ2V0IGNzc0NsYXNzKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Nzc0NsYXNzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIGNvc3Qgb2YgdGhlIHRyYW5zaXRpb24gZm9yIHRoZSBwbGF5ZXIgbW92aW5nIHRvIHRoaXMgY2VsbFxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfdHJhbnNpdGlvbkNvc3Q6IG51bWJlcjtcclxuICAgIHB1YmxpYyBnZXQgdHJhbnNpdGlvbkNvc3QoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdHJhbnNpdGlvbkNvc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfbW9uc3RlcjogTW9uc3RlcjtcclxuICAgIHB1YmxpYyBnZXQgbW9uc3RlcigpOiBNb25zdGVye1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9tb25zdGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBjc3NDbGFzc1xyXG4gICAgICogQHBhcmFtIHRyYW5zaXRpb25Db3N0TWluTWF4IGlzIG1pbmltdW0gYW5kIG1heGltdW0gdmFsdWVcclxuICAgICAqIEBwYXJhbSBwb3NzaWJsZUNyZWF0dXJlc1xyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3Rvcihjc3NDbGFzczogc3RyaW5nLCB0cmFuc2l0aW9uQ29zdE1pbk1heCA6IFtudW1iZXIsIG51bWJlcl0sIHBvc3NpYmxlQ3JlYXR1cmVzOiBNb25zdGVyW10pIHtcclxuICAgICAgICB0aGlzLl9jc3NDbGFzcyA9IGNzc0NsYXNzO1xyXG4gICAgICAgIHRoaXMuX3RyYW5zaXRpb25Db3N0ID0gUmFuZG9tLmluUmFuZ2UoLi4udHJhbnNpdGlvbkNvc3RNaW5NYXgpO1xyXG4gICAgICAgIHRoaXMuX21vbnN0ZXIgPSBSYW5kb20ub25lSXRlbUZyb21BcnJheShwb3NzaWJsZUNyZWF0dXJlcyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBMYW5kQ2VsbCBleHRlbmRzIENlbGwge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoJ2xhbmQnLCBbMSwgMl0sIFtuZXcgQ2h1ZGlsYSgpXSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBWb2xjYW5vQ2VsbCBleHRlbmRzIENlbGwge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoJ3ZvbGNhbm8nLCBbMywgNV0sIFtuZXcgQ2h1ZGlsYSgpXSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBGb3Jlc3RDZWxsIGV4dGVuZHMgQ2VsbCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcignZm9yZXN0JywgWzMsIDVdLCBbbmV3IENodWRpbGEoKV0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTGFrZUNlbGwgZXh0ZW5kcyBDZWxsIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCdsYWtlJywgWzMsIDVdLCBbbmV3IENodWRpbGEoKV0pO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBjbGFzcyBEYXJrQ2FzdGxlQ2VsbCBleHRlbmRzIENlbGwge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoJ2RhcmtfY2FzdGxlJywgWzMsIDVdLCBbbmV3IENodWRpbGEoKV0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgV2hpdGVDYXN0bGVDZWxsIGV4dGVuZHMgQ2VsbCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcignd2hpdGVfY2FzdGxlJywgWzMsIDVdLCBbbmV3IENodWRpbGEoKV0pO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7Q2VsbCwgTGFuZENlbGwsIFZvbGNhbm9DZWxsLCBGb3Jlc3RDZWxsLCBMYWtlQ2VsbCwgV2hpdGVDYXN0bGVDZWxsLCBEYXJrQ2FzdGxlQ2VsbH0gZnJvbSAnLi9jZWxsJztcclxuaW1wb3J0IHtJMkRDb29yZGluYXRlc30gZnJvbSAnLi4vaW50ZXJmYWNlcyc7XHJcbmltcG9ydCB7UmFuZG9tfSBmcm9tICcuLi91dGlscy9yYW5kb20nO1xyXG5pbXBvcnQge0NvbXBhcmV9IGZyb20gXCIuLi91dGlscy9jb21wYXJlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgTWFwIHtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgc2l6ZVg6IG51bWJlcjtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgc2l6ZVk6IG51bWJlcjtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgZGF0YTogQ2VsbFtdW107XHJcblxyXG4gICAgY29uc3RydWN0b3Ioc2l6ZVg6IG51bWJlciwgc2l6ZVk6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuc2l6ZVggPSBzaXplWDtcclxuICAgICAgICB0aGlzLnNpemVZID0gc2l6ZVk7XHJcbiAgICAgICAgdGhpcy5kYXRhID0gTWFwLmdlbmVyYXRlKHNpemVYLCBzaXplWSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldENlbGwoY29vcmRpbmF0ZXM6IEkyRENvb3JkaW5hdGVzKTogQ2VsbCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YVtjb29yZGluYXRlcy55XVtjb29yZGluYXRlcy54XTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0U2l6ZSgpOiB7IHg6IG51bWJlciwgeTogbnVtYmVyIH0ge1xyXG4gICAgICAgIHJldHVybiB7IHg6IHRoaXMuc2l6ZVgsIHk6IHRoaXMuc2l6ZVkgfTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2VuZXJhdGUoc2l6ZVg6IG51bWJlciwgc2l6ZVk6IG51bWJlcik6IENlbGxbXVtdIHtcclxuICAgICAgICBjb25zdCBkZWZhdWx0Q2VsbCA9IExhbmRDZWxsO1xyXG4gICAgICAgIGxldCBwb3NzaWJsZUNlbGxzID0gW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBvYmo6IFZvbGNhbm9DZWxsLFxyXG4gICAgICAgICAgICAgICAgcmFuZDoge1xyXG4gICAgICAgICAgICAgICAgICAgIG1pbjogMSxcclxuICAgICAgICAgICAgICAgICAgICBtYXg6IDEwXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG9iajogRm9yZXN0Q2VsbCxcclxuICAgICAgICAgICAgICAgIHJhbmQ6IHtcclxuICAgICAgICAgICAgICAgICAgICBtaW46IDExLFxyXG4gICAgICAgICAgICAgICAgICAgIG1heDogMzBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgb2JqOiBMYWtlQ2VsbCxcclxuICAgICAgICAgICAgICAgIHJhbmQ6IHtcclxuICAgICAgICAgICAgICAgICAgICBtaW46IDMxLFxyXG4gICAgICAgICAgICAgICAgICAgIG1heDogMzVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgICAgICBjb25zb2xlLmxvZyhgTWFwOiBnZW5lcmF0ZSwgKCR7c2l6ZVh9LCAke3NpemVZfSlgKTtcclxuICAgICAgICBjb25zdCBkYXRhOiBDZWxsW11bXSA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgc2l6ZVk7ICsreSkge1xyXG4gICAgICAgICAgICBjb25zdCByb3c6IENlbGxbXSA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHNpemVYOyArK3gpIHtcclxuICAgICAgICAgICAgICAgIGxldCByYW5kTnVtID0gUmFuZG9tLmluUmFuZ2UoMSwgMTAwKTtcclxuICAgICAgICAgICAgICAgIGxldCBvYmplY3RGb3JDcmVhdGUgPSBudWxsO1xyXG5cclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcG9zc2libGVDZWxscy5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChDb21wYXJlLmlzSW5SYW5nZShyYW5kTnVtLCBwb3NzaWJsZUNlbGxzW2ldLnJhbmQubWluLCBwb3NzaWJsZUNlbGxzW2ldLnJhbmQubWF4KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvYmplY3RGb3JDcmVhdGUgPSBwb3NzaWJsZUNlbGxzW2ldLm9iajtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICghb2JqZWN0Rm9yQ3JlYXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0Rm9yQ3JlYXRlID0gZGVmYXVsdENlbGw7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcm93LnB1c2gobmV3IG9iamVjdEZvckNyZWF0ZSgpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkYXRhLnB1c2gocm93KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGRlZmF1bHRQb3NpdGlvbnMgPSBbXHJcbiAgICAgICAgICAgIHsgeDogMCwgeTogMCwgb2JqOiBMYW5kQ2VsbH0sXHJcbiAgICAgICAgICAgIHsgeDogMCwgeTogc2l6ZVkgLSAxLCBvYmo6IExhbmRDZWxsfSxcclxuICAgICAgICAgICAgeyB4OiBzaXplWCAtIDEsIHk6IHNpemVZIC0gMSwgb2JqOiBXaGl0ZUNhc3RsZUNlbGx9LFxyXG4gICAgICAgICAgICB7IHg6IHNpemVYIC0gMSwgeTogMCwgb2JqOiBEYXJrQ2FzdGxlQ2VsbH1cclxuICAgICAgICBdXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkZWZhdWx0UG9zaXRpb25zLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRlZmF1bHRQb3NpdGlvbnNbaV0pO1xyXG4gICAgICAgICAgICBsZXQgb2JqZWN0Rm9yQ3JlYXRlID0gZGVmYXVsdFBvc2l0aW9uc1tpXS5vYmo7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG9iamVjdEZvckNyZWF0ZSk7XHJcblxyXG4gICAgICAgICAgICBkYXRhW2RlZmF1bHRQb3NpdGlvbnNbaV0ueV1bZGVmYXVsdFBvc2l0aW9uc1tpXS54XSA9IG5ldyBvYmplY3RGb3JDcmVhdGUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coYE1hcDogZ2VuZXJhdGVkLCAoJHtzaXplWH0sICR7c2l6ZVl9KWApO1xyXG4gICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtNYXB9IGZyb20gJy4uL21hcC9tYXAnO1xyXG5pbXBvcnQge0kyRENvb3JkaW5hdGVzLCBJRHJhd2FibGVJbkZpZWxkLCBJSGFzQ3NzQ2xhc3MsIElSZW5kZXJlcn0gZnJvbSAnLi4vaW50ZXJmYWNlcyc7XHJcbmltcG9ydCB7R2FtZVN0YXRlfSBmcm9tICcuLi9nYW1lU3RhdGUnO1xyXG5pbXBvcnQge0NvbXBhcmV9IGZyb20gXCIuLi91dGlscy9jb21wYXJlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRmllbGRSZW5kZXJlciBpbXBsZW1lbnRzIElSZW5kZXJlciB7XHJcbiAgICBwcml2YXRlIG1hcDogTWFwO1xyXG4gICAgcHJpdmF0ZSBnYW1lU3RhdGU6IEdhbWVTdGF0ZTtcclxuICAgIHByaXZhdGUgZWxlbWVudDogSFRNTEVsZW1lbnQ7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IG1vdXNlTGlzdGVuZXI6IGFueTtcclxuICAgIFxyXG4gICAgY29uc3RydWN0b3IoZ2FtZVN0YXRlOiBHYW1lU3RhdGUsIGdhbWVGaWVsZDogSFRNTEVsZW1lbnQsIG1vdXNlTGlzdGVuZXI6IGFueSkge1xyXG4gICAgICAgIHRoaXMubWFwID0gZ2FtZVN0YXRlLm1hcDtcclxuICAgICAgICB0aGlzLmdhbWVTdGF0ZSA9IGdhbWVTdGF0ZTtcclxuICAgICAgICB0aGlzLmVsZW1lbnQgPSBnYW1lRmllbGQ7XHJcbiAgICAgICAgdGhpcy5tb3VzZUxpc3RlbmVyID0gbW91c2VMaXN0ZW5lcjsgXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZW5lcmF0ZXMgYSB0YWJsZSBhbmQgYXBwZW5kIGl0IHRvIHRoaXMuZWxlbWVudFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmVuZGVyKCk6IHZvaWQge1xyXG4gICAgICAgIGxldCB0YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RhYmxlJyk7XHJcbiAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCB0aGlzLm1hcC5nZXRTaXplKCkueTsgKyt5KSB7XHJcbiAgICAgICAgICAgIGxldCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCAgPCB0aGlzLm1hcC5nZXRTaXplKCkueDsgKyt4KSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XHJcbiAgICAgICAgICAgICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5tb3VzZUxpc3RlbmVyKTtcclxuICAgICAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZChjZWxsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0YWJsZS5hcHBlbmRDaGlsZChyb3cpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmVsZW1lbnQuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQodGFibGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0VGFibGUoKTogSFRNTFRhYmxlRWxlbWVudCB7XHJcbiAgICAgICAgcmV0dXJuIDxIVE1MVGFibGVFbGVtZW50PiB0aGlzLmVsZW1lbnQuY2hpbGRyZW5bMF07XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgY2VsbCBpbiB0YWJsZVxyXG4gICAgICogQHBhcmFtIGNvb3JkaW5hdGVzXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGdldENlbGwoY29vcmRpbmF0ZXM6IEkyRENvb3JkaW5hdGVzKTogRWxlbWVudCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VGFibGUoKS5yb3dzW2Nvb3JkaW5hdGVzLnldLmNlbGxzW2Nvb3JkaW5hdGVzLnhdO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2VuZXJhdGVzIGRpdiBlbGVtZW50IHdpdGggc29tZSBjc3MgY2xhc3NcclxuICAgICAqIEBwYXJhbSBvYmpcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGdldEhUTUxTcHJpdGUob2JqOiBJSGFzQ3NzQ2xhc3MpOiBIVE1MRWxlbWVudCB7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHJlc3VsdC5jbGFzc0xpc3QuYWRkKCdzcHJpdGUnKTtcclxuICAgICAgICByZXN1bHQuY2xhc3NMaXN0LmFkZChvYmouY3NzQ2xhc3MpO1xyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRDcmVhdHVyZXNMaXN0KCk6IElEcmF3YWJsZUluRmllbGRbXSB7XHJcbiAgICAgICAgcmV0dXJuIFt0aGlzLmdhbWVTdGF0ZS5wbGF5ZXIsIC4uLnRoaXMuZ2FtZVN0YXRlLmNyZWF0dXJlc107XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHVwZGF0ZSgpOiB2b2lkIHtcclxuICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHRoaXMubWFwLmdldFNpemUoKS55OyArK3kpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB0aGlzLm1hcC5nZXRTaXplKCkueDsgKyt4KSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbWFwQ2VsbCA9IHRoaXMubWFwLmdldENlbGwoeyB4OiB4LCB5OiB5IH0pO1xyXG4gICAgICAgICAgICAgICAgbGV0IEhUTUxDZWxsID0gdGhpcy5nZXRDZWxsKHsgeDogeCwgeTogeSB9KTtcclxuICAgICAgICAgICAgICAgIEhUTUxDZWxsLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICBIVE1MQ2VsbC5hcHBlbmRDaGlsZChGaWVsZFJlbmRlcmVyLmdldEhUTUxTcHJpdGUobWFwQ2VsbCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGNyZWF0dXJlc0xpc3QgPSB0aGlzLmdldENyZWF0dXJlc0xpc3QoKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNyZWF0dXJlc0xpc3QubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgICAgbGV0IGNyZWF0dXJlID0gY3JlYXR1cmVzTGlzdFtpXTtcclxuICAgICAgICAgICAgdGhpcy5nZXRDZWxsKGNyZWF0dXJlLmdldENvb3JkaW5hdGVzKCkpLmFwcGVuZENoaWxkKEZpZWxkUmVuZGVyZXIuZ2V0SFRNTFNwcml0ZShjcmVhdHVyZSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFVwZGF0ZXMgY2VsbHMgb25seSBhdCBzcGVjaWZpYyBjb29yZGluYXRlcy4gTmVlZGVkIHRvIGRyYXcgQ1NTIGFuaW1hdGlvbiBvbmx5IGZvciBzcGVjaWZpYyBjZWxscy5cclxuICAgICAqIEBwYXJhbSBjb29yZGluYXRlc1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgdXBkYXRlQ2VsbHMoY29vcmRpbmF0ZXM6IEkyRENvb3JkaW5hdGVzW10pOiB2b2lkIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvb3JkaW5hdGVzLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgIGxldCBtYXBDZWxsID0gdGhpcy5tYXAuZ2V0Q2VsbChjb29yZGluYXRlc1tpXSk7XHJcbiAgICAgICAgICAgIGxldCBIVE1MQ2VsbCA9IHRoaXMuZ2V0Q2VsbChjb29yZGluYXRlc1tpXSk7XHJcbiAgICAgICAgICAgIEhUTUxDZWxsLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgICAgIEhUTUxDZWxsLmFwcGVuZENoaWxkKEZpZWxkUmVuZGVyZXIuZ2V0SFRNTFNwcml0ZShtYXBDZWxsKSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBjcmVhdHVyZXNMaXN0ID0gdGhpcy5nZXRDcmVhdHVyZXNMaXN0KCk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgY3JlYXR1cmVzTGlzdC5sZW5ndGg7ICsraikge1xyXG4gICAgICAgICAgICAgICAgaWYgKENvbXBhcmUuc2hhbGxvd0VxdWFsKGNyZWF0dXJlc0xpc3Rbal0uZ2V0Q29vcmRpbmF0ZXMoKSwgY29vcmRpbmF0ZXNbaV0pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgSFRNTENlbGwuYXBwZW5kQ2hpbGQoRmllbGRSZW5kZXJlci5nZXRIVE1MU3ByaXRlKGNyZWF0dXJlc0xpc3Rbal0pKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImltcG9ydCB7TW9uc3Rlcn0gZnJvbSBcIi4uL2NyZWF0dXJlcy9tb25zdGVyXCI7XHJcbmltcG9ydCB7SVJlbmRlcmVyfSBmcm9tIFwiLi4vaW50ZXJmYWNlc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEZpZ2h0UmVuZGVyZXIgaW1wbGVtZW50cyBJUmVuZGVyZXIge1xyXG4gICAgcHJpdmF0ZSBlbGVtZW50OiBIVE1MRWxlbWVudDtcclxuICAgIHByaXZhdGUgbW9uc3RlcnM6IFtNb25zdGVyLCBNb25zdGVyXTtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgTkVTWkJ1dHRvbkNsaWNrTGlzdGVuZXI6IGFueTtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgTkVTWEJ1dHRvbkNsaWNrTGlzdGVuZXI6IGFueTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lRmlnaHQ6IEhUTUxFbGVtZW50LCBtb25zdGVyczogW01vbnN0ZXIsIE1vbnN0ZXJdLCBsaXN0ZW5lcl8xOiBhbnksIGxpc3RlbmVyXzI6IGFueSkge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGdhbWVGaWdodDtcclxuICAgICAgICB0aGlzLm1vbnN0ZXJzID0gbW9uc3RlcnM7XHJcbiAgICAgICAgdGhpcy5ORVNaQnV0dG9uQ2xpY2tMaXN0ZW5lciA9IGxpc3RlbmVyXzE7XHJcbiAgICAgICAgdGhpcy5ORVNYQnV0dG9uQ2xpY2tMaXN0ZW5lciA9IGxpc3RlbmVyXzI7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlbmRlcigpOiB2b2lkIHtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdXBkYXRlKCk6IHZvaWQge1xyXG4gICAgICAgIGxldCBtb25zdGVyc0RpdiA9IHRoaXMuZWxlbWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdtb25zdGVycycpWzBdLmNoaWxkcmVuO1xyXG4gICAgICAgIGNvbnNvbGUuYXNzZXJ0KG1vbnN0ZXJzRGl2Lmxlbmd0aCA9PSB0aGlzLm1vbnN0ZXJzLmxlbmd0aCk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtb25zdGVyc0Rpdi5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICBsZXQgc3ByaXRlID0gbW9uc3RlcnNEaXZbaV0uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc3ByaXRlJylbMF07XHJcbiAgICAgICAgICAgIGxldCBoZWFsdGggPSBtb25zdGVyc0RpdltpXS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdoZWFsdGgnKVswXTtcclxuICAgICAgICAgICAgbGV0IGRlZmVuc2UgPSBtb25zdGVyc0RpdltpXS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdkZWZlbnNlJylbMF07XHJcblxyXG4gICAgICAgICAgICBzcHJpdGUuY2xhc3NOYW1lID0gYHNwcml0ZSAke3RoaXMubW9uc3RlcnNbaV0uY3NzQ2xhc3N9YDtcclxuICAgICAgICAgICAgaWYgKGkgPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgc3ByaXRlLmNsYXNzTGlzdC5hZGQoJ21pcnJvclknKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBoZWFsdGguaW5uZXJIVE1MID0gYCR7dGhpcy5tb25zdGVyc1tpXS5oZWFsdGh9YDtcclxuICAgICAgICAgICAgZGVmZW5zZS5pbm5lckhUTUwgPSBgJHt0aGlzLm1vbnN0ZXJzW2ldLmRlZmVuc2V9YDtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGJ1dHRvbnMgPSB0aGlzLmVsZW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYWN0aW9uLWJ0bicpWzBdLmNoaWxkcmVuO1xyXG4gICAgICAgIGNvbnNvbGUuYXNzZXJ0KGJ1dHRvbnMubGVuZ3RoID09IDIpO1xyXG4gICAgICAgIGJ1dHRvbnNbMF0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLk5FU1pCdXR0b25DbGlja0xpc3RlbmVyKTtcclxuICAgICAgICBidXR0b25zWzFdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5ORVNYQnV0dG9uQ2xpY2tMaXN0ZW5lcik7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge0lTY2VuZUluZm99IGZyb20gJy4uL2ludGVyZmFjZXMnO1xyXG5pbXBvcnQge0dhbWVTdGF0ZX0gZnJvbSAnLi4vZ2FtZVN0YXRlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBTY2VuZU1hbmFnZXIge1xyXG4gICAgZ2FtZVN0YXRlOiBHYW1lU3RhdGU7XHJcbiAgICBfY3VycmVudFNjZW5lOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgZ2V0IGN1cnJlbnRTY2VuZSgpOiBJU2NlbmVJbmZvIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRTY2VuZUluZm8odGhpcy5fY3VycmVudFNjZW5lKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lU3RhdGU6IEdhbWVTdGF0ZSkge1xyXG4gICAgICAgIHRoaXMuZ2FtZVN0YXRlID0gZ2FtZVN0YXRlO1xyXG4gICAgICAgIHRoaXMuX2N1cnJlbnRTY2VuZSA9IFwiXCI7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFNjZW5lSW5mbyhuYW1lOiBzdHJpbmcpOiBJU2NlbmVJbmZvIHtcclxuICAgICAgICBsZXQgc2NlbmVzID0gdGhpcy5nYW1lU3RhdGUuc2NlbmVzO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2NlbmVzLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgIGlmIChzY2VuZXNbaV0ubmFtZSA9PSBuYW1lKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc2NlbmVzW2ldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoZSBzY2VuZSBkb2VzIG5vdCBleGlzdFwiKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2hvd1NjZW5lKG5hbWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX2N1cnJlbnRTY2VuZSA9IG5hbWU7XHJcbiAgICAgICAgbGV0IHNjZW5lID0gdGhpcy5nZXRTY2VuZUluZm8obmFtZSk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmdhbWVTdGF0ZS5zY2VuZXMubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgICAgdGhpcy5nYW1lU3RhdGUuc2NlbmVzW2ldLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzY2VuZS5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7SVJlbmRlcmVyfSBmcm9tIFwiLi4vaW50ZXJmYWNlc1wiO1xyXG5pbXBvcnQge1BsYXllcn0gZnJvbSBcIi4uL2NyZWF0dXJlcy9wbGF5ZXJcIjtcclxuaW1wb3J0IHtNb25zdGVyfSBmcm9tIFwiLi4vY3JlYXR1cmVzL21vbnN0ZXJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTZWxlY3RNb25zdGVyUmVuZGVyZXIgaW1wbGVtZW50cyBJUmVuZGVyZXIge1xyXG4gICAgcHJpdmF0ZSBkb21FbGVtZW50OiBIVE1MRWxlbWVudDtcclxuICAgIHByaXZhdGUgcGxheWVyOiBQbGF5ZXI7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IE9rQnV0dG9uTGlzdGVuZXI6IGFueTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihkb21FbGVtZW50OiBIVE1MRWxlbWVudCwgcGxheWVyOiBQbGF5ZXIsIE9rQnV0dG9uTGlzdGVuZXI6IGFueSkge1xyXG4gICAgICAgIHRoaXMuZG9tRWxlbWVudCA9IGRvbUVsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSBwbGF5ZXI7XHJcbiAgICAgICAgdGhpcy5Pa0J1dHRvbkxpc3RlbmVyID0gT2tCdXR0b25MaXN0ZW5lcjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVuZGVyKCk6IHZvaWQge1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1cGRhdGUoKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IHNlbGVjdCA9IHRoaXMuZG9tRWxlbWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzZWxlY3QnKVswXTtcclxuICAgICAgICBzZWxlY3QuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucGxheWVyLmF2YWlsYWJsZU1vbnN0ZXJzLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgIGxldCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcclxuICAgICAgICAgICAgb3B0aW9uLnZhbHVlID0gYCR7aX1gO1xyXG4gICAgICAgICAgICBvcHRpb24uaW5uZXJUZXh0ID0gdGhpcy5wbGF5ZXIuYXZhaWxhYmxlTW9uc3RlcnNbaV0uZ2V0U3RyaW5nKCk7XHJcbiAgICAgICAgICAgIHNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgT2tCdXR0b24gPSB0aGlzLmRvbUVsZW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnb2snKVswXTtcclxuICAgICAgICBPa0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuT2tCdXR0b25MaXN0ZW5lcik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldENob3Nlbk1vbnN0ZXIoKTogTW9uc3RlciB7XHJcbiAgICAgICAgbGV0IHNlbGVjdCA9IDxIVE1MU2VsZWN0RWxlbWVudD50aGlzLmRvbUVsZW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc2VsZWN0JylbMF07XHJcbiAgICAgICAgbGV0IGluZGV4ID0gc2VsZWN0LnZhbHVlO1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBsYXllci5hdmFpbGFibGVNb25zdGVyc1twYXJzZUludChpbmRleCldO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGNsYXNzIENvbXBhcmUge1xyXG4gICAgLyoqXHJcbiAgICAgKiBpcyB0aGUgbnVtYmVyIHdpdGhpbiB0aGUgYm91bmRzXHJcbiAgICAgKiBAcGFyYW0geFxyXG4gICAgICogQHBhcmFtIG1pblxyXG4gICAgICogQHBhcmFtIG1heFxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgaXNJblJhbmdlKHg6IG51bWJlciwgbWluOiBudW1iZXIsIG1heDogbnVtYmVyKSB7XHJcbiAgICAgICAgcmV0dXJuIG1pbiA8PSB4ICYmIHggPD0gbWF4O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2hlY2tzIGZvciBkaWN0aW9uYXJ5IGNvbXBhcmlzb25zLlxyXG4gICAgICpcclxuICAgICAqIEluIEphdmFTY3JpcHQgYW5kIFR5cGVTY3JpcHQsIElmIHR3byBlbGVtZW50cyBhcmUgZWxlbWVudHMgdGhhdCBpbXBsZW1lbnQgc29tZSBraW5kIG9mIGludGVyZmFjZSwgdGhlbiBjb21wYXJpbmdcclxuICAgICAqIHRoZW0gdXNpbmcgY29tcGFyaXNvbiBvcGVyYXRvcnMgaXMgZmFsc2UuIEV2ZW4gaWYgdGhlc2Ugb2JqZWN0cyBhcmUgZXF1YWwgaW4gdmFsdWUuXHJcbiAgICAgKlxyXG4gICAgICogVGhpcyBmdW5jdGlvbiBzb2x2ZXMgdGhlIHByb2JsZW0gYW5kIG1hdGNoZXMgdGhlIGVsZW1lbnRzIGJ5IHRoZSB2YWx1ZSBvZiBlYWNoIGZpZWxkLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBhXHJcbiAgICAgKiBAcGFyYW0gYlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgc2hhbGxvd0VxdWFsKGE6IGFueSwgYjogYW55KTogYm9vbGVhbiB7XHJcbiAgICAgICAgY29uc3Qga2V5czEgPSBPYmplY3Qua2V5cyhhKTtcclxuICAgICAgICBjb25zdCBrZXlzMiA9IE9iamVjdC5rZXlzKGIpO1xyXG5cclxuICAgICAgICBpZiAoa2V5czEubGVuZ3RoICE9PSBrZXlzMi5sZW5ndGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yIChsZXQga2V5IG9mIGtleXMxKSB7XHJcbiAgICAgICAgICAgIGlmIChhW2tleV0gIT09IGJba2V5XSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICB9XHJcbn0iLCJleHBvcnQgY2xhc3MgUmFuZG9tIHtcclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIGFcclxuICAgICAqIEBwYXJhbSBiXHJcbiAgICAgKiBAcmV0dXJucyByYW5kb20gbnVtYmVyIGJldHdlZW4gYSBhbmQgYiwgaW5jbHVzaXZlXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBpblJhbmdlKGE6IG51bWJlciwgYjogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGIgLSBhICsgMSkpICsgYTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgb25lSXRlbUZyb21BcnJheShhcnI6IGFueVtdKTogYW55e1xyXG4gICAgICAgIHJldHVybiBhcnJbdGhpcy5pblJhbmdlKDAsIGFyci5sZW5ndGggLSAxKV07XHJcbiAgICB9XHJcbn0iXX0=
