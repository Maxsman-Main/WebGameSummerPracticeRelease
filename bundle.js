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
exports.BlackDragon = exports.Dragon = exports.Shark = exports.Monster = void 0;
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

var Shark = function (_Monster) {
    _inherits(Shark, _Monster);

    function Shark() {
        _classCallCheck(this, Shark);

        return _possibleConstructorReturn(this, (Shark.__proto__ || Object.getPrototypeOf(Shark)).call(this, 'Shark', 'shark', 'p', 'red', 120, 5, 30, 30, true));
    }

    return Shark;
}(Monster);

exports.Shark = Shark;

var Dragon = function (_Monster2) {
    _inherits(Dragon, _Monster2);

    function Dragon() {
        _classCallCheck(this, Dragon);

        return _possibleConstructorReturn(this, (Dragon.__proto__ || Object.getPrototypeOf(Dragon)).call(this, 'Dragon', 'dragon', 'c', 'red', 100, 4, 20, 10, false));
    }

    return Dragon;
}(Monster);

exports.Dragon = Dragon;

var BlackDragon = function BlackDragon() {
    _classCallCheck(this, BlackDragon);
};

exports.BlackDragon = BlackDragon;

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
var gameState = new gameState_1.GameState(new player_1.Player("Steve", "hero_1", 0, 0, 4, [new monster_1.Shark()]), []);
var sceneManager = new sceneManager_1.SceneManager(gameState);
/* Renderers */
var fieldRenderer = new fieldRenderer_1.FieldRenderer(gameState, sceneManager.getSceneInfo('field').element, cellClickListener, NESZButtonInFieldClickListener, NESXButtonInFieldClickListener);
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
        fieldRenderer.updateInfo();
        fieldRenderer.updateCells([old_coordinate, gameState.player.getCoordinates()]);
    }
}
function NESZButtonInFightClickListener() {
    gameState.fight.attackCurrent();
    if (gameState.fight.isFinish()) {
        gameState.fight.finish();
        fieldRenderer.updateInfo();
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
function NESXButtonInFieldClickListener() {
    gameState.player.resetAvailableMoves();
    console.log("Reset");
    gameState.player.setAvailableMoves(10);
    fieldRenderer.updateInfo();
}
/* Click Listener for OK button in select-monster */
function OKButtonInSelectClickListener() {
    sceneManager.showScene('fight');
    var monsters = [selectMonsterRenderer.getChosenMonster(), gameState.map.getCell(gameState.player.getCoordinates()).monster];
    fightRenderer = new fightRenderer_1.FightRenderer(sceneManager.getSceneInfo('fight').element, monsters, NESZButtonInFightClickListener, NESXButtonInFightClickListener);
    fightRenderer.render();
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

        return _possibleConstructorReturn(this, (LandCell.__proto__ || Object.getPrototypeOf(LandCell)).call(this, 'land', [1, 2], [new monster_1.Dragon()]));
    }

    return LandCell;
}(Cell);

exports.LandCell = LandCell;

var VolcanoCell = function (_Cell2) {
    _inherits(VolcanoCell, _Cell2);

    function VolcanoCell() {
        _classCallCheck(this, VolcanoCell);

        return _possibleConstructorReturn(this, (VolcanoCell.__proto__ || Object.getPrototypeOf(VolcanoCell)).call(this, 'volcano', [3, 5], [new monster_1.Dragon()]));
    }

    return VolcanoCell;
}(Cell);

exports.VolcanoCell = VolcanoCell;

var ForestCell = function (_Cell3) {
    _inherits(ForestCell, _Cell3);

    function ForestCell() {
        _classCallCheck(this, ForestCell);

        return _possibleConstructorReturn(this, (ForestCell.__proto__ || Object.getPrototypeOf(ForestCell)).call(this, 'forest', [3, 5], [new monster_1.Dragon()]));
    }

    return ForestCell;
}(Cell);

exports.ForestCell = ForestCell;

var LakeCell = function (_Cell4) {
    _inherits(LakeCell, _Cell4);

    function LakeCell() {
        _classCallCheck(this, LakeCell);

        return _possibleConstructorReturn(this, (LakeCell.__proto__ || Object.getPrototypeOf(LakeCell)).call(this, 'lake', [3, 5], [new monster_1.Dragon()]));
    }

    return LakeCell;
}(Cell);

exports.LakeCell = LakeCell;

var DarkCastleCell = function (_Cell5) {
    _inherits(DarkCastleCell, _Cell5);

    function DarkCastleCell() {
        _classCallCheck(this, DarkCastleCell);

        return _possibleConstructorReturn(this, (DarkCastleCell.__proto__ || Object.getPrototypeOf(DarkCastleCell)).call(this, 'dark_castle', [3, 5], [new monster_1.Dragon()]));
    }

    return DarkCastleCell;
}(Cell);

exports.DarkCastleCell = DarkCastleCell;

var WhiteCastleCell = function (_Cell6) {
    _inherits(WhiteCastleCell, _Cell6);

    function WhiteCastleCell() {
        _classCallCheck(this, WhiteCastleCell);

        return _possibleConstructorReturn(this, (WhiteCastleCell.__proto__ || Object.getPrototypeOf(WhiteCastleCell)).call(this, 'white_castle', [3, 5], [new monster_1.Dragon()]));
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
    function FieldRenderer(gameState, gameField, mouseListener, buttonZClickListener, buttonXClickListener) {
        _classCallCheck(this, FieldRenderer);

        this.map = gameState.map;
        this.gameState = gameState;
        this.element = gameField;
        this.cellClickListener = mouseListener;
        this.buttonZClickListener = buttonZClickListener;
        this.buttonXClickListener = buttonXClickListener;
    }
    /**
     * Generates a table and append it to this.element
     */


    _createClass(FieldRenderer, [{
        key: "render",
        value: function render() {
            var table = this.getTable();
            table.innerHTML = "";
            for (var y = 0; y < this.map.getSize().y; ++y) {
                var row = document.createElement('tr');
                for (var x = 0; x < this.map.getSize().x; ++x) {
                    var cell = document.createElement('td');
                    cell.addEventListener('click', this.cellClickListener);
                    row.appendChild(cell);
                }
                table.appendChild(row);
            }
            this.getZButton().addEventListener('click', this.buttonZClickListener);
            this.getXButton().addEventListener('click', this.buttonXClickListener);
        }
    }, {
        key: "getTable",
        value: function getTable() {
            return this.element.getElementsByClassName('table')[0];
        }
    }, {
        key: "getButtons",
        value: function getButtons() {
            return this.element.getElementsByClassName("buttons")[0].children;
        }
    }, {
        key: "getZButton",
        value: function getZButton() {
            return this.getButtons()[0];
        }
    }, {
        key: "getXButton",
        value: function getXButton() {
            return this.getButtons()[1];
        }
    }, {
        key: "getInfoElement",
        value: function getInfoElement() {
            return this.element.getElementsByClassName('info')[0];
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
            this.updateInfo();
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
    }, {
        key: "updateInfo",
        value: function updateInfo() {
            this.getInfoElement().innerHTML = "Available moves: " + this.gameState.player.availableMoves;
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
        value: function render() {
            this.getZButton().addEventListener('click', this.NESZButtonClickListener);
            this.getXButton().addEventListener('click', this.NESXButtonClickListener);
        }
    }, {
        key: "getMonsterDivs",
        value: function getMonsterDivs() {
            return this.element.getElementsByClassName("monsters")[0].children;
        }
    }, {
        key: "getButtons",
        value: function getButtons() {
            return this.element.getElementsByClassName('action-btn')[0].children;
        }
    }, {
        key: "getZButton",
        value: function getZButton() {
            return this.getButtons()[0];
        }
    }, {
        key: "getXButton",
        value: function getXButton() {
            return this.getButtons()[1];
        }
    }, {
        key: "update",
        value: function update() {
            var monsterDivs = this.getMonsterDivs();
            for (var i = 0; i < monsterDivs.length; ++i) {
                var sprite = FightRenderer.getSprite(monsterDivs[i]);
                var health = FightRenderer.getHealth(monsterDivs[i]);
                var defense = FightRenderer.getDefense(monsterDivs[i]);
                sprite.className = "sprite " + this.monsters[i].cssClass;
                if (i == 1) {
                    sprite.classList.add('mirrorY');
                }
                health.innerHTML = "" + this.monsters[i].health;
                defense.innerHTML = "" + this.monsters[i].defense;
            }
        }
    }], [{
        key: "getSprite",
        value: function getSprite(elem) {
            return elem.getElementsByClassName('sprite')[0];
        }
    }, {
        key: "getHealth",
        value: function getHealth(elem) {
            return elem.getElementsByClassName('health')[0];
        }
    }, {
        key: "getDefense",
        value: function getDefense(elem) {
            return elem.getElementsByClassName('defense')[0];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvc2NyaXB0cy9jcmVhdHVyZXMvY3JlYXR1cmUudHMiLCJzcmMvc2NyaXB0cy9jcmVhdHVyZXMvbW9uc3Rlci50cyIsInNyYy9zY3JpcHRzL2NyZWF0dXJlcy9wbGF5ZXIudHMiLCJzcmMvc2NyaXB0cy9nYW1lU3RhdGUudHMiLCJzcmMvc2NyaXB0cy9sb2dpYy9maWdodC50cyIsInNyYy9zY3JpcHRzL2xvZ2ljL21vdmVNYW5hZ2VyLnRzIiwic3JjL3NjcmlwdHMvbWFpbi50cyIsInNyYy9zY3JpcHRzL21hcC9jZWxsLnRzIiwic3JjL3NjcmlwdHMvbWFwL21hcC50cyIsInNyYy9zY3JpcHRzL3NjZW5lcy9maWVsZFJlbmRlcmVyLnRzIiwic3JjL3NjcmlwdHMvc2NlbmVzL2ZpZ2h0UmVuZGVyZXIudHMiLCJzcmMvc2NyaXB0cy9zY2VuZXMvc2NlbmVNYW5hZ2VyLnRzIiwic3JjL3NjcmlwdHMvc2NlbmVzL3NlbGVjdE1vbnN0ZXJSZW5kZXJlci50cyIsInNyYy9zY3JpcHRzL3V0aWxzL2NvbXBhcmUudHMiLCJzcmMvc2NyaXB0cy91dGlscy9yYW5kb20udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7SUNFYSxRO0FBZVQsc0JBQVksSUFBWixFQUEwQixRQUExQixFQUEyQztBQUFBOztBQUN2QyxhQUFLLEtBQUwsR0FBYSxJQUFiO0FBQ0EsYUFBSyxTQUFMLEdBQWlCLFFBQWpCO0FBQ0g7Ozs7NEJBZmM7QUFDWCxtQkFBTyxLQUFLLEtBQVo7QUFDSCxTOzBCQUNlLEssRUFBYTtBQUN6QixpQkFBSyxLQUFMLEdBQWEsS0FBYjtBQUNIOzs7NEJBR2tCO0FBQ2YsbUJBQU8sS0FBSyxTQUFaO0FBQ0g7Ozs7OztBQWJMLFFBQUEsUUFBQSxHQUFBLFFBQUE7Ozs7Ozs7Ozs7Ozs7OztBQ0ZBLElBQUEsYUFBQSxRQUFBLFlBQUEsQ0FBQTs7SUFFYSxPOzs7QUFr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Z2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJpbXBvcnQge0lIYXNDc3NDbGFzc30gZnJvbSBcIi4uL2ludGVyZmFjZXNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBDcmVhdHVyZSBpbXBsZW1lbnRzIElIYXNDc3NDbGFzcyB7XHJcbiAgICBcclxuICAgIHByaXZhdGUgX25hbWU6IHN0cmluZztcclxuICAgIHB1YmxpYyBnZXQgbmFtZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9uYW1lO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNldCBuYW1lKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9uYW1lID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfY3NzQ2xhc3M6IHN0cmluZztcclxuICAgIHB1YmxpYyBnZXQgY3NzQ2xhc3MoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY3NzQ2xhc3M7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBjc3NDbGFzcyA6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX25hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMuX2Nzc0NsYXNzID0gY3NzQ2xhc3M7XHJcbiAgICB9XHJcblxyXG59IiwiaW1wb3J0IHtDcmVhdHVyZX0gZnJvbSBcIi4vY3JlYXR1cmVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBNb25zdGVyIGV4dGVuZHMgQ3JlYXR1cmUge1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfbWF4SGVhdGg6IG51bWJlcjtcclxuICAgIHB1YmxpYyBnZXQgbWF4SGVhdGgoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbWF4SGVhdGg7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfaGVhbHRoOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgZ2V0IGhlYWx0aCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9oZWFsdGg7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfZGVmZW5zZTogbnVtYmVyO1xyXG4gICAgcHVibGljIGdldCBkZWZlbnNlKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZmVuc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfYXR0YWNrOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgZ2V0IGF0dGFjaygpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9hdHRhY2s7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfYXR0YWNrQm9vc3RlcjogbnVtYmVyO1xyXG4gICAgcHVibGljIGdldCBhdHRhY2tCb29zdGVyKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2F0dGFja0Jvb3N0ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfbG9vdGVkOiBib29sZWFuO1xyXG4gICAgcHVibGljIGdldCBsb290ZWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xvb3RlZDtcclxuICAgIH1cclxuICAgIHB1YmxpYyBsb290KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX2xvb3RlZCA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBjc3NDbGFzczogc3RyaW5nLCBsYWJlbDogc3RyaW5nLCB0eXBlOiBzdHJpbmcsICBoZWFsdGg6IG51bWJlciwgZGVmZW5zZTogbnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgYXR0YWNrOiBudW1iZXIsIGF0dGFja0Jvb3N0ZXI6IG51bWJlciwgbG9vdGVkOiBib29sZWFuKSB7XHJcbiAgICAgICAgc3VwZXIobmFtZSwgY3NzQ2xhc3MpO1xyXG4gICAgICAgIHRoaXMuX21heEhlYXRoID0gaGVhbHRoO1xyXG4gICAgICAgIHRoaXMuX2hlYWx0aCA9IGhlYWx0aDtcclxuICAgICAgICB0aGlzLl9kZWZlbnNlID0gZGVmZW5zZTtcclxuICAgICAgICB0aGlzLl9hdHRhY2sgPSBhdHRhY2s7XHJcbiAgICAgICAgdGhpcy5fYXR0YWNrQm9vc3RlciA9IGF0dGFja0Jvb3N0ZXI7XHJcbiAgICAgICAgdGhpcy5fbG9vdGVkID0gbG9vdGVkO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBiZUF0dGFja2VkKGVuZW15OiBNb25zdGVyKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgZGFtYWdlID0gdGhpcy5kZWZlbnNlIC0gKGVuZW15LmF0dGFjayArIGVuZW15LmF0dGFja0Jvb3N0ZXIpO1xyXG4gICAgICAgIGlmIChkYW1hZ2UgPj0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLl9oZWFsdGggLT0gMTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9oZWFsdGggKz0gZGFtYWdlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGVmZW5zZUhpbXNlbGYoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fZGVmZW5zZSArPSA1O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpc0RlYWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2hlYWx0aCA8PSAwO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBIZWFsKCk6IHZvaWQge1xyXG4gICAgICAgdGhpcy5faGVhbHRoID0gdGhpcy5tYXhIZWF0aDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0U3RyaW5nKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIGAke3RoaXMubmFtZX0sIGhwOiAke3RoaXMuaGVhbHRofSwgZGVmZW5zZTogJHt0aGlzLmRlZmVuc2V9LCBhdHRhY2s6ICR7dGhpcy5hdHRhY2t9YDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNoYXJrIGV4dGVuZHMgTW9uc3RlciB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcignU2hhcmsnLCAnc2hhcmsnLCAncCcsICdyZWQnLCAxMjAsIDUsIDMwLCAzMCwgdHJ1ZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBEcmFnb24gZXh0ZW5kcyBNb25zdGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCdEcmFnb24nLCAnZHJhZ29uJywgJ2MnLCAncmVkJywgMTAwLCA0LCAyMCwgMTAsIGZhbHNlKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEJsYWNrRHJhZ29ue1xyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICBcclxuICAgIH1cclxufSIsImltcG9ydCB7Q3JlYXR1cmV9IGZyb20gXCIuL2NyZWF0dXJlXCI7XHJcbmltcG9ydCB7TW9uc3Rlcn0gZnJvbSBcIi4vbW9uc3RlclwiO1xyXG5pbXBvcnQge0kyRENvb3JkaW5hdGVzLCBJRHJhd2FibGVJbkZpZWxkfSBmcm9tIFwiLi4vaW50ZXJmYWNlc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBsYXllciBleHRlbmRzIENyZWF0dXJlIGltcGxlbWVudHMgSURyYXdhYmxlSW5GaWVsZCB7XHJcbiAgICBwcml2YXRlIHg6IG51bWJlcjtcclxuICAgIHByaXZhdGUgeTogbnVtYmVyO1xyXG5cclxuICAgIHByaXZhdGUgX2F2YWlsYWJsZU1vdmVzOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgZ2V0IGF2YWlsYWJsZU1vdmVzKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2F2YWlsYWJsZU1vdmVzO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNldEF2YWlsYWJsZU1vdmVzKHZhbHVlOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9hdmFpbGFibGVNb3ZlcyA9IHZhbHVlO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHJlc2V0QXZhaWxhYmxlTW92ZXMoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fYXZhaWxhYmxlTW92ZXMgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVhZG9ubHkgX2F2YWlsYWJsZU1vbnN0ZXJzOiBNb25zdGVyW107XHJcbiAgICBwdWJsaWMgZ2V0IGF2YWlsYWJsZU1vbnN0ZXJzKCk6IE1vbnN0ZXJbXSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2F2YWlsYWJsZU1vbnN0ZXJzO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgY3NzQ2xhc3M6IHN0cmluZywgeDogbnVtYmVyLCB5OiBudW1iZXIsIGF2YWlsYWJsZU1vdmVzOiBudW1iZXIsXHJcbiAgICAgICAgICAgICAgICBhdmFpbGFibGVNb25zdGVyczogTW9uc3RlcltdKSB7XHJcbiAgICAgICAgc3VwZXIobmFtZSwgY3NzQ2xhc3MpO1xyXG4gICAgICAgIHRoaXMueCA9IHg7XHJcbiAgICAgICAgdGhpcy55ID0geTtcclxuICAgICAgICB0aGlzLl9hdmFpbGFibGVNb3ZlcyA9IGF2YWlsYWJsZU1vdmVzO1xyXG4gICAgICAgIHRoaXMuX2F2YWlsYWJsZU1vbnN0ZXJzID0gYXZhaWxhYmxlTW9uc3RlcnM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBzZXQgbmV3IGNvb3JkaW5hdGVzXHJcbiAgICAgKiBAcGFyYW0gY29vcmRpbmF0ZXNcclxuICAgICAqIEBwYXJhbSBtb3Zlc1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgbW92ZShjb29yZGluYXRlczogSTJEQ29vcmRpbmF0ZXMsIG1vdmVzOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnggPSBjb29yZGluYXRlcy54O1xyXG4gICAgICAgIHRoaXMueSA9IGNvb3JkaW5hdGVzLnk7XHJcbiAgICAgICAgdGhpcy5fYXZhaWxhYmxlTW92ZXMgLT0gbW92ZXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldENvb3JkaW5hdGVzKCk6IEkyRENvb3JkaW5hdGVzICB7XHJcbiAgICAgICAgcmV0dXJuIHsgeDogdGhpcy54LCB5OiB0aGlzLnkgfTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWRkTW9uc3Rlcihtb25zdGVyOiBNb25zdGVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fYXZhaWxhYmxlTW9uc3RlcnMucHVzaChtb25zdGVyKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGVsZXRlTW9uc3Rlcihtb25zdGVyOiBNb25zdGVyKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmF2YWlsYWJsZU1vbnN0ZXJzLmluZGV4T2YobW9uc3Rlcik7XHJcbiAgICAgICAgY29uc29sZS5hc3NlcnQoaW5kZXggIT0gLTEpO1xyXG4gICAgICAgIGlmIChpbmRleCA+IC0xKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXZhaWxhYmxlTW9uc3RlcnMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge1BsYXllcn0gZnJvbSAnLi9jcmVhdHVyZXMvcGxheWVyJztcclxuaW1wb3J0IHtNYXB9IGZyb20gJy4vbWFwL21hcCc7XHJcbmltcG9ydCB7TW92ZU1hbmFnZXJ9IGZyb20gJy4vbG9naWMvbW92ZU1hbmFnZXInO1xyXG5pbXBvcnQge0lEcmF3YWJsZUluRmllbGQsIElTY2VuZUluZm99IGZyb20gJy4vaW50ZXJmYWNlcyc7XHJcbmltcG9ydCB7RmlnaHR9IGZyb20gXCIuL2xvZ2ljL2ZpZ2h0XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgR2FtZVN0YXRlIHtcclxuXHJcbiAgICBwdWJsaWMgcGxheWVyOiBQbGF5ZXI7XHJcbiAgICBwdWJsaWMgY3JlYXR1cmVzOiBJRHJhd2FibGVJbkZpZWxkW107XHJcbiAgICBwdWJsaWMgbWFwOiBNYXA7XHJcbiAgICBwdWJsaWMgbW92ZU1hbmFnZXI6IE1vdmVNYW5hZ2VyO1xyXG4gICAgcHVibGljIHNjZW5lczogSVNjZW5lSW5mb1tdO1xyXG4gICAgcHVibGljIGZpZ2h0OiBGaWdodDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwbGF5ZXI6IFBsYXllciwgY3JlYXR1cmVzOiBJRHJhd2FibGVJbkZpZWxkW10pIHtcclxuICAgICAgICB0aGlzLnBsYXllciA9IHBsYXllcjtcclxuICAgICAgICB0aGlzLmNyZWF0dXJlcyA9IGNyZWF0dXJlcztcclxuICAgICAgICB0aGlzLm1hcCA9IG5ldyBNYXAoNSwgNSk7XHJcbiAgICAgICAgdGhpcy5tb3ZlTWFuYWdlciA9IG5ldyBNb3ZlTWFuYWdlcih0aGlzLm1hcCwgdGhpcy5wbGF5ZXIpO1xyXG4gICAgICAgIHRoaXMuc2NlbmVzID0gW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnZmllbGQnLFxyXG4gICAgICAgICAgICAgICAgZWxlbWVudDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWUtZmllbGQnKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnZmlnaHQnLFxyXG4gICAgICAgICAgICAgICAgZWxlbWVudDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWUtZmlnaHQnKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnc2VsZWN0LW1vbnN0ZXInLFxyXG4gICAgICAgICAgICAgICAgZWxlbWVudDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWUtc2VsZWN0LW1vbnN0ZXInKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgICAgIHRoaXMuZmlnaHQgPSBudWxsO1xyXG4gICAgfVxyXG5cclxufSIsImltcG9ydCB7TW9uc3Rlcn0gZnJvbSBcIi4uL2NyZWF0dXJlcy9tb25zdGVyXCJcclxuaW1wb3J0IHtQbGF5ZXJ9IGZyb20gXCIuLi9jcmVhdHVyZXMvcGxheWVyXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRmlnaHQge1xyXG4gICAgcHJpdmF0ZSBfY3VycmVudE1vbnN0ZXI6IE1vbnN0ZXI7XHJcbiAgICBwdWJsaWMgZ2V0IGN1cnJlbnRNb25zdGVyKCk6IE1vbnN0ZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jdXJyZW50TW9uc3RlcjtcclxuICAgIH1cclxuICAgIHByaXZhdGUgX2RlZmVuc2VNb25zdGVyOiBNb25zdGVyO1xyXG4gICAgcHVibGljIGdldCBkZWZlbnNlTW9uc3RlcigpOiBNb25zdGVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZGVmZW5zZU1vbnN0ZXI7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIF93aW5uZXI6IE1vbnN0ZXI7XHJcbiAgICBwcml2YXRlIF9wbGF5ZXI6IFBsYXllcjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwbGF5ZXI6IFBsYXllciwgbW9uc3RlckZpcnN0OiBNb25zdGVyLCBtb25zdGVyU2Vjb25kOiBNb25zdGVyKSB7XHJcbiAgICAgICAgdGhpcy5fY3VycmVudE1vbnN0ZXIgPSBtb25zdGVyRmlyc3Q7XHJcbiAgICAgICAgdGhpcy5fZGVmZW5zZU1vbnN0ZXIgPSBtb25zdGVyU2Vjb25kO1xyXG4gICAgICAgIHRoaXMuX3dpbm5lciA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5fcGxheWVyID0gcGxheWVyO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzd2FwKCkge1xyXG4gICAgICAgIFt0aGlzLl9jdXJyZW50TW9uc3RlciwgdGhpcy5fZGVmZW5zZU1vbnN0ZXJdID0gW3RoaXMuZGVmZW5zZU1vbnN0ZXIsIHRoaXMuY3VycmVudE1vbnN0ZXJdO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpc0ZpbmlzaCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50TW9uc3Rlci5pc0RlYWQoKSB8fCB0aGlzLmRlZmVuc2VNb25zdGVyLmlzRGVhZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhdHRhY2tDdXJyZW50KCkge1xyXG4gICAgICAgIHRoaXMuZGVmZW5zZU1vbnN0ZXIuYmVBdHRhY2tlZCh0aGlzLmN1cnJlbnRNb25zdGVyKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGVmZW5kQ3VycmVudCgpIHtcclxuICAgICAgICB0aGlzLmRlZmVuc2VNb25zdGVyLmRlZmVuc2VIaW1zZWxmKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGZpbmlzaCgpIHtcclxuICAgICAgICB0aGlzLl93aW5uZXIgPSAodGhpcy5jdXJyZW50TW9uc3Rlci5pc0RlYWQoKSkgPyB0aGlzLmRlZmVuc2VNb25zdGVyIDogdGhpcy5jdXJyZW50TW9uc3RlcjtcclxuICAgICAgICB0aGlzLmN1cnJlbnRNb25zdGVyLkhlYWwoKTtcclxuICAgICAgICB0aGlzLmRlZmVuc2VNb25zdGVyLkhlYWwoKTtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBJZiB0aGUgcGxheWVyJ3MgbW9uc3RlciB3b24sIHRoZW4gaXQgaXMgbmVjZXNzYXJ5IHRvIGFkZCB0aGUgbG9zaW5nIG1vbnN0ZXIsIG90aGVyd2lzZSByZW1vdmUgdGhlIG1vbnN0ZXJcclxuICAgICAgICAgKiBmcm9tIHRoZSBwbGF5ZXIuXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBJZiB0aGUgbW9uc3RlciB3YXMgb25jZSBsb290ZWQsIHRoZW4gdGhpcyBpcyB0aGUgcGxheWVyJ3MgbW9uc3Rlci5cclxuICAgICAgICAgKi9cclxuICAgICAgICBpZiAodGhpcy5fd2lubmVyLmxvb3RlZCkge1xyXG4gICAgICAgICAgICB0aGlzLmRlZmVuc2VNb25zdGVyLmxvb3QoKTtcclxuICAgICAgICAgICAgdGhpcy5fcGxheWVyLmFkZE1vbnN0ZXIodGhpcy5kZWZlbnNlTW9uc3Rlcik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGAke3RoaXMuX3BsYXllci5uYW1lfSB3aW5gKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9wbGF5ZXIuZGVsZXRlTW9uc3Rlcih0aGlzLmRlZmVuc2VNb25zdGVyKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYCR7dGhpcy5fcGxheWVyLm5hbWV9IGxvc2VgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fcGxheWVyLnJlc2V0QXZhaWxhYmxlTW92ZXMoKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7STJEQ29vcmRpbmF0ZXN9IGZyb20gJy4uL2ludGVyZmFjZXMnO1xyXG5pbXBvcnQge01hcH0gZnJvbSAnLi4vbWFwL21hcCc7XHJcbmltcG9ydCB7UGxheWVyfSBmcm9tICcuLi9jcmVhdHVyZXMvcGxheWVyJztcclxuaW1wb3J0IHtDb21wYXJlfSBmcm9tIFwiLi4vdXRpbHMvY29tcGFyZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1vdmVNYW5hZ2VyIHtcclxuXHJcbiAgICBwcml2YXRlIHBsYXllcjogUGxheWVyO1xyXG4gICAgcHJpdmF0ZSBtYXA6IE1hcDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihtYXA6IE1hcCwgcGxheWVyOiBQbGF5ZXIpIHtcclxuICAgICAgICB0aGlzLm1hcCA9IG1hcDtcclxuICAgICAgICB0aGlzLnBsYXllciA9IHBsYXllcjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb3V0T2ZCb3VuZHNPZkFycmF5KGNvb3JkaW5hdGVzOiBJMkRDb29yZGluYXRlcyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiBDb21wYXJlLmlzSW5SYW5nZShjb29yZGluYXRlcy54LCAwLCB0aGlzLm1hcC5nZXRTaXplKCkueCAtIDEpICYmXHJcbiAgICAgICAgICAgICAgICBDb21wYXJlLmlzSW5SYW5nZShjb29yZGluYXRlcy55LCAwLCB0aGlzLm1hcC5nZXRTaXplKCkueSAtIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhZGphY2VudENlbGxIb3Jpek9yVmVyKGNvb3JkaW5hdGVzOiBJMkRDb29yZGluYXRlcyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiAoTWF0aC5hYnMoY29vcmRpbmF0ZXMueCAtIHRoaXMucGxheWVyLmdldENvb3JkaW5hdGVzKCkueCkgK1xyXG4gICAgICAgICAgICAgICAgTWF0aC5hYnMoY29vcmRpbmF0ZXMueSAtIHRoaXMucGxheWVyLmdldENvb3JkaW5hdGVzKCkueSkgPT0gMSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGhhdmVFbm91Z2hNb3ZlbWVudChjb29yZGluYXRlczogSTJEQ29vcmRpbmF0ZXMpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wbGF5ZXIuYXZhaWxhYmxlTW92ZXMgPj0gdGhpcy5tYXAuZ2V0Q2VsbChjb29yZGluYXRlcykudHJhbnNpdGlvbkNvc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDb29yZGluYXRlcyBhcmUgY29ycmVjdCBpZiB0aGUgbWFwIHJhbmdlIGlzIGluY2x1ZGVkXHJcbiAgICAgKiBhbmQgcG9pbnQgdG8gYW4gYWRqYWNlbnQgY2VsbCBob3Jpem9udGFsbHkgb3IgdmVydGljYWxseVxyXG4gICAgICogQHJldHVybnNcclxuICAgICAqIEBwYXJhbSBjb29yZGluYXRlc1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgaXNDb3JyZWN0Q29vcmRpbmF0ZXMoY29vcmRpbmF0ZXM6IEkyRENvb3JkaW5hdGVzKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMub3V0T2ZCb3VuZHNPZkFycmF5KGNvb3JkaW5hdGVzKSAmJlxyXG4gICAgICAgIHRoaXMuYWRqYWNlbnRDZWxsSG9yaXpPclZlcihjb29yZGluYXRlcykgJiZcclxuICAgICAgICB0aGlzLmhhdmVFbm91Z2hNb3ZlbWVudChjb29yZGluYXRlcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG1vdmUoY29vcmRpbmF0ZXM6IEkyRENvb3JkaW5hdGVzKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNDb3JyZWN0Q29vcmRpbmF0ZXMoY29vcmRpbmF0ZXMpKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGAke3RoaXMucGxheWVyLm5hbWV9IG1vdmVkIHRvICgke2Nvb3JkaW5hdGVzLnh9LCAke2Nvb3JkaW5hdGVzLnl9KWApO1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllci5tb3ZlKGNvb3JkaW5hdGVzLCB0aGlzLm1hcC5nZXRDZWxsKGNvb3JkaW5hdGVzKS50cmFuc2l0aW9uQ29zdCk7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGAke3RoaXMucGxheWVyLm5hbWV9IG5vdCBtb3ZlZCB0byAoJHtjb29yZGluYXRlcy54fSwgJHtjb29yZGluYXRlcy55fSlgKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImltcG9ydCB7UGxheWVyfSBmcm9tICcuL2NyZWF0dXJlcy9wbGF5ZXInO1xyXG5pbXBvcnQge01vbnN0ZXIsIFNoYXJrfSBmcm9tICcuL2NyZWF0dXJlcy9tb25zdGVyJztcclxuaW1wb3J0IHtGaWVsZFJlbmRlcmVyfSBmcm9tICcuL3NjZW5lcy9maWVsZFJlbmRlcmVyJztcclxuaW1wb3J0IHtTY2VuZU1hbmFnZXJ9IGZyb20gJy4vc2NlbmVzL3NjZW5lTWFuYWdlcic7XHJcbmltcG9ydCB7R2FtZVN0YXRlfSBmcm9tICcuL2dhbWVTdGF0ZSc7XHJcbmltcG9ydCB7STJEQ29vcmRpbmF0ZXN9IGZyb20gJy4vaW50ZXJmYWNlcyc7XHJcbmltcG9ydCB7RmlnaHRSZW5kZXJlcn0gZnJvbSBcIi4vc2NlbmVzL2ZpZ2h0UmVuZGVyZXJcIjtcclxuaW1wb3J0IHtTZWxlY3RNb25zdGVyUmVuZGVyZXJ9IGZyb20gJy4vc2NlbmVzL3NlbGVjdE1vbnN0ZXJSZW5kZXJlcidcclxuaW1wb3J0IHtGaWdodH0gZnJvbSAnLi9sb2dpYy9maWdodCc7XHJcblxyXG4vKiBHbG9iYWwgdmFyaWFibGVzICovXHJcbmNvbnN0IGdhbWVTdGF0ZSA9IG5ldyBHYW1lU3RhdGUoXHJcbiAgICBuZXcgUGxheWVyKFwiU3RldmVcIiwgXCJoZXJvXzFcIiwgMCwgMCwgNCwgW25ldyBTaGFyaygpXSksXHJcbiAgICBbXVxyXG4pO1xyXG5jb25zdCBzY2VuZU1hbmFnZXIgPSBuZXcgU2NlbmVNYW5hZ2VyKGdhbWVTdGF0ZSk7XHJcblxyXG4vKiBSZW5kZXJlcnMgKi9cclxuY29uc3QgZmllbGRSZW5kZXJlciA9IG5ldyBGaWVsZFJlbmRlcmVyKGdhbWVTdGF0ZSwgIHNjZW5lTWFuYWdlci5nZXRTY2VuZUluZm8oJ2ZpZWxkJykuZWxlbWVudCxcclxuICAgIGNlbGxDbGlja0xpc3RlbmVyLCBORVNaQnV0dG9uSW5GaWVsZENsaWNrTGlzdGVuZXIsIE5FU1hCdXR0b25JbkZpZWxkQ2xpY2tMaXN0ZW5lcik7XHJcbmxldCBmaWdodFJlbmRlcmVyOiBGaWdodFJlbmRlcmVyID0gbnVsbDtcclxubGV0IHNlbGVjdE1vbnN0ZXJSZW5kZXJlcjogU2VsZWN0TW9uc3RlclJlbmRlcmVyID0gbnVsbDtcclxuXHJcbi8qIFByZXBhcmUgZmllbGQgKi9cclxuZmllbGRSZW5kZXJlci5yZW5kZXIoKTtcclxuZmllbGRSZW5kZXJlci51cGRhdGUoKTtcclxuc2NlbmVNYW5hZ2VyLnNob3dTY2VuZSgnZmllbGQnKTtcclxuXHJcbi8qIENsaWNrIExpc3RlbmVyIGZvciBhbGwgY2VsbHMgaW4gZmllbGQgKi9cclxuZnVuY3Rpb24gY2VsbENsaWNrTGlzdGVuZXIoZXZlbnQ6IE1vdXNlRXZlbnQpIHtcclxuXHJcbiAgICBmdW5jdGlvbiBnZXRDb29yZGluYXRlc09mQ2VsbCh0YXJnZXQ6IEV2ZW50VGFyZ2V0KTogSTJEQ29vcmRpbmF0ZXMge1xyXG4gICAgICAgIGxldCBlbGVtZW50ID0gPEhUTUxFbGVtZW50PnRhcmdldDtcclxuICAgICAgICBjb25zdCB0ZCA9IDxIVE1MVGFibGVDZWxsRWxlbWVudD5lbGVtZW50LnBhcmVudEVsZW1lbnQ7XHJcbiAgICAgICAgY29uc3Qgcm93ID0gPEhUTUxUYWJsZVJvd0VsZW1lbnQ+dGQucGFyZW50RWxlbWVudDtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB4OiB0ZC5jZWxsSW5kZXgsXHJcbiAgICAgICAgICAgIHk6IHJvdy5yb3dJbmRleFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjb29yZGluYXRlcyA9IGdldENvb3JkaW5hdGVzT2ZDZWxsKGV2ZW50LnRhcmdldCk7XHJcbiAgICBsZXQgb2xkX2Nvb3JkaW5hdGU6IEkyRENvb3JkaW5hdGVzID0gZ2FtZVN0YXRlLnBsYXllci5nZXRDb29yZGluYXRlcygpO1xyXG4gICAgaWYgKGdhbWVTdGF0ZS5tb3ZlTWFuYWdlci5tb3ZlKGNvb3JkaW5hdGVzKSkge1xyXG4gICAgICAgIGZpZWxkUmVuZGVyZXIudXBkYXRlSW5mbygpO1xyXG4gICAgICAgIGZpZWxkUmVuZGVyZXIudXBkYXRlQ2VsbHMoW1xyXG4gICAgICAgICAgICBvbGRfY29vcmRpbmF0ZSxcclxuICAgICAgICAgICAgZ2FtZVN0YXRlLnBsYXllci5nZXRDb29yZGluYXRlcygpXHJcbiAgICAgICAgXSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIE5FU1pCdXR0b25JbkZpZ2h0Q2xpY2tMaXN0ZW5lcigpIHtcclxuICAgIGdhbWVTdGF0ZS5maWdodC5hdHRhY2tDdXJyZW50KCk7XHJcbiAgICBpZiAoZ2FtZVN0YXRlLmZpZ2h0LmlzRmluaXNoKCkpIHtcclxuICAgICAgICBnYW1lU3RhdGUuZmlnaHQuZmluaXNoKCk7XHJcbiAgICAgICAgZmllbGRSZW5kZXJlci51cGRhdGVJbmZvKCk7XHJcbiAgICAgICAgc2NlbmVNYW5hZ2VyLnNob3dTY2VuZSgnZmllbGQnKTtcclxuICAgIH1cclxuICAgIGdhbWVTdGF0ZS5maWdodC5zd2FwKCk7XHJcbiAgICBmaWdodFJlbmRlcmVyLnVwZGF0ZSgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBORVNYQnV0dG9uSW5GaWdodENsaWNrTGlzdGVuZXIoKSB7XHJcbiAgICBnYW1lU3RhdGUuZmlnaHQuZGVmZW5kQ3VycmVudCgpO1xyXG4gICAgZ2FtZVN0YXRlLmZpZ2h0LnN3YXAoKTtcclxuICAgIGZpZ2h0UmVuZGVyZXIudXBkYXRlKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIE5FU1pCdXR0b25JbkZpZWxkQ2xpY2tMaXN0ZW5lcigpIHtcclxuICAgIGxldCBjb29yZGluYXRlcyA9IGdhbWVTdGF0ZS5wbGF5ZXIuZ2V0Q29vcmRpbmF0ZXMoKTtcclxuICAgIGlmIChnYW1lU3RhdGUubWFwLmdldENlbGwoY29vcmRpbmF0ZXMpLm1vbnN0ZXIubG9vdGVkKVxyXG4gICAgICAgIHJldHVybjtcclxuICAgIGlmIChnYW1lU3RhdGUucGxheWVyLmF2YWlsYWJsZU1vdmVzIDw9IDApXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgc2VsZWN0TW9uc3RlclJlbmRlcmVyID0gbmV3IFNlbGVjdE1vbnN0ZXJSZW5kZXJlcihcclxuICAgICAgICBzY2VuZU1hbmFnZXIuZ2V0U2NlbmVJbmZvKCdzZWxlY3QtbW9uc3RlcicpLmVsZW1lbnQsXHJcbiAgICAgICAgZ2FtZVN0YXRlLnBsYXllcixcclxuICAgICAgICBPS0J1dHRvbkluU2VsZWN0Q2xpY2tMaXN0ZW5lclxyXG4gICAgKVxyXG4gICAgc2VsZWN0TW9uc3RlclJlbmRlcmVyLnVwZGF0ZSgpO1xyXG4gICAgc2NlbmVNYW5hZ2VyLnNob3dTY2VuZSgnc2VsZWN0LW1vbnN0ZXInKTtcclxufVxyXG5cclxuZnVuY3Rpb24gTkVTWEJ1dHRvbkluRmllbGRDbGlja0xpc3RlbmVyKCkge1xyXG4gICAgZ2FtZVN0YXRlLnBsYXllci5yZXNldEF2YWlsYWJsZU1vdmVzKCk7XHJcbiAgICBjb25zb2xlLmxvZyhcIlJlc2V0XCIpO1xyXG4gICAgZ2FtZVN0YXRlLnBsYXllci5zZXRBdmFpbGFibGVNb3ZlcygxMCk7XHJcbiAgICBmaWVsZFJlbmRlcmVyLnVwZGF0ZUluZm8oKTtcclxufVxyXG5cclxuLyogQ2xpY2sgTGlzdGVuZXIgZm9yIE9LIGJ1dHRvbiBpbiBzZWxlY3QtbW9uc3RlciAqL1xyXG5mdW5jdGlvbiBPS0J1dHRvbkluU2VsZWN0Q2xpY2tMaXN0ZW5lcigpIHtcclxuICAgIHNjZW5lTWFuYWdlci5zaG93U2NlbmUoJ2ZpZ2h0Jyk7XHJcbiAgICBsZXQgbW9uc3RlcnM6IFtNb25zdGVyLCBNb25zdGVyXSA9IFtcclxuICAgICAgICBzZWxlY3RNb25zdGVyUmVuZGVyZXIuZ2V0Q2hvc2VuTW9uc3RlcigpLFxyXG4gICAgICAgIGdhbWVTdGF0ZS5tYXAuZ2V0Q2VsbChnYW1lU3RhdGUucGxheWVyLmdldENvb3JkaW5hdGVzKCkpLm1vbnN0ZXJcclxuICAgIF1cclxuICAgIGZpZ2h0UmVuZGVyZXIgPSBuZXcgRmlnaHRSZW5kZXJlcihcclxuICAgICAgICBzY2VuZU1hbmFnZXIuZ2V0U2NlbmVJbmZvKCdmaWdodCcpLmVsZW1lbnQsXHJcbiAgICAgICAgbW9uc3RlcnMsXHJcbiAgICAgICAgTkVTWkJ1dHRvbkluRmlnaHRDbGlja0xpc3RlbmVyLFxyXG4gICAgICAgIE5FU1hCdXR0b25JbkZpZ2h0Q2xpY2tMaXN0ZW5lclxyXG4gICAgKTtcclxuICAgIGZpZ2h0UmVuZGVyZXIucmVuZGVyKCk7XHJcbiAgICBmaWdodFJlbmRlcmVyLnVwZGF0ZSgpO1xyXG4gICAgZ2FtZVN0YXRlLmZpZ2h0ID0gbmV3IEZpZ2h0KGdhbWVTdGF0ZS5wbGF5ZXIsIC4uLm1vbnN0ZXJzKTtcclxufVxyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgaWYgKGV2ZW50LmtleSA9PSBcInJcIikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGdhbWVTdGF0ZS5wbGF5ZXIuYXZhaWxhYmxlTW92ZXMpO1xyXG4gICAgfVxyXG59LCB0cnVlKTtcclxuIiwiaW1wb3J0IHtEcmFnb24sIE1vbnN0ZXJ9IGZyb20gJy4uL2NyZWF0dXJlcy9tb25zdGVyJztcclxuaW1wb3J0IHtSYW5kb219IGZyb20gJy4uL3V0aWxzL3JhbmRvbSc7XHJcbmltcG9ydCB7SUhhc0Nzc0NsYXNzfSBmcm9tICcuLi9pbnRlcmZhY2VzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBDZWxsIGltcGxlbWVudHMgSUhhc0Nzc0NsYXNzIHtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgX2Nzc0NsYXNzOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgZ2V0IGNzc0NsYXNzKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Nzc0NsYXNzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIGNvc3Qgb2YgdGhlIHRyYW5zaXRpb24gZm9yIHRoZSBwbGF5ZXIgbW92aW5nIHRvIHRoaXMgY2VsbFxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfdHJhbnNpdGlvbkNvc3Q6IG51bWJlcjtcclxuICAgIHB1YmxpYyBnZXQgdHJhbnNpdGlvbkNvc3QoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdHJhbnNpdGlvbkNvc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfbW9uc3RlcjogTW9uc3RlcjtcclxuICAgIHB1YmxpYyBnZXQgbW9uc3RlcigpOiBNb25zdGVye1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9tb25zdGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBjc3NDbGFzc1xyXG4gICAgICogQHBhcmFtIHRyYW5zaXRpb25Db3N0TWluTWF4IGlzIG1pbmltdW0gYW5kIG1heGltdW0gdmFsdWVcclxuICAgICAqIEBwYXJhbSBwb3NzaWJsZUNyZWF0dXJlc1xyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3Rvcihjc3NDbGFzczogc3RyaW5nLCB0cmFuc2l0aW9uQ29zdE1pbk1heCA6IFtudW1iZXIsIG51bWJlcl0sIHBvc3NpYmxlQ3JlYXR1cmVzOiBNb25zdGVyW10pIHtcclxuICAgICAgICB0aGlzLl9jc3NDbGFzcyA9IGNzc0NsYXNzO1xyXG4gICAgICAgIHRoaXMuX3RyYW5zaXRpb25Db3N0ID0gUmFuZG9tLmluUmFuZ2UoLi4udHJhbnNpdGlvbkNvc3RNaW5NYXgpO1xyXG4gICAgICAgIHRoaXMuX21vbnN0ZXIgPSBSYW5kb20ub25lSXRlbUZyb21BcnJheShwb3NzaWJsZUNyZWF0dXJlcyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBMYW5kQ2VsbCBleHRlbmRzIENlbGwge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoJ2xhbmQnLCBbMSwgMl0sIFtuZXcgRHJhZ29uKCldKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFZvbGNhbm9DZWxsIGV4dGVuZHMgQ2VsbCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigndm9sY2FubycsIFszLCA1XSwgW25ldyBEcmFnb24oKV0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRm9yZXN0Q2VsbCBleHRlbmRzIENlbGwge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoJ2ZvcmVzdCcsIFszLCA1XSwgW25ldyBEcmFnb24oKV0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTGFrZUNlbGwgZXh0ZW5kcyBDZWxsIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCdsYWtlJywgWzMsIDVdLCBbbmV3IERyYWdvbigpXSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGNsYXNzIERhcmtDYXN0bGVDZWxsIGV4dGVuZHMgQ2VsbCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcignZGFya19jYXN0bGUnLCBbMywgNV0sIFtuZXcgRHJhZ29uKCldKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFdoaXRlQ2FzdGxlQ2VsbCBleHRlbmRzIENlbGwge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoJ3doaXRlX2Nhc3RsZScsIFszLCA1XSwgW25ldyBEcmFnb24oKV0pO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7Q2VsbCwgTGFuZENlbGwsIFZvbGNhbm9DZWxsLCBGb3Jlc3RDZWxsLCBMYWtlQ2VsbCwgV2hpdGVDYXN0bGVDZWxsLCBEYXJrQ2FzdGxlQ2VsbH0gZnJvbSAnLi9jZWxsJztcclxuaW1wb3J0IHtJMkRDb29yZGluYXRlc30gZnJvbSAnLi4vaW50ZXJmYWNlcyc7XHJcbmltcG9ydCB7UmFuZG9tfSBmcm9tICcuLi91dGlscy9yYW5kb20nO1xyXG5pbXBvcnQge0NvbXBhcmV9IGZyb20gXCIuLi91dGlscy9jb21wYXJlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgTWFwIHtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgc2l6ZVg6IG51bWJlcjtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgc2l6ZVk6IG51bWJlcjtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgZGF0YTogQ2VsbFtdW107XHJcblxyXG4gICAgY29uc3RydWN0b3Ioc2l6ZVg6IG51bWJlciwgc2l6ZVk6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuc2l6ZVggPSBzaXplWDtcclxuICAgICAgICB0aGlzLnNpemVZID0gc2l6ZVk7XHJcbiAgICAgICAgdGhpcy5kYXRhID0gTWFwLmdlbmVyYXRlKHNpemVYLCBzaXplWSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldENlbGwoY29vcmRpbmF0ZXM6IEkyRENvb3JkaW5hdGVzKTogQ2VsbCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YVtjb29yZGluYXRlcy55XVtjb29yZGluYXRlcy54XTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0U2l6ZSgpOiB7IHg6IG51bWJlciwgeTogbnVtYmVyIH0ge1xyXG4gICAgICAgIHJldHVybiB7IHg6IHRoaXMuc2l6ZVgsIHk6IHRoaXMuc2l6ZVkgfTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2VuZXJhdGUoc2l6ZVg6IG51bWJlciwgc2l6ZVk6IG51bWJlcik6IENlbGxbXVtdIHtcclxuICAgICAgICBjb25zdCBkZWZhdWx0Q2VsbCA9IExhbmRDZWxsO1xyXG4gICAgICAgIGxldCBwb3NzaWJsZUNlbGxzID0gW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBvYmo6IFZvbGNhbm9DZWxsLFxyXG4gICAgICAgICAgICAgICAgcmFuZDoge1xyXG4gICAgICAgICAgICAgICAgICAgIG1pbjogMSxcclxuICAgICAgICAgICAgICAgICAgICBtYXg6IDEwXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG9iajogRm9yZXN0Q2VsbCxcclxuICAgICAgICAgICAgICAgIHJhbmQ6IHtcclxuICAgICAgICAgICAgICAgICAgICBtaW46IDExLFxyXG4gICAgICAgICAgICAgICAgICAgIG1heDogMzBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgb2JqOiBMYWtlQ2VsbCxcclxuICAgICAgICAgICAgICAgIHJhbmQ6IHtcclxuICAgICAgICAgICAgICAgICAgICBtaW46IDMxLFxyXG4gICAgICAgICAgICAgICAgICAgIG1heDogMzVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgICAgICBjb25zb2xlLmxvZyhgTWFwOiBnZW5lcmF0ZSwgKCR7c2l6ZVh9LCAke3NpemVZfSlgKTtcclxuICAgICAgICBjb25zdCBkYXRhOiBDZWxsW11bXSA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgc2l6ZVk7ICsreSkge1xyXG4gICAgICAgICAgICBjb25zdCByb3c6IENlbGxbXSA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHNpemVYOyArK3gpIHtcclxuICAgICAgICAgICAgICAgIGxldCByYW5kTnVtID0gUmFuZG9tLmluUmFuZ2UoMSwgMTAwKTtcclxuICAgICAgICAgICAgICAgIGxldCBvYmplY3RGb3JDcmVhdGUgPSBudWxsO1xyXG5cclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcG9zc2libGVDZWxscy5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChDb21wYXJlLmlzSW5SYW5nZShyYW5kTnVtLCBwb3NzaWJsZUNlbGxzW2ldLnJhbmQubWluLCBwb3NzaWJsZUNlbGxzW2ldLnJhbmQubWF4KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvYmplY3RGb3JDcmVhdGUgPSBwb3NzaWJsZUNlbGxzW2ldLm9iajtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICghb2JqZWN0Rm9yQ3JlYXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0Rm9yQ3JlYXRlID0gZGVmYXVsdENlbGw7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcm93LnB1c2gobmV3IG9iamVjdEZvckNyZWF0ZSgpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkYXRhLnB1c2gocm93KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGRlZmF1bHRQb3NpdGlvbnMgPSBbXHJcbiAgICAgICAgICAgIHsgeDogMCwgeTogMCwgb2JqOiBMYW5kQ2VsbH0sXHJcbiAgICAgICAgICAgIHsgeDogMCwgeTogc2l6ZVkgLSAxLCBvYmo6IExhbmRDZWxsfSxcclxuICAgICAgICAgICAgeyB4OiBzaXplWCAtIDEsIHk6IHNpemVZIC0gMSwgb2JqOiBXaGl0ZUNhc3RsZUNlbGx9LFxyXG4gICAgICAgICAgICB7IHg6IHNpemVYIC0gMSwgeTogMCwgb2JqOiBEYXJrQ2FzdGxlQ2VsbH1cclxuICAgICAgICBdXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkZWZhdWx0UG9zaXRpb25zLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRlZmF1bHRQb3NpdGlvbnNbaV0pO1xyXG4gICAgICAgICAgICBsZXQgb2JqZWN0Rm9yQ3JlYXRlID0gZGVmYXVsdFBvc2l0aW9uc1tpXS5vYmo7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG9iamVjdEZvckNyZWF0ZSk7XHJcblxyXG4gICAgICAgICAgICBkYXRhW2RlZmF1bHRQb3NpdGlvbnNbaV0ueV1bZGVmYXVsdFBvc2l0aW9uc1tpXS54XSA9IG5ldyBvYmplY3RGb3JDcmVhdGUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coYE1hcDogZ2VuZXJhdGVkLCAoJHtzaXplWH0sICR7c2l6ZVl9KWApO1xyXG4gICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtNYXB9IGZyb20gJy4uL21hcC9tYXAnO1xyXG5pbXBvcnQge0kyRENvb3JkaW5hdGVzLCBJRHJhd2FibGVJbkZpZWxkLCBJSGFzQ3NzQ2xhc3MsIElSZW5kZXJlcn0gZnJvbSAnLi4vaW50ZXJmYWNlcyc7XHJcbmltcG9ydCB7R2FtZVN0YXRlfSBmcm9tICcuLi9nYW1lU3RhdGUnO1xyXG5pbXBvcnQge0NvbXBhcmV9IGZyb20gXCIuLi91dGlscy9jb21wYXJlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRmllbGRSZW5kZXJlciBpbXBsZW1lbnRzIElSZW5kZXJlciB7XHJcbiAgICBwcml2YXRlIG1hcDogTWFwO1xyXG4gICAgcHJpdmF0ZSBnYW1lU3RhdGU6IEdhbWVTdGF0ZTtcclxuICAgIHByaXZhdGUgZWxlbWVudDogRWxlbWVudDtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgY2VsbENsaWNrTGlzdGVuZXI6IGFueTtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgYnV0dG9uWkNsaWNrTGlzdGVuZXI6IGFueTtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgYnV0dG9uWENsaWNrTGlzdGVuZXI6IGFueTtcclxuICAgIFxyXG4gICAgY29uc3RydWN0b3IoZ2FtZVN0YXRlOiBHYW1lU3RhdGUsIGdhbWVGaWVsZDogSFRNTEVsZW1lbnQsIG1vdXNlTGlzdGVuZXI6IGFueSwgYnV0dG9uWkNsaWNrTGlzdGVuZXI6IGFueSxcclxuICAgICAgICAgICAgICAgIGJ1dHRvblhDbGlja0xpc3RlbmVyOiBhbnkpIHtcclxuICAgICAgICB0aGlzLm1hcCA9IGdhbWVTdGF0ZS5tYXA7XHJcbiAgICAgICAgdGhpcy5nYW1lU3RhdGUgPSBnYW1lU3RhdGU7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZ2FtZUZpZWxkO1xyXG4gICAgICAgIHRoaXMuY2VsbENsaWNrTGlzdGVuZXIgPSBtb3VzZUxpc3RlbmVyO1xyXG4gICAgICAgIHRoaXMuYnV0dG9uWkNsaWNrTGlzdGVuZXIgPSBidXR0b25aQ2xpY2tMaXN0ZW5lcjtcclxuICAgICAgICB0aGlzLmJ1dHRvblhDbGlja0xpc3RlbmVyID0gYnV0dG9uWENsaWNrTGlzdGVuZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZW5lcmF0ZXMgYSB0YWJsZSBhbmQgYXBwZW5kIGl0IHRvIHRoaXMuZWxlbWVudFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmVuZGVyKCk6IHZvaWQge1xyXG4gICAgICAgIGxldCB0YWJsZSA9IHRoaXMuZ2V0VGFibGUoKTtcclxuICAgICAgICB0YWJsZS5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgdGhpcy5tYXAuZ2V0U2l6ZSgpLnk7ICsreSkge1xyXG4gICAgICAgICAgICBsZXQgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggIDwgdGhpcy5tYXAuZ2V0U2l6ZSgpLng7ICsreCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xyXG4gICAgICAgICAgICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2VsbENsaWNrTGlzdGVuZXIpO1xyXG4gICAgICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKGNlbGwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRhYmxlLmFwcGVuZENoaWxkKHJvdyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZ2V0WkJ1dHRvbigpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5idXR0b25aQ2xpY2tMaXN0ZW5lcik7XHJcbiAgICAgICAgdGhpcy5nZXRYQnV0dG9uKCkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmJ1dHRvblhDbGlja0xpc3RlbmVyKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldFRhYmxlKCk6IEhUTUxUYWJsZUVsZW1lbnQge1xyXG4gICAgICAgIHJldHVybiA8SFRNTFRhYmxlRWxlbWVudD4gdGhpcy5lbGVtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3RhYmxlJylbMF07XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRCdXR0b25zKCk6IEhUTUxDb2xsZWN0aW9uIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJidXR0b25zXCIpWzBdLmNoaWxkcmVuO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0WkJ1dHRvbigpOiBFbGVtZW50IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRCdXR0b25zKClbMF07XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRYQnV0dG9uKCk6IEVsZW1lbnQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldEJ1dHRvbnMoKVsxXTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldEluZm9FbGVtZW50KCk6IEVsZW1lbnQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaW5mbycpWzBdO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0IGNlbGwgaW4gdGFibGVcclxuICAgICAqIEBwYXJhbSBjb29yZGluYXRlc1xyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBnZXRDZWxsKGNvb3JkaW5hdGVzOiBJMkRDb29yZGluYXRlcyk6IEVsZW1lbnQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldFRhYmxlKCkucm93c1tjb29yZGluYXRlcy55XS5jZWxsc1tjb29yZGluYXRlcy54XTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdlbmVyYXRlcyBkaXYgZWxlbWVudCB3aXRoIHNvbWUgY3NzIGNsYXNzXHJcbiAgICAgKiBAcGFyYW0gb2JqXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBnZXRIVE1MU3ByaXRlKG9iajogSUhhc0Nzc0NsYXNzKTogSFRNTEVsZW1lbnQge1xyXG4gICAgICAgIGxldCByZXN1bHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICByZXN1bHQuY2xhc3NMaXN0LmFkZCgnc3ByaXRlJyk7XHJcbiAgICAgICAgcmVzdWx0LmNsYXNzTGlzdC5hZGQob2JqLmNzc0NsYXNzKTtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0Q3JlYXR1cmVzTGlzdCgpOiBJRHJhd2FibGVJbkZpZWxkW10ge1xyXG4gICAgICAgIHJldHVybiBbdGhpcy5nYW1lU3RhdGUucGxheWVyLCAuLi50aGlzLmdhbWVTdGF0ZS5jcmVhdHVyZXNdO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1cGRhdGUoKTogdm9pZCB7XHJcbiAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCB0aGlzLm1hcC5nZXRTaXplKCkueTsgKyt5KSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgdGhpcy5tYXAuZ2V0U2l6ZSgpLng7ICsreCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IG1hcENlbGwgPSB0aGlzLm1hcC5nZXRDZWxsKHsgeDogeCwgeTogeSB9KTtcclxuICAgICAgICAgICAgICAgIGxldCBIVE1MQ2VsbCA9IHRoaXMuZ2V0Q2VsbCh7IHg6IHgsIHk6IHkgfSk7XHJcbiAgICAgICAgICAgICAgICBIVE1MQ2VsbC5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgSFRNTENlbGwuYXBwZW5kQ2hpbGQoRmllbGRSZW5kZXJlci5nZXRIVE1MU3ByaXRlKG1hcENlbGwpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBjcmVhdHVyZXNMaXN0ID0gdGhpcy5nZXRDcmVhdHVyZXNMaXN0KCk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjcmVhdHVyZXNMaXN0Lmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgIGxldCBjcmVhdHVyZSA9IGNyZWF0dXJlc0xpc3RbaV07XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0Q2VsbChjcmVhdHVyZS5nZXRDb29yZGluYXRlcygpKS5hcHBlbmRDaGlsZChGaWVsZFJlbmRlcmVyLmdldEhUTUxTcHJpdGUoY3JlYXR1cmUpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy51cGRhdGVJbmZvKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBVcGRhdGVzIGNlbGxzIG9ubHkgYXQgc3BlY2lmaWMgY29vcmRpbmF0ZXMuIE5lZWRlZCB0byBkcmF3IENTUyBhbmltYXRpb24gb25seSBmb3Igc3BlY2lmaWMgY2VsbHMuXHJcbiAgICAgKiBAcGFyYW0gY29vcmRpbmF0ZXNcclxuICAgICAqL1xyXG4gICAgcHVibGljIHVwZGF0ZUNlbGxzKGNvb3JkaW5hdGVzOiBJMkRDb29yZGluYXRlc1tdKTogdm9pZCB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb29yZGluYXRlcy5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICBsZXQgbWFwQ2VsbCA9IHRoaXMubWFwLmdldENlbGwoY29vcmRpbmF0ZXNbaV0pO1xyXG4gICAgICAgICAgICBsZXQgSFRNTENlbGwgPSB0aGlzLmdldENlbGwoY29vcmRpbmF0ZXNbaV0pO1xyXG4gICAgICAgICAgICBIVE1MQ2VsbC5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgICAgICBIVE1MQ2VsbC5hcHBlbmRDaGlsZChGaWVsZFJlbmRlcmVyLmdldEhUTUxTcHJpdGUobWFwQ2VsbCkpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgY3JlYXR1cmVzTGlzdCA9IHRoaXMuZ2V0Q3JlYXR1cmVzTGlzdCgpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGNyZWF0dXJlc0xpc3QubGVuZ3RoOyArK2opIHtcclxuICAgICAgICAgICAgICAgIGlmIChDb21wYXJlLnNoYWxsb3dFcXVhbChjcmVhdHVyZXNMaXN0W2pdLmdldENvb3JkaW5hdGVzKCksIGNvb3JkaW5hdGVzW2ldKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIEhUTUxDZWxsLmFwcGVuZENoaWxkKEZpZWxkUmVuZGVyZXIuZ2V0SFRNTFNwcml0ZShjcmVhdHVyZXNMaXN0W2pdKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHVwZGF0ZUluZm8oKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5nZXRJbmZvRWxlbWVudCgpLmlubmVySFRNTCA9IGBBdmFpbGFibGUgbW92ZXM6ICR7dGhpcy5nYW1lU3RhdGUucGxheWVyLmF2YWlsYWJsZU1vdmVzfWA7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge01vbnN0ZXJ9IGZyb20gXCIuLi9jcmVhdHVyZXMvbW9uc3RlclwiO1xyXG5pbXBvcnQge0lSZW5kZXJlcn0gZnJvbSBcIi4uL2ludGVyZmFjZXNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBGaWdodFJlbmRlcmVyIGltcGxlbWVudHMgSVJlbmRlcmVyIHtcclxuICAgIHByaXZhdGUgZWxlbWVudDogSFRNTEVsZW1lbnQ7XHJcbiAgICBwcml2YXRlIG1vbnN0ZXJzOiBbTW9uc3RlciwgTW9uc3Rlcl07XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IE5FU1pCdXR0b25DbGlja0xpc3RlbmVyOiBhbnk7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IE5FU1hCdXR0b25DbGlja0xpc3RlbmVyOiBhbnk7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZ2FtZUZpZ2h0OiBIVE1MRWxlbWVudCwgbW9uc3RlcnM6IFtNb25zdGVyLCBNb25zdGVyXSwgbGlzdGVuZXJfMTogYW55LCBsaXN0ZW5lcl8yOiBhbnkpIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQgPSBnYW1lRmlnaHQ7XHJcbiAgICAgICAgdGhpcy5tb25zdGVycyA9IG1vbnN0ZXJzO1xyXG4gICAgICAgIHRoaXMuTkVTWkJ1dHRvbkNsaWNrTGlzdGVuZXIgPSBsaXN0ZW5lcl8xO1xyXG4gICAgICAgIHRoaXMuTkVTWEJ1dHRvbkNsaWNrTGlzdGVuZXIgPSBsaXN0ZW5lcl8yO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZW5kZXIoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5nZXRaQnV0dG9uKCkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLk5FU1pCdXR0b25DbGlja0xpc3RlbmVyKTtcclxuICAgICAgICB0aGlzLmdldFhCdXR0b24oKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuTkVTWEJ1dHRvbkNsaWNrTGlzdGVuZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0TW9uc3RlckRpdnMoKTogSFRNTENvbGxlY3Rpb24ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm1vbnN0ZXJzXCIpWzBdLmNoaWxkcmVuO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIGdldFNwcml0ZShlbGVtOiBFbGVtZW50KSB7XHJcbiAgICAgICAgcmV0dXJuIGVsZW0uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc3ByaXRlJylbMF07XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgZ2V0SGVhbHRoKGVsZW06IEVsZW1lbnQpIHtcclxuICAgICAgICByZXR1cm4gZWxlbS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdoZWFsdGgnKVswXTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBnZXREZWZlbnNlKGVsZW06IEVsZW1lbnQpIHtcclxuICAgICAgICByZXR1cm4gZWxlbS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdkZWZlbnNlJylbMF07XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRCdXR0b25zKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYWN0aW9uLWJ0bicpWzBdLmNoaWxkcmVuO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0WkJ1dHRvbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRCdXR0b25zKClbMF07XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRYQnV0dG9uKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldEJ1dHRvbnMoKVsxXTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdXBkYXRlKCk6IHZvaWQge1xyXG4gICAgICAgIGxldCBtb25zdGVyRGl2cyA9IHRoaXMuZ2V0TW9uc3RlckRpdnMoKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1vbnN0ZXJEaXZzLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgIGxldCBzcHJpdGUgPSBGaWdodFJlbmRlcmVyLmdldFNwcml0ZShtb25zdGVyRGl2c1tpXSk7XHJcbiAgICAgICAgICAgIGxldCBoZWFsdGggPSBGaWdodFJlbmRlcmVyLmdldEhlYWx0aChtb25zdGVyRGl2c1tpXSk7XHJcbiAgICAgICAgICAgIGxldCBkZWZlbnNlID0gRmlnaHRSZW5kZXJlci5nZXREZWZlbnNlKG1vbnN0ZXJEaXZzW2ldKTtcclxuXHJcbiAgICAgICAgICAgIHNwcml0ZS5jbGFzc05hbWUgPSBgc3ByaXRlICR7dGhpcy5tb25zdGVyc1tpXS5jc3NDbGFzc31gO1xyXG4gICAgICAgICAgICBpZiAoaSA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICBzcHJpdGUuY2xhc3NMaXN0LmFkZCgnbWlycm9yWScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGhlYWx0aC5pbm5lckhUTUwgPSBgJHt0aGlzLm1vbnN0ZXJzW2ldLmhlYWx0aH1gO1xyXG4gICAgICAgICAgICBkZWZlbnNlLmlubmVySFRNTCA9IGAke3RoaXMubW9uc3RlcnNbaV0uZGVmZW5zZX1gO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImltcG9ydCB7SVNjZW5lSW5mb30gZnJvbSAnLi4vaW50ZXJmYWNlcyc7XHJcbmltcG9ydCB7R2FtZVN0YXRlfSBmcm9tICcuLi9nYW1lU3RhdGUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNjZW5lTWFuYWdlciB7XHJcbiAgICBnYW1lU3RhdGU6IEdhbWVTdGF0ZTtcclxuICAgIF9jdXJyZW50U2NlbmU6IHN0cmluZztcclxuICAgIHB1YmxpYyBnZXQgY3VycmVudFNjZW5lKCk6IElTY2VuZUluZm8ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldFNjZW5lSW5mbyh0aGlzLl9jdXJyZW50U2NlbmUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKGdhbWVTdGF0ZTogR2FtZVN0YXRlKSB7XHJcbiAgICAgICAgdGhpcy5nYW1lU3RhdGUgPSBnYW1lU3RhdGU7XHJcbiAgICAgICAgdGhpcy5fY3VycmVudFNjZW5lID0gXCJcIjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0U2NlbmVJbmZvKG5hbWU6IHN0cmluZyk6IElTY2VuZUluZm8ge1xyXG4gICAgICAgIGxldCBzY2VuZXMgPSB0aGlzLmdhbWVTdGF0ZS5zY2VuZXM7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzY2VuZXMubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgICAgaWYgKHNjZW5lc1tpXS5uYW1lID09IG5hbWUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBzY2VuZXNbaV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHNjZW5lIGRvZXMgbm90IGV4aXN0XCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzaG93U2NlbmUobmFtZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fY3VycmVudFNjZW5lID0gbmFtZTtcclxuICAgICAgICBsZXQgc2NlbmUgPSB0aGlzLmdldFNjZW5lSW5mbyhuYW1lKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZ2FtZVN0YXRlLnNjZW5lcy5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVTdGF0ZS5zY2VuZXNbaV0uZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNjZW5lLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtJUmVuZGVyZXJ9IGZyb20gXCIuLi9pbnRlcmZhY2VzXCI7XHJcbmltcG9ydCB7UGxheWVyfSBmcm9tIFwiLi4vY3JlYXR1cmVzL3BsYXllclwiO1xyXG5pbXBvcnQge01vbnN0ZXJ9IGZyb20gXCIuLi9jcmVhdHVyZXMvbW9uc3RlclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNlbGVjdE1vbnN0ZXJSZW5kZXJlciBpbXBsZW1lbnRzIElSZW5kZXJlciB7XHJcbiAgICBwcml2YXRlIGRvbUVsZW1lbnQ6IEhUTUxFbGVtZW50O1xyXG4gICAgcHJpdmF0ZSBwbGF5ZXI6IFBsYXllcjtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgT2tCdXR0b25MaXN0ZW5lcjogYW55O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGRvbUVsZW1lbnQ6IEhUTUxFbGVtZW50LCBwbGF5ZXI6IFBsYXllciwgT2tCdXR0b25MaXN0ZW5lcjogYW55KSB7XHJcbiAgICAgICAgdGhpcy5kb21FbGVtZW50ID0gZG9tRWxlbWVudDtcclxuICAgICAgICB0aGlzLnBsYXllciA9IHBsYXllcjtcclxuICAgICAgICB0aGlzLk9rQnV0dG9uTGlzdGVuZXIgPSBPa0J1dHRvbkxpc3RlbmVyO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZW5kZXIoKTogdm9pZCB7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHVwZGF0ZSgpOiB2b2lkIHtcclxuICAgICAgICBsZXQgc2VsZWN0ID0gdGhpcy5kb21FbGVtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3NlbGVjdCcpWzBdO1xyXG4gICAgICAgIHNlbGVjdC5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wbGF5ZXIuYXZhaWxhYmxlTW9uc3RlcnMubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgICAgbGV0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG4gICAgICAgICAgICBvcHRpb24udmFsdWUgPSBgJHtpfWA7XHJcbiAgICAgICAgICAgIG9wdGlvbi5pbm5lclRleHQgPSB0aGlzLnBsYXllci5hdmFpbGFibGVNb25zdGVyc1tpXS5nZXRTdHJpbmcoKTtcclxuICAgICAgICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBPa0J1dHRvbiA9IHRoaXMuZG9tRWxlbWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdvaycpWzBdO1xyXG4gICAgICAgIE9rQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5Pa0J1dHRvbkxpc3RlbmVyKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0Q2hvc2VuTW9uc3RlcigpOiBNb25zdGVyIHtcclxuICAgICAgICBsZXQgc2VsZWN0ID0gPEhUTUxTZWxlY3RFbGVtZW50PnRoaXMuZG9tRWxlbWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzZWxlY3QnKVswXTtcclxuICAgICAgICBsZXQgaW5kZXggPSBzZWxlY3QudmFsdWU7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGxheWVyLmF2YWlsYWJsZU1vbnN0ZXJzW3BhcnNlSW50KGluZGV4KV07XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgY2xhc3MgQ29tcGFyZSB7XHJcbiAgICAvKipcclxuICAgICAqIGlzIHRoZSBudW1iZXIgd2l0aGluIHRoZSBib3VuZHNcclxuICAgICAqIEBwYXJhbSB4XHJcbiAgICAgKiBAcGFyYW0gbWluXHJcbiAgICAgKiBAcGFyYW0gbWF4XHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBpc0luUmFuZ2UoeDogbnVtYmVyLCBtaW46IG51bWJlciwgbWF4OiBudW1iZXIpIHtcclxuICAgICAgICByZXR1cm4gbWluIDw9IHggJiYgeCA8PSBtYXg7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDaGVja3MgZm9yIGRpY3Rpb25hcnkgY29tcGFyaXNvbnMuXHJcbiAgICAgKlxyXG4gICAgICogSW4gSmF2YVNjcmlwdCBhbmQgVHlwZVNjcmlwdCwgSWYgdHdvIGVsZW1lbnRzIGFyZSBlbGVtZW50cyB0aGF0IGltcGxlbWVudCBzb21lIGtpbmQgb2YgaW50ZXJmYWNlLCB0aGVuIGNvbXBhcmluZ1xyXG4gICAgICogdGhlbSB1c2luZyBjb21wYXJpc29uIG9wZXJhdG9ycyBpcyBmYWxzZS4gRXZlbiBpZiB0aGVzZSBvYmplY3RzIGFyZSBlcXVhbCBpbiB2YWx1ZS5cclxuICAgICAqXHJcbiAgICAgKiBUaGlzIGZ1bmN0aW9uIHNvbHZlcyB0aGUgcHJvYmxlbSBhbmQgbWF0Y2hlcyB0aGUgZWxlbWVudHMgYnkgdGhlIHZhbHVlIG9mIGVhY2ggZmllbGQuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGFcclxuICAgICAqIEBwYXJhbSBiXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBzaGFsbG93RXF1YWwoYTogYW55LCBiOiBhbnkpOiBib29sZWFuIHtcclxuICAgICAgICBjb25zdCBrZXlzMSA9IE9iamVjdC5rZXlzKGEpO1xyXG4gICAgICAgIGNvbnN0IGtleXMyID0gT2JqZWN0LmtleXMoYik7XHJcblxyXG4gICAgICAgIGlmIChrZXlzMS5sZW5ndGggIT09IGtleXMyLmxlbmd0aCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKGxldCBrZXkgb2Yga2V5czEpIHtcclxuICAgICAgICAgICAgaWYgKGFba2V5XSAhPT0gYltrZXldKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG5cclxuICAgIH1cclxufSIsImV4cG9ydCBjbGFzcyBSYW5kb20ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0gYVxyXG4gICAgICogQHBhcmFtIGJcclxuICAgICAqIEByZXR1cm5zIHJhbmRvbSBudW1iZXIgYmV0d2VlbiBhIGFuZCBiLCBpbmNsdXNpdmVcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGluUmFuZ2UoYTogbnVtYmVyLCBiOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoYiAtIGEgKyAxKSkgKyBhO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBvbmVJdGVtRnJvbUFycmF5KGFycjogYW55W10pOiBhbnl7XHJcbiAgICAgICAgcmV0dXJuIGFyclt0aGlzLmluUmFuZ2UoMCwgYXJyLmxlbmd0aCAtIDEpXTtcclxuICAgIH1cclxufSJdfQ==
