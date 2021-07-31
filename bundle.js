(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });
exports.ComplexityChanger = void 0;

var ComplexityChanger = function () {
    function ComplexityChanger(map) {
        _classCallCheck(this, ComplexityChanger);

        this._currentMapData = map;
    }

    _createClass(ComplexityChanger, [{
        key: "balanceMap",
        value: function balanceMap() {
            for (var y = 0; y < this._currentMapData.length; ++y) {
                for (var x = 0; x < this._currentMapData[y].length; ++x) {
                    var currentMonster = this._currentMapData[y][x].monster;
                    var newHealthValue = (1 + x / 10) * currentMonster.health;
                    currentMonster.BalanceHeal(newHealthValue);
                }
            }
        }
    }]);

    return ComplexityChanger;
}();

exports.ComplexityChanger = ComplexityChanger;

},{}],2:[function(require,module,exports){
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

},{}],3:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
exports.Boss = exports.Snake = exports.Plant = exports.Medusa = exports.Lion = exports.Horse = exports.Dog = exports.Cat = exports.BlackDragon = exports.Dragon = exports.Shark = exports.Monster = void 0;
var creature_1 = require("./creature");

var Monster = function (_creature_1$Creature) {
    _inherits(Monster, _creature_1$Creature);

    function Monster(name, cssClass, type, health, attack, defense, attackBooster, looted) {
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
        key: "BalanceHeal",
        value: function BalanceHeal(newHeal) {
            this._health = newHeal;
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

        return _possibleConstructorReturn(this, (Shark.__proto__ || Object.getPrototypeOf(Shark)).call(this, 'Shark', 'shark', 'red', 10, 10, 5, 0, false));
    }

    return Shark;
}(Monster);

exports.Shark = Shark;

var Dragon = function (_Monster2) {
    _inherits(Dragon, _Monster2);

    function Dragon() {
        _classCallCheck(this, Dragon);

        return _possibleConstructorReturn(this, (Dragon.__proto__ || Object.getPrototypeOf(Dragon)).call(this, 'Dragon', 'dragon', 'red', 20, 5, 0, 0, false));
    }

    return Dragon;
}(Monster);

exports.Dragon = Dragon;

var BlackDragon = function (_Monster3) {
    _inherits(BlackDragon, _Monster3);

    function BlackDragon() {
        _classCallCheck(this, BlackDragon);

        return _possibleConstructorReturn(this, (BlackDragon.__proto__ || Object.getPrototypeOf(BlackDragon)).call(this, 'BlackDragon', 'black_dragon', 'a', 100, 10, 0, 3, false));
    }

    return BlackDragon;
}(Monster);

exports.BlackDragon = BlackDragon;

var Cat = function (_Monster4) {
    _inherits(Cat, _Monster4);

    function Cat() {
        _classCallCheck(this, Cat);

        return _possibleConstructorReturn(this, (Cat.__proto__ || Object.getPrototypeOf(Cat)).call(this, 'Cat', 'cat', 'red', 20, 30, 0, 20, false));
    }

    return Cat;
}(Monster);

exports.Cat = Cat;

var Dog = function (_Monster5) {
    _inherits(Dog, _Monster5);

    function Dog() {
        _classCallCheck(this, Dog);

        return _possibleConstructorReturn(this, (Dog.__proto__ || Object.getPrototypeOf(Dog)).call(this, 'Dog', 'dog', 'red', 10, 10, 200, 0, false));
    }

    return Dog;
}(Monster);

exports.Dog = Dog;

var Horse = function (_Monster6) {
    _inherits(Horse, _Monster6);

    function Horse() {
        _classCallCheck(this, Horse);

        return _possibleConstructorReturn(this, (Horse.__proto__ || Object.getPrototypeOf(Horse)).call(this, 'Horse', 'horse', 'red', 200, 5, 0, 10, false));
    }

    return Horse;
}(Monster);

exports.Horse = Horse;

var Lion = function (_Monster7) {
    _inherits(Lion, _Monster7);

    function Lion() {
        _classCallCheck(this, Lion);

        return _possibleConstructorReturn(this, (Lion.__proto__ || Object.getPrototypeOf(Lion)).call(this, 'Lion', 'lion', 'red', 30, 6, 5, 2, false));
    }

    return Lion;
}(Monster);

exports.Lion = Lion;

var Medusa = function (_Monster8) {
    _inherits(Medusa, _Monster8);

    function Medusa() {
        _classCallCheck(this, Medusa);

        return _possibleConstructorReturn(this, (Medusa.__proto__ || Object.getPrototypeOf(Medusa)).call(this, 'Medusa', 'medusa', 'red', 3, 5, 100, 0, false));
    }

    return Medusa;
}(Monster);

exports.Medusa = Medusa;

var Plant = function (_Monster9) {
    _inherits(Plant, _Monster9);

    function Plant() {
        _classCallCheck(this, Plant);

        return _possibleConstructorReturn(this, (Plant.__proto__ || Object.getPrototypeOf(Plant)).call(this, 'Plant', 'plant', 'red', 5, 5, 20, 0, false));
    }

    return Plant;
}(Monster);

exports.Plant = Plant;

var Snake = function (_Monster10) {
    _inherits(Snake, _Monster10);

    function Snake() {
        _classCallCheck(this, Snake);

        return _possibleConstructorReturn(this, (Snake.__proto__ || Object.getPrototypeOf(Snake)).call(this, 'Snake', 'snake', 'red', 30, 2, 0, 0, false));
    }

    return Snake;
}(Monster);

exports.Snake = Snake;

var Boss = function (_Monster11) {
    _inherits(Boss, _Monster11);

    function Boss() {
        _classCallCheck(this, Boss);

        return _possibleConstructorReturn(this, (Boss.__proto__ || Object.getPrototypeOf(Boss)).call(this, 'Boss', 'boss', 'red', 1000, 25, 20, 10, false));
    }

    return Boss;
}(Monster);

exports.Boss = Boss;

},{"./creature":2}],4:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
var creature_1 = require("./creature");
var monster_1 = require("./monster");

var Player = function (_creature_1$Creature) {
    _inherits(Player, _creature_1$Creature);

    function Player(name, cssClass, x, y, availableMoves) {
        _classCallCheck(this, Player);

        var _this = _possibleConstructorReturn(this, (Player.__proto__ || Object.getPrototypeOf(Player)).call(this, name, cssClass));

        _this.x = x;
        _this.y = y;
        _this._availableMoves = availableMoves;
        var shark = new monster_1.Shark();
        shark.loot();
        _this._availableMonsters = [shark];
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

},{"./creature":2,"./monster":3}],5:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });
exports.GameState = void 0;
var moveManager_1 = require("./logic/moveManager");

var GameState = function () {
    function GameState(player, player2, map) {
        _classCallCheck(this, GameState);

        this.player = player;
        this.player2 = player2;
        this.currentPlayer = player;
        this.map = map;
        this.moveManager = new moveManager_1.MoveManager(this.map, this.player);
        this.fight = null;
        this.blocked = false;
    }

    _createClass(GameState, [{
        key: "getCreatures",
        value: function getCreatures() {
            return [this.player, this.player2];
        }
    }, {
        key: "getNext",
        value: function getNext() {
            return this.currentPlayer == this.player ? this.player2 : this.player;
        }
    }, {
        key: "getCurrent",
        value: function getCurrent() {
            return this.currentPlayer;
        }
    }, {
        key: "swapPlayers",
        value: function swapPlayers() {
            this.currentPlayer.resetAvailableMoves();
            this.currentPlayer = this.getNext();
        }
    }]);

    return GameState;
}();

exports.GameState = GameState;

},{"./logic/moveManager":7}],6:[function(require,module,exports){
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
            console.log(this.defenseMonster, this.currentMonster);
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

},{}],7:[function(require,module,exports){
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
    }

    _createClass(MoveManager, [{
        key: "outOfBoundsOfArray",
        value: function outOfBoundsOfArray(coordinates) {
            return compare_1.Compare.isInRange(coordinates.x, 0, this.map.getSize().x - 1) && compare_1.Compare.isInRange(coordinates.y, 0, this.map.getSize().y - 1);
        }
    }, {
        key: "adjacentCellHorizOrVer",
        value: function adjacentCellHorizOrVer(player, coordinates) {
            return Math.abs(coordinates.x - player.getCoordinates().x) + Math.abs(coordinates.y - player.getCoordinates().y) == 1;
        }
    }, {
        key: "haveEnoughMovement",
        value: function haveEnoughMovement(player, coordinates) {
            return player.availableMoves >= this.map.getCell(coordinates).transitionCost;
        }
        /**
         * Coordinates are correct if the map range is included
         * and point to an adjacent cell horizontally or vertically
         * @returns
         * @param coordinates
         */

    }, {
        key: "isCorrectCoordinates",
        value: function isCorrectCoordinates(player, coordinates) {
            return this.outOfBoundsOfArray(coordinates) && this.adjacentCellHorizOrVer(player, coordinates) && this.haveEnoughMovement(player, coordinates);
        }
    }, {
        key: "move",
        value: function move(player, coordinates) {
            if (this.isCorrectCoordinates(player, coordinates)) {
                console.log(player.name + " moved to (" + coordinates.x + ", " + coordinates.y + ")");
                player.move(coordinates, this.map.getCell(coordinates).transitionCost);
                return true;
            } else {
                console.log(player.name + " not moved to (" + coordinates.x + ", " + coordinates.y + ")");
                return false;
            }
        }
    }]);

    return MoveManager;
}();

exports.MoveManager = MoveManager;

},{"../utils/compare":16}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var sceneManager_1 = require("./scenes/sceneManager");
var fightScene_1 = require("./scenes/fightScene");
var fieldScene_1 = require("./scenes/fieldScene");
var selectMonsterScene_1 = require("./scenes/selectMonsterScene");
var startScene_1 = require("./scenes/startScene");
var gameState_1 = require("./gameState");
var player_1 = require("./creatures/player");
var map_1 = require("./map/map");
var fight_1 = require("./logic/fight");
/* Global variables */
var DEFAULT_START_AVAILABLE_MOVES = 5;
var DEFAULT_PLAYER_1_POS = [0, 0];
var DEFAULT_PLAYER_2_POS = [0, 4];
var DEFAULT_MAP_SIZE = [5, 5];
var gs = null;
function initGS() {
    gs = new gameState_1.GameState(new (Function.prototype.bind.apply(player_1.Player, [null].concat(["Steve", "hero_1"], DEFAULT_PLAYER_1_POS, [DEFAULT_START_AVAILABLE_MOVES])))(), new (Function.prototype.bind.apply(player_1.Player, [null].concat(["John", "hero_2"], DEFAULT_PLAYER_2_POS, [DEFAULT_START_AVAILABLE_MOVES])))(), new (Function.prototype.bind.apply(map_1.Map, [null].concat(DEFAULT_MAP_SIZE)))());
}
/**
 * Scenes
 */
var fieldScene = new fieldScene_1.FieldScene(document.getElementById('game-field'), cellClickListener, NESZButtonInFieldClickListener, NESXButtonInFieldClickListener);
var fightScene = new fightScene_1.FightScene(document.getElementById('game-fight'), NESZButtonInFightClickListener, NESXButtonInFightClickListener);
var selectMonsterScene = new selectMonsterScene_1.SelectMonsterScene(document.getElementById('game-select-monster'), OKButtonInSelectClickListener);
var startScene = new startScene_1.StartScene(document.getElementById('game-start'), startButtonClickListener);
fightScene.render();
startScene.render();
/**
 * Scene Manager
 */
var sceneManager = new sceneManager_1.SceneManager([{
    name: 'field',
    scene: fieldScene
}, {
    name: 'fight',
    scene: fightScene
}, {
    name: 'select',
    scene: selectMonsterScene
}, {
    name: 'start',
    scene: startScene
}]);
sceneManager.showScene('start');
/**
 * Start scene
 */
function startButtonClickListener() {
    if (gs.blocked) return;
    initGS();
    sceneManager.showScene('field');
    fieldScene.render(gs.map);
    fieldScene.update(gs.map, [gs.player, gs.player2]);
    fieldScene.updateInfo(gs.getCurrent());
}
/**
 * Fight Scene
 */
function NESZButtonInFightClickListener() {
    if (gs.blocked) return;
    gs.fight.attackCurrent();
    fightScene.shakeMonster(gs.fight.defenseMonster);
    if (gs.fight.isFinish()) {
        fieldScene.updateInfo(gs.getCurrent());
        fightScene.update();
        gs.blocked = true;
        setTimeout(function () {
            gs.blocked = false;
            gs.fight.finish();
            sceneManager.showScene('field');
            fieldScene.updateInfo(gs.getCurrent());
        }, 1000);
    } else {
        gs.fight.swap();
        fightScene.update();
    }
}
function NESXButtonInFightClickListener() {
    if (gs.blocked) return;
    gs.fight.defendCurrent();
    gs.fight.swap();
    fightScene.update();
}
/**
 * Field Scene
 */
