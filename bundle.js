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
var cell_1 = require("./map/cell");
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
 * ENDED
 */
function showResult(player, reason) {
    alert(player.name + " is win. " + reason);
}
/**
 * Start scene
 */
function startButtonClickListener() {
    if (gs != null && gs.blocked) return;
    initGS();
    sceneManager.showScene('field');
    fieldScene.render(gs.map);
    fieldScene.update(gs.map, [gs.player, gs.player2]);
    fieldScene.updateInfo(gs.getCurrent());
}
/**
 * Fight Scene
 */
function fightFinishCheck() {
    if (gs.fight.isFinish()) {
        fieldScene.updateInfo(gs.getCurrent());
        fightScene.update();
        gs.blocked = true;
        setTimeout(function () {
            gs.blocked = false;
            gs.fight.finish();
            if (gs.getCurrent().availableMonsters.length == 0) {
                showResult(gs.getNext(), "The other player no longer has monsters");
            }
            var currentCell = gs.map.getCell(gs.getCurrent().getCoordinates());
            if (currentCell instanceof cell_1.BossCell && currentCell.monster.looted == true) {
                showResult(gs.getCurrent(), "Boss killed");
            }
            sceneManager.showScene('field');
            fieldScene.updateInfo(gs.getCurrent());
        }, 1000);
    }
    return gs.fight.isFinish();
}
function NESZButtonInFightClickListener() {
    if (gs.blocked) return;
    gs.fight.attackCurrent();
    fightScene.shakeMonster(gs.fight.defenseMonster);
    if (!fightFinishCheck()) {
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

},{"./creatures/player":4,"./gameState":5,"./logic/fight":6,"./map/cell":9,"./map/map":10,"./scenes/fieldScene":11,"./scenes/fightScene":12,"./scenes/sceneManager":13,"./scenes/selectMonsterScene":14,"./scenes/startScene":15}],9:[function(require,module,exports){
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvc2NyaXB0cy9jb21wbGV4aXR5Q2hhbmdlci50cyIsInNyYy9zY3JpcHRzL2NyZWF0dXJlcy9jcmVhdHVyZS50cyIsInNyYy9zY3JpcHRzL2NyZWF0dXJlcy9tb25zdGVyLnRzIiwic3JjL3NjcmlwdHMvY3JlYXR1cmVzL3BsYXllci50cyIsInNyYy9zY3JpcHRzL2dhbWVTdGF0ZS50cyIsInNyYy9zY3JpcHRzL2xvZ2ljL2ZpZ2h0LnRzIiwic3JjL3NjcmlwdHMvbG9naWMvbW92ZU1hbmFnZXIudHMiLCJzcmMvc2NyaXB0cy9tYWluLnRzIiwic3JjL3NjcmlwdHMvbWFwL2NlbGwudHMiLCJzcmMvc2NyaXB0cy9tYXAvbWFwLnRzIiwic3JjL3NjcmlwdHMvc2NlbmVzL2ZpZWxkU2NlbmUudHMiLCJzcmMvc2NyaXB0cy9zY2VuZXMvZmlnaHRTY2VuZS50cyIsInNyYy9zY3JpcHRzL3NjZW5lcy9zY2VuZU1hbmFnZXIudHMiLCJzcmMvc2NyaXB0cy9zY2VuZXMvc2VsZWN0TW9uc3RlclNjZW5lLnRzIiwic3JjL3NjcmlwdHMvc2NlbmVzL3N0YXJ0U2NlbmUudHMiLCJzcmMvc2NyaXB0cy91dGlscy9jb21wYXJlLnRzIiwic3JjL3NjcmlwdHMvdXRpbHMvcmFuZG9tLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0lDRWEsaUI7QUFHVCwrQkFBWSxHQUFaLEVBQXlCO0FBQUE7O0FBQ3JCLGFBQUssZUFBTCxHQUF1QixHQUF2QjtBQUNIOzs7O3FDQUVnQjtBQUNiLGlCQUFLLElBQUksSUFBSSxDQUFiLEVBQWdCLElBQUksS0FBSyxlQUFMLENBQXFCLE1BQXpDLEVBQWlELEVBQUUsQ0FBbkQsRUFBc0Q7QUFDbEQscUJBQUssSUFBSSxJQUFJLENBQWIsRUFBZ0IsSUFBSSxLQUFLLGVBQUwsQ0FBcUIsQ0FBckIsRUFBd0IsTUFBNUMsRUFBb0QsRUFBRSxDQUF0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SSxNQUFKLEdBQWEsQ0FBN0IsQ0FBSixDQUFQO0FBQ0g7Ozs7OztBQVpMLFFBQUEsTUFBQSxHQUFBLE1BQUEiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJpbXBvcnQge0NlbGx9IGZyb20gJy4vbWFwL2NlbGwnO1xyXG5cclxuZXhwb3J0IGNsYXNzIENvbXBsZXhpdHlDaGFuZ2VyIHtcclxuICAgIHByaXZhdGUgX2N1cnJlbnRNYXBEYXRhOiBDZWxsW11bXTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihtYXA6IENlbGxbXVtdKSB7XHJcbiAgICAgICAgdGhpcy5fY3VycmVudE1hcERhdGEgPSBtYXA7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGJhbGFuY2VNYXAoKTogdm9pZCB7XHJcbiAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCB0aGlzLl9jdXJyZW50TWFwRGF0YS5sZW5ndGg7ICsreSkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMuX2N1cnJlbnRNYXBEYXRhW3ldLmxlbmd0aDsgKyt4KSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY3VycmVudE1vbnN0ZXIgPSB0aGlzLl9jdXJyZW50TWFwRGF0YVt5XVt4XS5tb25zdGVyO1xyXG4gICAgICAgICAgICAgICAgbGV0IG5ld0hlYWx0aFZhbHVlID0gKDEgKyB4IC8gMTApICogY3VycmVudE1vbnN0ZXIuaGVhbHRoO1xyXG4gICAgICAgICAgICAgICAgY3VycmVudE1vbnN0ZXIuQmFsYW5jZUhlYWwobmV3SGVhbHRoVmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSAgICBcclxufSIsImltcG9ydCB7SUhhc0Nzc0NsYXNzfSBmcm9tIFwiLi4vaW50ZXJmYWNlc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIENyZWF0dXJlIGltcGxlbWVudHMgSUhhc0Nzc0NsYXNzIHtcclxuICAgIFxyXG4gICAgcHJpdmF0ZSBfbmFtZTogc3RyaW5nO1xyXG4gICAgcHVibGljIGdldCBuYW1lKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX25hbWU7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0IG5hbWUodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX25hbWUgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9jc3NDbGFzczogc3RyaW5nO1xyXG4gICAgcHVibGljIGdldCBjc3NDbGFzcygpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jc3NDbGFzcztcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIGNzc0NsYXNzIDogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fbmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5fY3NzQ2xhc3MgPSBjc3NDbGFzcztcclxuICAgIH1cclxuXHJcbn0iLCJpbXBvcnQge0NyZWF0dXJlfSBmcm9tIFwiLi9jcmVhdHVyZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1vbnN0ZXIgZXh0ZW5kcyBDcmVhdHVyZSB7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9tYXhIZWF0aDogbnVtYmVyO1xyXG4gICAgcHVibGljIGdldCBtYXhIZWF0aCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9tYXhIZWF0aDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9oZWFsdGg6IG51bWJlcjtcclxuICAgIHB1YmxpYyBnZXQgaGVhbHRoKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2hlYWx0aDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9kZWZlbnNlOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgZ2V0IGRlZmVuc2UoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZGVmZW5zZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9hdHRhY2s6IG51bWJlcjtcclxuICAgIHB1YmxpYyBnZXQgYXR0YWNrKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2F0dGFjaztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9hdHRhY2tCb29zdGVyOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgZ2V0IGF0dGFja0Jvb3N0ZXIoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYXR0YWNrQm9vc3RlcjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9sb290ZWQ6IGJvb2xlYW47XHJcbiAgICBwdWJsaWMgZ2V0IGxvb3RlZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbG9vdGVkO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGxvb3QoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fbG9vdGVkID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIGNzc0NsYXNzOiBzdHJpbmcsIHR5cGU6IHN0cmluZywgaGVhbHRoOiBudW1iZXIsIGF0dGFjazogbnVtYmVyLCBkZWZlbnNlOiBudW1iZXIsXHJcbiAgICAgICAgICAgICAgICBhdHRhY2tCb29zdGVyOiBudW1iZXIsIGxvb3RlZDogYm9vbGVhbikge1xyXG4gICAgICAgIHN1cGVyKG5hbWUsIGNzc0NsYXNzKTtcclxuICAgICAgICB0aGlzLl9tYXhIZWF0aCA9IGhlYWx0aDtcclxuICAgICAgICB0aGlzLl9oZWFsdGggPSBoZWFsdGg7XHJcbiAgICAgICAgdGhpcy5fZGVmZW5zZSA9IGRlZmVuc2U7XHJcbiAgICAgICAgdGhpcy5fYXR0YWNrID0gYXR0YWNrO1xyXG4gICAgICAgIHRoaXMuX2F0dGFja0Jvb3N0ZXIgPSBhdHRhY2tCb29zdGVyO1xyXG4gICAgICAgIHRoaXMuX2xvb3RlZCA9IGxvb3RlZDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYmVBdHRhY2tlZChlbmVteTogTW9uc3Rlcik6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IGRhbWFnZSA9IHRoaXMuZGVmZW5zZSAtIChlbmVteS5hdHRhY2sgKyBlbmVteS5hdHRhY2tCb29zdGVyKTtcclxuICAgICAgICBpZiAoZGFtYWdlID49IDApIHtcclxuICAgICAgICAgICAgdGhpcy5faGVhbHRoIC09IDE7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5faGVhbHRoICs9IGRhbWFnZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRlZmVuc2VIaW1zZWxmKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX2RlZmVuc2UgKz0gNTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaXNEZWFkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9oZWFsdGggPD0gMDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgSGVhbCgpOiB2b2lkIHtcclxuICAgICAgIHRoaXMuX2hlYWx0aCA9IHRoaXMubWF4SGVhdGg7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIEJhbGFuY2VIZWFsKG5ld0hlYWw6IG51bWJlcik6IHZvaWR7XHJcbiAgICAgICAgdGhpcy5faGVhbHRoID0gbmV3SGVhbDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0U3RyaW5nKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIGAke3RoaXMubmFtZX0sIGhwOiAke3RoaXMuaGVhbHRofSwgZGVmZW5zZTogJHt0aGlzLmRlZmVuc2V9LCBhdHRhY2s6ICR7dGhpcy5hdHRhY2t9YDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNoYXJrIGV4dGVuZHMgTW9uc3RlciB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcignU2hhcmsnLCAnc2hhcmsnLCAncmVkJywgMTAsIDEwLCA1LCAwLCBmYWxzZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBEcmFnb24gZXh0ZW5kcyBNb25zdGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCdEcmFnb24nLCAnZHJhZ29uJywgJ3JlZCcsIDIwLCA1LCAwLCAwLCBmYWxzZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBCbGFja0RyYWdvbiBleHRlbmRzIE1vbnN0ZXJ7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHN1cGVyKCdCbGFja0RyYWdvbicsICdibGFja19kcmFnb24nLCAnYScsIDEwMCwgMTAsIDAsIDMsIGZhbHNlKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENhdCBleHRlbmRzIE1vbnN0ZXJ7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHN1cGVyKCdDYXQnLCAnY2F0JywgJ3JlZCcsIDIwLCAzMCwgMCwgMjAsIGZhbHNlKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIERvZyBleHRlbmRzIE1vbnN0ZXJ7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHN1cGVyKCdEb2cnLCAnZG9nJywgJ3JlZCcsIDEwLCAxMCwgMjAwLCAwLCBmYWxzZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBIb3JzZSBleHRlbmRzIE1vbnN0ZXJ7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHN1cGVyKCdIb3JzZScsICdob3JzZScsICdyZWQnLCAyMDAsIDUsIDAsIDEwLCBmYWxzZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBMaW9uIGV4dGVuZHMgTW9uc3RlcntcclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgc3VwZXIoJ0xpb24nLCAnbGlvbicsICdyZWQnLCAzMCwgNiwgNSwgMiwgZmFsc2UpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTWVkdXNhIGV4dGVuZHMgTW9uc3RlcntcclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgc3VwZXIoJ01lZHVzYScsICdtZWR1c2EnLCAncmVkJywgMywgNSwgMTAwLCAwLCBmYWxzZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBQbGFudCBleHRlbmRzIE1vbnN0ZXJ7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHN1cGVyKCdQbGFudCcsICdwbGFudCcsICdyZWQnLCA1LCA1LCAyMCwgMCwgZmFsc2UpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU25ha2UgZXh0ZW5kcyBNb25zdGVye1xyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICBzdXBlcignU25ha2UnLCAnc25ha2UnLCAncmVkJywgMzAsIDIsIDAsIDAsIGZhbHNlKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEJvc3MgZXh0ZW5kcyBNb25zdGVye1xyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICBzdXBlcignQm9zcycsICdib3NzJywgJ3JlZCcsIDEwMDAsIDI1LCAyMCwgMTAsIGZhbHNlKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7Q3JlYXR1cmV9IGZyb20gXCIuL2NyZWF0dXJlXCI7XHJcbmltcG9ydCB7TW9uc3RlcixTaGFya30gZnJvbSBcIi4vbW9uc3RlclwiO1xyXG5pbXBvcnQge0kyRENvb3JkaW5hdGVzLCBJRHJhd2FibGVJbkZpZWxkfSBmcm9tIFwiLi4vaW50ZXJmYWNlc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBsYXllciBleHRlbmRzIENyZWF0dXJlIGltcGxlbWVudHMgSURyYXdhYmxlSW5GaWVsZCB7XHJcbiAgICBwcml2YXRlIHg6IG51bWJlcjtcclxuICAgIHByaXZhdGUgeTogbnVtYmVyO1xyXG5cclxuICAgIHByaXZhdGUgX2F2YWlsYWJsZU1vdmVzOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgZ2V0IGF2YWlsYWJsZU1vdmVzKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2F2YWlsYWJsZU1vdmVzO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNldEF2YWlsYWJsZU1vdmVzKHZhbHVlOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9hdmFpbGFibGVNb3ZlcyA9IHZhbHVlO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHJlc2V0QXZhaWxhYmxlTW92ZXMoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fYXZhaWxhYmxlTW92ZXMgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVhZG9ubHkgX2F2YWlsYWJsZU1vbnN0ZXJzOiBNb25zdGVyW107XHJcbiAgICBwdWJsaWMgZ2V0IGF2YWlsYWJsZU1vbnN0ZXJzKCk6IE1vbnN0ZXJbXSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2F2YWlsYWJsZU1vbnN0ZXJzO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgY3NzQ2xhc3M6IHN0cmluZywgeDogbnVtYmVyLCB5OiBudW1iZXIsIGF2YWlsYWJsZU1vdmVzOiBudW1iZXIpIHtcclxuICAgICAgICBzdXBlcihuYW1lLCBjc3NDbGFzcyk7XHJcbiAgICAgICAgdGhpcy54ID0geDtcclxuICAgICAgICB0aGlzLnkgPSB5O1xyXG4gICAgICAgIHRoaXMuX2F2YWlsYWJsZU1vdmVzID0gYXZhaWxhYmxlTW92ZXM7XHJcbiAgICAgICAgbGV0IHNoYXJrID0gbmV3IFNoYXJrKCk7XHJcbiAgICAgICAgc2hhcmsubG9vdCgpO1xyXG4gICAgICAgIHRoaXMuX2F2YWlsYWJsZU1vbnN0ZXJzID0gW3NoYXJrXTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHNldCBuZXcgY29vcmRpbmF0ZXNcclxuICAgICAqIEBwYXJhbSBjb29yZGluYXRlc1xyXG4gICAgICogQHBhcmFtIG1vdmVzXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBtb3ZlKGNvb3JkaW5hdGVzOiBJMkRDb29yZGluYXRlcywgbW92ZXM6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMueCA9IGNvb3JkaW5hdGVzLng7XHJcbiAgICAgICAgdGhpcy55ID0gY29vcmRpbmF0ZXMueTtcclxuICAgICAgICB0aGlzLl9hdmFpbGFibGVNb3ZlcyAtPSBtb3ZlcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0Q29vcmRpbmF0ZXMoKTogSTJEQ29vcmRpbmF0ZXMgIHtcclxuICAgICAgICByZXR1cm4geyB4OiB0aGlzLngsIHk6IHRoaXMueSB9O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhZGRNb25zdGVyKG1vbnN0ZXI6IE1vbnN0ZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9hdmFpbGFibGVNb25zdGVycy5wdXNoKG1vbnN0ZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkZWxldGVNb25zdGVyKG1vbnN0ZXI6IE1vbnN0ZXIpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuYXZhaWxhYmxlTW9uc3RlcnMuaW5kZXhPZihtb25zdGVyKTtcclxuICAgICAgICBjb25zb2xlLmFzc2VydChpbmRleCAhPSAtMSk7XHJcbiAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcclxuICAgICAgICAgICAgdGhpcy5hdmFpbGFibGVNb25zdGVycy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImltcG9ydCB7UGxheWVyfSBmcm9tICcuL2NyZWF0dXJlcy9wbGF5ZXInO1xyXG5pbXBvcnQge01hcH0gZnJvbSAnLi9tYXAvbWFwJztcclxuaW1wb3J0IHtNb3ZlTWFuYWdlcn0gZnJvbSAnLi9sb2dpYy9tb3ZlTWFuYWdlcic7XHJcbmltcG9ydCB7SURyYXdhYmxlSW5GaWVsZH0gZnJvbSAnLi9pbnRlcmZhY2VzJztcclxuaW1wb3J0IHtGaWdodH0gZnJvbSBcIi4vbG9naWMvZmlnaHRcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBHYW1lU3RhdGUge1xyXG4gICAgcHVibGljIHBsYXllcjogUGxheWVyO1xyXG4gICAgcHVibGljIHBsYXllcjI6IFBsYXllcjtcclxuICAgIHB1YmxpYyBjdXJyZW50UGxheWVyOiBQbGF5ZXI7XHJcbiAgICBwdWJsaWMgbWFwOiBNYXA7XHJcbiAgICBwdWJsaWMgbW92ZU1hbmFnZXI6IE1vdmVNYW5hZ2VyO1xyXG4gICAgcHVibGljIGZpZ2h0OiBGaWdodDtcclxuICAgIHB1YmxpYyBibG9ja2VkOiBib29sZWFuO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHBsYXllcjogUGxheWVyLCBwbGF5ZXIyOiBQbGF5ZXIsIG1hcDogTWFwKSB7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSBwbGF5ZXI7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIyID0gcGxheWVyMjtcclxuICAgICAgICB0aGlzLmN1cnJlbnRQbGF5ZXIgPSBwbGF5ZXI7XHJcbiAgICAgICAgdGhpcy5tYXAgPSBtYXA7XHJcbiAgICAgICAgdGhpcy5tb3ZlTWFuYWdlciA9IG5ldyBNb3ZlTWFuYWdlcih0aGlzLm1hcCwgdGhpcy5wbGF5ZXIpO1xyXG4gICAgICAgIHRoaXMuZmlnaHQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuYmxvY2tlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRDcmVhdHVyZXMoKTogSURyYXdhYmxlSW5GaWVsZFtdIHtcclxuICAgICAgICByZXR1cm4gW3RoaXMucGxheWVyLCB0aGlzLnBsYXllcjJdO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXROZXh0KCkge1xyXG4gICAgICAgIHJldHVybiAodGhpcy5jdXJyZW50UGxheWVyID09IHRoaXMucGxheWVyKSA/IHRoaXMucGxheWVyMiA6IHRoaXMucGxheWVyO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRDdXJyZW50KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRQbGF5ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN3YXBQbGF5ZXJzKCkge1xyXG4gICAgICAgIHRoaXMuY3VycmVudFBsYXllci5yZXNldEF2YWlsYWJsZU1vdmVzKCk7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50UGxheWVyID0gdGhpcy5nZXROZXh0KCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge01vbnN0ZXJ9IGZyb20gXCIuLi9jcmVhdHVyZXMvbW9uc3RlclwiXHJcbmltcG9ydCB7UGxheWVyfSBmcm9tIFwiLi4vY3JlYXR1cmVzL3BsYXllclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEZpZ2h0IHtcclxuICAgIHByaXZhdGUgX2N1cnJlbnRNb25zdGVyOiBNb25zdGVyO1xyXG4gICAgcHVibGljIGdldCBjdXJyZW50TW9uc3RlcigpOiBNb25zdGVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY3VycmVudE1vbnN0ZXI7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIF9kZWZlbnNlTW9uc3RlcjogTW9uc3RlcjtcclxuICAgIHB1YmxpYyBnZXQgZGVmZW5zZU1vbnN0ZXIoKTogTW9uc3RlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZmVuc2VNb25zdGVyO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBfd2lubmVyOiBNb25zdGVyO1xyXG4gICAgcHJpdmF0ZSBfcGxheWVyOiBQbGF5ZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IocGxheWVyOiBQbGF5ZXIsIG1vbnN0ZXJGaXJzdDogTW9uc3RlciwgbW9uc3RlclNlY29uZDogTW9uc3Rlcikge1xyXG4gICAgICAgIHRoaXMuX2N1cnJlbnRNb25zdGVyID0gbW9uc3RlckZpcnN0O1xyXG4gICAgICAgIHRoaXMuX2RlZmVuc2VNb25zdGVyID0gbW9uc3RlclNlY29uZDtcclxuICAgICAgICB0aGlzLl93aW5uZXIgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuX3BsYXllciA9IHBsYXllcjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3dhcCgpIHtcclxuICAgICAgICBbdGhpcy5fY3VycmVudE1vbnN0ZXIsIHRoaXMuX2RlZmVuc2VNb25zdGVyXSA9IFt0aGlzLmRlZmVuc2VNb25zdGVyLCB0aGlzLmN1cnJlbnRNb25zdGVyXTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaXNGaW5pc2goKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY3VycmVudE1vbnN0ZXIuaXNEZWFkKCkgfHwgdGhpcy5kZWZlbnNlTW9uc3Rlci5pc0RlYWQoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXR0YWNrQ3VycmVudCgpIHtcclxuICAgICAgICB0aGlzLmRlZmVuc2VNb25zdGVyLmJlQXR0YWNrZWQodGhpcy5jdXJyZW50TW9uc3Rlcik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRlZmVuZEN1cnJlbnQoKSB7XHJcbiAgICAgICAgdGhpcy5kZWZlbnNlTW9uc3Rlci5kZWZlbnNlSGltc2VsZigpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBmaW5pc2goKSB7XHJcbiAgICAgICAgdGhpcy5fd2lubmVyID0gKHRoaXMuY3VycmVudE1vbnN0ZXIuaXNEZWFkKCkpID8gdGhpcy5kZWZlbnNlTW9uc3RlciA6IHRoaXMuY3VycmVudE1vbnN0ZXI7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50TW9uc3Rlci5IZWFsKCk7XHJcbiAgICAgICAgdGhpcy5kZWZlbnNlTW9uc3Rlci5IZWFsKCk7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogSWYgdGhlIHBsYXllcidzIG1vbnN0ZXIgd29uLCB0aGVuIGl0IGlzIG5lY2Vzc2FyeSB0byBhZGQgdGhlIGxvc2luZyBtb25zdGVyLCBvdGhlcndpc2UgcmVtb3ZlIHRoZSBtb25zdGVyXHJcbiAgICAgICAgICogZnJvbSB0aGUgcGxheWVyLlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogSWYgdGhlIG1vbnN0ZXIgd2FzIG9uY2UgbG9vdGVkLCB0aGVuIHRoaXMgaXMgdGhlIHBsYXllcidzIG1vbnN0ZXIuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5kZWZlbnNlTW9uc3RlciwgdGhpcy5jdXJyZW50TW9uc3Rlcik7XHJcbiAgICAgICAgaWYgKHRoaXMuX3dpbm5lci5sb290ZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5kZWZlbnNlTW9uc3Rlci5sb290KCk7XHJcbiAgICAgICAgICAgIHRoaXMuX3BsYXllci5hZGRNb25zdGVyKHRoaXMuZGVmZW5zZU1vbnN0ZXIpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgJHt0aGlzLl9wbGF5ZXIubmFtZX0gd2luYCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fcGxheWVyLmRlbGV0ZU1vbnN0ZXIodGhpcy5kZWZlbnNlTW9uc3Rlcik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGAke3RoaXMuX3BsYXllci5uYW1lfSBsb3NlYCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX3BsYXllci5yZXNldEF2YWlsYWJsZU1vdmVzKCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge0kyRENvb3JkaW5hdGVzfSBmcm9tICcuLi9pbnRlcmZhY2VzJztcclxuaW1wb3J0IHtNYXB9IGZyb20gJy4uL21hcC9tYXAnO1xyXG5pbXBvcnQge1BsYXllcn0gZnJvbSAnLi4vY3JlYXR1cmVzL3BsYXllcic7XHJcbmltcG9ydCB7Q29tcGFyZX0gZnJvbSBcIi4uL3V0aWxzL2NvbXBhcmVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBNb3ZlTWFuYWdlciB7XHJcblxyXG4gICAgcHJpdmF0ZSBtYXA6IE1hcDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihtYXA6IE1hcCwgcGxheWVyOiBQbGF5ZXIpIHtcclxuICAgICAgICB0aGlzLm1hcCA9IG1hcDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb3V0T2ZCb3VuZHNPZkFycmF5KGNvb3JkaW5hdGVzOiBJMkRDb29yZGluYXRlcyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiBDb21wYXJlLmlzSW5SYW5nZShjb29yZGluYXRlcy54LCAwLCB0aGlzLm1hcC5nZXRTaXplKCkueCAtIDEpICYmXHJcbiAgICAgICAgICAgICAgICBDb21wYXJlLmlzSW5SYW5nZShjb29yZGluYXRlcy55LCAwLCB0aGlzLm1hcC5nZXRTaXplKCkueSAtIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhZGphY2VudENlbGxIb3Jpek9yVmVyKHBsYXllcjogUGxheWVyLCBjb29yZGluYXRlczogSTJEQ29vcmRpbmF0ZXMpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gKE1hdGguYWJzKGNvb3JkaW5hdGVzLnggLSBwbGF5ZXIuZ2V0Q29vcmRpbmF0ZXMoKS54KSArXHJcbiAgICAgICAgICAgICAgICBNYXRoLmFicyhjb29yZGluYXRlcy55IC0gcGxheWVyLmdldENvb3JkaW5hdGVzKCkueSkgPT0gMSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGhhdmVFbm91Z2hNb3ZlbWVudChwbGF5ZXI6IFBsYXllciwgY29vcmRpbmF0ZXM6IEkyRENvb3JkaW5hdGVzKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHBsYXllci5hdmFpbGFibGVNb3ZlcyA+PSB0aGlzLm1hcC5nZXRDZWxsKGNvb3JkaW5hdGVzKS50cmFuc2l0aW9uQ29zdDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENvb3JkaW5hdGVzIGFyZSBjb3JyZWN0IGlmIHRoZSBtYXAgcmFuZ2UgaXMgaW5jbHVkZWRcclxuICAgICAqIGFuZCBwb2ludCB0byBhbiBhZGphY2VudCBjZWxsIGhvcml6b250YWxseSBvciB2ZXJ0aWNhbGx5XHJcbiAgICAgKiBAcmV0dXJuc1xyXG4gICAgICogQHBhcmFtIGNvb3JkaW5hdGVzXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBpc0NvcnJlY3RDb29yZGluYXRlcyhwbGF5ZXI6IFBsYXllcixjb29yZGluYXRlczogSTJEQ29vcmRpbmF0ZXMpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5vdXRPZkJvdW5kc09mQXJyYXkoY29vcmRpbmF0ZXMpICYmXHJcbiAgICAgICAgdGhpcy5hZGphY2VudENlbGxIb3Jpek9yVmVyKHBsYXllciwgY29vcmRpbmF0ZXMpICYmXHJcbiAgICAgICAgdGhpcy5oYXZlRW5vdWdoTW92ZW1lbnQocGxheWVyLCBjb29yZGluYXRlcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG1vdmUocGxheWVyOiBQbGF5ZXIsIGNvb3JkaW5hdGVzOiBJMkRDb29yZGluYXRlcyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICh0aGlzLmlzQ29ycmVjdENvb3JkaW5hdGVzKHBsYXllciwgY29vcmRpbmF0ZXMpKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGAke3BsYXllci5uYW1lfSBtb3ZlZCB0byAoJHtjb29yZGluYXRlcy54fSwgJHtjb29yZGluYXRlcy55fSlgKTtcclxuICAgICAgICAgICAgcGxheWVyLm1vdmUoY29vcmRpbmF0ZXMsIHRoaXMubWFwLmdldENlbGwoY29vcmRpbmF0ZXMpLnRyYW5zaXRpb25Db3N0KTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYCR7cGxheWVyLm5hbWV9IG5vdCBtb3ZlZCB0byAoJHtjb29yZGluYXRlcy54fSwgJHtjb29yZGluYXRlcy55fSlgKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImltcG9ydCB7U2NlbmVNYW5hZ2VyfSBmcm9tICcuL3NjZW5lcy9zY2VuZU1hbmFnZXInO1xyXG5pbXBvcnQge0ZpZ2h0U2NlbmV9IGZyb20gXCIuL3NjZW5lcy9maWdodFNjZW5lXCI7XHJcbmltcG9ydCB7RmllbGRTY2VuZX0gZnJvbSAnLi9zY2VuZXMvZmllbGRTY2VuZSc7XHJcbmltcG9ydCB7U2VsZWN0TW9uc3RlclNjZW5lfSBmcm9tICcuL3NjZW5lcy9zZWxlY3RNb25zdGVyU2NlbmUnXHJcbmltcG9ydCB7U3RhcnRTY2VuZX0gZnJvbSBcIi4vc2NlbmVzL3N0YXJ0U2NlbmVcIjtcclxuXHJcbmltcG9ydCB7R2FtZVN0YXRlfSBmcm9tICcuL2dhbWVTdGF0ZSc7XHJcblxyXG5pbXBvcnQge1BsYXllcn0gZnJvbSBcIi4vY3JlYXR1cmVzL3BsYXllclwiO1xyXG5pbXBvcnQge01hcH0gZnJvbSBcIi4vbWFwL21hcFwiO1xyXG5pbXBvcnQge0kyRENvb3JkaW5hdGVzfSBmcm9tIFwiLi9pbnRlcmZhY2VzXCI7XHJcbmltcG9ydCB7TW9uc3Rlcn0gZnJvbSBcIi4vY3JlYXR1cmVzL21vbnN0ZXJcIjtcclxuaW1wb3J0IHtGaWdodH0gZnJvbSBcIi4vbG9naWMvZmlnaHRcIjtcclxuaW1wb3J0IHtCb3NzQ2VsbH0gZnJvbSBcIi4vbWFwL2NlbGxcIjtcclxuXHJcbi8qIEdsb2JhbCB2YXJpYWJsZXMgKi9cclxuY29uc3QgREVGQVVMVF9TVEFSVF9BVkFJTEFCTEVfTU9WRVMgPSA1O1xyXG5jb25zdCBERUZBVUxUX1BMQVlFUl8xX1BPUzogW251bWJlciwgbnVtYmVyXSA9IFswLCAwXTtcclxuY29uc3QgREVGQVVMVF9QTEFZRVJfMl9QT1M6IFtudW1iZXIsIG51bWJlcl0gPSBbMCwgNF07XHJcbmNvbnN0IERFRkFVTFRfTUFQX1NJWkU6IFtudW1iZXIsIG51bWJlcl0gPSBbNSwgNV07XHJcbmxldCBnczogR2FtZVN0YXRlID0gbnVsbDtcclxuXHJcbmZ1bmN0aW9uIGluaXRHUygpIHtcclxuICAgIGdzID0gbmV3IEdhbWVTdGF0ZShcclxuICAgICAgICBuZXcgUGxheWVyKFwiU3RldmVcIiwgXCJoZXJvXzFcIiwgLi4uREVGQVVMVF9QTEFZRVJfMV9QT1MsIERFRkFVTFRfU1RBUlRfQVZBSUxBQkxFX01PVkVTKSxcclxuICAgICAgICBuZXcgUGxheWVyKFwiSm9oblwiLCBcImhlcm9fMlwiLCAuLi5ERUZBVUxUX1BMQVlFUl8yX1BPUywgREVGQVVMVF9TVEFSVF9BVkFJTEFCTEVfTU9WRVMpLFxyXG4gICAgICAgIG5ldyBNYXAoLi4uREVGQVVMVF9NQVBfU0laRSlcclxuICAgICk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBTY2VuZXNcclxuICovXHJcbmNvbnN0IGZpZWxkU2NlbmUgPSBuZXcgRmllbGRTY2VuZShcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYW1lLWZpZWxkJyksXHJcbiAgICBjZWxsQ2xpY2tMaXN0ZW5lcixcclxuICAgIE5FU1pCdXR0b25JbkZpZWxkQ2xpY2tMaXN0ZW5lcixcclxuICAgIE5FU1hCdXR0b25JbkZpZWxkQ2xpY2tMaXN0ZW5lclxyXG4pO1xyXG5sZXQgZmlnaHRTY2VuZSA9IG5ldyBGaWdodFNjZW5lKFxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWUtZmlnaHQnKSxcclxuICAgIE5FU1pCdXR0b25JbkZpZ2h0Q2xpY2tMaXN0ZW5lcixcclxuICAgIE5FU1hCdXR0b25JbkZpZ2h0Q2xpY2tMaXN0ZW5lclxyXG4pO1xyXG5sZXQgc2VsZWN0TW9uc3RlclNjZW5lID0gbmV3IFNlbGVjdE1vbnN0ZXJTY2VuZShcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYW1lLXNlbGVjdC1tb25zdGVyJyksXHJcbiAgICBPS0J1dHRvbkluU2VsZWN0Q2xpY2tMaXN0ZW5lclxyXG4pO1xyXG5sZXQgc3RhcnRTY2VuZSA9IG5ldyBTdGFydFNjZW5lKFxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWUtc3RhcnQnKSxcclxuICAgIHN0YXJ0QnV0dG9uQ2xpY2tMaXN0ZW5lclxyXG4pO1xyXG5cclxuZmlnaHRTY2VuZS5yZW5kZXIoKTtcclxuc3RhcnRTY2VuZS5yZW5kZXIoKTtcclxuXHJcbi8qKlxyXG4gKiBTY2VuZSBNYW5hZ2VyXHJcbiAqL1xyXG5sZXQgc2NlbmVNYW5hZ2VyID0gbmV3IFNjZW5lTWFuYWdlcihbXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogJ2ZpZWxkJyxcclxuICAgICAgICBzY2VuZTogZmllbGRTY2VuZVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiAnZmlnaHQnLFxyXG4gICAgICAgIHNjZW5lOiBmaWdodFNjZW5lXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6ICdzZWxlY3QnLFxyXG4gICAgICAgIHNjZW5lOiBzZWxlY3RNb25zdGVyU2NlbmVcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogJ3N0YXJ0JyxcclxuICAgICAgICBzY2VuZTogc3RhcnRTY2VuZVxyXG4gICAgfVxyXG5dKVxyXG5zY2VuZU1hbmFnZXIuc2hvd1NjZW5lKCdzdGFydCcpO1xyXG5cclxuLyoqXHJcbiAqIEVOREVEXHJcbiAqL1xyXG5mdW5jdGlvbiBzaG93UmVzdWx0KHBsYXllcjogUGxheWVyLCByZWFzb246IHN0cmluZykge1xyXG4gICAgYWxlcnQoYCR7cGxheWVyLm5hbWV9IGlzIHdpbi4gJHtyZWFzb259YCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBTdGFydCBzY2VuZVxyXG4gKi9cclxuZnVuY3Rpb24gc3RhcnRCdXR0b25DbGlja0xpc3RlbmVyKCkge1xyXG4gICAgaWYgKGdzICE9IG51bGwgJiYgZ3MuYmxvY2tlZCkgcmV0dXJuO1xyXG4gICAgaW5pdEdTKCk7XHJcbiAgICBzY2VuZU1hbmFnZXIuc2hvd1NjZW5lKCdmaWVsZCcpO1xyXG4gICAgZmllbGRTY2VuZS5yZW5kZXIoZ3MubWFwKTtcclxuICAgIGZpZWxkU2NlbmUudXBkYXRlKGdzLm1hcCwgW2dzLnBsYXllciwgZ3MucGxheWVyMl0pO1xyXG4gICAgZmllbGRTY2VuZS51cGRhdGVJbmZvKGdzLmdldEN1cnJlbnQoKSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBGaWdodCBTY2VuZVxyXG4gKi9cclxuZnVuY3Rpb24gZmlnaHRGaW5pc2hDaGVjaygpIHtcclxuICAgIGlmIChncy5maWdodC5pc0ZpbmlzaCgpKSB7XHJcbiAgICAgICAgZmllbGRTY2VuZS51cGRhdGVJbmZvKGdzLmdldEN1cnJlbnQoKSk7XHJcbiAgICAgICAgZmlnaHRTY2VuZS51cGRhdGUoKTtcclxuICAgICAgICBncy5ibG9ja2VkID0gdHJ1ZTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgZ3MuYmxvY2tlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBncy5maWdodC5maW5pc2goKTtcclxuICAgICAgICAgICAgaWYgKGdzLmdldEN1cnJlbnQoKS5hdmFpbGFibGVNb25zdGVycy5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgc2hvd1Jlc3VsdChncy5nZXROZXh0KCksIFwiVGhlIG90aGVyIHBsYXllciBubyBsb25nZXIgaGFzIG1vbnN0ZXJzXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBjdXJyZW50Q2VsbCA9IGdzLm1hcC5nZXRDZWxsKGdzLmdldEN1cnJlbnQoKS5nZXRDb29yZGluYXRlcygpKTtcclxuICAgICAgICAgICAgaWYgKGN1cnJlbnRDZWxsIGluc3RhbmNlb2YgQm9zc0NlbGwgJiYgY3VycmVudENlbGwubW9uc3Rlci5sb290ZWQgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgc2hvd1Jlc3VsdChncy5nZXRDdXJyZW50KCksIFwiQm9zcyBraWxsZWRcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2NlbmVNYW5hZ2VyLnNob3dTY2VuZSgnZmllbGQnKTtcclxuICAgICAgICAgICAgZmllbGRTY2VuZS51cGRhdGVJbmZvKGdzLmdldEN1cnJlbnQoKSk7XHJcbiAgICAgICAgfSwgMTAwMCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZ3MuZmlnaHQuaXNGaW5pc2goKTtcclxufVxyXG5mdW5jdGlvbiBORVNaQnV0dG9uSW5GaWdodENsaWNrTGlzdGVuZXIoKSB7XHJcbiAgICBpZiAoZ3MuYmxvY2tlZCkgcmV0dXJuO1xyXG4gICAgZ3MuZmlnaHQuYXR0YWNrQ3VycmVudCgpO1xyXG4gICAgZmlnaHRTY2VuZS5zaGFrZU1vbnN0ZXIoZ3MuZmlnaHQuZGVmZW5zZU1vbnN0ZXIpO1xyXG4gICAgaWYgKCFmaWdodEZpbmlzaENoZWNrKCkpIHtcclxuICAgICAgICBncy5maWdodC5zd2FwKCk7XHJcbiAgICAgICAgZmlnaHRTY2VuZS51cGRhdGUoKTtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBORVNYQnV0dG9uSW5GaWdodENsaWNrTGlzdGVuZXIoKSB7XHJcbiAgICBpZiAoZ3MuYmxvY2tlZCkgcmV0dXJuO1xyXG4gICAgZ3MuZmlnaHQuZGVmZW5kQ3VycmVudCgpO1xyXG4gICAgZ3MuZmlnaHQuc3dhcCgpO1xyXG4gICAgZmlnaHRTY2VuZS51cGRhdGUoKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEZpZWxkIFNjZW5lXHJcbiAqL1xyXG5mdW5jdGlvbiBjZWxsQ2xpY2tMaXN0ZW5lcihldmVudDogTW91c2VFdmVudCkge1xyXG4gICAgaWYgKGdzLmJsb2NrZWQpIHJldHVybjtcclxuXHJcbiAgICBmdW5jdGlvbiBnZXRDb29yZGluYXRlc09mQ2VsbCh0YXJnZXQ6IEV2ZW50VGFyZ2V0KTogSTJEQ29vcmRpbmF0ZXMge1xyXG4gICAgICAgIGxldCBlbGVtZW50ID0gPEhUTUxFbGVtZW50PnRhcmdldDtcclxuICAgICAgICBjb25zdCB0ZCA9IDxIVE1MVGFibGVDZWxsRWxlbWVudD5lbGVtZW50LnBhcmVudEVsZW1lbnQ7XHJcbiAgICAgICAgY29uc3Qgcm93ID0gPEhUTUxUYWJsZVJvd0VsZW1lbnQ+dGQucGFyZW50RWxlbWVudDtcclxuICAgICAgICByZXR1cm4geyB4OiB0ZC5jZWxsSW5kZXgsIHk6IHJvdy5yb3dJbmRleCB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNvb3JkaW5hdGVzID0gZ2V0Q29vcmRpbmF0ZXNPZkNlbGwoZXZlbnQudGFyZ2V0KTtcclxuICAgIGxldCBvbGRfY29vcmRpbmF0ZTogSTJEQ29vcmRpbmF0ZXMgPSBncy5nZXRDdXJyZW50KCkuZ2V0Q29vcmRpbmF0ZXMoKTtcclxuICAgIGlmIChncy5tb3ZlTWFuYWdlci5tb3ZlKGdzLmdldEN1cnJlbnQoKSwgY29vcmRpbmF0ZXMpKSB7XHJcbiAgICAgICAgZmllbGRTY2VuZS51cGRhdGVJbmZvKGdzLmdldEN1cnJlbnQoKSk7XHJcbiAgICAgICAgZmllbGRTY2VuZS51cGRhdGVDZWxscyhncy5tYXAsIFtvbGRfY29vcmRpbmF0ZSwgZ3MuZ2V0Q3VycmVudCgpLmdldENvb3JkaW5hdGVzKCldLCBncy5nZXRDcmVhdHVyZXMoKSk7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gTkVTWkJ1dHRvbkluRmllbGRDbGlja0xpc3RlbmVyKCkge1xyXG4gICAgaWYgKGdzLmJsb2NrZWQpIHJldHVybjtcclxuICAgIGxldCBjb29yZGluYXRlcyA9IGdzLmdldEN1cnJlbnQoKS5nZXRDb29yZGluYXRlcygpO1xyXG4gICAgaWYgKGdzLm1hcC5nZXRDZWxsKGNvb3JkaW5hdGVzKS5tb25zdGVyLmxvb3RlZClcclxuICAgICAgICByZXR1cm47XHJcbiAgICBpZiAoZ3MuZ2V0Q3VycmVudCgpLmF2YWlsYWJsZU1vdmVzIDw9IDApXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgc2VsZWN0TW9uc3RlclNjZW5lLnNldFBsYXllcihncy5nZXRDdXJyZW50KCkpO1xyXG4gICAgc2VsZWN0TW9uc3RlclNjZW5lLnVwZGF0ZSgpO1xyXG4gICAgc2NlbmVNYW5hZ2VyLnNob3dTY2VuZSgnc2VsZWN0Jyk7XHJcbn1cclxuZnVuY3Rpb24gTkVTWEJ1dHRvbkluRmllbGRDbGlja0xpc3RlbmVyKCkge1xyXG4gICAgaWYgKGdzLmJsb2NrZWQpIHJldHVybjtcclxuICAgIGdzLmdldEN1cnJlbnQoKS5yZXNldEF2YWlsYWJsZU1vdmVzKCk7XHJcbiAgICBncy5zd2FwUGxheWVycygpO1xyXG4gICAgZ3MuZ2V0Q3VycmVudCgpLnNldEF2YWlsYWJsZU1vdmVzKERFRkFVTFRfU1RBUlRfQVZBSUxBQkxFX01PVkVTKTtcclxuICAgIGZpZWxkU2NlbmUudXBkYXRlSW5mbyhncy5nZXRDdXJyZW50KCkpO1xyXG59XHJcblxyXG4vKipcclxuICogU2VsZWN0IFNjZW5lXHJcbiAqL1xyXG5mdW5jdGlvbiBPS0J1dHRvbkluU2VsZWN0Q2xpY2tMaXN0ZW5lcigpIHtcclxuICAgIGlmIChncy5ibG9ja2VkKSByZXR1cm47XHJcbiAgICBzY2VuZU1hbmFnZXIuc2hvd1NjZW5lKCdmaWdodCcpO1xyXG4gICAgbGV0IG1vbnN0ZXJzOiBbTW9uc3RlciwgTW9uc3Rlcl0gPSBbc2VsZWN0TW9uc3RlclNjZW5lLmdldENob3Nlbk1vbnN0ZXIoKSwgZ3MubWFwLmdldENlbGwoZ3MuZ2V0Q3VycmVudCgpLmdldENvb3JkaW5hdGVzKCkpLm1vbnN0ZXJdXHJcbiAgICBmaWdodFNjZW5lLnNldE1vbnN0ZXJzKG1vbnN0ZXJzKTtcclxuICAgIGZpZ2h0U2NlbmUucmVuZGVyKCk7XHJcbiAgICBmaWdodFNjZW5lLnVwZGF0ZSgpO1xyXG4gICAgZ3MuZmlnaHQgPSBuZXcgRmlnaHQoZ3MuZ2V0Q3VycmVudCgpLCAuLi5tb25zdGVycyk7XHJcbn0iLCJpbXBvcnQge0JsYWNrRHJhZ29uLCBCb3NzLCBDYXQsIERvZywgRHJhZ29uLCBIb3JzZSwgTGlvbiwgTWVkdXNhLCBNb25zdGVyLCBQbGFudCwgU2hhcmssIFNuYWtlfSBmcm9tICcuLi9jcmVhdHVyZXMvbW9uc3Rlcic7XHJcbmltcG9ydCB7UmFuZG9tfSBmcm9tICcuLi91dGlscy9yYW5kb20nO1xyXG5pbXBvcnQge0lIYXNDc3NDbGFzc30gZnJvbSAnLi4vaW50ZXJmYWNlcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgQ2VsbCBpbXBsZW1lbnRzIElIYXNDc3NDbGFzcyB7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9jc3NDbGFzczogc3RyaW5nO1xyXG4gICAgcHVibGljIGdldCBjc3NDbGFzcygpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jc3NDbGFzcztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBjb3N0IG9mIHRoZSB0cmFuc2l0aW9uIGZvciB0aGUgcGxheWVyIG1vdmluZyB0byB0aGlzIGNlbGxcclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgcmVhZG9ubHkgX3RyYW5zaXRpb25Db3N0OiBudW1iZXI7XHJcbiAgICBwdWJsaWMgZ2V0IHRyYW5zaXRpb25Db3N0KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RyYW5zaXRpb25Db3N0O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVhZG9ubHkgX21vbnN0ZXI6IE1vbnN0ZXI7XHJcbiAgICBwdWJsaWMgZ2V0IG1vbnN0ZXIoKTogTW9uc3RlcntcclxuICAgICAgICByZXR1cm4gdGhpcy5fbW9uc3RlcjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gY3NzQ2xhc3NcclxuICAgICAqIEBwYXJhbSB0cmFuc2l0aW9uQ29zdE1pbk1heCBpcyBtaW5pbXVtIGFuZCBtYXhpbXVtIHZhbHVlXHJcbiAgICAgKiBAcGFyYW0gcG9zc2libGVDcmVhdHVyZXNcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoY3NzQ2xhc3M6IHN0cmluZywgdHJhbnNpdGlvbkNvc3RNaW5NYXggOiBbbnVtYmVyLCBudW1iZXJdLCBwb3NzaWJsZUNyZWF0dXJlczogTW9uc3RlcltdKSB7XHJcbiAgICAgICAgdGhpcy5fY3NzQ2xhc3MgPSBjc3NDbGFzcztcclxuICAgICAgICB0aGlzLl90cmFuc2l0aW9uQ29zdCA9IFJhbmRvbS5pblJhbmdlKC4uLnRyYW5zaXRpb25Db3N0TWluTWF4KTtcclxuICAgICAgICB0aGlzLl9tb25zdGVyID0gUmFuZG9tLm9uZUl0ZW1Gcm9tQXJyYXkocG9zc2libGVDcmVhdHVyZXMpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTGFuZENlbGwgZXh0ZW5kcyBDZWxsIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCdsYW5kJywgWzEsIDJdLCBbbmV3IFNuYWtlKCksIG5ldyBQbGFudCgpXSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBWb2xjYW5vQ2VsbCBleHRlbmRzIENlbGwge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoJ3ZvbGNhbm8nLCBbMywgNV0sIFtuZXcgRHJhZ29uKCksIG5ldyBMaW9uXSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBGb3Jlc3RDZWxsIGV4dGVuZHMgQ2VsbCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcignZm9yZXN0JywgWzMsIDVdLCBbbmV3IFNuYWtlKCksIG5ldyBQbGFudCgpXSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBMYWtlQ2VsbCBleHRlbmRzIENlbGwge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoJ2xha2UnLCBbMywgNV0sIFtuZXcgTWVkdXNhKCksIG5ldyBTaGFyaygpXSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGNsYXNzIERhcmtDYXN0bGVDZWxsIGV4dGVuZHMgQ2VsbCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcignZGFya19jYXN0bGUnLCBbMywgNV0sIFtuZXcgRG9nKCksIG5ldyBCbGFja0RyYWdvbigpXSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBXaGl0ZUNhc3RsZUNlbGwgZXh0ZW5kcyBDZWxsIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCd3aGl0ZV9jYXN0bGUnLCBbMywgNV0sIFtuZXcgQ2F0KCksIG5ldyBIb3JzZSgpXSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBCb3NzQ2VsbCBleHRlbmRzIENlbGwge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoJ2Jvc3NfY2VsbCcsIFszLCA1XSwgW25ldyBCb3NzKCldKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7Q2VsbCwgTGFuZENlbGwsIFZvbGNhbm9DZWxsLCBGb3Jlc3RDZWxsLCBMYWtlQ2VsbCwgV2hpdGVDYXN0bGVDZWxsLCBEYXJrQ2FzdGxlQ2VsbCwgQm9zc0NlbGx9IGZyb20gJy4vY2VsbCc7XHJcbmltcG9ydCB7STJEQ29vcmRpbmF0ZXN9IGZyb20gJy4uL2ludGVyZmFjZXMnO1xyXG5pbXBvcnQge1JhbmRvbX0gZnJvbSAnLi4vdXRpbHMvcmFuZG9tJztcclxuaW1wb3J0IHtDb21wYXJlfSBmcm9tICcuLi91dGlscy9jb21wYXJlJztcclxuaW1wb3J0IHtDb21wbGV4aXR5Q2hhbmdlcn0gZnJvbSAnLi4vY29tcGxleGl0eUNoYW5nZXInXHJcblxyXG5leHBvcnQgY2xhc3MgTWFwIHtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgc2l6ZVg6IG51bWJlcjtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgc2l6ZVk6IG51bWJlcjtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgZGF0YTogQ2VsbFtdW107XHJcblxyXG4gICAgY29uc3RydWN0b3Ioc2l6ZVg6IG51bWJlciwgc2l6ZVk6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuc2l6ZVggPSBzaXplWDtcclxuICAgICAgICB0aGlzLnNpemVZID0gc2l6ZVk7XHJcbiAgICAgICAgdGhpcy5kYXRhID0gTWFwLmdlbmVyYXRlKHNpemVYLCBzaXplWSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldENlbGwoY29vcmRpbmF0ZXM6IEkyRENvb3JkaW5hdGVzKTogQ2VsbCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YVtjb29yZGluYXRlcy55XVtjb29yZGluYXRlcy54XTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0U2l6ZSgpOiB7IHg6IG51bWJlciwgeTogbnVtYmVyIH0ge1xyXG4gICAgICAgIHJldHVybiB7IHg6IHRoaXMuc2l6ZVgsIHk6IHRoaXMuc2l6ZVkgfTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2VuZXJhdGUoc2l6ZVg6IG51bWJlciwgc2l6ZVk6IG51bWJlcik6IENlbGxbXVtdIHtcclxuICAgICAgICBjb25zdCBkZWZhdWx0Q2VsbCA9IExhbmRDZWxsO1xyXG4gICAgICAgIGxldCBwb3NzaWJsZUNlbGxzID0gW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBvYmo6IFZvbGNhbm9DZWxsLFxyXG4gICAgICAgICAgICAgICAgcmFuZDoge1xyXG4gICAgICAgICAgICAgICAgICAgIG1pbjogMSxcclxuICAgICAgICAgICAgICAgICAgICBtYXg6IDEwXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG9iajogRm9yZXN0Q2VsbCxcclxuICAgICAgICAgICAgICAgIHJhbmQ6IHtcclxuICAgICAgICAgICAgICAgICAgICBtaW46IDExLFxyXG4gICAgICAgICAgICAgICAgICAgIG1heDogMzBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgb2JqOiBMYWtlQ2VsbCxcclxuICAgICAgICAgICAgICAgIHJhbmQ6IHtcclxuICAgICAgICAgICAgICAgICAgICBtaW46IDMxLFxyXG4gICAgICAgICAgICAgICAgICAgIG1heDogMzVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgICAgICBjb25zb2xlLmxvZyhgTWFwOiBnZW5lcmF0ZSwgKCR7c2l6ZVh9LCAke3NpemVZfSlgKTtcclxuICAgICAgICBjb25zdCBkYXRhOiBDZWxsW11bXSA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgc2l6ZVk7ICsreSkge1xyXG4gICAgICAgICAgICBjb25zdCByb3c6IENlbGxbXSA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHNpemVYOyArK3gpIHtcclxuICAgICAgICAgICAgICAgIGxldCByYW5kTnVtID0gUmFuZG9tLmluUmFuZ2UoMSwgMTAwKTtcclxuICAgICAgICAgICAgICAgIGxldCBvYmplY3RGb3JDcmVhdGUgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwb3NzaWJsZUNlbGxzLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKENvbXBhcmUuaXNJblJhbmdlKHJhbmROdW0sIHBvc3NpYmxlQ2VsbHNbaV0ucmFuZC5taW4sIHBvc3NpYmxlQ2VsbHNbaV0ucmFuZC5tYXgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdEZvckNyZWF0ZSA9IHBvc3NpYmxlQ2VsbHNbaV0ub2JqO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCFvYmplY3RGb3JDcmVhdGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBvYmplY3RGb3JDcmVhdGUgPSBkZWZhdWx0Q2VsbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJvdy5wdXNoKG5ldyBvYmplY3RGb3JDcmVhdGUoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGF0YS5wdXNoKHJvdyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBkZWZhdWx0UG9zaXRpb25zID0gW1xyXG4gICAgICAgICAgICB7IHg6IDAsIHk6IDAsIG9iajogTGFuZENlbGx9LFxyXG4gICAgICAgICAgICB7IHg6IDAsIHk6IHNpemVZIC0gMSwgb2JqOiBMYW5kQ2VsbH0sXHJcbiAgICAgICAgICAgIHsgeDogc2l6ZVggLSAxLCB5OiBzaXplWSAtIDEsIG9iajogV2hpdGVDYXN0bGVDZWxsfSxcclxuICAgICAgICAgICAgeyB4OiBzaXplWCAtIDEsIHk6IDAsIG9iajogRGFya0Nhc3RsZUNlbGx9LFxyXG4gICAgICAgICAgICB7IHg6IHNpemVYIC0gMSwgeTogMiwgb2JqOiBCb3NzQ2VsbH1cclxuICAgICAgICBdXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkZWZhdWx0UG9zaXRpb25zLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgIGxldCBvYmplY3RGb3JDcmVhdGUgPSBkZWZhdWx0UG9zaXRpb25zW2ldLm9iajtcclxuICAgICAgICAgICAgZGF0YVtkZWZhdWx0UG9zaXRpb25zW2ldLnldW2RlZmF1bHRQb3NpdGlvbnNbaV0ueF0gPSBuZXcgb2JqZWN0Rm9yQ3JlYXRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGBNYXA6IGdlbmVyYXRlZCwgKCR7c2l6ZVh9LCAke3NpemVZfSlgKTtcclxuICAgICAgICBsZXQgY29tcENoYW5nZXIgPSBuZXcgQ29tcGxleGl0eUNoYW5nZXIoZGF0YSk7XHJcbiAgICAgICAgY29tcENoYW5nZXIuYmFsYW5jZU1hcCgpO1xyXG4gICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtNYXB9IGZyb20gJy4uL21hcC9tYXAnO1xyXG5pbXBvcnQge0kyRENvb3JkaW5hdGVzLCBJRHJhd2FibGVJbkZpZWxkLCBJSGFzQ3NzQ2xhc3MsIElTY2VuZX0gZnJvbSAnLi4vaW50ZXJmYWNlcyc7XHJcbmltcG9ydCB7Q29tcGFyZX0gZnJvbSBcIi4uL3V0aWxzL2NvbXBhcmVcIjtcclxuaW1wb3J0IHtQbGF5ZXJ9IGZyb20gXCIuLi9jcmVhdHVyZXMvcGxheWVyXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRmllbGRTY2VuZSBpbXBsZW1lbnRzIElTY2VuZSB7XHJcbiAgICBwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnQ7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGNlbGxDbGlja0xpc3RlbmVyOiBhbnk7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGJ1dHRvblpDbGlja0xpc3RlbmVyOiBhbnk7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGJ1dHRvblhDbGlja0xpc3RlbmVyOiBhbnk7XHJcbiAgICBcclxuICAgIGNvbnN0cnVjdG9yKGdhbWVGaWVsZDogSFRNTEVsZW1lbnQsIG1vdXNlTGlzdGVuZXI6IGFueSwgYnV0dG9uWkNsaWNrTGlzdGVuZXI6IGFueSwgYnV0dG9uWENsaWNrTGlzdGVuZXI6IGFueSkge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGdhbWVGaWVsZDtcclxuICAgICAgICB0aGlzLmNlbGxDbGlja0xpc3RlbmVyID0gbW91c2VMaXN0ZW5lcjtcclxuICAgICAgICB0aGlzLmJ1dHRvblpDbGlja0xpc3RlbmVyID0gYnV0dG9uWkNsaWNrTGlzdGVuZXI7XHJcbiAgICAgICAgdGhpcy5idXR0b25YQ2xpY2tMaXN0ZW5lciA9IGJ1dHRvblhDbGlja0xpc3RlbmVyO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRFbGVtZW50KCk6IEVsZW1lbnQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZW5lcmF0ZXMgYSB0YWJsZSBhbmQgYXBwZW5kIGl0IHRvIHRoaXMuZWxlbWVudFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmVuZGVyKG1hcDogTWFwKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IHRhYmxlID0gdGhpcy5nZXRUYWJsZSgpO1xyXG4gICAgICAgIHRhYmxlLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCBtYXAuZ2V0U2l6ZSgpLnk7ICsreSkge1xyXG4gICAgICAgICAgICBsZXQgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggIDwgbWFwLmdldFNpemUoKS54OyArK3gpIHtcclxuICAgICAgICAgICAgICAgIGxldCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcclxuICAgICAgICAgICAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNlbGxDbGlja0xpc3RlbmVyKTtcclxuICAgICAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZChjZWxsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0YWJsZS5hcHBlbmRDaGlsZChyb3cpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmdldFpCdXR0b24oKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuYnV0dG9uWkNsaWNrTGlzdGVuZXIpO1xyXG4gICAgICAgIHRoaXMuZ2V0WEJ1dHRvbigpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5idXR0b25YQ2xpY2tMaXN0ZW5lcik7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRUYWJsZSgpOiBIVE1MVGFibGVFbGVtZW50IHtcclxuICAgICAgICByZXR1cm4gPEhUTUxUYWJsZUVsZW1lbnQ+IHRoaXMuZWxlbWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0YWJsZScpWzBdO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0QnV0dG9ucygpOiBIVE1MQ29sbGVjdGlvbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYnV0dG9uc1wiKVswXS5jaGlsZHJlbjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldFpCdXR0b24oKTogRWxlbWVudCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QnV0dG9ucygpWzBdO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0WEJ1dHRvbigpOiBFbGVtZW50IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRCdXR0b25zKClbMV07XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRJbmZvRWxlbWVudCgpOiBFbGVtZW50IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2luZm8nKVswXTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldCBjZWxsIGluIHRhYmxlXHJcbiAgICAgKiBAcGFyYW0gY29vcmRpbmF0ZXNcclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgZ2V0Q2VsbChjb29yZGluYXRlczogSTJEQ29vcmRpbmF0ZXMpOiBFbGVtZW50IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRUYWJsZSgpLnJvd3NbY29vcmRpbmF0ZXMueV0uY2VsbHNbY29vcmRpbmF0ZXMueF07XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZW5lcmF0ZXMgZGl2IGVsZW1lbnQgd2l0aCBzb21lIGNzcyBjbGFzc1xyXG4gICAgICogQHBhcmFtIG9ialxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZ2V0SFRNTFNwcml0ZShvYmo6IElIYXNDc3NDbGFzcyk6IEhUTUxFbGVtZW50IHtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgcmVzdWx0LmNsYXNzTGlzdC5hZGQoJ3Nwcml0ZScpO1xyXG4gICAgICAgIHJlc3VsdC5jbGFzc0xpc3QuYWRkKG9iai5jc3NDbGFzcyk7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdXBkYXRlKG1hcDogTWFwLCBjcmVhdHVyZXM6IElEcmF3YWJsZUluRmllbGRbXSk6IHZvaWQge1xyXG4gICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgbWFwLmdldFNpemUoKS55OyArK3kpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBtYXAuZ2V0U2l6ZSgpLng7ICsreCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IG1hcENlbGwgPSBtYXAuZ2V0Q2VsbCh7IHg6IHgsIHk6IHkgfSk7XHJcbiAgICAgICAgICAgICAgICBsZXQgSFRNTENlbGwgPSB0aGlzLmdldENlbGwoeyB4OiB4LCB5OiB5IH0pO1xyXG4gICAgICAgICAgICAgICAgSFRNTENlbGwuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICAgICAgICAgIEhUTUxDZWxsLmFwcGVuZENoaWxkKEZpZWxkU2NlbmUuZ2V0SFRNTFNwcml0ZShtYXBDZWxsKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjcmVhdHVyZXMubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgICAgbGV0IGNyZWF0dXJlID0gY3JlYXR1cmVzW2ldO1xyXG4gICAgICAgICAgICB0aGlzLmdldENlbGwoY3JlYXR1cmUuZ2V0Q29vcmRpbmF0ZXMoKSkuYXBwZW5kQ2hpbGQoRmllbGRTY2VuZS5nZXRIVE1MU3ByaXRlKGNyZWF0dXJlKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVXBkYXRlcyBjZWxscyBvbmx5IGF0IHNwZWNpZmljIGNvb3JkaW5hdGVzLiBOZWVkZWQgdG8gZHJhdyBDU1MgYW5pbWF0aW9uIG9ubHkgZm9yIHNwZWNpZmljIGNlbGxzLlxyXG4gICAgICogQHBhcmFtIG1hcFxyXG4gICAgICogQHBhcmFtIGNvb3JkaW5hdGVzXHJcbiAgICAgKiBAcGFyYW0gY3JlYXR1cmVzXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyB1cGRhdGVDZWxscyhtYXA6IE1hcCwgY29vcmRpbmF0ZXM6IEkyRENvb3JkaW5hdGVzW10sIGNyZWF0dXJlczogSURyYXdhYmxlSW5GaWVsZFtdKTogdm9pZCB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb29yZGluYXRlcy5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICBsZXQgbWFwQ2VsbCA9IG1hcC5nZXRDZWxsKGNvb3JkaW5hdGVzW2ldKTtcclxuICAgICAgICAgICAgbGV0IEhUTUxDZWxsID0gdGhpcy5nZXRDZWxsKGNvb3JkaW5hdGVzW2ldKTtcclxuICAgICAgICAgICAgSFRNTENlbGwuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICAgICAgSFRNTENlbGwuYXBwZW5kQ2hpbGQoRmllbGRTY2VuZS5nZXRIVE1MU3ByaXRlKG1hcENlbGwpKTtcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgY3JlYXR1cmVzLmxlbmd0aDsgKytqKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoQ29tcGFyZS5zaGFsbG93RXF1YWwoY3JlYXR1cmVzW2pdLmdldENvb3JkaW5hdGVzKCksIGNvb3JkaW5hdGVzW2ldKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIEhUTUxDZWxsLmFwcGVuZENoaWxkKEZpZWxkU2NlbmUuZ2V0SFRNTFNwcml0ZShjcmVhdHVyZXNbal0pKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdXBkYXRlSW5mbyhwbGF5ZXI6IFBsYXllcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZ2V0SW5mb0VsZW1lbnQoKS5pbm5lckhUTUwgPSBgUGxheWVyOiAke3BsYXllci5uYW1lfTxicj5BdmFpbGFibGUgbW92ZXM6ICR7cGxheWVyLmF2YWlsYWJsZU1vdmVzfWA7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge01vbnN0ZXJ9IGZyb20gXCIuLi9jcmVhdHVyZXMvbW9uc3RlclwiO1xyXG5pbXBvcnQge0lTY2VuZX0gZnJvbSBcIi4uL2ludGVyZmFjZXNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBGaWdodFNjZW5lIGltcGxlbWVudHMgSVNjZW5lIHtcclxuICAgIHByaXZhdGUgZWxlbWVudDogSFRNTEVsZW1lbnQ7XHJcbiAgICBwcml2YXRlIG1vbnN0ZXJzOiBbTW9uc3RlciwgTW9uc3Rlcl07XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IE5FU1pCdXR0b25DbGlja0xpc3RlbmVyOiBhbnk7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IE5FU1hCdXR0b25DbGlja0xpc3RlbmVyOiBhbnk7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZ2FtZUZpZ2h0OiBIVE1MRWxlbWVudCwgbGlzdGVuZXJfMTogYW55LCBsaXN0ZW5lcl8yOiBhbnkpIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQgPSBnYW1lRmlnaHQ7XHJcbiAgICAgICAgdGhpcy5tb25zdGVycyA9IFtudWxsLCBudWxsXTtcclxuICAgICAgICB0aGlzLk5FU1pCdXR0b25DbGlja0xpc3RlbmVyID0gbGlzdGVuZXJfMTtcclxuICAgICAgICB0aGlzLk5FU1hCdXR0b25DbGlja0xpc3RlbmVyID0gbGlzdGVuZXJfMjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0TW9uc3RlcnMobW9uc3RlcnM6IFtNb25zdGVyLCBNb25zdGVyXSkge1xyXG4gICAgICAgIHRoaXMubW9uc3RlcnMgPSBtb25zdGVycztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVuZGVyKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZ2V0WkJ1dHRvbigpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5ORVNaQnV0dG9uQ2xpY2tMaXN0ZW5lcik7XHJcbiAgICAgICAgdGhpcy5nZXRYQnV0dG9uKCkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLk5FU1hCdXR0b25DbGlja0xpc3RlbmVyKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldE1vbnN0ZXJEaXZzKCk6IEhUTUxDb2xsZWN0aW9uIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJtb25zdGVyc1wiKVswXS5jaGlsZHJlbjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBnZXRTcHJpdGUoZWxlbTogRWxlbWVudCkge1xyXG4gICAgICAgIHJldHVybiBlbGVtLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3Nwcml0ZScpWzBdO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIGdldEhlYWx0aChlbGVtOiBFbGVtZW50KSB7XHJcbiAgICAgICAgcmV0dXJuIGVsZW0uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaGVhbHRoJylbMF07XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgZ2V0RGVmZW5zZShlbGVtOiBFbGVtZW50KSB7XHJcbiAgICAgICAgcmV0dXJuIGVsZW0uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZGVmZW5zZScpWzBdO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0QnV0dG9ucygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2FjdGlvbi1idG4nKVswXS5jaGlsZHJlbjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldFpCdXR0b24oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QnV0dG9ucygpWzBdO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0WEJ1dHRvbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRCdXR0b25zKClbMV07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHVwZGF0ZSgpOiB2b2lkIHtcclxuICAgICAgICBsZXQgbW9uc3RlckRpdnMgPSB0aGlzLmdldE1vbnN0ZXJEaXZzKCk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtb25zdGVyRGl2cy5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICBsZXQgc3ByaXRlID0gRmlnaHRTY2VuZS5nZXRTcHJpdGUobW9uc3RlckRpdnNbaV0pO1xyXG4gICAgICAgICAgICBsZXQgaGVhbHRoID0gRmlnaHRTY2VuZS5nZXRIZWFsdGgobW9uc3RlckRpdnNbaV0pO1xyXG4gICAgICAgICAgICBsZXQgZGVmZW5zZSA9IEZpZ2h0U2NlbmUuZ2V0RGVmZW5zZShtb25zdGVyRGl2c1tpXSk7XHJcblxyXG4gICAgICAgICAgICBzcHJpdGUuY2xhc3NOYW1lID0gYHNwcml0ZSAke3RoaXMubW9uc3RlcnNbaV0uY3NzQ2xhc3N9YDtcclxuICAgICAgICAgICAgaWYgKGkgPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgc3ByaXRlLmNsYXNzTGlzdC5hZGQoJ21pcnJvclknKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBoZWFsdGguaW5uZXJIVE1MID0gYCR7dGhpcy5tb25zdGVyc1tpXS5oZWFsdGh9YDtcclxuICAgICAgICAgICAgZGVmZW5zZS5pbm5lckhUTUwgPSBgJHt0aGlzLm1vbnN0ZXJzW2ldLmRlZmVuc2V9YDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEVsZW1lbnQoKTogRWxlbWVudCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2hha2VNb25zdGVyKG1vbnN0ZXI6IE1vbnN0ZXIpIHtcclxuICAgICAgICBsZXQgaW5kZXggPSB0aGlzLm1vbnN0ZXJzLmluZGV4T2YobW9uc3Rlcik7XHJcbiAgICAgICAgbGV0IHBhcmVudERpdiA9IEZpZ2h0U2NlbmUuZ2V0U3ByaXRlKHRoaXMuZ2V0TW9uc3RlckRpdnMoKVtpbmRleF0pO1xyXG4gICAgICAgIHBhcmVudERpdi5jbGFzc0xpc3QucmVtb3ZlKCdzaGFrZScpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBwYXJlbnREaXYuY2xhc3NMaXN0LmFkZCgnc2hha2UnKTtcclxuICAgICAgICB9LCA1MCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge0lTY2VuZUluZm99IGZyb20gJy4uL2ludGVyZmFjZXMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNjZW5lTWFuYWdlciB7XHJcbiAgICBfY3VycmVudFNjZW5lOiBzdHJpbmc7XHJcbiAgICBzY2VuZXM6IElTY2VuZUluZm9bXTtcclxuXHJcbiAgICBwdWJsaWMgZ2V0IGN1cnJlbnRTY2VuZSgpOiBJU2NlbmVJbmZvIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRTY2VuZUluZm8odGhpcy5fY3VycmVudFNjZW5lKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihzY2VuZXM6IElTY2VuZUluZm9bXSkge1xyXG4gICAgICAgIHRoaXMuX2N1cnJlbnRTY2VuZSA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5zY2VuZXMgPSBzY2VuZXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFNjZW5lSW5mbyhuYW1lOiBzdHJpbmcpOiBJU2NlbmVJbmZvIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc2NlbmVzLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNjZW5lc1tpXS5uYW1lID09IG5hbWUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNjZW5lc1tpXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc2NlbmUgZG9lcyBub3QgZXhpc3RcIik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNob3dTY2VuZShuYW1lOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9jdXJyZW50U2NlbmUgPSBuYW1lO1xyXG4gICAgICAgIGxldCBzY2VuZSA9IHRoaXMuZ2V0U2NlbmVJbmZvKG5hbWUpLnNjZW5lO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zY2VuZXMubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgICAgdGhpcy5zY2VuZXNbaV0uc2NlbmUuZ2V0RWxlbWVudCgpLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2NlbmUuZ2V0RWxlbWVudCgpLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7SVNjZW5lfSBmcm9tIFwiLi4vaW50ZXJmYWNlc1wiO1xyXG5pbXBvcnQge1BsYXllcn0gZnJvbSBcIi4uL2NyZWF0dXJlcy9wbGF5ZXJcIjtcclxuaW1wb3J0IHtNb25zdGVyfSBmcm9tIFwiLi4vY3JlYXR1cmVzL21vbnN0ZXJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTZWxlY3RNb25zdGVyU2NlbmUgaW1wbGVtZW50cyBJU2NlbmUge1xyXG4gICAgcHJpdmF0ZSBlbGVtZW50OiBIVE1MRWxlbWVudDtcclxuICAgIHByaXZhdGUgcGxheWVyOiBQbGF5ZXI7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IE9rQnV0dG9uTGlzdGVuZXI6IGFueTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihkb21FbGVtZW50OiBIVE1MRWxlbWVudCwgT2tCdXR0b25MaXN0ZW5lcjogYW55KSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZG9tRWxlbWVudDtcclxuICAgICAgICB0aGlzLnBsYXllciA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5Pa0J1dHRvbkxpc3RlbmVyID0gT2tCdXR0b25MaXN0ZW5lcjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0UGxheWVyKHBsYXllcjogUGxheWVyKSB7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSBwbGF5ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHVwZGF0ZSgpOiB2b2lkIHtcclxuICAgICAgICBsZXQgc2VsZWN0ID0gdGhpcy5lbGVtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3NlbGVjdCcpWzBdO1xyXG4gICAgICAgIHNlbGVjdC5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wbGF5ZXIuYXZhaWxhYmxlTW9uc3RlcnMubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgICAgbGV0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG4gICAgICAgICAgICBvcHRpb24udmFsdWUgPSBgJHtpfWA7XHJcbiAgICAgICAgICAgIG9wdGlvbi5pbm5lclRleHQgPSB0aGlzLnBsYXllci5hdmFpbGFibGVNb25zdGVyc1tpXS5nZXRTdHJpbmcoKTtcclxuICAgICAgICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBPa0J1dHRvbiA9IHRoaXMuZWxlbWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdvaycpWzBdO1xyXG4gICAgICAgIE9rQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5Pa0J1dHRvbkxpc3RlbmVyKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0Q2hvc2VuTW9uc3RlcigpOiBNb25zdGVyIHtcclxuICAgICAgICBsZXQgc2VsZWN0ID0gPEhUTUxTZWxlY3RFbGVtZW50PnRoaXMuZWxlbWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzZWxlY3QnKVswXTtcclxuICAgICAgICBsZXQgaW5kZXggPSBzZWxlY3QudmFsdWU7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGxheWVyLmF2YWlsYWJsZU1vbnN0ZXJzW3BhcnNlSW50KGluZGV4KV07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEVsZW1lbnQoKTogRWxlbWVudCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudDtcclxuICAgIH1cclxufSIsImltcG9ydCB7SVNjZW5lfSBmcm9tIFwiLi4vaW50ZXJmYWNlc1wiXHJcblxyXG5leHBvcnQgY2xhc3MgU3RhcnRTY2VuZSBpbXBsZW1lbnRzIElTY2VuZSB7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGVsZW1lbnQ6IEhUTUxFbGVtZW50O1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBzdGFydEJ1dHRvbkxpc3RlbmVyOiBhbnk7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZG9tRWxlbWVudDogSFRNTEVsZW1lbnQsIHN0YXJ0QnV0dG9uTGlzdGVuZXI6IGFueSkge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGRvbUVsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy5zdGFydEJ1dHRvbkxpc3RlbmVyID0gc3RhcnRCdXR0b25MaXN0ZW5lclxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZW5kZXIoKSB7XHJcbiAgICAgICAgbGV0IGJ1dHRvbiA9IHRoaXMuZWxlbWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdyZWQtYnRuJylbMF07XHJcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5zdGFydEJ1dHRvbkxpc3RlbmVyKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRFbGVtZW50KCk6IEVsZW1lbnQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQ7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgY2xhc3MgQ29tcGFyZSB7XHJcbiAgICAvKipcclxuICAgICAqIGlzIHRoZSBudW1iZXIgd2l0aGluIHRoZSBib3VuZHNcclxuICAgICAqIEBwYXJhbSB4XHJcbiAgICAgKiBAcGFyYW0gbWluXHJcbiAgICAgKiBAcGFyYW0gbWF4XHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBpc0luUmFuZ2UoeDogbnVtYmVyLCBtaW46IG51bWJlciwgbWF4OiBudW1iZXIpIHtcclxuICAgICAgICByZXR1cm4gbWluIDw9IHggJiYgeCA8PSBtYXg7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDaGVja3MgZm9yIGRpY3Rpb25hcnkgY29tcGFyaXNvbnMuXHJcbiAgICAgKlxyXG4gICAgICogSW4gSmF2YVNjcmlwdCBhbmQgVHlwZVNjcmlwdCwgSWYgdHdvIGVsZW1lbnRzIGFyZSBlbGVtZW50cyB0aGF0IGltcGxlbWVudCBzb21lIGtpbmQgb2YgaW50ZXJmYWNlLCB0aGVuIGNvbXBhcmluZ1xyXG4gICAgICogdGhlbSB1c2luZyBjb21wYXJpc29uIG9wZXJhdG9ycyBpcyBmYWxzZS4gRXZlbiBpZiB0aGVzZSBvYmplY3RzIGFyZSBlcXVhbCBpbiB2YWx1ZS5cclxuICAgICAqXHJcbiAgICAgKiBUaGlzIGZ1bmN0aW9uIHNvbHZlcyB0aGUgcHJvYmxlbSBhbmQgbWF0Y2hlcyB0aGUgZWxlbWVudHMgYnkgdGhlIHZhbHVlIG9mIGVhY2ggZmllbGQuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGFcclxuICAgICAqIEBwYXJhbSBiXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBzaGFsbG93RXF1YWwoYTogYW55LCBiOiBhbnkpOiBib29sZWFuIHtcclxuICAgICAgICBjb25zdCBrZXlzMSA9IE9iamVjdC5rZXlzKGEpO1xyXG4gICAgICAgIGNvbnN0IGtleXMyID0gT2JqZWN0LmtleXMoYik7XHJcblxyXG4gICAgICAgIGlmIChrZXlzMS5sZW5ndGggIT09IGtleXMyLmxlbmd0aCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKGxldCBrZXkgb2Yga2V5czEpIHtcclxuICAgICAgICAgICAgaWYgKGFba2V5XSAhPT0gYltrZXldKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG5cclxuICAgIH1cclxufSIsImV4cG9ydCBjbGFzcyBSYW5kb20ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0gYVxyXG4gICAgICogQHBhcmFtIGJcclxuICAgICAqIEByZXR1cm5zIHJhbmRvbSBudW1iZXIgYmV0d2VlbiBhIGFuZCBiLCBpbmNsdXNpdmVcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGluUmFuZ2UoYTogbnVtYmVyLCBiOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoYiAtIGEgKyAxKSkgKyBhO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBvbmVJdGVtRnJvbUFycmF5KGFycjogYW55W10pOiBhbnl7XHJcbiAgICAgICAgcmV0dXJuIGFyclt0aGlzLmluUmFuZ2UoMCwgYXJyLmxlbmd0aCAtIDEpXTtcclxuICAgIH1cclxufSJdfQ==
