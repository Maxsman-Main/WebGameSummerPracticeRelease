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
        this.element = gameField.getElementsByClassName('table')[0];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvc2NyaXB0cy9jcmVhdHVyZXMvY3JlYXR1cmUudHMiLCJzcmMvc2NyaXB0cy9jcmVhdHVyZXMvbW9uc3Rlci50cyIsInNyYy9zY3JpcHRzL2NyZWF0dXJlcy9wbGF5ZXIudHMiLCJzcmMvc2NyaXB0cy9nYW1lU3RhdGUudHMiLCJzcmMvc2NyaXB0cy9sb2dpYy9maWdodC50cyIsInNyYy9zY3JpcHRzL2xvZ2ljL21vdmVNYW5hZ2VyLnRzIiwic3JjL3NjcmlwdHMvbWFpbi50cyIsInNyYy9zY3JpcHRzL21hcC9jZWxsLnRzIiwic3JjL3NjcmlwdHMvbWFwL21hcC50cyIsInNyYy9zY3JpcHRzL3NjZW5lcy9maWVsZFJlbmRlcmVyLnRzIiwic3JjL3NjcmlwdHMvc2NlbmVzL2ZpZ2h0UmVuZGVyZXIudHMiLCJzcmMvc2NyaXB0cy9zY2VuZXMvc2NlbmVNYW5hZ2VyLnRzIiwic3JjL3NjcmlwdHMvc2NlbmVzL3NlbGVjdE1vbnN0ZXJSZW5kZXJlci50cyIsInNyYy9zY3JpcHRzL3V0aWxzL2NvbXBhcmUudHMiLCJzcmMvc2NyaXB0cy91dGlscy9yYW5kb20udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7SUNFYSxRO0FBZVQsc0JBQVksSUFBWixFQUEwQixRQUExQixFQUEyQztBQUFBOztBQUN2QyxhQUFLLEtBQUwsR0FBYSxJQUFiO0FBQ0EsYUFBSyxTQUFMLEdBQWlCLFFBQWpCO0FBQ0g7Ozs7NEJBZmM7QUFDWCxtQkFBTyxLQUFLLEtBQVo7QUFDSCxTOzBCQUNlLEssRUFBYTtBQUN6QixpQkFBSyxLQUFMLEdBQWEsS0FBYjtBQUNIOzs7NEJBR2tCO0FBQ2YsbUJBQU8sS0FBSyxTQUFaO0FBQ0g7Ozs7OztBQWJMLFFBQUEsUUFBQSxHQUFBLFFBQUE7Ozs7Ozs7Ozs7Ozs7OztBQ0ZBLElBQUEsYUFBQSxRQUFBLFlBQUEsQ0FBQTs7SUFFYSxPOzs7QUFr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Ozs7Ozs7OztBQUNUOzs7Ozs7a0NBTWlCLEMsRUFBVyxHLEVBQWEsRyxFQUFXO0FBQ2hELG1CQUFPLE9BQU8sQ0FBUCxJQUFZLEtBQUssR0FBeEI7QUFDSDtBQUVEOzs7Ozs7Ozs7Ozs7OztxQ0FXb0IsQyxFQUFRLEMsRUFBTTtBQUM5QixnQkFBTSxRQUFRLE9BQU8sSUFBUCxDQUFZLENBQVosQ0FBZDtBQUNBLGdCQUFNLFFBQVEsT0FBTyxJQUFQLENBQVksQ0FBWixDQUFkO0FBRUEsZ0JBQUksTUFBTSxNQUFOLEtBQWlCLE1BQU0sTUFBM0IsRUFBbUM7QUFDL0IsdUJBQU8sS0FBUDtBQUNIO0FBTjZCO0FBQUE7QUFBQTs7QUFBQTtBQVE5QixxQ0FBZ0IsS0FBaEIsOEhBQXVCO0FBQUEsd0JBQWQsR0FBYzs7QUFDbkIsd0JBQUksRUFBRSxHQUFGLE1BQVcsRUFBRSxHQUFGLENBQWYsRUFBdUI7QUFDbkIsK0JBQU8sS0FBUDtBQUNIO0FBQ0o7QUFaNkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFjOUIsbUJBQU8sSUFBUDtBQUVIOzs7Ozs7QUF0Q0wsUUFBQSxPQUFBLEdBQUEsT0FBQTs7Ozs7Ozs7Ozs7O0lDQWEsTTs7Ozs7Ozs7QUFDVDs7Ozs7Z0NBS2UsQyxFQUFXLEMsRUFBUztBQUMvQixtQkFBTyxLQUFLLEtBQUwsQ0FBVyxLQUFLLE1BQUwsTUFBaUIsSUFBSSxDQUFKLEdBQVEsQ0FBekIsQ0FBWCxJQUEwQyxDQUFqRDtBQUNIOzs7eUNBRXVCLEcsRUFBVTtBQUM5QixtQkFBTyxJQUFJLEtBQUssT0FBTCxDQUFhLENBQWIsRUFBZ0IsSUFBSSxNQUFKLEdBQWEsQ0FBN0IsQ0FBSixDQUFQO0FBQ0g7Ozs7OztBQVpMLFFBQUEsTUFBQSxHQUFBLE1BQUEiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJpbXBvcnQge0lIYXNDc3NDbGFzc30gZnJvbSBcIi4uL2ludGVyZmFjZXNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBDcmVhdHVyZSBpbXBsZW1lbnRzIElIYXNDc3NDbGFzcyB7XHJcbiAgICBcclxuICAgIHByaXZhdGUgX25hbWU6IHN0cmluZztcclxuICAgIHB1YmxpYyBnZXQgbmFtZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9uYW1lO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNldCBuYW1lKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9uYW1lID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfY3NzQ2xhc3M6IHN0cmluZztcclxuICAgIHB1YmxpYyBnZXQgY3NzQ2xhc3MoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY3NzQ2xhc3M7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBjc3NDbGFzcyA6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX25hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMuX2Nzc0NsYXNzID0gY3NzQ2xhc3M7XHJcbiAgICB9XHJcblxyXG59IiwiaW1wb3J0IHtDcmVhdHVyZX0gZnJvbSBcIi4vY3JlYXR1cmVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBNb25zdGVyIGV4dGVuZHMgQ3JlYXR1cmUge1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfbWF4SGVhdGg6IG51bWJlcjtcclxuICAgIHB1YmxpYyBnZXQgbWF4SGVhdGgoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbWF4SGVhdGg7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfaGVhbHRoOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgZ2V0IGhlYWx0aCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9oZWFsdGg7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfZGVmZW5zZTogbnVtYmVyO1xyXG4gICAgcHVibGljIGdldCBkZWZlbnNlKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZmVuc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfYXR0YWNrOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgZ2V0IGF0dGFjaygpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9hdHRhY2s7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfYXR0YWNrQm9vc3RlcjogbnVtYmVyO1xyXG4gICAgcHVibGljIGdldCBhdHRhY2tCb29zdGVyKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2F0dGFja0Jvb3N0ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfbG9vdGVkOiBib29sZWFuO1xyXG4gICAgcHVibGljIGdldCBsb290ZWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xvb3RlZDtcclxuICAgIH1cclxuICAgIHB1YmxpYyBsb290KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX2xvb3RlZCA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBjc3NDbGFzczogc3RyaW5nLCBsYWJlbDogc3RyaW5nLCB0eXBlOiBzdHJpbmcsICBoZWFsdGg6IG51bWJlciwgZGVmZW5zZTogbnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgYXR0YWNrOiBudW1iZXIsIGF0dGFja0Jvb3N0ZXI6IG51bWJlciwgbG9vdGVkOiBib29sZWFuKSB7XHJcbiAgICAgICAgc3VwZXIobmFtZSwgY3NzQ2xhc3MpO1xyXG4gICAgICAgIHRoaXMuX21heEhlYXRoID0gaGVhbHRoO1xyXG4gICAgICAgIHRoaXMuX2hlYWx0aCA9IGhlYWx0aDtcclxuICAgICAgICB0aGlzLl9kZWZlbnNlID0gZGVmZW5zZTtcclxuICAgICAgICB0aGlzLl9hdHRhY2sgPSBhdHRhY2s7XHJcbiAgICAgICAgdGhpcy5fYXR0YWNrQm9vc3RlciA9IGF0dGFja0Jvb3N0ZXI7XHJcbiAgICAgICAgdGhpcy5fbG9vdGVkID0gbG9vdGVkO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBiZUF0dGFja2VkKGVuZW15OiBNb25zdGVyKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgZGFtYWdlID0gdGhpcy5kZWZlbnNlIC0gKGVuZW15LmF0dGFjayArIGVuZW15LmF0dGFja0Jvb3N0ZXIpO1xyXG4gICAgICAgIGlmIChkYW1hZ2UgPj0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLl9oZWFsdGggLT0gMTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9oZWFsdGggKz0gZGFtYWdlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGVmZW5zZUhpbXNlbGYoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fZGVmZW5zZSArPSA1O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpc0RlYWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2hlYWx0aCA8PSAwO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBIZWFsKCk6IHZvaWQge1xyXG4gICAgICAgdGhpcy5faGVhbHRoID0gdGhpcy5tYXhIZWF0aDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0U3RyaW5nKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIGAke3RoaXMubmFtZX0sIGhwOiAke3RoaXMuaGVhbHRofSwgZGVmZW5zZTogJHt0aGlzLmRlZmVuc2V9LCBhdHRhY2s6ICR7dGhpcy5hdHRhY2t9YDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFByaWR1cm9rIGV4dGVuZHMgTW9uc3RlciB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcignUHJpZHVyb2snLCAncHJpZHVyb2snLCAncCcsICdyZWQnLCAxMjAsIDUsIDMwLCAzMCwgdHJ1ZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDaHVkaWxhIGV4dGVuZHMgTW9uc3RlciB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcignQ2h1ZGlsYScsICdjaHVkaWxhJywgJ2MnLCAncmVkJywgMTAwLCA0LCAyMCwgMTAsIGZhbHNlKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7Q3JlYXR1cmV9IGZyb20gXCIuL2NyZWF0dXJlXCI7XHJcbmltcG9ydCB7TW9uc3Rlcn0gZnJvbSBcIi4vbW9uc3RlclwiO1xyXG5pbXBvcnQge0kyRENvb3JkaW5hdGVzLCBJRHJhd2FibGVJbkZpZWxkfSBmcm9tIFwiLi4vaW50ZXJmYWNlc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBsYXllciBleHRlbmRzIENyZWF0dXJlIGltcGxlbWVudHMgSURyYXdhYmxlSW5GaWVsZCB7XHJcbiAgICBwcml2YXRlIHg6IG51bWJlcjtcclxuICAgIHByaXZhdGUgeTogbnVtYmVyO1xyXG5cclxuICAgIHByaXZhdGUgX2F2YWlsYWJsZU1vdmVzOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgZ2V0IGF2YWlsYWJsZU1vdmVzKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2F2YWlsYWJsZU1vdmVzO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNldEF2YWlsYWJsZU1vdmVzKHZhbHVlOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9hdmFpbGFibGVNb3ZlcyA9IHZhbHVlO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHJlc2V0QXZhaWxhYmxlTW92ZXMoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fYXZhaWxhYmxlTW92ZXMgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVhZG9ubHkgX2F2YWlsYWJsZU1vbnN0ZXJzOiBNb25zdGVyW107XHJcbiAgICBwdWJsaWMgZ2V0IGF2YWlsYWJsZU1vbnN0ZXJzKCk6IE1vbnN0ZXJbXSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2F2YWlsYWJsZU1vbnN0ZXJzO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgY3NzQ2xhc3M6IHN0cmluZywgeDogbnVtYmVyLCB5OiBudW1iZXIsIGF2YWlsYWJsZU1vdmVzOiBudW1iZXIsXHJcbiAgICAgICAgICAgICAgICBhdmFpbGFibGVNb25zdGVyczogTW9uc3RlcltdKSB7XHJcbiAgICAgICAgc3VwZXIobmFtZSwgY3NzQ2xhc3MpO1xyXG4gICAgICAgIHRoaXMueCA9IHg7XHJcbiAgICAgICAgdGhpcy55ID0geTtcclxuICAgICAgICB0aGlzLl9hdmFpbGFibGVNb3ZlcyA9IGF2YWlsYWJsZU1vdmVzO1xyXG4gICAgICAgIHRoaXMuX2F2YWlsYWJsZU1vbnN0ZXJzID0gYXZhaWxhYmxlTW9uc3RlcnM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBzZXQgbmV3IGNvb3JkaW5hdGVzXHJcbiAgICAgKiBAcGFyYW0gY29vcmRpbmF0ZXNcclxuICAgICAqIEBwYXJhbSBtb3Zlc1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgbW92ZShjb29yZGluYXRlczogSTJEQ29vcmRpbmF0ZXMsIG1vdmVzOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnggPSBjb29yZGluYXRlcy54O1xyXG4gICAgICAgIHRoaXMueSA9IGNvb3JkaW5hdGVzLnk7XHJcbiAgICAgICAgdGhpcy5fYXZhaWxhYmxlTW92ZXMgLT0gbW92ZXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldENvb3JkaW5hdGVzKCk6IEkyRENvb3JkaW5hdGVzICB7XHJcbiAgICAgICAgcmV0dXJuIHsgeDogdGhpcy54LCB5OiB0aGlzLnkgfTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWRkTW9uc3Rlcihtb25zdGVyOiBNb25zdGVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fYXZhaWxhYmxlTW9uc3RlcnMucHVzaChtb25zdGVyKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGVsZXRlTW9uc3Rlcihtb25zdGVyOiBNb25zdGVyKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmF2YWlsYWJsZU1vbnN0ZXJzLmluZGV4T2YobW9uc3Rlcik7XHJcbiAgICAgICAgY29uc29sZS5hc3NlcnQoaW5kZXggIT0gLTEpO1xyXG4gICAgICAgIGlmIChpbmRleCA+IC0xKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXZhaWxhYmxlTW9uc3RlcnMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge1BsYXllcn0gZnJvbSAnLi9jcmVhdHVyZXMvcGxheWVyJztcclxuaW1wb3J0IHtNYXB9IGZyb20gJy4vbWFwL21hcCc7XHJcbmltcG9ydCB7TW92ZU1hbmFnZXJ9IGZyb20gJy4vbG9naWMvbW92ZU1hbmFnZXInO1xyXG5pbXBvcnQge0lEcmF3YWJsZUluRmllbGQsIElTY2VuZUluZm99IGZyb20gJy4vaW50ZXJmYWNlcyc7XHJcbmltcG9ydCB7RmlnaHR9IGZyb20gXCIuL2xvZ2ljL2ZpZ2h0XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgR2FtZVN0YXRlIHtcclxuXHJcbiAgICBwdWJsaWMgcGxheWVyOiBQbGF5ZXI7XHJcbiAgICBwdWJsaWMgY3JlYXR1cmVzOiBJRHJhd2FibGVJbkZpZWxkW107XHJcbiAgICBwdWJsaWMgbWFwOiBNYXA7XHJcbiAgICBwdWJsaWMgbW92ZU1hbmFnZXI6IE1vdmVNYW5hZ2VyO1xyXG4gICAgcHVibGljIHNjZW5lczogSVNjZW5lSW5mb1tdO1xyXG4gICAgcHVibGljIGZpZ2h0OiBGaWdodDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwbGF5ZXI6IFBsYXllciwgY3JlYXR1cmVzOiBJRHJhd2FibGVJbkZpZWxkW10pIHtcclxuICAgICAgICB0aGlzLnBsYXllciA9IHBsYXllcjtcclxuICAgICAgICB0aGlzLmNyZWF0dXJlcyA9IGNyZWF0dXJlcztcclxuICAgICAgICB0aGlzLm1hcCA9IG5ldyBNYXAoNSwgNSk7XHJcbiAgICAgICAgdGhpcy5tb3ZlTWFuYWdlciA9IG5ldyBNb3ZlTWFuYWdlcih0aGlzLm1hcCwgdGhpcy5wbGF5ZXIpO1xyXG4gICAgICAgIHRoaXMuc2NlbmVzID0gW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnZmllbGQnLFxyXG4gICAgICAgICAgICAgICAgZWxlbWVudDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWUtZmllbGQnKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnZmlnaHQnLFxyXG4gICAgICAgICAgICAgICAgZWxlbWVudDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWUtZmlnaHQnKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnc2VsZWN0LW1vbnN0ZXInLFxyXG4gICAgICAgICAgICAgICAgZWxlbWVudDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWUtc2VsZWN0LW1vbnN0ZXInKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgICAgIHRoaXMuZmlnaHQgPSBudWxsO1xyXG4gICAgfVxyXG5cclxufSIsImltcG9ydCB7TW9uc3Rlcn0gZnJvbSBcIi4uL2NyZWF0dXJlcy9tb25zdGVyXCJcclxuaW1wb3J0IHtQbGF5ZXJ9IGZyb20gXCIuLi9jcmVhdHVyZXMvcGxheWVyXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRmlnaHQge1xyXG4gICAgcHJpdmF0ZSBfY3VycmVudE1vbnN0ZXI6IE1vbnN0ZXI7XHJcbiAgICBwdWJsaWMgZ2V0IGN1cnJlbnRNb25zdGVyKCk6IE1vbnN0ZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jdXJyZW50TW9uc3RlcjtcclxuICAgIH1cclxuICAgIHByaXZhdGUgX2RlZmVuc2VNb25zdGVyOiBNb25zdGVyO1xyXG4gICAgcHVibGljIGdldCBkZWZlbnNlTW9uc3RlcigpOiBNb25zdGVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZGVmZW5zZU1vbnN0ZXI7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIF93aW5uZXI6IE1vbnN0ZXI7XHJcbiAgICBwcml2YXRlIF9wbGF5ZXI6IFBsYXllcjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwbGF5ZXI6IFBsYXllciwgbW9uc3RlckZpcnN0OiBNb25zdGVyLCBtb25zdGVyU2Vjb25kOiBNb25zdGVyKSB7XHJcbiAgICAgICAgdGhpcy5fY3VycmVudE1vbnN0ZXIgPSBtb25zdGVyRmlyc3Q7XHJcbiAgICAgICAgdGhpcy5fZGVmZW5zZU1vbnN0ZXIgPSBtb25zdGVyU2Vjb25kO1xyXG4gICAgICAgIHRoaXMuX3dpbm5lciA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5fcGxheWVyID0gcGxheWVyO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzd2FwKCkge1xyXG4gICAgICAgIFt0aGlzLl9jdXJyZW50TW9uc3RlciwgdGhpcy5fZGVmZW5zZU1vbnN0ZXJdID0gW3RoaXMuZGVmZW5zZU1vbnN0ZXIsIHRoaXMuY3VycmVudE1vbnN0ZXJdO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpc0ZpbmlzaCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50TW9uc3Rlci5pc0RlYWQoKSB8fCB0aGlzLmRlZmVuc2VNb25zdGVyLmlzRGVhZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhdHRhY2tDdXJyZW50KCkge1xyXG4gICAgICAgIHRoaXMuZGVmZW5zZU1vbnN0ZXIuYmVBdHRhY2tlZCh0aGlzLmN1cnJlbnRNb25zdGVyKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGVmZW5kQ3VycmVudCgpIHtcclxuICAgICAgICB0aGlzLmRlZmVuc2VNb25zdGVyLmRlZmVuc2VIaW1zZWxmKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGZpbmlzaCgpIHtcclxuICAgICAgICB0aGlzLl93aW5uZXIgPSAodGhpcy5jdXJyZW50TW9uc3Rlci5pc0RlYWQoKSkgPyB0aGlzLmRlZmVuc2VNb25zdGVyIDogdGhpcy5jdXJyZW50TW9uc3RlcjtcclxuICAgICAgICB0aGlzLmN1cnJlbnRNb25zdGVyLkhlYWwoKTtcclxuICAgICAgICB0aGlzLmRlZmVuc2VNb25zdGVyLkhlYWwoKTtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBJZiB0aGUgcGxheWVyJ3MgbW9uc3RlciB3b24sIHRoZW4gaXQgaXMgbmVjZXNzYXJ5IHRvIGFkZCB0aGUgbG9zaW5nIG1vbnN0ZXIsIG90aGVyd2lzZSByZW1vdmUgdGhlIG1vbnN0ZXJcclxuICAgICAgICAgKiBmcm9tIHRoZSBwbGF5ZXIuXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBJZiB0aGUgbW9uc3RlciB3YXMgb25jZSBsb290ZWQsIHRoZW4gdGhpcyBpcyB0aGUgcGxheWVyJ3MgbW9uc3Rlci5cclxuICAgICAgICAgKi9cclxuICAgICAgICBpZiAodGhpcy5fd2lubmVyLmxvb3RlZCkge1xyXG4gICAgICAgICAgICB0aGlzLmRlZmVuc2VNb25zdGVyLmxvb3QoKTtcclxuICAgICAgICAgICAgdGhpcy5fcGxheWVyLmFkZE1vbnN0ZXIodGhpcy5kZWZlbnNlTW9uc3Rlcik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGAke3RoaXMuX3BsYXllci5uYW1lfSB3aW5gKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9wbGF5ZXIuZGVsZXRlTW9uc3Rlcih0aGlzLmRlZmVuc2VNb25zdGVyKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYCR7dGhpcy5fcGxheWVyLm5hbWV9IGxvc2VgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fcGxheWVyLnJlc2V0QXZhaWxhYmxlTW92ZXMoKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7STJEQ29vcmRpbmF0ZXN9IGZyb20gJy4uL2ludGVyZmFjZXMnO1xyXG5pbXBvcnQge01hcH0gZnJvbSAnLi4vbWFwL21hcCc7XHJcbmltcG9ydCB7UGxheWVyfSBmcm9tICcuLi9jcmVhdHVyZXMvcGxheWVyJztcclxuaW1wb3J0IHtDb21wYXJlfSBmcm9tIFwiLi4vdXRpbHMvY29tcGFyZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1vdmVNYW5hZ2VyIHtcclxuXHJcbiAgICBwcml2YXRlIHBsYXllcjogUGxheWVyO1xyXG4gICAgcHJpdmF0ZSBtYXA6IE1hcDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihtYXA6IE1hcCwgcGxheWVyOiBQbGF5ZXIpIHtcclxuICAgICAgICB0aGlzLm1hcCA9IG1hcDtcclxuICAgICAgICB0aGlzLnBsYXllciA9IHBsYXllcjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb3V0T2ZCb3VuZHNPZkFycmF5KGNvb3JkaW5hdGVzOiBJMkRDb29yZGluYXRlcyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiBDb21wYXJlLmlzSW5SYW5nZShjb29yZGluYXRlcy54LCAwLCB0aGlzLm1hcC5nZXRTaXplKCkueCAtIDEpICYmXHJcbiAgICAgICAgICAgICAgICBDb21wYXJlLmlzSW5SYW5nZShjb29yZGluYXRlcy55LCAwLCB0aGlzLm1hcC5nZXRTaXplKCkueSAtIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhZGphY2VudENlbGxIb3Jpek9yVmVyKGNvb3JkaW5hdGVzOiBJMkRDb29yZGluYXRlcyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiAoTWF0aC5hYnMoY29vcmRpbmF0ZXMueCAtIHRoaXMucGxheWVyLmdldENvb3JkaW5hdGVzKCkueCkgK1xyXG4gICAgICAgICAgICAgICAgTWF0aC5hYnMoY29vcmRpbmF0ZXMueSAtIHRoaXMucGxheWVyLmdldENvb3JkaW5hdGVzKCkueSkgPT0gMSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGhhdmVFbm91Z2hNb3ZlbWVudChjb29yZGluYXRlczogSTJEQ29vcmRpbmF0ZXMpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wbGF5ZXIuYXZhaWxhYmxlTW92ZXMgPj0gdGhpcy5tYXAuZ2V0Q2VsbChjb29yZGluYXRlcykudHJhbnNpdGlvbkNvc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDb29yZGluYXRlcyBhcmUgY29ycmVjdCBpZiB0aGUgbWFwIHJhbmdlIGlzIGluY2x1ZGVkXHJcbiAgICAgKiBhbmQgcG9pbnQgdG8gYW4gYWRqYWNlbnQgY2VsbCBob3Jpem9udGFsbHkgb3IgdmVydGljYWxseVxyXG4gICAgICogQHJldHVybnNcclxuICAgICAqIEBwYXJhbSBjb29yZGluYXRlc1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgaXNDb3JyZWN0Q29vcmRpbmF0ZXMoY29vcmRpbmF0ZXM6IEkyRENvb3JkaW5hdGVzKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMub3V0T2ZCb3VuZHNPZkFycmF5KGNvb3JkaW5hdGVzKSAmJlxyXG4gICAgICAgIHRoaXMuYWRqYWNlbnRDZWxsSG9yaXpPclZlcihjb29yZGluYXRlcykgJiZcclxuICAgICAgICB0aGlzLmhhdmVFbm91Z2hNb3ZlbWVudChjb29yZGluYXRlcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG1vdmUoY29vcmRpbmF0ZXM6IEkyRENvb3JkaW5hdGVzKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNDb3JyZWN0Q29vcmRpbmF0ZXMoY29vcmRpbmF0ZXMpKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGAke3RoaXMucGxheWVyLm5hbWV9IG1vdmVkIHRvICgke2Nvb3JkaW5hdGVzLnh9LCAke2Nvb3JkaW5hdGVzLnl9KWApO1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllci5tb3ZlKGNvb3JkaW5hdGVzLCB0aGlzLm1hcC5nZXRDZWxsKGNvb3JkaW5hdGVzKS50cmFuc2l0aW9uQ29zdCk7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGAke3RoaXMucGxheWVyLm5hbWV9IG5vdCBtb3ZlZCB0byAoJHtjb29yZGluYXRlcy54fSwgJHtjb29yZGluYXRlcy55fSlgKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImltcG9ydCB7UGxheWVyfSBmcm9tICcuL2NyZWF0dXJlcy9wbGF5ZXInO1xyXG5pbXBvcnQge01vbnN0ZXIsIFByaWR1cm9rfSBmcm9tICcuL2NyZWF0dXJlcy9tb25zdGVyJztcclxuaW1wb3J0IHtGaWVsZFJlbmRlcmVyfSBmcm9tICcuL3NjZW5lcy9maWVsZFJlbmRlcmVyJztcclxuaW1wb3J0IHtTY2VuZU1hbmFnZXJ9IGZyb20gJy4vc2NlbmVzL3NjZW5lTWFuYWdlcic7XHJcbmltcG9ydCB7R2FtZVN0YXRlfSBmcm9tICcuL2dhbWVTdGF0ZSc7XHJcbmltcG9ydCB7STJEQ29vcmRpbmF0ZXN9IGZyb20gJy4vaW50ZXJmYWNlcyc7XHJcbmltcG9ydCB7RmlnaHRSZW5kZXJlcn0gZnJvbSBcIi4vc2NlbmVzL2ZpZ2h0UmVuZGVyZXJcIjtcclxuaW1wb3J0IHtTZWxlY3RNb25zdGVyUmVuZGVyZXJ9IGZyb20gJy4vc2NlbmVzL3NlbGVjdE1vbnN0ZXJSZW5kZXJlcidcclxuaW1wb3J0IHtGaWdodH0gZnJvbSAnLi9sb2dpYy9maWdodCc7XHJcblxyXG4vKiBHbG9iYWwgdmFyaWFibGVzICovXHJcbmNvbnN0IGdhbWVTdGF0ZSA9IG5ldyBHYW1lU3RhdGUoXHJcbiAgICBuZXcgUGxheWVyKFwiU3RldmVcIiwgXCJoZXJvXCIsIDAsIDAsIDQsIFtuZXcgUHJpZHVyb2soKV0pLFxyXG4gICAgW11cclxuKTtcclxuY29uc3Qgc2NlbmVNYW5hZ2VyID0gbmV3IFNjZW5lTWFuYWdlcihnYW1lU3RhdGUpO1xyXG5cclxuLyogUmVuZGVyZXJzICovXHJcbmNvbnN0IGZpZWxkUmVuZGVyZXIgPSBuZXcgRmllbGRSZW5kZXJlcihnYW1lU3RhdGUsICBzY2VuZU1hbmFnZXIuZ2V0U2NlbmVJbmZvKCdmaWVsZCcpLmVsZW1lbnQsIGNlbGxDbGlja0xpc3RlbmVyKTtcclxubGV0IGZpZ2h0UmVuZGVyZXI6IEZpZ2h0UmVuZGVyZXIgPSBudWxsO1xyXG5sZXQgc2VsZWN0TW9uc3RlclJlbmRlcmVyOiBTZWxlY3RNb25zdGVyUmVuZGVyZXIgPSBudWxsO1xyXG5cclxuLyogUHJlcGFyZSBmaWVsZCAqL1xyXG5maWVsZFJlbmRlcmVyLnJlbmRlcigpO1xyXG5maWVsZFJlbmRlcmVyLnVwZGF0ZSgpO1xyXG5zY2VuZU1hbmFnZXIuc2hvd1NjZW5lKCdmaWVsZCcpO1xyXG5cclxuLyogQ2xpY2sgTGlzdGVuZXIgZm9yIGFsbCBjZWxscyBpbiBmaWVsZCAqL1xyXG5mdW5jdGlvbiBjZWxsQ2xpY2tMaXN0ZW5lcihldmVudDogTW91c2VFdmVudCkge1xyXG5cclxuICAgIGZ1bmN0aW9uIGdldENvb3JkaW5hdGVzT2ZDZWxsKHRhcmdldDogRXZlbnRUYXJnZXQpOiBJMkRDb29yZGluYXRlcyB7XHJcbiAgICAgICAgbGV0IGVsZW1lbnQgPSA8SFRNTEVsZW1lbnQ+dGFyZ2V0O1xyXG4gICAgICAgIGNvbnN0IHRkID0gPEhUTUxUYWJsZUNlbGxFbGVtZW50PmVsZW1lbnQucGFyZW50RWxlbWVudDtcclxuICAgICAgICBjb25zdCByb3cgPSA8SFRNTFRhYmxlUm93RWxlbWVudD50ZC5wYXJlbnRFbGVtZW50O1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHg6IHRkLmNlbGxJbmRleCxcclxuICAgICAgICAgICAgeTogcm93LnJvd0luZGV4XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNvb3JkaW5hdGVzID0gZ2V0Q29vcmRpbmF0ZXNPZkNlbGwoZXZlbnQudGFyZ2V0KTtcclxuICAgIGxldCBvbGRfY29vcmRpbmF0ZTogSTJEQ29vcmRpbmF0ZXMgPSBnYW1lU3RhdGUucGxheWVyLmdldENvb3JkaW5hdGVzKCk7XHJcbiAgICBpZiAoZ2FtZVN0YXRlLm1vdmVNYW5hZ2VyLm1vdmUoY29vcmRpbmF0ZXMpKSB7XHJcbiAgICAgICAgZmllbGRSZW5kZXJlci51cGRhdGVDZWxscyhbXHJcbiAgICAgICAgICAgIG9sZF9jb29yZGluYXRlLFxyXG4gICAgICAgICAgICBnYW1lU3RhdGUucGxheWVyLmdldENvb3JkaW5hdGVzKClcclxuICAgICAgICBdKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gTkVTWkJ1dHRvbkluRmlnaHRDbGlja0xpc3RlbmVyKCkge1xyXG4gICAgZ2FtZVN0YXRlLmZpZ2h0LmF0dGFja0N1cnJlbnQoKTtcclxuICAgIGlmIChnYW1lU3RhdGUuZmlnaHQuaXNGaW5pc2goKSkge1xyXG4gICAgICAgIGdhbWVTdGF0ZS5maWdodC5maW5pc2goKTtcclxuICAgICAgICBzY2VuZU1hbmFnZXIuc2hvd1NjZW5lKCdmaWVsZCcpO1xyXG4gICAgfVxyXG4gICAgZ2FtZVN0YXRlLmZpZ2h0LnN3YXAoKTtcclxuICAgIGZpZ2h0UmVuZGVyZXIudXBkYXRlKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIE5FU1hCdXR0b25JbkZpZ2h0Q2xpY2tMaXN0ZW5lcigpIHtcclxuICAgIGdhbWVTdGF0ZS5maWdodC5kZWZlbmRDdXJyZW50KCk7XHJcbiAgICBnYW1lU3RhdGUuZmlnaHQuc3dhcCgpO1xyXG4gICAgZmlnaHRSZW5kZXJlci51cGRhdGUoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gTkVTWkJ1dHRvbkluRmllbGRDbGlja0xpc3RlbmVyKCkge1xyXG4gICAgbGV0IGNvb3JkaW5hdGVzID0gZ2FtZVN0YXRlLnBsYXllci5nZXRDb29yZGluYXRlcygpO1xyXG4gICAgaWYgKGdhbWVTdGF0ZS5tYXAuZ2V0Q2VsbChjb29yZGluYXRlcykubW9uc3Rlci5sb290ZWQpXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgaWYgKGdhbWVTdGF0ZS5wbGF5ZXIuYXZhaWxhYmxlTW92ZXMgPD0gMClcclxuICAgICAgICByZXR1cm47XHJcbiAgICBzZWxlY3RNb25zdGVyUmVuZGVyZXIgPSBuZXcgU2VsZWN0TW9uc3RlclJlbmRlcmVyKFxyXG4gICAgICAgIHNjZW5lTWFuYWdlci5nZXRTY2VuZUluZm8oJ3NlbGVjdC1tb25zdGVyJykuZWxlbWVudCxcclxuICAgICAgICBnYW1lU3RhdGUucGxheWVyLFxyXG4gICAgICAgIE9LQnV0dG9uSW5TZWxlY3RDbGlja0xpc3RlbmVyXHJcbiAgICApXHJcbiAgICBzZWxlY3RNb25zdGVyUmVuZGVyZXIudXBkYXRlKCk7XHJcbiAgICBzY2VuZU1hbmFnZXIuc2hvd1NjZW5lKCdzZWxlY3QtbW9uc3RlcicpO1xyXG59XHJcblxyXG4vKiBDbGljayBMaXN0ZW5lciBmb3IgT0sgYnV0dG9uIGluIHNlbGVjdC1tb25zdGVyICovXHJcbmZ1bmN0aW9uIE9LQnV0dG9uSW5TZWxlY3RDbGlja0xpc3RlbmVyKCkge1xyXG4gICAgc2NlbmVNYW5hZ2VyLnNob3dTY2VuZSgnZmlnaHQnKTtcclxuICAgIGxldCBtb25zdGVyczogW01vbnN0ZXIsIE1vbnN0ZXJdID0gW1xyXG4gICAgICAgIHNlbGVjdE1vbnN0ZXJSZW5kZXJlci5nZXRDaG9zZW5Nb25zdGVyKCksXHJcbiAgICAgICAgZ2FtZVN0YXRlLm1hcC5nZXRDZWxsKGdhbWVTdGF0ZS5wbGF5ZXIuZ2V0Q29vcmRpbmF0ZXMoKSkubW9uc3RlclxyXG4gICAgXVxyXG4gICAgZmlnaHRSZW5kZXJlciA9IG5ldyBGaWdodFJlbmRlcmVyKFxyXG4gICAgICAgIHNjZW5lTWFuYWdlci5nZXRTY2VuZUluZm8oJ2ZpZ2h0JykuZWxlbWVudCxcclxuICAgICAgICBtb25zdGVycyxcclxuICAgICAgICBORVNaQnV0dG9uSW5GaWdodENsaWNrTGlzdGVuZXIsXHJcbiAgICAgICAgTkVTWEJ1dHRvbkluRmlnaHRDbGlja0xpc3RlbmVyXHJcbiAgICApO1xyXG4gICAgZmlnaHRSZW5kZXJlci51cGRhdGUoKTtcclxuICAgIGdhbWVTdGF0ZS5maWdodCA9IG5ldyBGaWdodChnYW1lU3RhdGUucGxheWVyLCAuLi5tb25zdGVycyk7XHJcbn1cclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgIGlmIChldmVudC5rZXkgPT0gXCJyXCIpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhnYW1lU3RhdGUucGxheWVyLmF2YWlsYWJsZU1vdmVzKTtcclxuICAgIH1cclxufSwgdHJ1ZSk7XHJcbiIsImltcG9ydCB7Q2h1ZGlsYSwgTW9uc3Rlcn0gZnJvbSAnLi4vY3JlYXR1cmVzL21vbnN0ZXInO1xyXG5pbXBvcnQge1JhbmRvbX0gZnJvbSAnLi4vdXRpbHMvcmFuZG9tJztcclxuaW1wb3J0IHtJSGFzQ3NzQ2xhc3N9IGZyb20gJy4uL2ludGVyZmFjZXMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIENlbGwgaW1wbGVtZW50cyBJSGFzQ3NzQ2xhc3Mge1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfY3NzQ2xhc3M6IHN0cmluZztcclxuICAgIHB1YmxpYyBnZXQgY3NzQ2xhc3MoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY3NzQ2xhc3M7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgY29zdCBvZiB0aGUgdHJhbnNpdGlvbiBmb3IgdGhlIHBsYXllciBtb3ZpbmcgdG8gdGhpcyBjZWxsXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IF90cmFuc2l0aW9uQ29zdDogbnVtYmVyO1xyXG4gICAgcHVibGljIGdldCB0cmFuc2l0aW9uQ29zdCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl90cmFuc2l0aW9uQ29zdDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9tb25zdGVyOiBNb25zdGVyO1xyXG4gICAgcHVibGljIGdldCBtb25zdGVyKCk6IE1vbnN0ZXJ7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX21vbnN0ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGNzc0NsYXNzXHJcbiAgICAgKiBAcGFyYW0gdHJhbnNpdGlvbkNvc3RNaW5NYXggaXMgbWluaW11bSBhbmQgbWF4aW11bSB2YWx1ZVxyXG4gICAgICogQHBhcmFtIHBvc3NpYmxlQ3JlYXR1cmVzXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGNzc0NsYXNzOiBzdHJpbmcsIHRyYW5zaXRpb25Db3N0TWluTWF4IDogW251bWJlciwgbnVtYmVyXSwgcG9zc2libGVDcmVhdHVyZXM6IE1vbnN0ZXJbXSkge1xyXG4gICAgICAgIHRoaXMuX2Nzc0NsYXNzID0gY3NzQ2xhc3M7XHJcbiAgICAgICAgdGhpcy5fdHJhbnNpdGlvbkNvc3QgPSBSYW5kb20uaW5SYW5nZSguLi50cmFuc2l0aW9uQ29zdE1pbk1heCk7XHJcbiAgICAgICAgdGhpcy5fbW9uc3RlciA9IFJhbmRvbS5vbmVJdGVtRnJvbUFycmF5KHBvc3NpYmxlQ3JlYXR1cmVzKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIExhbmRDZWxsIGV4dGVuZHMgQ2VsbCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcignbGFuZCcsIFsxLCAyXSwgW25ldyBDaHVkaWxhKCldKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFZvbGNhbm9DZWxsIGV4dGVuZHMgQ2VsbCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigndm9sY2FubycsIFszLCA1XSwgW25ldyBDaHVkaWxhKCldKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEZvcmVzdENlbGwgZXh0ZW5kcyBDZWxsIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCdmb3Jlc3QnLCBbMywgNV0sIFtuZXcgQ2h1ZGlsYSgpXSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBMYWtlQ2VsbCBleHRlbmRzIENlbGwge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoJ2xha2UnLCBbMywgNV0sIFtuZXcgQ2h1ZGlsYSgpXSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGNsYXNzIERhcmtDYXN0bGVDZWxsIGV4dGVuZHMgQ2VsbCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcignZGFya19jYXN0bGUnLCBbMywgNV0sIFtuZXcgQ2h1ZGlsYSgpXSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBXaGl0ZUNhc3RsZUNlbGwgZXh0ZW5kcyBDZWxsIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCd3aGl0ZV9jYXN0bGUnLCBbMywgNV0sIFtuZXcgQ2h1ZGlsYSgpXSk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHtDZWxsLCBMYW5kQ2VsbCwgVm9sY2Fub0NlbGwsIEZvcmVzdENlbGwsIExha2VDZWxsLCBXaGl0ZUNhc3RsZUNlbGwsIERhcmtDYXN0bGVDZWxsfSBmcm9tICcuL2NlbGwnO1xyXG5pbXBvcnQge0kyRENvb3JkaW5hdGVzfSBmcm9tICcuLi9pbnRlcmZhY2VzJztcclxuaW1wb3J0IHtSYW5kb219IGZyb20gJy4uL3V0aWxzL3JhbmRvbSc7XHJcbmltcG9ydCB7Q29tcGFyZX0gZnJvbSBcIi4uL3V0aWxzL2NvbXBhcmVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBNYXAge1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBzaXplWDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBzaXplWTogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBkYXRhOiBDZWxsW11bXTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihzaXplWDogbnVtYmVyLCBzaXplWTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5zaXplWCA9IHNpemVYO1xyXG4gICAgICAgIHRoaXMuc2l6ZVkgPSBzaXplWTtcclxuICAgICAgICB0aGlzLmRhdGEgPSBNYXAuZ2VuZXJhdGUoc2l6ZVgsIHNpemVZKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0Q2VsbChjb29yZGluYXRlczogSTJEQ29vcmRpbmF0ZXMpOiBDZWxsIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kYXRhW2Nvb3JkaW5hdGVzLnldW2Nvb3JkaW5hdGVzLnhdO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRTaXplKCk6IHsgeDogbnVtYmVyLCB5OiBudW1iZXIgfSB7XHJcbiAgICAgICAgcmV0dXJuIHsgeDogdGhpcy5zaXplWCwgeTogdGhpcy5zaXplWSB9O1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZW5lcmF0ZShzaXplWDogbnVtYmVyLCBzaXplWTogbnVtYmVyKTogQ2VsbFtdW10ge1xyXG4gICAgICAgIGNvbnN0IGRlZmF1bHRDZWxsID0gTGFuZENlbGw7XHJcbiAgICAgICAgbGV0IHBvc3NpYmxlQ2VsbHMgPSBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG9iajogVm9sY2Fub0NlbGwsXHJcbiAgICAgICAgICAgICAgICByYW5kOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWluOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIG1heDogMTBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgb2JqOiBGb3Jlc3RDZWxsLFxyXG4gICAgICAgICAgICAgICAgcmFuZDoge1xyXG4gICAgICAgICAgICAgICAgICAgIG1pbjogMTEsXHJcbiAgICAgICAgICAgICAgICAgICAgbWF4OiAzMFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBvYmo6IExha2VDZWxsLFxyXG4gICAgICAgICAgICAgICAgcmFuZDoge1xyXG4gICAgICAgICAgICAgICAgICAgIG1pbjogMzEsXHJcbiAgICAgICAgICAgICAgICAgICAgbWF4OiAzNVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGBNYXA6IGdlbmVyYXRlLCAoJHtzaXplWH0sICR7c2l6ZVl9KWApO1xyXG4gICAgICAgIGNvbnN0IGRhdGE6IENlbGxbXVtdID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCBzaXplWTsgKyt5KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJvdzogQ2VsbFtdID0gW107XHJcbiAgICAgICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgc2l6ZVg7ICsreCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHJhbmROdW0gPSBSYW5kb20uaW5SYW5nZSgxLCAxMDApO1xyXG4gICAgICAgICAgICAgICAgbGV0IG9iamVjdEZvckNyZWF0ZSA9IG51bGw7XHJcblxyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwb3NzaWJsZUNlbGxzLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKENvbXBhcmUuaXNJblJhbmdlKHJhbmROdW0sIHBvc3NpYmxlQ2VsbHNbaV0ucmFuZC5taW4sIHBvc3NpYmxlQ2VsbHNbaV0ucmFuZC5tYXgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdEZvckNyZWF0ZSA9IHBvc3NpYmxlQ2VsbHNbaV0ub2JqO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCFvYmplY3RGb3JDcmVhdGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBvYmplY3RGb3JDcmVhdGUgPSBkZWZhdWx0Q2VsbDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByb3cucHVzaChuZXcgb2JqZWN0Rm9yQ3JlYXRlKCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRhdGEucHVzaChyb3cpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgZGVmYXVsdFBvc2l0aW9ucyA9IFtcclxuICAgICAgICAgICAgeyB4OiAwLCB5OiAwLCBvYmo6IExhbmRDZWxsfSxcclxuICAgICAgICAgICAgeyB4OiAwLCB5OiBzaXplWSAtIDEsIG9iajogTGFuZENlbGx9LFxyXG4gICAgICAgICAgICB7IHg6IHNpemVYIC0gMSwgeTogc2l6ZVkgLSAxLCBvYmo6IFdoaXRlQ2FzdGxlQ2VsbH0sXHJcbiAgICAgICAgICAgIHsgeDogc2l6ZVggLSAxLCB5OiAwLCBvYmo6IERhcmtDYXN0bGVDZWxsfVxyXG4gICAgICAgIF1cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRlZmF1bHRQb3NpdGlvbnMubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZGVmYXVsdFBvc2l0aW9uc1tpXSk7XHJcbiAgICAgICAgICAgIGxldCBvYmplY3RGb3JDcmVhdGUgPSBkZWZhdWx0UG9zaXRpb25zW2ldLm9iajtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cob2JqZWN0Rm9yQ3JlYXRlKTtcclxuXHJcbiAgICAgICAgICAgIGRhdGFbZGVmYXVsdFBvc2l0aW9uc1tpXS55XVtkZWZhdWx0UG9zaXRpb25zW2ldLnhdID0gbmV3IG9iamVjdEZvckNyZWF0ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyhgTWFwOiBnZW5lcmF0ZWQsICgke3NpemVYfSwgJHtzaXplWX0pYCk7XHJcbiAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge01hcH0gZnJvbSAnLi4vbWFwL21hcCc7XHJcbmltcG9ydCB7STJEQ29vcmRpbmF0ZXMsIElEcmF3YWJsZUluRmllbGQsIElIYXNDc3NDbGFzcywgSVJlbmRlcmVyfSBmcm9tICcuLi9pbnRlcmZhY2VzJztcclxuaW1wb3J0IHtHYW1lU3RhdGV9IGZyb20gJy4uL2dhbWVTdGF0ZSc7XHJcbmltcG9ydCB7Q29tcGFyZX0gZnJvbSBcIi4uL3V0aWxzL2NvbXBhcmVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBGaWVsZFJlbmRlcmVyIGltcGxlbWVudHMgSVJlbmRlcmVyIHtcclxuICAgIHByaXZhdGUgbWFwOiBNYXA7XHJcbiAgICBwcml2YXRlIGdhbWVTdGF0ZTogR2FtZVN0YXRlO1xyXG4gICAgcHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50O1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBtb3VzZUxpc3RlbmVyOiBhbnk7XHJcbiAgICBcclxuICAgIGNvbnN0cnVjdG9yKGdhbWVTdGF0ZTogR2FtZVN0YXRlLCBnYW1lRmllbGQ6IEhUTUxFbGVtZW50LCBtb3VzZUxpc3RlbmVyOiBhbnkpIHtcclxuICAgICAgICB0aGlzLm1hcCA9IGdhbWVTdGF0ZS5tYXA7XHJcbiAgICAgICAgdGhpcy5nYW1lU3RhdGUgPSBnYW1lU3RhdGU7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZ2FtZUZpZWxkLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3RhYmxlJylbMF07XHJcbiAgICAgICAgdGhpcy5tb3VzZUxpc3RlbmVyID0gbW91c2VMaXN0ZW5lcjsgXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZW5lcmF0ZXMgYSB0YWJsZSBhbmQgYXBwZW5kIGl0IHRvIHRoaXMuZWxlbWVudFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmVuZGVyKCk6IHZvaWQge1xyXG4gICAgICAgIGxldCB0YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RhYmxlJyk7XHJcbiAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCB0aGlzLm1hcC5nZXRTaXplKCkueTsgKyt5KSB7XHJcbiAgICAgICAgICAgIGxldCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCAgPCB0aGlzLm1hcC5nZXRTaXplKCkueDsgKyt4KSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XHJcbiAgICAgICAgICAgICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5tb3VzZUxpc3RlbmVyKTtcclxuICAgICAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZChjZWxsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0YWJsZS5hcHBlbmRDaGlsZChyb3cpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmVsZW1lbnQuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQodGFibGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0VGFibGUoKTogSFRNTFRhYmxlRWxlbWVudCB7XHJcbiAgICAgICAgcmV0dXJuIDxIVE1MVGFibGVFbGVtZW50PiB0aGlzLmVsZW1lbnQuY2hpbGRyZW5bMF07XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgY2VsbCBpbiB0YWJsZVxyXG4gICAgICogQHBhcmFtIGNvb3JkaW5hdGVzXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGdldENlbGwoY29vcmRpbmF0ZXM6IEkyRENvb3JkaW5hdGVzKTogRWxlbWVudCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VGFibGUoKS5yb3dzW2Nvb3JkaW5hdGVzLnldLmNlbGxzW2Nvb3JkaW5hdGVzLnhdO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2VuZXJhdGVzIGRpdiBlbGVtZW50IHdpdGggc29tZSBjc3MgY2xhc3NcclxuICAgICAqIEBwYXJhbSBvYmpcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGdldEhUTUxTcHJpdGUob2JqOiBJSGFzQ3NzQ2xhc3MpOiBIVE1MRWxlbWVudCB7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHJlc3VsdC5jbGFzc0xpc3QuYWRkKCdzcHJpdGUnKTtcclxuICAgICAgICByZXN1bHQuY2xhc3NMaXN0LmFkZChvYmouY3NzQ2xhc3MpO1xyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRDcmVhdHVyZXNMaXN0KCk6IElEcmF3YWJsZUluRmllbGRbXSB7XHJcbiAgICAgICAgcmV0dXJuIFt0aGlzLmdhbWVTdGF0ZS5wbGF5ZXIsIC4uLnRoaXMuZ2FtZVN0YXRlLmNyZWF0dXJlc107XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHVwZGF0ZSgpOiB2b2lkIHtcclxuICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHRoaXMubWFwLmdldFNpemUoKS55OyArK3kpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB0aGlzLm1hcC5nZXRTaXplKCkueDsgKyt4KSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbWFwQ2VsbCA9IHRoaXMubWFwLmdldENlbGwoeyB4OiB4LCB5OiB5IH0pO1xyXG4gICAgICAgICAgICAgICAgbGV0IEhUTUxDZWxsID0gdGhpcy5nZXRDZWxsKHsgeDogeCwgeTogeSB9KTtcclxuICAgICAgICAgICAgICAgIEhUTUxDZWxsLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICBIVE1MQ2VsbC5hcHBlbmRDaGlsZChGaWVsZFJlbmRlcmVyLmdldEhUTUxTcHJpdGUobWFwQ2VsbCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGNyZWF0dXJlc0xpc3QgPSB0aGlzLmdldENyZWF0dXJlc0xpc3QoKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNyZWF0dXJlc0xpc3QubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgICAgbGV0IGNyZWF0dXJlID0gY3JlYXR1cmVzTGlzdFtpXTtcclxuICAgICAgICAgICAgdGhpcy5nZXRDZWxsKGNyZWF0dXJlLmdldENvb3JkaW5hdGVzKCkpLmFwcGVuZENoaWxkKEZpZWxkUmVuZGVyZXIuZ2V0SFRNTFNwcml0ZShjcmVhdHVyZSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFVwZGF0ZXMgY2VsbHMgb25seSBhdCBzcGVjaWZpYyBjb29yZGluYXRlcy4gTmVlZGVkIHRvIGRyYXcgQ1NTIGFuaW1hdGlvbiBvbmx5IGZvciBzcGVjaWZpYyBjZWxscy5cclxuICAgICAqIEBwYXJhbSBjb29yZGluYXRlc1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgdXBkYXRlQ2VsbHMoY29vcmRpbmF0ZXM6IEkyRENvb3JkaW5hdGVzW10pOiB2b2lkIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvb3JkaW5hdGVzLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgIGxldCBtYXBDZWxsID0gdGhpcy5tYXAuZ2V0Q2VsbChjb29yZGluYXRlc1tpXSk7XHJcbiAgICAgICAgICAgIGxldCBIVE1MQ2VsbCA9IHRoaXMuZ2V0Q2VsbChjb29yZGluYXRlc1tpXSk7XHJcbiAgICAgICAgICAgIEhUTUxDZWxsLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgICAgIEhUTUxDZWxsLmFwcGVuZENoaWxkKEZpZWxkUmVuZGVyZXIuZ2V0SFRNTFNwcml0ZShtYXBDZWxsKSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBjcmVhdHVyZXNMaXN0ID0gdGhpcy5nZXRDcmVhdHVyZXNMaXN0KCk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgY3JlYXR1cmVzTGlzdC5sZW5ndGg7ICsraikge1xyXG4gICAgICAgICAgICAgICAgaWYgKENvbXBhcmUuc2hhbGxvd0VxdWFsKGNyZWF0dXJlc0xpc3Rbal0uZ2V0Q29vcmRpbmF0ZXMoKSwgY29vcmRpbmF0ZXNbaV0pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgSFRNTENlbGwuYXBwZW5kQ2hpbGQoRmllbGRSZW5kZXJlci5nZXRIVE1MU3ByaXRlKGNyZWF0dXJlc0xpc3Rbal0pKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImltcG9ydCB7TW9uc3Rlcn0gZnJvbSBcIi4uL2NyZWF0dXJlcy9tb25zdGVyXCI7XHJcbmltcG9ydCB7SVJlbmRlcmVyfSBmcm9tIFwiLi4vaW50ZXJmYWNlc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEZpZ2h0UmVuZGVyZXIgaW1wbGVtZW50cyBJUmVuZGVyZXIge1xyXG4gICAgcHJpdmF0ZSBlbGVtZW50OiBIVE1MRWxlbWVudDtcclxuICAgIHByaXZhdGUgbW9uc3RlcnM6IFtNb25zdGVyLCBNb25zdGVyXTtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgTkVTWkJ1dHRvbkNsaWNrTGlzdGVuZXI6IGFueTtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgTkVTWEJ1dHRvbkNsaWNrTGlzdGVuZXI6IGFueTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lRmlnaHQ6IEhUTUxFbGVtZW50LCBtb25zdGVyczogW01vbnN0ZXIsIE1vbnN0ZXJdLCBsaXN0ZW5lcl8xOiBhbnksIGxpc3RlbmVyXzI6IGFueSkge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGdhbWVGaWdodDtcclxuICAgICAgICB0aGlzLm1vbnN0ZXJzID0gbW9uc3RlcnM7XHJcbiAgICAgICAgdGhpcy5ORVNaQnV0dG9uQ2xpY2tMaXN0ZW5lciA9IGxpc3RlbmVyXzE7XHJcbiAgICAgICAgdGhpcy5ORVNYQnV0dG9uQ2xpY2tMaXN0ZW5lciA9IGxpc3RlbmVyXzI7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlbmRlcigpOiB2b2lkIHtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdXBkYXRlKCk6IHZvaWQge1xyXG4gICAgICAgIGxldCBtb25zdGVyc0RpdiA9IHRoaXMuZWxlbWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdtb25zdGVycycpWzBdLmNoaWxkcmVuO1xyXG4gICAgICAgIGNvbnNvbGUuYXNzZXJ0KG1vbnN0ZXJzRGl2Lmxlbmd0aCA9PSB0aGlzLm1vbnN0ZXJzLmxlbmd0aCk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtb25zdGVyc0Rpdi5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICBsZXQgc3ByaXRlID0gbW9uc3RlcnNEaXZbaV0uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc3ByaXRlJylbMF07XHJcbiAgICAgICAgICAgIGxldCBoZWFsdGggPSBtb25zdGVyc0RpdltpXS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdoZWFsdGgnKVswXTtcclxuICAgICAgICAgICAgbGV0IGRlZmVuc2UgPSBtb25zdGVyc0RpdltpXS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdkZWZlbnNlJylbMF07XHJcblxyXG4gICAgICAgICAgICBzcHJpdGUuY2xhc3NOYW1lID0gYHNwcml0ZSAke3RoaXMubW9uc3RlcnNbaV0uY3NzQ2xhc3N9YDtcclxuICAgICAgICAgICAgaWYgKGkgPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgc3ByaXRlLmNsYXNzTGlzdC5hZGQoJ21pcnJvclknKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBoZWFsdGguaW5uZXJIVE1MID0gYCR7dGhpcy5tb25zdGVyc1tpXS5oZWFsdGh9YDtcclxuICAgICAgICAgICAgZGVmZW5zZS5pbm5lckhUTUwgPSBgJHt0aGlzLm1vbnN0ZXJzW2ldLmRlZmVuc2V9YDtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGJ1dHRvbnMgPSB0aGlzLmVsZW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYWN0aW9uLWJ0bicpWzBdLmNoaWxkcmVuO1xyXG4gICAgICAgIGNvbnNvbGUuYXNzZXJ0KGJ1dHRvbnMubGVuZ3RoID09IDIpO1xyXG4gICAgICAgIGJ1dHRvbnNbMF0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLk5FU1pCdXR0b25DbGlja0xpc3RlbmVyKTtcclxuICAgICAgICBidXR0b25zWzFdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5ORVNYQnV0dG9uQ2xpY2tMaXN0ZW5lcik7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge0lTY2VuZUluZm99IGZyb20gJy4uL2ludGVyZmFjZXMnO1xyXG5pbXBvcnQge0dhbWVTdGF0ZX0gZnJvbSAnLi4vZ2FtZVN0YXRlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBTY2VuZU1hbmFnZXIge1xyXG4gICAgZ2FtZVN0YXRlOiBHYW1lU3RhdGU7XHJcbiAgICBfY3VycmVudFNjZW5lOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgZ2V0IGN1cnJlbnRTY2VuZSgpOiBJU2NlbmVJbmZvIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRTY2VuZUluZm8odGhpcy5fY3VycmVudFNjZW5lKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lU3RhdGU6IEdhbWVTdGF0ZSkge1xyXG4gICAgICAgIHRoaXMuZ2FtZVN0YXRlID0gZ2FtZVN0YXRlO1xyXG4gICAgICAgIHRoaXMuX2N1cnJlbnRTY2VuZSA9IFwiXCI7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFNjZW5lSW5mbyhuYW1lOiBzdHJpbmcpOiBJU2NlbmVJbmZvIHtcclxuICAgICAgICBsZXQgc2NlbmVzID0gdGhpcy5nYW1lU3RhdGUuc2NlbmVzO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2NlbmVzLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgIGlmIChzY2VuZXNbaV0ubmFtZSA9PSBuYW1lKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc2NlbmVzW2ldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoZSBzY2VuZSBkb2VzIG5vdCBleGlzdFwiKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2hvd1NjZW5lKG5hbWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX2N1cnJlbnRTY2VuZSA9IG5hbWU7XHJcbiAgICAgICAgbGV0IHNjZW5lID0gdGhpcy5nZXRTY2VuZUluZm8obmFtZSk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmdhbWVTdGF0ZS5zY2VuZXMubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgICAgdGhpcy5nYW1lU3RhdGUuc2NlbmVzW2ldLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzY2VuZS5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7SVJlbmRlcmVyfSBmcm9tIFwiLi4vaW50ZXJmYWNlc1wiO1xyXG5pbXBvcnQge1BsYXllcn0gZnJvbSBcIi4uL2NyZWF0dXJlcy9wbGF5ZXJcIjtcclxuaW1wb3J0IHtNb25zdGVyfSBmcm9tIFwiLi4vY3JlYXR1cmVzL21vbnN0ZXJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTZWxlY3RNb25zdGVyUmVuZGVyZXIgaW1wbGVtZW50cyBJUmVuZGVyZXIge1xyXG4gICAgcHJpdmF0ZSBkb21FbGVtZW50OiBIVE1MRWxlbWVudDtcclxuICAgIHByaXZhdGUgcGxheWVyOiBQbGF5ZXI7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IE9rQnV0dG9uTGlzdGVuZXI6IGFueTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihkb21FbGVtZW50OiBIVE1MRWxlbWVudCwgcGxheWVyOiBQbGF5ZXIsIE9rQnV0dG9uTGlzdGVuZXI6IGFueSkge1xyXG4gICAgICAgIHRoaXMuZG9tRWxlbWVudCA9IGRvbUVsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSBwbGF5ZXI7XHJcbiAgICAgICAgdGhpcy5Pa0J1dHRvbkxpc3RlbmVyID0gT2tCdXR0b25MaXN0ZW5lcjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVuZGVyKCk6IHZvaWQge1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1cGRhdGUoKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IHNlbGVjdCA9IHRoaXMuZG9tRWxlbWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzZWxlY3QnKVswXTtcclxuICAgICAgICBzZWxlY3QuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucGxheWVyLmF2YWlsYWJsZU1vbnN0ZXJzLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgIGxldCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcclxuICAgICAgICAgICAgb3B0aW9uLnZhbHVlID0gYCR7aX1gO1xyXG4gICAgICAgICAgICBvcHRpb24uaW5uZXJUZXh0ID0gdGhpcy5wbGF5ZXIuYXZhaWxhYmxlTW9uc3RlcnNbaV0uZ2V0U3RyaW5nKCk7XHJcbiAgICAgICAgICAgIHNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgT2tCdXR0b24gPSB0aGlzLmRvbUVsZW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnb2snKVswXTtcclxuICAgICAgICBPa0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuT2tCdXR0b25MaXN0ZW5lcik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldENob3Nlbk1vbnN0ZXIoKTogTW9uc3RlciB7XHJcbiAgICAgICAgbGV0IHNlbGVjdCA9IDxIVE1MU2VsZWN0RWxlbWVudD50aGlzLmRvbUVsZW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc2VsZWN0JylbMF07XHJcbiAgICAgICAgbGV0IGluZGV4ID0gc2VsZWN0LnZhbHVlO1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBsYXllci5hdmFpbGFibGVNb25zdGVyc1twYXJzZUludChpbmRleCldO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGNsYXNzIENvbXBhcmUge1xyXG4gICAgLyoqXHJcbiAgICAgKiBpcyB0aGUgbnVtYmVyIHdpdGhpbiB0aGUgYm91bmRzXHJcbiAgICAgKiBAcGFyYW0geFxyXG4gICAgICogQHBhcmFtIG1pblxyXG4gICAgICogQHBhcmFtIG1heFxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgaXNJblJhbmdlKHg6IG51bWJlciwgbWluOiBudW1iZXIsIG1heDogbnVtYmVyKSB7XHJcbiAgICAgICAgcmV0dXJuIG1pbiA8PSB4ICYmIHggPD0gbWF4O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2hlY2tzIGZvciBkaWN0aW9uYXJ5IGNvbXBhcmlzb25zLlxyXG4gICAgICpcclxuICAgICAqIEluIEphdmFTY3JpcHQgYW5kIFR5cGVTY3JpcHQsIElmIHR3byBlbGVtZW50cyBhcmUgZWxlbWVudHMgdGhhdCBpbXBsZW1lbnQgc29tZSBraW5kIG9mIGludGVyZmFjZSwgdGhlbiBjb21wYXJpbmdcclxuICAgICAqIHRoZW0gdXNpbmcgY29tcGFyaXNvbiBvcGVyYXRvcnMgaXMgZmFsc2UuIEV2ZW4gaWYgdGhlc2Ugb2JqZWN0cyBhcmUgZXF1YWwgaW4gdmFsdWUuXHJcbiAgICAgKlxyXG4gICAgICogVGhpcyBmdW5jdGlvbiBzb2x2ZXMgdGhlIHByb2JsZW0gYW5kIG1hdGNoZXMgdGhlIGVsZW1lbnRzIGJ5IHRoZSB2YWx1ZSBvZiBlYWNoIGZpZWxkLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBhXHJcbiAgICAgKiBAcGFyYW0gYlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgc2hhbGxvd0VxdWFsKGE6IGFueSwgYjogYW55KTogYm9vbGVhbiB7XHJcbiAgICAgICAgY29uc3Qga2V5czEgPSBPYmplY3Qua2V5cyhhKTtcclxuICAgICAgICBjb25zdCBrZXlzMiA9IE9iamVjdC5rZXlzKGIpO1xyXG5cclxuICAgICAgICBpZiAoa2V5czEubGVuZ3RoICE9PSBrZXlzMi5sZW5ndGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yIChsZXQga2V5IG9mIGtleXMxKSB7XHJcbiAgICAgICAgICAgIGlmIChhW2tleV0gIT09IGJba2V5XSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICB9XHJcbn0iLCJleHBvcnQgY2xhc3MgUmFuZG9tIHtcclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIGFcclxuICAgICAqIEBwYXJhbSBiXHJcbiAgICAgKiBAcmV0dXJucyByYW5kb20gbnVtYmVyIGJldHdlZW4gYSBhbmQgYiwgaW5jbHVzaXZlXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBpblJhbmdlKGE6IG51bWJlciwgYjogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGIgLSBhICsgMSkpICsgYTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgb25lSXRlbUZyb21BcnJheShhcnI6IGFueVtdKTogYW55e1xyXG4gICAgICAgIHJldHVybiBhcnJbdGhpcy5pblJhbmdlKDAsIGFyci5sZW5ndGggLSAxKV07XHJcbiAgICB9XHJcbn0iXX0=