function cellClickListener(event) {
    if (gs.blocked) return;
    function getCoordinatesOfCell(target) {
        var element = target;
        var td = element.parentElement;
        var row = td.parentElement;
        return { x: td.cellIndex, y: row.rowIndex };
    }
    var coordinates = getCoordinatesOfCell(event.target);
    var old_coordinate = gs.getCurrent().getCoordinates();
    if (gs.moveManager.move(gs.getCurrent(), coordinates)) {
        fieldScene.updateInfo(gs.getCurrent());
        fieldScene.updateCells(gs.map, [old_coordinate, gs.getCurrent().getCoordinates()], gs.getCreatures());
    }
}
function NESZButtonInFieldClickListener() {
    if (gs.blocked) return;
    var coordinates = gs.getCurrent().getCoordinates();
    if (gs.map.getCell(coordinates).monster.looted) return;
    if (gs.getCurrent().availableMoves <= 0) return;
    selectMonsterScene.setPlayer(gs.getCurrent());
    selectMonsterScene.update();
    sceneManager.showScene('select');
}
function NESXButtonInFieldClickListener() {
    if (gs.blocked) return;
    gs.getCurrent().resetAvailableMoves();
    gs.swapPlayers();
    gs.getCurrent().setAvailableMoves(DEFAULT_START_AVAILABLE_MOVES);
    fieldScene.updateInfo(gs.getCurrent());
}
/**
 * Select Scene
 */
function OKButtonInSelectClickListener() {
    if (gs.blocked) return;
    sceneManager.showScene('fight');
    var monsters = [selectMonsterScene.getChosenMonster(), gs.map.getCell(gs.getCurrent().getCoordinates()).monster];
    fightScene.setMonsters(monsters);
    fightScene.render();
    fightScene.update();
    gs.fight = new (Function.prototype.bind.apply(fight_1.Fight, [null].concat([gs.getCurrent()], monsters)))();
}

},{"./creatures/player":4,"./gameState":5,"./logic/fight":6,"./map/map":10,"./scenes/fieldScene":11,"./scenes/fightScene":12,"./scenes/sceneManager":13,"./scenes/selectMonsterScene":14,"./scenes/startScene":15}],9:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });
exports.BossCell = exports.WhiteCastleCell = exports.DarkCastleCell = exports.LakeCell = exports.ForestCell = exports.VolcanoCell = exports.LandCell = exports.Cell = void 0;
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

        return _possibleConstructorReturn(this, (LandCell.__proto__ || Object.getPrototypeOf(LandCell)).call(this, 'land', [1, 2], [new monster_1.Snake(), new monster_1.Plant()]));
    }

    return LandCell;
}(Cell);

exports.LandCell = LandCell;

var VolcanoCell = function (_Cell2) {
    _inherits(VolcanoCell, _Cell2);

    function VolcanoCell() {
        _classCallCheck(this, VolcanoCell);

        return _possibleConstructorReturn(this, (VolcanoCell.__proto__ || Object.getPrototypeOf(VolcanoCell)).call(this, 'volcano', [3, 5], [new monster_1.Dragon(), new monster_1.Lion()]));
    }

    return VolcanoCell;
}(Cell);

exports.VolcanoCell = VolcanoCell;

var ForestCell = function (_Cell3) {
    _inherits(ForestCell, _Cell3);

    function ForestCell() {
        _classCallCheck(this, ForestCell);

        return _possibleConstructorReturn(this, (ForestCell.__proto__ || Object.getPrototypeOf(ForestCell)).call(this, 'forest', [3, 5], [new monster_1.Snake(), new monster_1.Plant()]));
    }

    return ForestCell;
}(Cell);

exports.ForestCell = ForestCell;

var LakeCell = function (_Cell4) {
    _inherits(LakeCell, _Cell4);

    function LakeCell() {
        _classCallCheck(this, LakeCell);

        return _possibleConstructorReturn(this, (LakeCell.__proto__ || Object.getPrototypeOf(LakeCell)).call(this, 'lake', [3, 5], [new monster_1.Medusa(), new monster_1.Shark()]));
    }

    return LakeCell;
}(Cell);

exports.LakeCell = LakeCell;

var DarkCastleCell = function (_Cell5) {
    _inherits(DarkCastleCell, _Cell5);

    function DarkCastleCell() {
        _classCallCheck(this, DarkCastleCell);

        return _possibleConstructorReturn(this, (DarkCastleCell.__proto__ || Object.getPrototypeOf(DarkCastleCell)).call(this, 'dark_castle', [3, 5], [new monster_1.Dog(), new monster_1.BlackDragon()]));
    }

    return DarkCastleCell;
}(Cell);

exports.DarkCastleCell = DarkCastleCell;

var WhiteCastleCell = function (_Cell6) {
    _inherits(WhiteCastleCell, _Cell6);

    function WhiteCastleCell() {
        _classCallCheck(this, WhiteCastleCell);

        return _possibleConstructorReturn(this, (WhiteCastleCell.__proto__ || Object.getPrototypeOf(WhiteCastleCell)).call(this, 'white_castle', [3, 5], [new monster_1.Cat(), new monster_1.Horse()]));
    }

    return WhiteCastleCell;
}(Cell);

exports.WhiteCastleCell = WhiteCastleCell;

var BossCell = function (_Cell7) {
    _inherits(BossCell, _Cell7);

    function BossCell() {
        _classCallCheck(this, BossCell);

        return _possibleConstructorReturn(this, (BossCell.__proto__ || Object.getPrototypeOf(BossCell)).call(this, 'boss_cell', [3, 5], [new monster_1.Boss()]));
    }

    return BossCell;
}(Cell);

exports.BossCell = BossCell;

},{"../creatures/monster":3,"../utils/random":17}],10:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });
exports.Map = void 0;
var cell_1 = require("./cell");
var random_1 = require("../utils/random");
var compare_1 = require("../utils/compare");
var complexityChanger_1 = require("../complexityChanger");

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
            var defaultPositions = [{ x: 0, y: 0, obj: cell_1.LandCell }, { x: 0, y: sizeY - 1, obj: cell_1.LandCell }, { x: sizeX - 1, y: sizeY - 1, obj: cell_1.WhiteCastleCell }, { x: sizeX - 1, y: 0, obj: cell_1.DarkCastleCell }, { x: sizeX - 1, y: 2, obj: cell_1.BossCell }];
            for (var _i = 0; _i < defaultPositions.length; ++_i) {
                var _objectForCreate = defaultPositions[_i].obj;
                data[defaultPositions[_i].y][defaultPositions[_i].x] = new _objectForCreate();
            }
            console.log("Map: generated, (" + sizeX + ", " + sizeY + ")");
            var compChanger = new complexityChanger_1.ComplexityChanger(data);
            compChanger.balanceMap();
            return data;
        }
    }]);

    return Map;
}();

exports.Map = Map;

},{"../complexityChanger":1,"../utils/compare":16,"../utils/random":17,"./cell":9}],11:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });
exports.FieldScene = void 0;
var compare_1 = require("../utils/compare");

var FieldScene = function () {
    function FieldScene(gameField, mouseListener, buttonZClickListener, buttonXClickListener) {
        _classCallCheck(this, FieldScene);

        this.element = gameField;
        this.cellClickListener = mouseListener;
        this.buttonZClickListener = buttonZClickListener;
        this.buttonXClickListener = buttonXClickListener;
    }

    _createClass(FieldScene, [{
        key: "getElement",
        value: function getElement() {
            return this.element;
        }
        /**
         * Generates a table and append it to this.element
         */

    }, {
        key: "render",
        value: function render(map) {
            var table = this.getTable();
            table.innerHTML = "";
            for (var y = 0; y < map.getSize().y; ++y) {
                var row = document.createElement('tr');
                for (var x = 0; x < map.getSize().x; ++x) {
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
        key: "update",
        value: function update(map, creatures) {
            for (var y = 0; y < map.getSize().y; ++y) {
                for (var x = 0; x < map.getSize().x; ++x) {
                    var mapCell = map.getCell({ x: x, y: y });
                    var HTMLCell = this.getCell({ x: x, y: y });
                    HTMLCell.innerHTML = "";
                    HTMLCell.appendChild(FieldScene.getHTMLSprite(mapCell));
                }
            }
            for (var i = 0; i < creatures.length; ++i) {
                var creature = creatures[i];
                this.getCell(creature.getCoordinates()).appendChild(FieldScene.getHTMLSprite(creature));
            }
        }
        /**
         * Updates cells only at specific coordinates. Needed to draw CSS animation only for specific cells.
         * @param map
         * @param coordinates
         * @param creatures
         */

    }, {
        key: "updateCells",
        value: function updateCells(map, coordinates, creatures) {
            for (var i = 0; i < coordinates.length; ++i) {
                var mapCell = map.getCell(coordinates[i]);
                var HTMLCell = this.getCell(coordinates[i]);
                HTMLCell.innerHTML = "";
                HTMLCell.appendChild(FieldScene.getHTMLSprite(mapCell));
                for (var j = 0; j < creatures.length; ++j) {
                    if (compare_1.Compare.shallowEqual(creatures[j].getCoordinates(), coordinates[i])) {
                        HTMLCell.appendChild(FieldScene.getHTMLSprite(creatures[j]));
                    }
                }
            }
        }
    }, {
        key: "updateInfo",
        value: function updateInfo(player) {
            this.getInfoElement().innerHTML = "Player: " + player.name + "<br>Available moves: " + player.availableMoves;
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

    return FieldScene;
}();

exports.FieldScene = FieldScene;

},{"../utils/compare":16}],12:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });
exports.FightScene = void 0;

var FightScene = function () {
    function FightScene(gameFight, listener_1, listener_2) {
        _classCallCheck(this, FightScene);

        this.element = gameFight;
        this.monsters = [null, null];
        this.NESZButtonClickListener = listener_1;
        this.NESXButtonClickListener = listener_2;
    }

    _createClass(FightScene, [{
        key: "setMonsters",
        value: function setMonsters(monsters) {
            this.monsters = monsters;
        }
    }, {
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
                var sprite = FightScene.getSprite(monsterDivs[i]);
                var health = FightScene.getHealth(monsterDivs[i]);
                var defense = FightScene.getDefense(monsterDivs[i]);
                sprite.className = "sprite " + this.monsters[i].cssClass;
                if (i == 1) {
                    sprite.classList.add('mirrorY');
                }
                health.innerHTML = "" + this.monsters[i].health;
                defense.innerHTML = "" + this.monsters[i].defense;
            }
        }
    }, {
        key: "getElement",
        value: function getElement() {
            return this.element;
        }
    }, {
        key: "shakeMonster",
        value: function shakeMonster(monster) {
            var index = this.monsters.indexOf(monster);
            var parentDiv = FightScene.getSprite(this.getMonsterDivs()[index]);
            parentDiv.classList.remove('shake');
            setTimeout(function () {
                parentDiv.classList.add('shake');
            }, 50);
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

    return FightScene;
}();

exports.FightScene = FightScene;

},{}],13:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });
exports.SceneManager = void 0;

var SceneManager = function () {
    function SceneManager(scenes) {
        _classCallCheck(this, SceneManager);

        this._currentScene = "";
        this.scenes = scenes;
    }

    _createClass(SceneManager, [{
        key: "getSceneInfo",
        value: function getSceneInfo(name) {
            for (var i = 0; i < this.scenes.length; ++i) {
                if (this.scenes[i].name == name) {
                    return this.scenes[i];
                }
            }
            throw new Error("The scene does not exist");
        }
    }, {
        key: "showScene",
        value: function showScene(name) {
            this._currentScene = name;
            var scene = this.getSceneInfo(name).scene;
            for (var i = 0; i < this.scenes.length; ++i) {
                this.scenes[i].scene.getElement().classList.add('hide');
            }
            scene.getElement().classList.remove('hide');
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

},{}],14:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectMonsterScene = void 0;

var SelectMonsterScene = function () {
    function SelectMonsterScene(domElement, OkButtonListener) {
        _classCallCheck(this, SelectMonsterScene);

        this.element = domElement;
        this.player = null;
        this.OkButtonListener = OkButtonListener;
    }

    _createClass(SelectMonsterScene, [{
        key: "setPlayer",
        value: function setPlayer(player) {
            this.player = player;
        }
    }, {
        key: "update",
        value: function update() {
            var select = this.element.getElementsByClassName('select')[0];
            select.innerHTML = "";
            for (var i = 0; i < this.player.availableMonsters.length; ++i) {
                var option = document.createElement('option');
                option.value = "" + i;
                option.innerText = this.player.availableMonsters[i].getString();
                select.appendChild(option);
            }
            var OkButton = this.element.getElementsByClassName('ok')[0];
            OkButton.addEventListener('click', this.OkButtonListener);
        }
    }, {
        key: "getChosenMonster",
        value: function getChosenMonster() {
            var select = this.element.getElementsByClassName('select')[0];
            var index = select.value;
            return this.player.availableMonsters[parseInt(index)];
        }
    }, {
        key: "getElement",
        value: function getElement() {
            return this.element;
        }
    }]);

    return SelectMonsterScene;
}();

exports.SelectMonsterScene = SelectMonsterScene;

},{}],15:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });
exports.StartScene = void 0;

var StartScene = function () {
    function StartScene(domElement, startButtonListener) {
        _classCallCheck(this, StartScene);

        this.element = domElement;
        this.startButtonListener = startButtonListener;
    }

    _createClass(StartScene, [{
        key: "render",
        value: function render() {
            var button = this.element.getElementsByClassName('red-btn')[0];
            button.addEventListener('click', this.startButtonListener);
        }
    }, {
        key: "getElement",
        value: function getElement() {
            return this.element;
        }
    }]);

    return StartScene;
}();

exports.StartScene = StartScene;

},{}],16:[function(require,module,exports){
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

},{}],17:[function(require,module,exports){
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

},{}]},{},[8])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvc2NyaXB0cy9jb21wbGV4aXR5Q2hhbmdlci50cyIsInNyYy9zY3JpcHRzL2NyZWF0dXJlcy9jcmVhdHVyZS50cyIsInNyYy9zY3JpcHRzL2NyZWF0dXJlcy9tb25zdGVyLnRzIiwic3JjL3NjcmlwdHMvY3JlYXR1cmVzL3BsYXllci50cyIsInNyYy9zY3JpcHRzL2dhbWVTdGF0ZS50cyIsInNyYy9zY3JpcHRzL2xvZ2ljL2ZpZ2h0LnRzIiwic3JjL3NjcmlwdHMvbG9naWMvbW92ZU1hbmFnZXIudHMiLCJzcmMvc2NyaXB0cy9tYWluLnRzIiwic3JjL3NjcmlwdHMvbWFwL2NlbGwudHMiLCJzcmMvc2NyaXB0cy9tYXAvbWFwLnRzIiwic3JjL3NjcmlwdHMvc2NlbmVzL2ZpZWxkU2NlbmUudHMiLCJzcmMvc2NyaXB0cy9zY2VuZXMvZmlnaHRTY2VuZS50cyIsInNyYy9zY3JpcHRzL3NjZW5lcy9zY2VuZU1hbmFnZXIudHMiLCJzcmMvc2NyaXB0cy9zY2VuZXMvc2VsZWN0TW9uc3RlclNjZW5lLnRzIiwic3JjL3NjcmlwdHMvc2NlbmVzL3N0YXJ0U2NlbmUudHMiLCJzcmMvc2NyaXB0cy91dGlscy9jb21wYXJlLnRzIiwic3JjL3NjcmlwdHMvdXRpbHMvcmFuZG9tLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0lDRWEsaUI7QUFHVCwrQkFBWSxHQUFaLEVBQXlCO0FBQUE7O0FBQ3JCLGFBQUssZUFBTCxHQUF1QixHQUF2QjtBQUNIOzs7O3FDQUVnQjtBQUNiLGlCQUFLLElBQUksSUFBSSxDQUFiLEVBQWdCLElBQUksS0FBSyxlQUFMLENBQXFCLE1BQXpDLEVBQWlELEVBQUUsQ0FBbkQsRUFBc0Q7QUFDbEQscUJBQUssSUFBSSxJQUFJLENBQWIsRUFBZ0IsSUFBSSxLQUFLLGVBQUwsQ0FBcUIsQ0FBckIsRUFBd0IsTUFBNUMsRUFBb0QsRUFBRSxDQUF0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QUFXLEVBQUUsR0FBRixDQUFmLEVBQXVCO0FBQ25CLCtCQUFPLEtBQVA7QUFDSDtBQUNKO0FBWjZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBYzlCLG1CQUFPLElBQVA7QUFFSDs7Ozs7O0FBdENMLFFBQUEsT0FBQSxHQUFBLE9BQUE7Ozs7Ozs7Ozs7OztJQ0FhLE07Ozs7Ozs7O0FBQ1Q7Ozs7O2dDQUtlLEMsRUFBVyxDLEVBQVM7QUFDL0IsbUJBQU8sS0FBSyxLQUFMLENBQVcsS0FBSyxNQUFMLE1BQWlCLElBQUksQ0FBSixHQUFRLENBQXpCLENBQVgsSUFBMEMsQ0FBakQ7QUFDSDs7O3lDQUV1QixHLEVBQVU7QUFDOUIsbUJBQU8sSUFBSSxLQUFLLE9BQUwsQ0FBYSxDQUFiLEVBQWdCLElBQUksTUFBSixHQUFhLENBQTdCLENBQUosQ0FBUDtBQUNIOzs7Ozs7QUFaTCxRQUFBLE1BQUEsR0FBQSxNQUFBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiaW1wb3J0IHtDZWxsfSBmcm9tICcuL21hcC9jZWxsJztcclxuXHJcbmV4cG9ydCBjbGFzcyBDb21wbGV4aXR5Q2hhbmdlciB7XHJcbiAgICBwcml2YXRlIF9jdXJyZW50TWFwRGF0YTogQ2VsbFtdW107XHJcblxyXG4gICAgY29uc3RydWN0b3IobWFwOiBDZWxsW11bXSkge1xyXG4gICAgICAgIHRoaXMuX2N1cnJlbnRNYXBEYXRhID0gbWFwO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBiYWxhbmNlTWFwKCk6IHZvaWQge1xyXG4gICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgdGhpcy5fY3VycmVudE1hcERhdGEubGVuZ3RoOyArK3kpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB0aGlzLl9jdXJyZW50TWFwRGF0YVt5XS5sZW5ndGg7ICsreCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRNb25zdGVyID0gdGhpcy5fY3VycmVudE1hcERhdGFbeV1beF0ubW9uc3RlcjtcclxuICAgICAgICAgICAgICAgIGxldCBuZXdIZWFsdGhWYWx1ZSA9ICgxICsgeCAvIDEwKSAqIGN1cnJlbnRNb25zdGVyLmhlYWx0aDtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRNb25zdGVyLkJhbGFuY2VIZWFsKG5ld0hlYWx0aFZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0gICAgXHJcbn0iLCJpbXBvcnQge0lIYXNDc3NDbGFzc30gZnJvbSBcIi4uL2ludGVyZmFjZXNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBDcmVhdHVyZSBpbXBsZW1lbnRzIElIYXNDc3NDbGFzcyB7XHJcbiAgICBcclxuICAgIHByaXZhdGUgX25hbWU6IHN0cmluZztcclxuICAgIHB1YmxpYyBnZXQgbmFtZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9uYW1lO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNldCBuYW1lKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9uYW1lID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfY3NzQ2xhc3M6IHN0cmluZztcclxuICAgIHB1YmxpYyBnZXQgY3NzQ2xhc3MoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY3NzQ2xhc3M7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBjc3NDbGFzcyA6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX25hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMuX2Nzc0NsYXNzID0gY3NzQ2xhc3M7XHJcbiAgICB9XHJcblxyXG59IiwiaW1wb3J0IHtDcmVhdHVyZX0gZnJvbSBcIi4vY3JlYXR1cmVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBNb25zdGVyIGV4dGVuZHMgQ3JlYXR1cmUge1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfbWF4SGVhdGg6IG51bWJlcjtcclxuICAgIHB1YmxpYyBnZXQgbWF4SGVhdGgoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbWF4SGVhdGg7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfaGVhbHRoOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgZ2V0IGhlYWx0aCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9oZWFsdGg7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfZGVmZW5zZTogbnVtYmVyO1xyXG4gICAgcHVibGljIGdldCBkZWZlbnNlKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZmVuc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfYXR0YWNrOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgZ2V0IGF0dGFjaygpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9hdHRhY2s7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfYXR0YWNrQm9vc3RlcjogbnVtYmVyO1xyXG4gICAgcHVibGljIGdldCBhdHRhY2tCb29zdGVyKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2F0dGFja0Jvb3N0ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfbG9vdGVkOiBib29sZWFuO1xyXG4gICAgcHVibGljIGdldCBsb290ZWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xvb3RlZDtcclxuICAgIH1cclxuICAgIHB1YmxpYyBsb290KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX2xvb3RlZCA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBjc3NDbGFzczogc3RyaW5nLCB0eXBlOiBzdHJpbmcsIGhlYWx0aDogbnVtYmVyLCBhdHRhY2s6IG51bWJlciwgZGVmZW5zZTogbnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgYXR0YWNrQm9vc3RlcjogbnVtYmVyLCBsb290ZWQ6IGJvb2xlYW4pIHtcclxuICAgICAgICBzdXBlcihuYW1lLCBjc3NDbGFzcyk7XHJcbiAgICAgICAgdGhpcy5fbWF4SGVhdGggPSBoZWFsdGg7XHJcbiAgICAgICAgdGhpcy5faGVhbHRoID0gaGVhbHRoO1xyXG4gICAgICAgIHRoaXMuX2RlZmVuc2UgPSBkZWZlbnNlO1xyXG4gICAgICAgIHRoaXMuX2F0dGFjayA9IGF0dGFjaztcclxuICAgICAgICB0aGlzLl9hdHRhY2tCb29zdGVyID0gYXR0YWNrQm9vc3RlcjtcclxuICAgICAgICB0aGlzLl9sb290ZWQgPSBsb290ZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGJlQXR0YWNrZWQoZW5lbXk6IE1vbnN0ZXIpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBkYW1hZ2UgPSB0aGlzLmRlZmVuc2UgLSAoZW5lbXkuYXR0YWNrICsgZW5lbXkuYXR0YWNrQm9vc3Rlcik7XHJcbiAgICAgICAgaWYgKGRhbWFnZSA+PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2hlYWx0aCAtPSAxO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2hlYWx0aCArPSBkYW1hZ2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkZWZlbnNlSGltc2VsZigpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9kZWZlbnNlICs9IDU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGlzRGVhZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faGVhbHRoIDw9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIEhlYWwoKTogdm9pZCB7XHJcbiAgICAgICB0aGlzLl9oZWFsdGggPSB0aGlzLm1heEhlYXRoO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBCYWxhbmNlSGVhbChuZXdIZWFsOiBudW1iZXIpOiB2b2lke1xyXG4gICAgICAgIHRoaXMuX2hlYWx0aCA9IG5ld0hlYWw7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFN0cmluZygpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBgJHt0aGlzLm5hbWV9LCBocDogJHt0aGlzLmhlYWx0aH0sIGRlZmVuc2U6ICR7dGhpcy5kZWZlbnNlfSwgYXR0YWNrOiAke3RoaXMuYXR0YWNrfWA7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTaGFyayBleHRlbmRzIE1vbnN0ZXIge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoJ1NoYXJrJywgJ3NoYXJrJywgJ3JlZCcsIDEwLCAxMCwgNSwgMCwgZmFsc2UpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRHJhZ29uIGV4dGVuZHMgTW9uc3RlciB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcignRHJhZ29uJywgJ2RyYWdvbicsICdyZWQnLCAyMCwgNSwgMCwgMCwgZmFsc2UpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQmxhY2tEcmFnb24gZXh0ZW5kcyBNb25zdGVye1xyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICBzdXBlcignQmxhY2tEcmFnb24nLCAnYmxhY2tfZHJhZ29uJywgJ2EnLCAxMDAsIDEwLCAwLCAzLCBmYWxzZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDYXQgZXh0ZW5kcyBNb25zdGVye1xyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICBzdXBlcignQ2F0JywgJ2NhdCcsICdyZWQnLCAyMCwgMzAsIDAsIDIwLCBmYWxzZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBEb2cgZXh0ZW5kcyBNb25zdGVye1xyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICBzdXBlcignRG9nJywgJ2RvZycsICdyZWQnLCAxMCwgMTAsIDIwMCwgMCwgZmFsc2UpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgSG9yc2UgZXh0ZW5kcyBNb25zdGVye1xyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICBzdXBlcignSG9yc2UnLCAnaG9yc2UnLCAncmVkJywgMjAwLCA1LCAwLCAxMCwgZmFsc2UpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTGlvbiBleHRlbmRzIE1vbnN0ZXJ7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHN1cGVyKCdMaW9uJywgJ2xpb24nLCAncmVkJywgMzAsIDYsIDUsIDIsIGZhbHNlKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIE1lZHVzYSBleHRlbmRzIE1vbnN0ZXJ7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHN1cGVyKCdNZWR1c2EnLCAnbWVkdXNhJywgJ3JlZCcsIDMsIDUsIDEwMCwgMCwgZmFsc2UpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUGxhbnQgZXh0ZW5kcyBNb25zdGVye1xyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICBzdXBlcignUGxhbnQnLCAncGxhbnQnLCAncmVkJywgNSwgNSwgMjAsIDAsIGZhbHNlKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNuYWtlIGV4dGVuZHMgTW9uc3RlcntcclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgc3VwZXIoJ1NuYWtlJywgJ3NuYWtlJywgJ3JlZCcsIDMwLCAyLCAwLCAwLCBmYWxzZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBCb3NzIGV4dGVuZHMgTW9uc3RlcntcclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgc3VwZXIoJ0Jvc3MnLCAnYm9zcycsICdyZWQnLCAxMDAwLCAyNSwgMjAsIDEwLCBmYWxzZSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge0NyZWF0dXJlfSBmcm9tIFwiLi9jcmVhdHVyZVwiO1xyXG5pbXBvcnQge01vbnN0ZXIsU2hhcmt9IGZyb20gXCIuL21vbnN0ZXJcIjtcclxuaW1wb3J0IHtJMkRDb29yZGluYXRlcywgSURyYXdhYmxlSW5GaWVsZH0gZnJvbSBcIi4uL2ludGVyZmFjZXNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQbGF5ZXIgZXh0ZW5kcyBDcmVhdHVyZSBpbXBsZW1lbnRzIElEcmF3YWJsZUluRmllbGQge1xyXG4gICAgcHJpdmF0ZSB4OiBudW1iZXI7XHJcbiAgICBwcml2YXRlIHk6IG51bWJlcjtcclxuXHJcbiAgICBwcml2YXRlIF9hdmFpbGFibGVNb3ZlczogbnVtYmVyO1xyXG4gICAgcHVibGljIGdldCBhdmFpbGFibGVNb3ZlcygpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9hdmFpbGFibGVNb3ZlcztcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXRBdmFpbGFibGVNb3Zlcyh2YWx1ZTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fYXZhaWxhYmxlTW92ZXMgPSB2YWx1ZTtcclxuICAgIH1cclxuICAgIHB1YmxpYyByZXNldEF2YWlsYWJsZU1vdmVzKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX2F2YWlsYWJsZU1vdmVzID0gMDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9hdmFpbGFibGVNb25zdGVyczogTW9uc3RlcltdO1xyXG4gICAgcHVibGljIGdldCBhdmFpbGFibGVNb25zdGVycygpOiBNb25zdGVyW10ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9hdmFpbGFibGVNb25zdGVycztcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIGNzc0NsYXNzOiBzdHJpbmcsIHg6IG51bWJlciwgeTogbnVtYmVyLCBhdmFpbGFibGVNb3ZlczogbnVtYmVyKSB7XHJcbiAgICAgICAgc3VwZXIobmFtZSwgY3NzQ2xhc3MpO1xyXG4gICAgICAgIHRoaXMueCA9IHg7XHJcbiAgICAgICAgdGhpcy55ID0geTtcclxuICAgICAgICB0aGlzLl9hdmFpbGFibGVNb3ZlcyA9IGF2YWlsYWJsZU1vdmVzO1xyXG4gICAgICAgIGxldCBzaGFyayA9IG5ldyBTaGFyaygpO1xyXG4gICAgICAgIHNoYXJrLmxvb3QoKTtcclxuICAgICAgICB0aGlzLl9hdmFpbGFibGVNb25zdGVycyA9IFtzaGFya107XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBzZXQgbmV3IGNvb3JkaW5hdGVzXHJcbiAgICAgKiBAcGFyYW0gY29vcmRpbmF0ZXNcclxuICAgICAqIEBwYXJhbSBtb3Zlc1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgbW92ZShjb29yZGluYXRlczogSTJEQ29vcmRpbmF0ZXMsIG1vdmVzOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnggPSBjb29yZGluYXRlcy54O1xyXG4gICAgICAgIHRoaXMueSA9IGNvb3JkaW5hdGVzLnk7XHJcbiAgICAgICAgdGhpcy5fYXZhaWxhYmxlTW92ZXMgLT0gbW92ZXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldENvb3JkaW5hdGVzKCk6IEkyRENvb3JkaW5hdGVzICB7XHJcbiAgICAgICAgcmV0dXJuIHsgeDogdGhpcy54LCB5OiB0aGlzLnkgfTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWRkTW9uc3Rlcihtb25zdGVyOiBNb25zdGVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fYXZhaWxhYmxlTW9uc3RlcnMucHVzaChtb25zdGVyKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGVsZXRlTW9uc3Rlcihtb25zdGVyOiBNb25zdGVyKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmF2YWlsYWJsZU1vbnN0ZXJzLmluZGV4T2YobW9uc3Rlcik7XHJcbiAgICAgICAgY29uc29sZS5hc3NlcnQoaW5kZXggIT0gLTEpO1xyXG4gICAgICAgIGlmIChpbmRleCA+IC0xKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXZhaWxhYmxlTW9uc3RlcnMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge1BsYXllcn0gZnJvbSAnLi9jcmVhdHVyZXMvcGxheWVyJztcclxuaW1wb3J0IHtNYXB9IGZyb20gJy4vbWFwL21hcCc7XHJcbmltcG9ydCB7TW92ZU1hbmFnZXJ9IGZyb20gJy4vbG9naWMvbW92ZU1hbmFnZXInO1xyXG5pbXBvcnQge0lEcmF3YWJsZUluRmllbGR9IGZyb20gJy4vaW50ZXJmYWNlcyc7XHJcbmltcG9ydCB7RmlnaHR9IGZyb20gXCIuL2xvZ2ljL2ZpZ2h0XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgR2FtZVN0YXRlIHtcclxuICAgIHB1YmxpYyBwbGF5ZXI6IFBsYXllcjtcclxuICAgIHB1YmxpYyBwbGF5ZXIyOiBQbGF5ZXI7XHJcbiAgICBwdWJsaWMgY3VycmVudFBsYXllcjogUGxheWVyO1xyXG4gICAgcHVibGljIG1hcDogTWFwO1xyXG4gICAgcHVibGljIG1vdmVNYW5hZ2VyOiBNb3ZlTWFuYWdlcjtcclxuICAgIHB1YmxpYyBmaWdodDogRmlnaHQ7XHJcbiAgICBwdWJsaWMgYmxvY2tlZDogYm9vbGVhbjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwbGF5ZXI6IFBsYXllciwgcGxheWVyMjogUGxheWVyLCBtYXA6IE1hcCkge1xyXG4gICAgICAgIHRoaXMucGxheWVyID0gcGxheWVyO1xyXG4gICAgICAgIHRoaXMucGxheWVyMiA9IHBsYXllcjI7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50UGxheWVyID0gcGxheWVyO1xyXG4gICAgICAgIHRoaXMubWFwID0gbWFwO1xyXG4gICAgICAgIHRoaXMubW92ZU1hbmFnZXIgPSBuZXcgTW92ZU1hbmFnZXIodGhpcy5tYXAsIHRoaXMucGxheWVyKTtcclxuICAgICAgICB0aGlzLmZpZ2h0ID0gbnVsbDtcclxuICAgICAgICB0aGlzLmJsb2NrZWQgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0Q3JlYXR1cmVzKCk6IElEcmF3YWJsZUluRmllbGRbXSB7XHJcbiAgICAgICAgcmV0dXJuIFt0aGlzLnBsYXllciwgdGhpcy5wbGF5ZXIyXTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0TmV4dCgpIHtcclxuICAgICAgICByZXR1cm4gKHRoaXMuY3VycmVudFBsYXllciA9PSB0aGlzLnBsYXllcikgPyB0aGlzLnBsYXllcjIgOiB0aGlzLnBsYXllcjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0Q3VycmVudCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50UGxheWVyO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzd2FwUGxheWVycygpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRQbGF5ZXIucmVzZXRBdmFpbGFibGVNb3ZlcygpO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFBsYXllciA9IHRoaXMuZ2V0TmV4dCgpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtNb25zdGVyfSBmcm9tIFwiLi4vY3JlYXR1cmVzL21vbnN0ZXJcIlxyXG5pbXBvcnQge1BsYXllcn0gZnJvbSBcIi4uL2NyZWF0dXJlcy9wbGF5ZXJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBGaWdodCB7XHJcbiAgICBwcml2YXRlIF9jdXJyZW50TW9uc3RlcjogTW9uc3RlcjtcclxuICAgIHB1YmxpYyBnZXQgY3VycmVudE1vbnN0ZXIoKTogTW9uc3RlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2N1cnJlbnRNb25zdGVyO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBfZGVmZW5zZU1vbnN0ZXI6IE1vbnN0ZXI7XHJcbiAgICBwdWJsaWMgZ2V0IGRlZmVuc2VNb25zdGVyKCk6IE1vbnN0ZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9kZWZlbnNlTW9uc3RlcjtcclxuICAgIH1cclxuICAgIHByaXZhdGUgX3dpbm5lcjogTW9uc3RlcjtcclxuICAgIHByaXZhdGUgX3BsYXllcjogUGxheWVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHBsYXllcjogUGxheWVyLCBtb25zdGVyRmlyc3Q6IE1vbnN0ZXIsIG1vbnN0ZXJTZWNvbmQ6IE1vbnN0ZXIpIHtcclxuICAgICAgICB0aGlzLl9jdXJyZW50TW9uc3RlciA9IG1vbnN0ZXJGaXJzdDtcclxuICAgICAgICB0aGlzLl9kZWZlbnNlTW9uc3RlciA9IG1vbnN0ZXJTZWNvbmQ7XHJcbiAgICAgICAgdGhpcy5fd2lubmVyID0gbnVsbDtcclxuICAgICAgICB0aGlzLl9wbGF5ZXIgPSBwbGF5ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN3YXAoKSB7XHJcbiAgICAgICAgW3RoaXMuX2N1cnJlbnRNb25zdGVyLCB0aGlzLl9kZWZlbnNlTW9uc3Rlcl0gPSBbdGhpcy5kZWZlbnNlTW9uc3RlciwgdGhpcy5jdXJyZW50TW9uc3Rlcl07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGlzRmluaXNoKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRNb25zdGVyLmlzRGVhZCgpIHx8IHRoaXMuZGVmZW5zZU1vbnN0ZXIuaXNEZWFkKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGF0dGFja0N1cnJlbnQoKSB7XHJcbiAgICAgICAgdGhpcy5kZWZlbnNlTW9uc3Rlci5iZUF0dGFja2VkKHRoaXMuY3VycmVudE1vbnN0ZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkZWZlbmRDdXJyZW50KCkge1xyXG4gICAgICAgIHRoaXMuZGVmZW5zZU1vbnN0ZXIuZGVmZW5zZUhpbXNlbGYoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZmluaXNoKCkge1xyXG4gICAgICAgIHRoaXMuX3dpbm5lciA9ICh0aGlzLmN1cnJlbnRNb25zdGVyLmlzRGVhZCgpKSA/IHRoaXMuZGVmZW5zZU1vbnN0ZXIgOiB0aGlzLmN1cnJlbnRNb25zdGVyO1xyXG4gICAgICAgIHRoaXMuY3VycmVudE1vbnN0ZXIuSGVhbCgpO1xyXG4gICAgICAgIHRoaXMuZGVmZW5zZU1vbnN0ZXIuSGVhbCgpO1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIElmIHRoZSBwbGF5ZXIncyBtb25zdGVyIHdvbiwgdGhlbiBpdCBpcyBuZWNlc3NhcnkgdG8gYWRkIHRoZSBsb3NpbmcgbW9uc3Rlciwgb3RoZXJ3aXNlIHJlbW92ZSB0aGUgbW9uc3RlclxyXG4gICAgICAgICAqIGZyb20gdGhlIHBsYXllci5cclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIElmIHRoZSBtb25zdGVyIHdhcyBvbmNlIGxvb3RlZCwgdGhlbiB0aGlzIGlzIHRoZSBwbGF5ZXIncyBtb25zdGVyLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZGVmZW5zZU1vbnN0ZXIsIHRoaXMuY3VycmVudE1vbnN0ZXIpO1xyXG4gICAgICAgIGlmICh0aGlzLl93aW5uZXIubG9vdGVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGVmZW5zZU1vbnN0ZXIubG9vdCgpO1xyXG4gICAgICAgICAgICB0aGlzLl9wbGF5ZXIuYWRkTW9uc3Rlcih0aGlzLmRlZmVuc2VNb25zdGVyKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYCR7dGhpcy5fcGxheWVyLm5hbWV9IHdpbmApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3BsYXllci5kZWxldGVNb25zdGVyKHRoaXMuZGVmZW5zZU1vbnN0ZXIpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgJHt0aGlzLl9wbGF5ZXIubmFtZX0gbG9zZWApO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9wbGF5ZXIucmVzZXRBdmFpbGFibGVNb3ZlcygpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtJMkRDb29yZGluYXRlc30gZnJvbSAnLi4vaW50ZXJmYWNlcyc7XHJcbmltcG9ydCB7TWFwfSBmcm9tICcuLi9tYXAvbWFwJztcclxuaW1wb3J0IHtQbGF5ZXJ9IGZyb20gJy4uL2NyZWF0dXJlcy9wbGF5ZXInO1xyXG5pbXBvcnQge0NvbXBhcmV9IGZyb20gXCIuLi91dGlscy9jb21wYXJlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgTW92ZU1hbmFnZXIge1xyXG5cclxuICAgIHByaXZhdGUgbWFwOiBNYXA7XHJcblxyXG4gICAgY29uc3RydWN0b3IobWFwOiBNYXAsIHBsYXllcjogUGxheWVyKSB7XHJcbiAgICAgICAgdGhpcy5tYXAgPSBtYXA7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG91dE9mQm91bmRzT2ZBcnJheShjb29yZGluYXRlczogSTJEQ29vcmRpbmF0ZXMpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gQ29tcGFyZS5pc0luUmFuZ2UoY29vcmRpbmF0ZXMueCwgMCwgdGhpcy5tYXAuZ2V0U2l6ZSgpLnggLSAxKSAmJlxyXG4gICAgICAgICAgICAgICAgQ29tcGFyZS5pc0luUmFuZ2UoY29vcmRpbmF0ZXMueSwgMCwgdGhpcy5tYXAuZ2V0U2l6ZSgpLnkgLSAxKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWRqYWNlbnRDZWxsSG9yaXpPclZlcihwbGF5ZXI6IFBsYXllciwgY29vcmRpbmF0ZXM6IEkyRENvb3JkaW5hdGVzKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIChNYXRoLmFicyhjb29yZGluYXRlcy54IC0gcGxheWVyLmdldENvb3JkaW5hdGVzKCkueCkgK1xyXG4gICAgICAgICAgICAgICAgTWF0aC5hYnMoY29vcmRpbmF0ZXMueSAtIHBsYXllci5nZXRDb29yZGluYXRlcygpLnkpID09IDEpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBoYXZlRW5vdWdoTW92ZW1lbnQocGxheWVyOiBQbGF5ZXIsIGNvb3JkaW5hdGVzOiBJMkRDb29yZGluYXRlcyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiBwbGF5ZXIuYXZhaWxhYmxlTW92ZXMgPj0gdGhpcy5tYXAuZ2V0Q2VsbChjb29yZGluYXRlcykudHJhbnNpdGlvbkNvc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDb29yZGluYXRlcyBhcmUgY29ycmVjdCBpZiB0aGUgbWFwIHJhbmdlIGlzIGluY2x1ZGVkXHJcbiAgICAgKiBhbmQgcG9pbnQgdG8gYW4gYWRqYWNlbnQgY2VsbCBob3Jpem9udGFsbHkgb3IgdmVydGljYWxseVxyXG4gICAgICogQHJldHVybnNcclxuICAgICAqIEBwYXJhbSBjb29yZGluYXRlc1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgaXNDb3JyZWN0Q29vcmRpbmF0ZXMocGxheWVyOiBQbGF5ZXIsY29vcmRpbmF0ZXM6IEkyRENvb3JkaW5hdGVzKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMub3V0T2ZCb3VuZHNPZkFycmF5KGNvb3JkaW5hdGVzKSAmJlxyXG4gICAgICAgIHRoaXMuYWRqYWNlbnRDZWxsSG9yaXpPclZlcihwbGF5ZXIsIGNvb3JkaW5hdGVzKSAmJlxyXG4gICAgICAgIHRoaXMuaGF2ZUVub3VnaE1vdmVtZW50KHBsYXllciwgY29vcmRpbmF0ZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBtb3ZlKHBsYXllcjogUGxheWVyLCBjb29yZGluYXRlczogSTJEQ29vcmRpbmF0ZXMpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAodGhpcy5pc0NvcnJlY3RDb29yZGluYXRlcyhwbGF5ZXIsIGNvb3JkaW5hdGVzKSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgJHtwbGF5ZXIubmFtZX0gbW92ZWQgdG8gKCR7Y29vcmRpbmF0ZXMueH0sICR7Y29vcmRpbmF0ZXMueX0pYCk7XHJcbiAgICAgICAgICAgIHBsYXllci5tb3ZlKGNvb3JkaW5hdGVzLCB0aGlzLm1hcC5nZXRDZWxsKGNvb3JkaW5hdGVzKS50cmFuc2l0aW9uQ29zdCk7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGAke3BsYXllci5uYW1lfSBub3QgbW92ZWQgdG8gKCR7Y29vcmRpbmF0ZXMueH0sICR7Y29vcmRpbmF0ZXMueX0pYCk7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge1NjZW5lTWFuYWdlcn0gZnJvbSAnLi9zY2VuZXMvc2NlbmVNYW5hZ2VyJztcclxuaW1wb3J0IHtGaWdodFNjZW5lfSBmcm9tIFwiLi9zY2VuZXMvZmlnaHRTY2VuZVwiO1xyXG5pbXBvcnQge0ZpZWxkU2NlbmV9IGZyb20gJy4vc2NlbmVzL2ZpZWxkU2NlbmUnO1xyXG5pbXBvcnQge1NlbGVjdE1vbnN0ZXJTY2VuZX0gZnJvbSAnLi9zY2VuZXMvc2VsZWN0TW9uc3RlclNjZW5lJ1xyXG5pbXBvcnQge1N0YXJ0U2NlbmV9IGZyb20gXCIuL3NjZW5lcy9zdGFydFNjZW5lXCI7XHJcblxyXG5pbXBvcnQge0dhbWVTdGF0ZX0gZnJvbSAnLi9nYW1lU3RhdGUnO1xyXG5cclxuaW1wb3J0IHtQbGF5ZXJ9IGZyb20gXCIuL2NyZWF0dXJlcy9wbGF5ZXJcIjtcclxuaW1wb3J0IHtNYXB9IGZyb20gXCIuL21hcC9tYXBcIjtcclxuaW1wb3J0IHtJMkRDb29yZGluYXRlc30gZnJvbSBcIi4vaW50ZXJmYWNlc1wiO1xyXG5pbXBvcnQge01vbnN0ZXJ9IGZyb20gXCIuL2NyZWF0dXJlcy9tb25zdGVyXCI7XHJcbmltcG9ydCB7RmlnaHR9IGZyb20gXCIuL2xvZ2ljL2ZpZ2h0XCI7XHJcblxyXG4vKiBHbG9iYWwgdmFyaWFibGVzICovXHJcbmNvbnN0IERFRkFVTFRfU1RBUlRfQVZBSUxBQkxFX01PVkVTID0gNTtcclxuY29uc3QgREVGQVVMVF9QTEFZRVJfMV9QT1M6IFtudW1iZXIsIG51bWJlcl0gPSBbMCwgMF07XHJcbmNvbnN0IERFRkFVTFRfUExBWUVSXzJfUE9TOiBbbnVtYmVyLCBudW1iZXJdID0gWzAsIDRdO1xyXG5jb25zdCBERUZBVUxUX01BUF9TSVpFOiBbbnVtYmVyLCBudW1iZXJdID0gWzUsIDVdO1xyXG5sZXQgZ3M6IEdhbWVTdGF0ZSA9IG51bGw7XHJcblxyXG5mdW5jdGlvbiBpbml0R1MoKSB7XHJcbiAgICBncyA9IG5ldyBHYW1lU3RhdGUoXHJcbiAgICAgICAgbmV3IFBsYXllcihcIlN0ZXZlXCIsIFwiaGVyb18xXCIsIC4uLkRFRkFVTFRfUExBWUVSXzFfUE9TLCBERUZBVUxUX1NUQVJUX0FWQUlMQUJMRV9NT1ZFUyksXHJcbiAgICAgICAgbmV3IFBsYXllcihcIkpvaG5cIiwgXCJoZXJvXzJcIiwgLi4uREVGQVVMVF9QTEFZRVJfMl9QT1MsIERFRkFVTFRfU1RBUlRfQVZBSUxBQkxFX01PVkVTKSxcclxuICAgICAgICBuZXcgTWFwKC4uLkRFRkFVTFRfTUFQX1NJWkUpXHJcbiAgICApO1xyXG59XHJcblxyXG5cclxuLyoqXHJcbiAqIFNjZW5lc1xyXG4gKi9cclxuY29uc3QgZmllbGRTY2VuZSA9IG5ldyBGaWVsZFNjZW5lKFxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWUtZmllbGQnKSxcclxuICAgIGNlbGxDbGlja0xpc3RlbmVyLFxyXG4gICAgTkVTWkJ1dHRvbkluRmllbGRDbGlja0xpc3RlbmVyLFxyXG4gICAgTkVTWEJ1dHRvbkluRmllbGRDbGlja0xpc3RlbmVyXHJcbik7XHJcbmxldCBmaWdodFNjZW5lID0gbmV3IEZpZ2h0U2NlbmUoXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZS1maWdodCcpLFxyXG4gICAgTkVTWkJ1dHRvbkluRmlnaHRDbGlja0xpc3RlbmVyLFxyXG4gICAgTkVTWEJ1dHRvbkluRmlnaHRDbGlja0xpc3RlbmVyXHJcbik7XHJcbmxldCBzZWxlY3RNb25zdGVyU2NlbmUgPSBuZXcgU2VsZWN0TW9uc3RlclNjZW5lKFxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWUtc2VsZWN0LW1vbnN0ZXInKSxcclxuICAgIE9LQnV0dG9uSW5TZWxlY3RDbGlja0xpc3RlbmVyXHJcbik7XHJcbmxldCBzdGFydFNjZW5lID0gbmV3IFN0YXJ0U2NlbmUoXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZS1zdGFydCcpLFxyXG4gICAgc3RhcnRCdXR0b25DbGlja0xpc3RlbmVyXHJcbik7XHJcblxyXG5maWdodFNjZW5lLnJlbmRlcigpO1xyXG5zdGFydFNjZW5lLnJlbmRlcigpO1xyXG5cclxuLyoqXHJcbiAqIFNjZW5lIE1hbmFnZXJcclxuICovXHJcbmxldCBzY2VuZU1hbmFnZXIgPSBuZXcgU2NlbmVNYW5hZ2VyKFtcclxuICAgIHtcclxuICAgICAgICBuYW1lOiAnZmllbGQnLFxyXG4gICAgICAgIHNjZW5lOiBmaWVsZFNjZW5lXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6ICdmaWdodCcsXHJcbiAgICAgICAgc2NlbmU6IGZpZ2h0U2NlbmVcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogJ3NlbGVjdCcsXHJcbiAgICAgICAgc2NlbmU6IHNlbGVjdE1vbnN0ZXJTY2VuZVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiAnc3RhcnQnLFxyXG4gICAgICAgIHNjZW5lOiBzdGFydFNjZW5lXHJcbiAgICB9XHJcbl0pXHJcbnNjZW5lTWFuYWdlci5zaG93U2NlbmUoJ3N0YXJ0Jyk7XHJcblxyXG4vKipcclxuICogU3RhcnQgc2NlbmVcclxuICovXHJcbmZ1bmN0aW9uIHN0YXJ0QnV0dG9uQ2xpY2tMaXN0ZW5lcigpIHtcclxuICAgIGlmIChncy5ibG9ja2VkKSByZXR1cm47XHJcbiAgICBpbml0R1MoKTtcclxuICAgIHNjZW5lTWFuYWdlci5zaG93U2NlbmUoJ2ZpZWxkJyk7XHJcbiAgICBmaWVsZFNjZW5lLnJlbmRlcihncy5tYXApO1xyXG4gICAgZmllbGRTY2VuZS51cGRhdGUoZ3MubWFwLCBbZ3MucGxheWVyLCBncy5wbGF5ZXIyXSk7XHJcbiAgICBmaWVsZFNjZW5lLnVwZGF0ZUluZm8oZ3MuZ2V0Q3VycmVudCgpKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEZpZ2h0IFNjZW5lXHJcbiAqL1xyXG5mdW5jdGlvbiBORVNaQnV0dG9uSW5GaWdodENsaWNrTGlzdGVuZXIoKSB7XHJcbiAgICBpZiAoZ3MuYmxvY2tlZCkgcmV0dXJuO1xyXG4gICAgZ3MuZmlnaHQuYXR0YWNrQ3VycmVudCgpO1xyXG4gICAgZmlnaHRTY2VuZS5zaGFrZU1vbnN0ZXIoZ3MuZmlnaHQuZGVmZW5zZU1vbnN0ZXIpO1xyXG4gICAgaWYgKGdzLmZpZ2h0LmlzRmluaXNoKCkpIHtcclxuICAgICAgICBmaWVsZFNjZW5lLnVwZGF0ZUluZm8oZ3MuZ2V0Q3VycmVudCgpKTtcclxuICAgICAgICBmaWdodFNjZW5lLnVwZGF0ZSgpO1xyXG4gICAgICAgIGdzLmJsb2NrZWQgPSB0cnVlO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBncy5ibG9ja2VkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGdzLmZpZ2h0LmZpbmlzaCgpO1xyXG4gICAgICAgICAgICBzY2VuZU1hbmFnZXIuc2hvd1NjZW5lKCdmaWVsZCcpO1xyXG4gICAgICAgICAgICBmaWVsZFNjZW5lLnVwZGF0ZUluZm8oZ3MuZ2V0Q3VycmVudCgpKTtcclxuICAgICAgICB9LCAxMDAwKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZ3MuZmlnaHQuc3dhcCgpO1xyXG4gICAgICAgIGZpZ2h0U2NlbmUudXBkYXRlKCk7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gTkVTWEJ1dHRvbkluRmlnaHRDbGlja0xpc3RlbmVyKCkge1xyXG4gICAgaWYgKGdzLmJsb2NrZWQpIHJldHVybjtcclxuICAgIGdzLmZpZ2h0LmRlZmVuZEN1cnJlbnQoKTtcclxuICAgIGdzLmZpZ2h0LnN3YXAoKTtcclxuICAgIGZpZ2h0U2NlbmUudXBkYXRlKCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBGaWVsZCBTY2VuZVxyXG4gKi9cclxuZnVuY3Rpb24gY2VsbENsaWNrTGlzdGVuZXIoZXZlbnQ6IE1vdXNlRXZlbnQpIHtcclxuICAgIGlmIChncy5ibG9ja2VkKSByZXR1cm47XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0Q29vcmRpbmF0ZXNPZkNlbGwodGFyZ2V0OiBFdmVudFRhcmdldCk6IEkyRENvb3JkaW5hdGVzIHtcclxuICAgICAgICBsZXQgZWxlbWVudCA9IDxIVE1MRWxlbWVudD50YXJnZXQ7XHJcbiAgICAgICAgY29uc3QgdGQgPSA8SFRNTFRhYmxlQ2VsbEVsZW1lbnQ+ZWxlbWVudC5wYXJlbnRFbGVtZW50O1xyXG4gICAgICAgIGNvbnN0IHJvdyA9IDxIVE1MVGFibGVSb3dFbGVtZW50PnRkLnBhcmVudEVsZW1lbnQ7XHJcbiAgICAgICAgcmV0dXJuIHsgeDogdGQuY2VsbEluZGV4LCB5OiByb3cucm93SW5kZXggfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjb29yZGluYXRlcyA9IGdldENvb3JkaW5hdGVzT2ZDZWxsKGV2ZW50LnRhcmdldCk7XHJcbiAgICBsZXQgb2xkX2Nvb3JkaW5hdGU6IEkyRENvb3JkaW5hdGVzID0gZ3MuZ2V0Q3VycmVudCgpLmdldENvb3JkaW5hdGVzKCk7XHJcbiAgICBpZiAoZ3MubW92ZU1hbmFnZXIubW92ZShncy5nZXRDdXJyZW50KCksIGNvb3JkaW5hdGVzKSkge1xyXG4gICAgICAgIGZpZWxkU2NlbmUudXBkYXRlSW5mbyhncy5nZXRDdXJyZW50KCkpO1xyXG4gICAgICAgIGZpZWxkU2NlbmUudXBkYXRlQ2VsbHMoZ3MubWFwLCBbb2xkX2Nvb3JkaW5hdGUsIGdzLmdldEN1cnJlbnQoKS5nZXRDb29yZGluYXRlcygpXSwgZ3MuZ2V0Q3JlYXR1cmVzKCkpO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIE5FU1pCdXR0b25JbkZpZWxkQ2xpY2tMaXN0ZW5lcigpIHtcclxuICAgIGlmIChncy5ibG9ja2VkKSByZXR1cm47XHJcbiAgICBsZXQgY29vcmRpbmF0ZXMgPSBncy5nZXRDdXJyZW50KCkuZ2V0Q29vcmRpbmF0ZXMoKTtcclxuICAgIGlmIChncy5tYXAuZ2V0Q2VsbChjb29yZGluYXRlcykubW9uc3Rlci5sb290ZWQpXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgaWYgKGdzLmdldEN1cnJlbnQoKS5hdmFpbGFibGVNb3ZlcyA8PSAwKVxyXG4gICAgICAgIHJldHVybjtcclxuICAgIHNlbGVjdE1vbnN0ZXJTY2VuZS5zZXRQbGF5ZXIoZ3MuZ2V0Q3VycmVudCgpKTtcclxuICAgIHNlbGVjdE1vbnN0ZXJTY2VuZS51cGRhdGUoKTtcclxuICAgIHNjZW5lTWFuYWdlci5zaG93U2NlbmUoJ3NlbGVjdCcpO1xyXG59XHJcbmZ1bmN0aW9uIE5FU1hCdXR0b25JbkZpZWxkQ2xpY2tMaXN0ZW5lcigpIHtcclxuICAgIGlmIChncy5ibG9ja2VkKSByZXR1cm47XHJcbiAgICBncy5nZXRDdXJyZW50KCkucmVzZXRBdmFpbGFibGVNb3ZlcygpO1xyXG4gICAgZ3Muc3dhcFBsYXllcnMoKTtcclxuICAgIGdzLmdldEN1cnJlbnQoKS5zZXRBdmFpbGFibGVNb3ZlcyhERUZBVUxUX1NUQVJUX0FWQUlMQUJMRV9NT1ZFUyk7XHJcbiAgICBmaWVsZFNjZW5lLnVwZGF0ZUluZm8oZ3MuZ2V0Q3VycmVudCgpKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFNlbGVjdCBTY2VuZVxyXG4gKi9cclxuZnVuY3Rpb24gT0tCdXR0b25JblNlbGVjdENsaWNrTGlzdGVuZXIoKSB7XHJcbiAgICBpZiAoZ3MuYmxvY2tlZCkgcmV0dXJuO1xyXG4gICAgc2NlbmVNYW5hZ2VyLnNob3dTY2VuZSgnZmlnaHQnKTtcclxuICAgIGxldCBtb25zdGVyczogW01vbnN0ZXIsIE1vbnN0ZXJdID0gW3NlbGVjdE1vbnN0ZXJTY2VuZS5nZXRDaG9zZW5Nb25zdGVyKCksIGdzLm1hcC5nZXRDZWxsKGdzLmdldEN1cnJlbnQoKS5nZXRDb29yZGluYXRlcygpKS5tb25zdGVyXVxyXG4gICAgZmlnaHRTY2VuZS5zZXRNb25zdGVycyhtb25zdGVycyk7XHJcbiAgICBmaWdodFNjZW5lLnJlbmRlcigpO1xyXG4gICAgZmlnaHRTY2VuZS51cGRhdGUoKTtcclxuICAgIGdzLmZpZ2h0ID0gbmV3IEZpZ2h0KGdzLmdldEN1cnJlbnQoKSwgLi4ubW9uc3RlcnMpO1xyXG59IiwiaW1wb3J0IHtCbGFja0RyYWdvbiwgQm9zcywgQ2F0LCBEb2csIERyYWdvbiwgSG9yc2UsIExpb24sIE1lZHVzYSwgTW9uc3RlciwgUGxhbnQsIFNoYXJrLCBTbmFrZX0gZnJvbSAnLi4vY3JlYXR1cmVzL21vbnN0ZXInO1xyXG5pbXBvcnQge1JhbmRvbX0gZnJvbSAnLi4vdXRpbHMvcmFuZG9tJztcclxuaW1wb3J0IHtJSGFzQ3NzQ2xhc3N9IGZyb20gJy4uL2ludGVyZmFjZXMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIENlbGwgaW1wbGVtZW50cyBJSGFzQ3NzQ2xhc3Mge1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfY3NzQ2xhc3M6IHN0cmluZztcclxuICAgIHB1YmxpYyBnZXQgY3NzQ2xhc3MoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY3NzQ2xhc3M7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgY29zdCBvZiB0aGUgdHJhbnNpdGlvbiBmb3IgdGhlIHBsYXllciBtb3ZpbmcgdG8gdGhpcyBjZWxsXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IF90cmFuc2l0aW9uQ29zdDogbnVtYmVyO1xyXG4gICAgcHVibGljIGdldCB0cmFuc2l0aW9uQ29zdCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl90cmFuc2l0aW9uQ29zdDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9tb25zdGVyOiBNb25zdGVyO1xyXG4gICAgcHVibGljIGdldCBtb25zdGVyKCk6IE1vbnN0ZXJ7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX21vbnN0ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGNzc0NsYXNzXHJcbiAgICAgKiBAcGFyYW0gdHJhbnNpdGlvbkNvc3RNaW5NYXggaXMgbWluaW11bSBhbmQgbWF4aW11bSB2YWx1ZVxyXG4gICAgICogQHBhcmFtIHBvc3NpYmxlQ3JlYXR1cmVzXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGNzc0NsYXNzOiBzdHJpbmcsIHRyYW5zaXRpb25Db3N0TWluTWF4IDogW251bWJlciwgbnVtYmVyXSwgcG9zc2libGVDcmVhdHVyZXM6IE1vbnN0ZXJbXSkge1xyXG4gICAgICAgIHRoaXMuX2Nzc0NsYXNzID0gY3NzQ2xhc3M7XHJcbiAgICAgICAgdGhpcy5fdHJhbnNpdGlvbkNvc3QgPSBSYW5kb20uaW5SYW5nZSguLi50cmFuc2l0aW9uQ29zdE1pbk1heCk7XHJcbiAgICAgICAgdGhpcy5fbW9uc3RlciA9IFJhbmRvbS5vbmVJdGVtRnJvbUFycmF5KHBvc3NpYmxlQ3JlYXR1cmVzKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIExhbmRDZWxsIGV4dGVuZHMgQ2VsbCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcignbGFuZCcsIFsxLCAyXSwgW25ldyBTbmFrZSgpLCBuZXcgUGxhbnQoKV0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVm9sY2Fub0NlbGwgZXh0ZW5kcyBDZWxsIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCd2b2xjYW5vJywgWzMsIDVdLCBbbmV3IERyYWdvbigpLCBuZXcgTGlvbl0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRm9yZXN0Q2VsbCBleHRlbmRzIENlbGwge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoJ2ZvcmVzdCcsIFszLCA1XSwgW25ldyBTbmFrZSgpLCBuZXcgUGxhbnQoKV0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTGFrZUNlbGwgZXh0ZW5kcyBDZWxsIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCdsYWtlJywgWzMsIDVdLCBbbmV3IE1lZHVzYSgpLCBuZXcgU2hhcmsoKV0pO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBjbGFzcyBEYXJrQ2FzdGxlQ2VsbCBleHRlbmRzIENlbGwge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoJ2RhcmtfY2FzdGxlJywgWzMsIDVdLCBbbmV3IERvZygpLCBuZXcgQmxhY2tEcmFnb24oKV0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgV2hpdGVDYXN0bGVDZWxsIGV4dGVuZHMgQ2VsbCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcignd2hpdGVfY2FzdGxlJywgWzMsIDVdLCBbbmV3IENhdCgpLCBuZXcgSG9yc2UoKV0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQm9zc0NlbGwgZXh0ZW5kcyBDZWxsIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCdib3NzX2NlbGwnLCBbMywgNV0sIFtuZXcgQm9zcygpXSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge0NlbGwsIExhbmRDZWxsLCBWb2xjYW5vQ2VsbCwgRm9yZXN0Q2VsbCwgTGFrZUNlbGwsIFdoaXRlQ2FzdGxlQ2VsbCwgRGFya0Nhc3RsZUNlbGwsIEJvc3NDZWxsfSBmcm9tICcuL2NlbGwnO1xyXG5pbXBvcnQge0kyRENvb3JkaW5hdGVzfSBmcm9tICcuLi9pbnRlcmZhY2VzJztcclxuaW1wb3J0IHtSYW5kb219IGZyb20gJy4uL3V0aWxzL3JhbmRvbSc7XHJcbmltcG9ydCB7Q29tcGFyZX0gZnJvbSAnLi4vdXRpbHMvY29tcGFyZSc7XHJcbmltcG9ydCB7Q29tcGxleGl0eUNoYW5nZXJ9IGZyb20gJy4uL2NvbXBsZXhpdHlDaGFuZ2VyJ1xyXG5cclxuZXhwb3J0IGNsYXNzIE1hcCB7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IHNpemVYOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IHNpemVZOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGRhdGE6IENlbGxbXVtdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHNpemVYOiBudW1iZXIsIHNpemVZOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnNpemVYID0gc2l6ZVg7XHJcbiAgICAgICAgdGhpcy5zaXplWSA9IHNpemVZO1xyXG4gICAgICAgIHRoaXMuZGF0YSA9IE1hcC5nZW5lcmF0ZShzaXplWCwgc2l6ZVkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRDZWxsKGNvb3JkaW5hdGVzOiBJMkRDb29yZGluYXRlcyk6IENlbGwge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRhdGFbY29vcmRpbmF0ZXMueV1bY29vcmRpbmF0ZXMueF07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFNpemUoKTogeyB4OiBudW1iZXIsIHk6IG51bWJlciB9IHtcclxuICAgICAgICByZXR1cm4geyB4OiB0aGlzLnNpemVYLCB5OiB0aGlzLnNpemVZIH07XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdlbmVyYXRlKHNpemVYOiBudW1iZXIsIHNpemVZOiBudW1iZXIpOiBDZWxsW11bXSB7XHJcbiAgICAgICAgY29uc3QgZGVmYXVsdENlbGwgPSBMYW5kQ2VsbDtcclxuICAgICAgICBsZXQgcG9zc2libGVDZWxscyA9IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgb2JqOiBWb2xjYW5vQ2VsbCxcclxuICAgICAgICAgICAgICAgIHJhbmQ6IHtcclxuICAgICAgICAgICAgICAgICAgICBtaW46IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgbWF4OiAxMFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBvYmo6IEZvcmVzdENlbGwsXHJcbiAgICAgICAgICAgICAgICByYW5kOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWluOiAxMSxcclxuICAgICAgICAgICAgICAgICAgICBtYXg6IDMwXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG9iajogTGFrZUNlbGwsXHJcbiAgICAgICAgICAgICAgICByYW5kOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWluOiAzMSxcclxuICAgICAgICAgICAgICAgICAgICBtYXg6IDM1XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICAgICAgY29uc29sZS5sb2coYE1hcDogZ2VuZXJhdGUsICgke3NpemVYfSwgJHtzaXplWX0pYCk7XHJcbiAgICAgICAgY29uc3QgZGF0YTogQ2VsbFtdW10gPSBbXTtcclxuICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHNpemVZOyArK3kpIHtcclxuICAgICAgICAgICAgY29uc3Qgcm93OiBDZWxsW10gPSBbXTtcclxuICAgICAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBzaXplWDsgKyt4KSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcmFuZE51bSA9IFJhbmRvbS5pblJhbmdlKDEsIDEwMCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgb2JqZWN0Rm9yQ3JlYXRlID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcG9zc2libGVDZWxscy5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChDb21wYXJlLmlzSW5SYW5nZShyYW5kTnVtLCBwb3NzaWJsZUNlbGxzW2ldLnJhbmQubWluLCBwb3NzaWJsZUNlbGxzW2ldLnJhbmQubWF4KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvYmplY3RGb3JDcmVhdGUgPSBwb3NzaWJsZUNlbGxzW2ldLm9iajtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICghb2JqZWN0Rm9yQ3JlYXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0Rm9yQ3JlYXRlID0gZGVmYXVsdENlbGw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByb3cucHVzaChuZXcgb2JqZWN0Rm9yQ3JlYXRlKCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRhdGEucHVzaChyb3cpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgZGVmYXVsdFBvc2l0aW9ucyA9IFtcclxuICAgICAgICAgICAgeyB4OiAwLCB5OiAwLCBvYmo6IExhbmRDZWxsfSxcclxuICAgICAgICAgICAgeyB4OiAwLCB5OiBzaXplWSAtIDEsIG9iajogTGFuZENlbGx9LFxyXG4gICAgICAgICAgICB7IHg6IHNpemVYIC0gMSwgeTogc2l6ZVkgLSAxLCBvYmo6IFdoaXRlQ2FzdGxlQ2VsbH0sXHJcbiAgICAgICAgICAgIHsgeDogc2l6ZVggLSAxLCB5OiAwLCBvYmo6IERhcmtDYXN0bGVDZWxsfSxcclxuICAgICAgICAgICAgeyB4OiBzaXplWCAtIDEsIHk6IDIsIG9iajogQm9zc0NlbGx9XHJcbiAgICAgICAgXVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGVmYXVsdFBvc2l0aW9ucy5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICBsZXQgb2JqZWN0Rm9yQ3JlYXRlID0gZGVmYXVsdFBvc2l0aW9uc1tpXS5vYmo7XHJcbiAgICAgICAgICAgIGRhdGFbZGVmYXVsdFBvc2l0aW9uc1tpXS55XVtkZWZhdWx0UG9zaXRpb25zW2ldLnhdID0gbmV3IG9iamVjdEZvckNyZWF0ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyhgTWFwOiBnZW5lcmF0ZWQsICgke3NpemVYfSwgJHtzaXplWX0pYCk7XHJcbiAgICAgICAgbGV0IGNvbXBDaGFuZ2VyID0gbmV3IENvbXBsZXhpdHlDaGFuZ2VyKGRhdGEpO1xyXG4gICAgICAgIGNvbXBDaGFuZ2VyLmJhbGFuY2VNYXAoKTtcclxuICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgIH1cclxufSIsImltcG9ydCB7TWFwfSBmcm9tICcuLi9tYXAvbWFwJztcclxuaW1wb3J0IHtJMkRDb29yZGluYXRlcywgSURyYXdhYmxlSW5GaWVsZCwgSUhhc0Nzc0NsYXNzLCBJU2NlbmV9IGZyb20gJy4uL2ludGVyZmFjZXMnO1xyXG5pbXBvcnQge0NvbXBhcmV9IGZyb20gXCIuLi91dGlscy9jb21wYXJlXCI7XHJcbmltcG9ydCB7UGxheWVyfSBmcm9tIFwiLi4vY3JlYXR1cmVzL3BsYXllclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEZpZWxkU2NlbmUgaW1wbGVtZW50cyBJU2NlbmUge1xyXG4gICAgcHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50O1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBjZWxsQ2xpY2tMaXN0ZW5lcjogYW55O1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBidXR0b25aQ2xpY2tMaXN0ZW5lcjogYW55O1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBidXR0b25YQ2xpY2tMaXN0ZW5lcjogYW55O1xyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lRmllbGQ6IEhUTUxFbGVtZW50LCBtb3VzZUxpc3RlbmVyOiBhbnksIGJ1dHRvblpDbGlja0xpc3RlbmVyOiBhbnksIGJ1dHRvblhDbGlja0xpc3RlbmVyOiBhbnkpIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQgPSBnYW1lRmllbGQ7XHJcbiAgICAgICAgdGhpcy5jZWxsQ2xpY2tMaXN0ZW5lciA9IG1vdXNlTGlzdGVuZXI7XHJcbiAgICAgICAgdGhpcy5idXR0b25aQ2xpY2tMaXN0ZW5lciA9IGJ1dHRvblpDbGlja0xpc3RlbmVyO1xyXG4gICAgICAgIHRoaXMuYnV0dG9uWENsaWNrTGlzdGVuZXIgPSBidXR0b25YQ2xpY2tMaXN0ZW5lcjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0RWxlbWVudCgpOiBFbGVtZW50IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2VuZXJhdGVzIGEgdGFibGUgYW5kIGFwcGVuZCBpdCB0byB0aGlzLmVsZW1lbnRcclxuICAgICAqL1xyXG4gICAgcHVibGljIHJlbmRlcihtYXA6IE1hcCk6IHZvaWQge1xyXG4gICAgICAgIGxldCB0YWJsZSA9IHRoaXMuZ2V0VGFibGUoKTtcclxuICAgICAgICB0YWJsZS5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgbWFwLmdldFNpemUoKS55OyArK3kpIHtcclxuICAgICAgICAgICAgbGV0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHggPSAwOyB4ICA8IG1hcC5nZXRTaXplKCkueDsgKyt4KSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XHJcbiAgICAgICAgICAgICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jZWxsQ2xpY2tMaXN0ZW5lcik7XHJcbiAgICAgICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQoY2VsbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGFibGUuYXBwZW5kQ2hpbGQocm93KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5nZXRaQnV0dG9uKCkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmJ1dHRvblpDbGlja0xpc3RlbmVyKTtcclxuICAgICAgICB0aGlzLmdldFhCdXR0b24oKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuYnV0dG9uWENsaWNrTGlzdGVuZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0VGFibGUoKTogSFRNTFRhYmxlRWxlbWVudCB7XHJcbiAgICAgICAgcmV0dXJuIDxIVE1MVGFibGVFbGVtZW50PiB0aGlzLmVsZW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndGFibGUnKVswXTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldEJ1dHRvbnMoKTogSFRNTENvbGxlY3Rpb24ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImJ1dHRvbnNcIilbMF0uY2hpbGRyZW47XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRaQnV0dG9uKCk6IEVsZW1lbnQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldEJ1dHRvbnMoKVswXTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldFhCdXR0b24oKTogRWxlbWVudCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QnV0dG9ucygpWzFdO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0SW5mb0VsZW1lbnQoKTogRWxlbWVudCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdpbmZvJylbMF07XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgY2VsbCBpbiB0YWJsZVxyXG4gICAgICogQHBhcmFtIGNvb3JkaW5hdGVzXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGdldENlbGwoY29vcmRpbmF0ZXM6IEkyRENvb3JkaW5hdGVzKTogRWxlbWVudCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VGFibGUoKS5yb3dzW2Nvb3JkaW5hdGVzLnldLmNlbGxzW2Nvb3JkaW5hdGVzLnhdO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2VuZXJhdGVzIGRpdiBlbGVtZW50IHdpdGggc29tZSBjc3MgY2xhc3NcclxuICAgICAqIEBwYXJhbSBvYmpcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGdldEhUTUxTcHJpdGUob2JqOiBJSGFzQ3NzQ2xhc3MpOiBIVE1MRWxlbWVudCB7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHJlc3VsdC5jbGFzc0xpc3QuYWRkKCdzcHJpdGUnKTtcclxuICAgICAgICByZXN1bHQuY2xhc3NMaXN0LmFkZChvYmouY3NzQ2xhc3MpO1xyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHVwZGF0ZShtYXA6IE1hcCwgY3JlYXR1cmVzOiBJRHJhd2FibGVJbkZpZWxkW10pOiB2b2lkIHtcclxuICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IG1hcC5nZXRTaXplKCkueTsgKyt5KSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgbWFwLmdldFNpemUoKS54OyArK3gpIHtcclxuICAgICAgICAgICAgICAgIGxldCBtYXBDZWxsID0gbWFwLmdldENlbGwoeyB4OiB4LCB5OiB5IH0pO1xyXG4gICAgICAgICAgICAgICAgbGV0IEhUTUxDZWxsID0gdGhpcy5nZXRDZWxsKHsgeDogeCwgeTogeSB9KTtcclxuICAgICAgICAgICAgICAgIEhUTUxDZWxsLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICBIVE1MQ2VsbC5hcHBlbmRDaGlsZChGaWVsZFNjZW5lLmdldEhUTUxTcHJpdGUobWFwQ2VsbCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY3JlYXR1cmVzLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgIGxldCBjcmVhdHVyZSA9IGNyZWF0dXJlc1tpXTtcclxuICAgICAgICAgICAgdGhpcy5nZXRDZWxsKGNyZWF0dXJlLmdldENvb3JkaW5hdGVzKCkpLmFwcGVuZENoaWxkKEZpZWxkU2NlbmUuZ2V0SFRNTFNwcml0ZShjcmVhdHVyZSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFVwZGF0ZXMgY2VsbHMgb25seSBhdCBzcGVjaWZpYyBjb29yZGluYXRlcy4gTmVlZGVkIHRvIGRyYXcgQ1NTIGFuaW1hdGlvbiBvbmx5IGZvciBzcGVjaWZpYyBjZWxscy5cclxuICAgICAqIEBwYXJhbSBtYXBcclxuICAgICAqIEBwYXJhbSBjb29yZGluYXRlc1xyXG4gICAgICogQHBhcmFtIGNyZWF0dXJlc1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgdXBkYXRlQ2VsbHMobWFwOiBNYXAsIGNvb3JkaW5hdGVzOiBJMkRDb29yZGluYXRlc1tdLCBjcmVhdHVyZXM6IElEcmF3YWJsZUluRmllbGRbXSk6IHZvaWQge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29vcmRpbmF0ZXMubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgICAgbGV0IG1hcENlbGwgPSBtYXAuZ2V0Q2VsbChjb29yZGluYXRlc1tpXSk7XHJcbiAgICAgICAgICAgIGxldCBIVE1MQ2VsbCA9IHRoaXMuZ2V0Q2VsbChjb29yZGluYXRlc1tpXSk7XHJcbiAgICAgICAgICAgIEhUTUxDZWxsLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgICAgIEhUTUxDZWxsLmFwcGVuZENoaWxkKEZpZWxkU2NlbmUuZ2V0SFRNTFNwcml0ZShtYXBDZWxsKSk7XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGNyZWF0dXJlcy5sZW5ndGg7ICsraikge1xyXG4gICAgICAgICAgICAgICAgaWYgKENvbXBhcmUuc2hhbGxvd0VxdWFsKGNyZWF0dXJlc1tqXS5nZXRDb29yZGluYXRlcygpLCBjb29yZGluYXRlc1tpXSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBIVE1MQ2VsbC5hcHBlbmRDaGlsZChGaWVsZFNjZW5lLmdldEhUTUxTcHJpdGUoY3JlYXR1cmVzW2pdKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHVwZGF0ZUluZm8ocGxheWVyOiBQbGF5ZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmdldEluZm9FbGVtZW50KCkuaW5uZXJIVE1MID0gYFBsYXllcjogJHtwbGF5ZXIubmFtZX08YnI+QXZhaWxhYmxlIG1vdmVzOiAke3BsYXllci5hdmFpbGFibGVNb3Zlc31gO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtNb25zdGVyfSBmcm9tIFwiLi4vY3JlYXR1cmVzL21vbnN0ZXJcIjtcclxuaW1wb3J0IHtJU2NlbmV9IGZyb20gXCIuLi9pbnRlcmZhY2VzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRmlnaHRTY2VuZSBpbXBsZW1lbnRzIElTY2VuZSB7XHJcbiAgICBwcml2YXRlIGVsZW1lbnQ6IEhUTUxFbGVtZW50O1xyXG4gICAgcHJpdmF0ZSBtb25zdGVyczogW01vbnN0ZXIsIE1vbnN0ZXJdO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBORVNaQnV0dG9uQ2xpY2tMaXN0ZW5lcjogYW55O1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBORVNYQnV0dG9uQ2xpY2tMaXN0ZW5lcjogYW55O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGdhbWVGaWdodDogSFRNTEVsZW1lbnQsIGxpc3RlbmVyXzE6IGFueSwgbGlzdGVuZXJfMjogYW55KSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZ2FtZUZpZ2h0O1xyXG4gICAgICAgIHRoaXMubW9uc3RlcnMgPSBbbnVsbCwgbnVsbF07XHJcbiAgICAgICAgdGhpcy5ORVNaQnV0dG9uQ2xpY2tMaXN0ZW5lciA9IGxpc3RlbmVyXzE7XHJcbiAgICAgICAgdGhpcy5ORVNYQnV0dG9uQ2xpY2tMaXN0ZW5lciA9IGxpc3RlbmVyXzI7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldE1vbnN0ZXJzKG1vbnN0ZXJzOiBbTW9uc3RlciwgTW9uc3Rlcl0pIHtcclxuICAgICAgICB0aGlzLm1vbnN0ZXJzID0gbW9uc3RlcnM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlbmRlcigpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmdldFpCdXR0b24oKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuTkVTWkJ1dHRvbkNsaWNrTGlzdGVuZXIpO1xyXG4gICAgICAgIHRoaXMuZ2V0WEJ1dHRvbigpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5ORVNYQnV0dG9uQ2xpY2tMaXN0ZW5lcik7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRNb25zdGVyRGl2cygpOiBIVE1MQ29sbGVjdGlvbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibW9uc3RlcnNcIilbMF0uY2hpbGRyZW47XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgZ2V0U3ByaXRlKGVsZW06IEVsZW1lbnQpIHtcclxuICAgICAgICByZXR1cm4gZWxlbS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzcHJpdGUnKVswXTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBnZXRIZWFsdGgoZWxlbTogRWxlbWVudCkge1xyXG4gICAgICAgIHJldHVybiBlbGVtLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2hlYWx0aCcpWzBdO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIGdldERlZmVuc2UoZWxlbTogRWxlbWVudCkge1xyXG4gICAgICAgIHJldHVybiBlbGVtLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2RlZmVuc2UnKVswXTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldEJ1dHRvbnMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdhY3Rpb24tYnRuJylbMF0uY2hpbGRyZW47XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRaQnV0dG9uKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldEJ1dHRvbnMoKVswXTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldFhCdXR0b24oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QnV0dG9ucygpWzFdO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1cGRhdGUoKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IG1vbnN0ZXJEaXZzID0gdGhpcy5nZXRNb25zdGVyRGl2cygpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbW9uc3RlckRpdnMubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgICAgbGV0IHNwcml0ZSA9IEZpZ2h0U2NlbmUuZ2V0U3ByaXRlKG1vbnN0ZXJEaXZzW2ldKTtcclxuICAgICAgICAgICAgbGV0IGhlYWx0aCA9IEZpZ2h0U2NlbmUuZ2V0SGVhbHRoKG1vbnN0ZXJEaXZzW2ldKTtcclxuICAgICAgICAgICAgbGV0IGRlZmVuc2UgPSBGaWdodFNjZW5lLmdldERlZmVuc2UobW9uc3RlckRpdnNbaV0pO1xyXG5cclxuICAgICAgICAgICAgc3ByaXRlLmNsYXNzTmFtZSA9IGBzcHJpdGUgJHt0aGlzLm1vbnN0ZXJzW2ldLmNzc0NsYXNzfWA7XHJcbiAgICAgICAgICAgIGlmIChpID09IDEpIHtcclxuICAgICAgICAgICAgICAgIHNwcml0ZS5jbGFzc0xpc3QuYWRkKCdtaXJyb3JZJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaGVhbHRoLmlubmVySFRNTCA9IGAke3RoaXMubW9uc3RlcnNbaV0uaGVhbHRofWA7XHJcbiAgICAgICAgICAgIGRlZmVuc2UuaW5uZXJIVE1MID0gYCR7dGhpcy5tb25zdGVyc1tpXS5kZWZlbnNlfWA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRFbGVtZW50KCk6IEVsZW1lbnQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNoYWtlTW9uc3Rlcihtb25zdGVyOiBNb25zdGVyKSB7XHJcbiAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5tb25zdGVycy5pbmRleE9mKG1vbnN0ZXIpO1xyXG4gICAgICAgIGxldCBwYXJlbnREaXYgPSBGaWdodFNjZW5lLmdldFNwcml0ZSh0aGlzLmdldE1vbnN0ZXJEaXZzKClbaW5kZXhdKTtcclxuICAgICAgICBwYXJlbnREaXYuY2xhc3NMaXN0LnJlbW92ZSgnc2hha2UnKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgcGFyZW50RGl2LmNsYXNzTGlzdC5hZGQoJ3NoYWtlJyk7XHJcbiAgICAgICAgfSwgNTApO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtJU2NlbmVJbmZvfSBmcm9tICcuLi9pbnRlcmZhY2VzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBTY2VuZU1hbmFnZXIge1xyXG4gICAgX2N1cnJlbnRTY2VuZTogc3RyaW5nO1xyXG4gICAgc2NlbmVzOiBJU2NlbmVJbmZvW107XHJcblxyXG4gICAgcHVibGljIGdldCBjdXJyZW50U2NlbmUoKTogSVNjZW5lSW5mbyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0U2NlbmVJbmZvKHRoaXMuX2N1cnJlbnRTY2VuZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3Ioc2NlbmVzOiBJU2NlbmVJbmZvW10pIHtcclxuICAgICAgICB0aGlzLl9jdXJyZW50U2NlbmUgPSBcIlwiO1xyXG4gICAgICAgIHRoaXMuc2NlbmVzID0gc2NlbmVzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRTY2VuZUluZm8obmFtZTogc3RyaW5nKTogSVNjZW5lSW5mbyB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNjZW5lcy5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zY2VuZXNbaV0ubmFtZSA9PSBuYW1lKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zY2VuZXNbaV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHNjZW5lIGRvZXMgbm90IGV4aXN0XCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzaG93U2NlbmUobmFtZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fY3VycmVudFNjZW5lID0gbmFtZTtcclxuICAgICAgICBsZXQgc2NlbmUgPSB0aGlzLmdldFNjZW5lSW5mbyhuYW1lKS5zY2VuZTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc2NlbmVzLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2NlbmVzW2ldLnNjZW5lLmdldEVsZW1lbnQoKS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNjZW5lLmdldEVsZW1lbnQoKS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge0lTY2VuZX0gZnJvbSBcIi4uL2ludGVyZmFjZXNcIjtcclxuaW1wb3J0IHtQbGF5ZXJ9IGZyb20gXCIuLi9jcmVhdHVyZXMvcGxheWVyXCI7XHJcbmltcG9ydCB7TW9uc3Rlcn0gZnJvbSBcIi4uL2NyZWF0dXJlcy9tb25zdGVyXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgU2VsZWN0TW9uc3RlclNjZW5lIGltcGxlbWVudHMgSVNjZW5lIHtcclxuICAgIHByaXZhdGUgZWxlbWVudDogSFRNTEVsZW1lbnQ7XHJcbiAgICBwcml2YXRlIHBsYXllcjogUGxheWVyO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBPa0J1dHRvbkxpc3RlbmVyOiBhbnk7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZG9tRWxlbWVudDogSFRNTEVsZW1lbnQsIE9rQnV0dG9uTGlzdGVuZXI6IGFueSkge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGRvbUVsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuT2tCdXR0b25MaXN0ZW5lciA9IE9rQnV0dG9uTGlzdGVuZXI7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldFBsYXllcihwbGF5ZXI6IFBsYXllcikge1xyXG4gICAgICAgIHRoaXMucGxheWVyID0gcGxheWVyO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1cGRhdGUoKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IHNlbGVjdCA9IHRoaXMuZWxlbWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzZWxlY3QnKVswXTtcclxuICAgICAgICBzZWxlY3QuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucGxheWVyLmF2YWlsYWJsZU1vbnN0ZXJzLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgIGxldCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcclxuICAgICAgICAgICAgb3B0aW9uLnZhbHVlID0gYCR7aX1gO1xyXG4gICAgICAgICAgICBvcHRpb24uaW5uZXJUZXh0ID0gdGhpcy5wbGF5ZXIuYXZhaWxhYmxlTW9uc3RlcnNbaV0uZ2V0U3RyaW5nKCk7XHJcbiAgICAgICAgICAgIHNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgT2tCdXR0b24gPSB0aGlzLmVsZW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnb2snKVswXTtcclxuICAgICAgICBPa0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuT2tCdXR0b25MaXN0ZW5lcik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldENob3Nlbk1vbnN0ZXIoKTogTW9uc3RlciB7XHJcbiAgICAgICAgbGV0IHNlbGVjdCA9IDxIVE1MU2VsZWN0RWxlbWVudD50aGlzLmVsZW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc2VsZWN0JylbMF07XHJcbiAgICAgICAgbGV0IGluZGV4ID0gc2VsZWN0LnZhbHVlO1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBsYXllci5hdmFpbGFibGVNb25zdGVyc1twYXJzZUludChpbmRleCldO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRFbGVtZW50KCk6IEVsZW1lbnQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQ7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge0lTY2VuZX0gZnJvbSBcIi4uL2ludGVyZmFjZXNcIlxyXG5cclxuZXhwb3J0IGNsYXNzIFN0YXJ0U2NlbmUgaW1wbGVtZW50cyBJU2NlbmUge1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBlbGVtZW50OiBIVE1MRWxlbWVudDtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgc3RhcnRCdXR0b25MaXN0ZW5lcjogYW55O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGRvbUVsZW1lbnQ6IEhUTUxFbGVtZW50LCBzdGFydEJ1dHRvbkxpc3RlbmVyOiBhbnkpIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQgPSBkb21FbGVtZW50O1xyXG4gICAgICAgIHRoaXMuc3RhcnRCdXR0b25MaXN0ZW5lciA9IHN0YXJ0QnV0dG9uTGlzdGVuZXJcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVuZGVyKCkge1xyXG4gICAgICAgIGxldCBidXR0b24gPSB0aGlzLmVsZW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncmVkLWJ0bicpWzBdO1xyXG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuc3RhcnRCdXR0b25MaXN0ZW5lcik7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RWxlbWVudCgpOiBFbGVtZW50IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50O1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGNsYXNzIENvbXBhcmUge1xyXG4gICAgLyoqXHJcbiAgICAgKiBpcyB0aGUgbnVtYmVyIHdpdGhpbiB0aGUgYm91bmRzXHJcbiAgICAgKiBAcGFyYW0geFxyXG4gICAgICogQHBhcmFtIG1pblxyXG4gICAgICogQHBhcmFtIG1heFxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgaXNJblJhbmdlKHg6IG51bWJlciwgbWluOiBudW1iZXIsIG1heDogbnVtYmVyKSB7XHJcbiAgICAgICAgcmV0dXJuIG1pbiA8PSB4ICYmIHggPD0gbWF4O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2hlY2tzIGZvciBkaWN0aW9uYXJ5IGNvbXBhcmlzb25zLlxyXG4gICAgICpcclxuICAgICAqIEluIEphdmFTY3JpcHQgYW5kIFR5cGVTY3JpcHQsIElmIHR3byBlbGVtZW50cyBhcmUgZWxlbWVudHMgdGhhdCBpbXBsZW1lbnQgc29tZSBraW5kIG9mIGludGVyZmFjZSwgdGhlbiBjb21wYXJpbmdcclxuICAgICAqIHRoZW0gdXNpbmcgY29tcGFyaXNvbiBvcGVyYXRvcnMgaXMgZmFsc2UuIEV2ZW4gaWYgdGhlc2Ugb2JqZWN0cyBhcmUgZXF1YWwgaW4gdmFsdWUuXHJcbiAgICAgKlxyXG4gICAgICogVGhpcyBmdW5jdGlvbiBzb2x2ZXMgdGhlIHByb2JsZW0gYW5kIG1hdGNoZXMgdGhlIGVsZW1lbnRzIGJ5IHRoZSB2YWx1ZSBvZiBlYWNoIGZpZWxkLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBhXHJcbiAgICAgKiBAcGFyYW0gYlxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgc2hhbGxvd0VxdWFsKGE6IGFueSwgYjogYW55KTogYm9vbGVhbiB7XHJcbiAgICAgICAgY29uc3Qga2V5czEgPSBPYmplY3Qua2V5cyhhKTtcclxuICAgICAgICBjb25zdCBrZXlzMiA9IE9iamVjdC5rZXlzKGIpO1xyXG5cclxuICAgICAgICBpZiAoa2V5czEubGVuZ3RoICE9PSBrZXlzMi5sZW5ndGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yIChsZXQga2V5IG9mIGtleXMxKSB7XHJcbiAgICAgICAgICAgIGlmIChhW2tleV0gIT09IGJba2V5XSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICB9XHJcbn0iLCJleHBvcnQgY2xhc3MgUmFuZG9tIHtcclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIGFcclxuICAgICAqIEBwYXJhbSBiXHJcbiAgICAgKiBAcmV0dXJucyByYW5kb20gbnVtYmVyIGJldHdlZW4gYSBhbmQgYiwgaW5jbHVzaXZlXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBpblJhbmdlKGE6IG51bWJlciwgYjogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGIgLSBhICsgMSkpICsgYTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgb25lSXRlbUZyb21BcnJheShhcnI6IGFueVtdKTogYW55e1xyXG4gICAgICAgIHJldHVybiBhcnJbdGhpcy5pblJhbmdlKDAsIGFyci5sZW5ndGggLSAxKV07XHJcbiAgICB9XHJcbn0iXX0=
