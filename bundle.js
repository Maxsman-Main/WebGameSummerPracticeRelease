(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.MountCell = exports.LandCell = exports.Cell = void 0;
var monster_1 = require("./monster");
var utils_1 = require("./utils");
var Cell = /** @class */ (function () {
    function Cell(label, cssClass, type, transitionCostMinMax, possibleCreatures) {
        this._label = label;
        this._cssClass = cssClass;
        this._type = type;
        this._transitionCost = utils_1.Utils.random.apply(this, transitionCostMinMax);
        this._monsters = utils_1.Utils.randomItemFromArray(possibleCreatures);
    }
    Object.defineProperty(Cell.prototype, "label", {
        get: function () {
            return this._label;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cell.prototype, "cssClass", {
        get: function () {
            return this._cssClass;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cell.prototype, "type", {
        get: function () {
            return this._type;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cell.prototype, "transitionCost", {
        get: function () {
            return this._transitionCost;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cell.prototype, "monster", {
        get: function () {
            return this._monsters;
        },
        enumerable: false,
        configurable: true
    });
    Cell.prototype.loot = function () {
        this._monsters = null;
    };
    return Cell;
}());
exports.Cell = Cell;
var LandCell = /** @class */ (function (_super) {
    __extends(LandCell, _super);
    function LandCell() {
        return _super.call(this, 'l', 'land', '', [1, 2], [new monster_1.Chudila()]) || this;
    }
    return LandCell;
}(Cell));
exports.LandCell = LandCell;
var MountCell = /** @class */ (function (_super) {
    __extends(MountCell, _super);
    function MountCell() {
        return _super.call(this, 'm', 'mount', '', [3, 5], [new monster_1.Chudila()]) || this;
    }
    return MountCell;
}(Cell));
exports.MountCell = MountCell;
},{"./monster":9,"./utils":14}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Creature = void 0;
var Creature = /** @class */ (function () {
    function Creature(name, cssClass, label) {
        this._name = name;
        this._cssClass = cssClass;
        this._label = label;
    }
    Object.defineProperty(Creature.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Creature.prototype, "cssClass", {
        get: function () {
            return this._cssClass;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Creature.prototype, "label", {
        get: function () {
            return this._label;
        },
        enumerable: false,
        configurable: true
    });
    return Creature;
}());
exports.Creature = Creature;
},{}],3:[function(require,module,exports){
"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FieldRenderer = void 0;
var utils_1 = require("./utils");
var FieldRenderer = /** @class */ (function () {
    function FieldRenderer(gameState, gameField, mouseListener) {
        this.map = gameState.map;
        this.gameState = gameState;
        this.gameField = gameField;
        this.mouseListener = mouseListener;
    }
    FieldRenderer.prototype.render = function () {
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
        this.gameField.innerHTML = "";
        this.gameField.appendChild(table);
    };
    FieldRenderer.prototype.getTable = function () {
        return this.gameField.children[0];
    };
    FieldRenderer.prototype.getCell = function (coordinates) {
        return this.getTable().rows[coordinates.y].cells[coordinates.x];
    };
    FieldRenderer.getHTMLSprite = function (obj) {
        var HTMLSprite = document.createElement('div');
        HTMLSprite.classList.add('sprite');
        HTMLSprite.classList.add(obj.cssClass);
        return HTMLSprite;
    };
    FieldRenderer.prototype.getCreaturesList = function () {
        return __spreadArray([
            this.gameState.player
        ], this.gameState.creatures);
    };
    FieldRenderer.prototype.update = function () {
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
    };
    FieldRenderer.prototype.updateCells = function (coordinates) {
        for (var i = 0; i < coordinates.length; ++i) {
            var mapCell = this.map.getCell(coordinates[i]);
            var HTMLCell = this.getCell(coordinates[i]);
            HTMLCell.innerHTML = "";
            HTMLCell.appendChild(FieldRenderer.getHTMLSprite(mapCell));
            var creaturesList = this.getCreaturesList();
            for (var j = 0; j < creaturesList.length; ++j) {
                if (utils_1.Utils.shallowEqual(creaturesList[j].getCoordinates(), coordinates[i])) {
                    HTMLCell.appendChild(FieldRenderer.getHTMLSprite(creaturesList[j]));
                }
            }
        }
    };
    return FieldRenderer;
}());
exports.FieldRenderer = FieldRenderer;
},{"./utils":14}],4:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fight = void 0;
var Fight = /** @class */ (function () {
    function Fight(monsterFirst, monsterSecond) {
        this._monsterFirst = monsterFirst;
        this._monsterSecond = monsterSecond;
        this._currentMonster = monsterFirst;
        this._defenseMonster = monsterSecond;
    }
    Object.defineProperty(Fight.prototype, "monsterFirst", {
        get: function () {
            return this._monsterFirst;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Fight.prototype, "monsterSecond", {
        get: function () {
            return this._monsterSecond;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Fight.prototype, "currentMonster", {
        get: function () {
            return this._currentMonster;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Fight.prototype, "defenseMonster", {
        get: function () {
            return this._defenseMonster;
        },
        enumerable: false,
        configurable: true
    });
    Fight.prototype.swap = function () {
        var _a;
        _a = [this.defenseMonster, this.currentMonster], this._currentMonster = _a[0], this._defenseMonster = _a[1];
    };
    Fight.prototype.isFinish = function () {
        return this.monsterFirst.isDead() || this.monsterSecond.isDead();
    };
    Fight.prototype.getWinner = function () {
        if (!this.isFinish)
            return null;
        return (this.monsterFirst.isDead()) ? this.monsterSecond :
            this.monsterFirst;
    };
    return Fight;
}());
exports.Fight = Fight;
},{}],5:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FightRenderer = void 0;
var FightRenderer = /** @class */ (function () {
    function FightRenderer(gameFight, monsters, listener_1, listener_2) {
        this.gameFight = gameFight;
        this.monsters = monsters;
        this.NESZButtonClickListener = listener_1;
        this.NESXButtonClickListener = listener_2;
    }
    FightRenderer.prototype.render = function () {
    };
    FightRenderer.prototype.update = function () {
        var monstersDiv = this.gameFight.getElementsByClassName('monsters')[0].children;
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
        var buttons = this.gameFight.getElementsByClassName('action-btn')[0].children;
        console.assert(buttons.length == 2);
        buttons[0].addEventListener('click', this.NESZButtonClickListener);
        buttons[1].addEventListener('click', this.NESXButtonClickListener);
    };
    return FightRenderer;
}());
exports.FightRenderer = FightRenderer;
},{}],6:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameState = void 0;
var map_1 = require("./map");
var moveManager_1 = require("./moveManager");
var GameState = /** @class */ (function () {
    function GameState(player, creatures) {
        this.player = player;
        this.creatures = creatures;
        this.map = new map_1.Map(5, 5);
        this.moveManager = new moveManager_1.MoveManager(this.map, this.player);
        this.scenes = [
            {
                name: 'field',
                element: document.getElementById('game-field')
            },
            {
                name: 'fight',
                element: document.getElementById('game-fight')
            },
            {
                name: 'select-monster',
                element: document.getElementById('game-select-monster')
            }
        ];
        this.fight = null;
    }
    return GameState;
}());
exports.GameState = GameState;
},{"./map":8,"./moveManager":10}],7:[function(require,module,exports){
"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
var player_1 = require("./player");
var monster_1 = require("./monster");
var fieldRenderer_1 = require("./fieldRenderer");
var sceneManager_1 = require("./sceneManager");
var gameState_1 = require("./gameState");
var utils_1 = require("./utils");
var fightRenderer_1 = require("./fightRenderer");
var selectMonsterRenderer_1 = require("./selectMonsterRenderer");
var fight_1 = require("./fight");
/* Global variables */
var gameState = new gameState_1.GameState(new player_1.Player("Steve", "hero", '@', 0, 0, 4, [new monster_1.Pridurok()]), []);
var sceneManager = new sceneManager_1.SceneManager(gameState);
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
        fieldRenderer.updateCells([
            old_coordinate,
            gameState.player.getCoordinates()
        ]);
    }
    else if (utils_1.Utils.shallowEqual(coordinates, gameState.player.getCoordinates())) {
        if (gameState.map.getCell(coordinates).monster == null)
            return;
        selectMonsterRenderer = new selectMonsterRenderer_1.SelectMonsterRenderer(sceneManager.getSceneInfo('select-monster').element, gameState.player, OKButtonInSelectClickListener);
        selectMonsterRenderer.update();
        sceneManager.showScene('select-monster');
    }
}
/* Click Listener for Z button in fight */
function NESZButtonClickListener(event) {
    console.log('clicked', event.target);
    gameState.fight.defenseMonster.beAttacked(gameState.fight.currentMonster);
    if (gameState.fight.isFinish()) {
        console.log(gameState.fight.currentMonster, gameState.fight.defenseMonster);
        gameState.fight.currentMonster.Heal();
        gameState.fight.defenseMonster.Heal();
        if (gameState.fight.getWinner().looted) {
            gameState.player.addMonster(gameState.fight.defenseMonster);
            gameState.fight.defenseMonster.loot();
            console.log("added monster: " + gameState.fight.defenseMonster.getString());
            gameState.map.getCell(gameState.player.getCoordinates()).loot();
        }
        else {
            gameState.player.deleteMonster(gameState.fight.currentMonster);
            console.log("deleted: " + gameState.fight.currentMonster.getString());
        }
        sceneManager.showScene('field');
    }
    gameState.fight.swap();
    fightRenderer.update();
}
/* Click Listener for X button in fight */
function NESXButtonClickListener(event) {
    gameState.fight.currentMonster.defenseHimself();
    gameState.fight.swap();
    fightRenderer.update();
}
/* Click Listener for OK button in select-monster */
function OKButtonInSelectClickListener(event) {
    sceneManager.showScene('fight');
    var monsters = [
        selectMonsterRenderer.getChoosenMonster(),
        gameState.map.getCell(gameState.player.getCoordinates()).monster
    ];
    fightRenderer = new fightRenderer_1.FightRenderer(sceneManager.getSceneInfo('fight').element, monsters, NESZButtonClickListener, NESXButtonClickListener);
    fightRenderer.update();
    gameState.fight = new (fight_1.Fight.bind.apply(fight_1.Fight, __spreadArray([void 0], monsters)))();
}
document.addEventListener('keypress', function (event) {
    var keyName = event.key;
    if (keyName.toLowerCase() == '1') {
        sceneManager.showScene('field');
    }
    else if (keyName.toLowerCase() == '2') {
        sceneManager.showScene('fight');
    }
});
},{"./fieldRenderer":3,"./fight":4,"./fightRenderer":5,"./gameState":6,"./monster":9,"./player":11,"./sceneManager":12,"./selectMonsterRenderer":13,"./utils":14}],8:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Map = void 0;
var cell_1 = require("./cell");
var utils_1 = require("./utils");
var Map = /** @class */ (function () {
    function Map(sizeX, sizeY) {
        this.sizeX = sizeX;
        this.sizeY = sizeY;
        this.data = Map.generate(sizeX, sizeY);
    }
    Map.prototype.getCell = function (coordinates) {
        return this.data[coordinates.y][coordinates.x];
    };
    Map.prototype.getSize = function () {
        return { x: this.sizeX, y: this.sizeY };
    };
    Map.generate = function (sizeX, sizeY) {
        var defaultCell = cell_1.LandCell;
        var possibleCells = [
            {
                obj: cell_1.MountCell,
                rand: { min: 5, max: 10 }
            }
        ];
        console.log("Map: generate, (" + sizeX + ", " + sizeY + ")");
        var data = [];
        for (var y = 0; y < sizeY; ++y) {
            var row = [];
            for (var x = 0; x < sizeX; ++x) {
                var randNum = utils_1.Utils.random(1, 100);
                var objectForCreate = null;
                for (var i = 0; i < possibleCells.length; ++i) {
                    if (utils_1.Utils.isInRange(randNum, possibleCells[i].rand.min, possibleCells[i].rand.max)) {
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
        console.log("Map: generated, (" + sizeX + ", " + sizeY + ")");
        return data;
    };
    return Map;
}());
exports.Map = Map;
},{"./cell":1,"./utils":14}],9:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Chudila = exports.Pridurok = exports.Monster = void 0;
var creature_1 = require("./creature");
var Monster = /** @class */ (function (_super) {
    __extends(Monster, _super);
    function Monster(name, cssClass, label, type, health, defense, attack, attackBooster, looted) {
        var _this = _super.call(this, name, cssClass, label) || this;
        _this._type = type;
        _this._maxHeath = health;
        _this._health = health;
        _this._defense = defense;
        _this._attack = attack;
        _this._attackBooster = attackBooster;
        _this._looted = looted;
        return _this;
    }
    Object.defineProperty(Monster.prototype, "type", {
        get: function () {
            return this._type;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Monster.prototype, "maxHeath", {
        get: function () {
            return this._maxHeath;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Monster.prototype, "health", {
        get: function () {
            return this._health;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Monster.prototype, "defense", {
        get: function () {
            return this._defense;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Monster.prototype, "attack", {
        get: function () {
            return this._attack;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Monster.prototype, "attackBooster", {
        get: function () {
            return this._attackBooster;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Monster.prototype, "looted", {
        get: function () {
            return this._looted;
        },
        enumerable: false,
        configurable: true
    });
    Monster.prototype.beAttacked = function (enemy) {
        var damage = this.defense - (enemy.attack + enemy.attackBooster);
        if (damage >= 0) {
            this._health -= 1;
        }
        else {
            this._health += damage;
        }
    };
    Monster.prototype.defenseHimself = function () {
        this._defense += 5;
    };
    Monster.prototype.isDead = function () {
        return this._health <= 0;
    };
    Monster.prototype.Heal = function () {
        this._health = this.maxHeath;
    };
    Monster.prototype.getString = function () {
        return this.name + ", hp: " + this.health + ", defence: " + this.defense + ", attack: " + this.attack;
    };
    Monster.prototype.loot = function () {
        this._looted = true;
    };
    return Monster;
}(creature_1.Creature));
exports.Monster = Monster;
var Pridurok = /** @class */ (function (_super) {
    __extends(Pridurok, _super);
    function Pridurok() {
        return _super.call(this, 'Pridurok', 'pridurok', 'p', 'red', 120, 5, 30, 30, true) || this;
    }
    return Pridurok;
}(Monster));
exports.Pridurok = Pridurok;
var Chudila = /** @class */ (function (_super) {
    __extends(Chudila, _super);
    function Chudila() {
        return _super.call(this, 'Chudila', 'chudila', 'c', 'red', 100, 4, 20, 10, false) || this;
    }
    return Chudila;
}(Monster));
exports.Chudila = Chudila;
},{"./creature":2}],10:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MoveManager = void 0;
var MoveManager = /** @class */ (function () {
    function MoveManager(map, player) {
        this.map = map;
        this.player = player;
    }
    /**
     * Coordinates are correct if the map range is included
     * and point to an adjacent cell horizontally or vertically
     * @returns
     * @param coordinates
     */
    MoveManager.prototype.isCorrectCoordinates = function (coordinates) {
        return (0 <= coordinates.x && coordinates.x < this.map.getSize().x) &&
            (0 <= coordinates.y && coordinates.y < this.map.getSize().y) &&
            (Math.abs(coordinates.x - this.player.getCoordinates().x) +
                Math.abs(coordinates.y - this.player.getCoordinates().y) == 1);
    };
    MoveManager.prototype.move = function (coordinates) {
        if (this.isCorrectCoordinates(coordinates)) {
            console.log(this.player.name + " moved to (" + coordinates.x + ", " + coordinates.y + ")");
            this.player.move(coordinates);
            return true;
        }
        else {
            console.log(this.player.name + " not moved to (" + coordinates.x + ", " + coordinates.y + ")");
            return false;
        }
    };
    return MoveManager;
}());
exports.MoveManager = MoveManager;
},{}],11:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
var creature_1 = require("./creature");
var Player = /** @class */ (function (_super) {
    __extends(Player, _super);
    function Player(name, cssClass, label, x, y, availableMoves, availableMonsters) {
        var _this = _super.call(this, name, cssClass, label) || this;
        _this.x = x;
        _this.y = y;
        _this._availableMoves = availableMoves;
        _this._availableMonsters = availableMonsters;
        return _this;
    }
    Object.defineProperty(Player.prototype, "availableMoves", {
        get: function () {
            return this._availableMoves;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Player.prototype, "availableMonters", {
        get: function () {
            return this._availableMonsters;
        },
        enumerable: false,
        configurable: true
    });
    Player.prototype.move = function (coordinates) {
        this.x = coordinates.x;
        this.y = coordinates.y;
    };
    Player.prototype.getCoordinates = function () {
        return { x: this.x, y: this.y };
    };
    Player.prototype.addMonster = function (monster) {
        this._availableMonsters.push(monster);
    };
    Player.prototype.deleteMonster = function (monster) {
        var index = this._availableMonsters.indexOf(monster);
        this._availableMonsters = (index > -1) ? __spreadArray(__spreadArray([], this._availableMonsters.slice(0, index)), this._availableMonsters.slice(index + 1)) : this._availableMonsters;
    };
    return Player;
}(creature_1.Creature));
exports.Player = Player;
},{"./creature":2}],12:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SceneManager = void 0;
var SceneManager = /** @class */ (function () {
    function SceneManager(gameState) {
        this.gameState = gameState;
        this._currentScene = "";
    }
    Object.defineProperty(SceneManager.prototype, "currentScene", {
        get: function () {
            return this.getSceneInfo(this._currentScene);
        },
        enumerable: false,
        configurable: true
    });
    SceneManager.prototype.getSceneInfo = function (name) {
        var scenes = this.gameState.scenes;
        for (var i = 0; i < scenes.length; ++i) {
            if (scenes[i].name == name) {
                return scenes[i];
            }
        }
        throw new Error("The scene does not exist");
    };
    SceneManager.prototype.showScene = function (name) {
        this._currentScene = name;
        var scene = this.getSceneInfo(name);
        for (var i = 0; i < this.gameState.scenes.length; ++i) {
            this.gameState.scenes[i].element.classList.add('hide');
        }
        scene.element.classList.remove('hide');
    };
    return SceneManager;
}());
exports.SceneManager = SceneManager;
},{}],13:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectMonsterRenderer = void 0;
var SelectMonsterRenderer = /** @class */ (function () {
    function SelectMonsterRenderer(domElement, player, OkButtonListener) {
        this.domElement = domElement;
        this.player = player;
        this.OkButtonListener = OkButtonListener;
    }
    SelectMonsterRenderer.prototype.render = function () {
    };
    SelectMonsterRenderer.prototype.update = function () {
        var select = this.domElement.getElementsByClassName('select')[0];
        select.innerHTML = "";
        for (var i = 0; i < this.player.availableMonters.length; ++i) {
            var option = document.createElement('option');
            option.value = "" + i;
            option.innerText = this.player.availableMonters[i].getString();
            select.appendChild(option);
        }
        var OkButton = this.domElement.getElementsByClassName('ok')[0];
        OkButton.addEventListener('click', this.OkButtonListener);
    };
    SelectMonsterRenderer.prototype.getChoosenMonster = function () {
        var select = this.domElement.getElementsByClassName('select')[0];
        var index = select.value;
        console.log(index);
        return this.player.availableMonters[parseInt(index)];
    };
    return SelectMonsterRenderer;
}());
exports.SelectMonsterRenderer = SelectMonsterRenderer;
},{}],14:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Utils = void 0;
var Utils = /** @class */ (function () {
    function Utils() {
    }
    /**
     * @param a
     * @param b
     * @returns random number between a and b, inclusive
     */
    Utils.random = function (a, b) {
        return Math.floor(Math.random() * (b - a + 1)) + a;
    };
    Utils.isInRange = function (x, min, max) {
        return min <= x && x <= max;
    };
    Utils.randomItemFromArray = function (arr) {
        return arr[this.random(0, arr.length - 1)];
    };
    Utils.shallowEqual = function (a, b) {
        var keys1 = Object.keys(a);
        var keys2 = Object.keys(b);
        if (keys1.length !== keys2.length) {
            return false;
        }
        for (var _i = 0, keys1_1 = keys1; _i < keys1_1.length; _i++) {
            var key = keys1_1[_i];
            if (a[key] !== b[key]) {
                return false;
            }
        }
        return true;
    };
    return Utils;
}());
exports.Utils = Utils;
},{}]},{},[7])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvc2NyaXB0cy9jZWxsLnRzIiwic3JjL3NjcmlwdHMvY3JlYXR1cmUudHMiLCJzcmMvc2NyaXB0cy9maWVsZFJlbmRlcmVyLnRzIiwic3JjL3NjcmlwdHMvZmlnaHQudHMiLCJzcmMvc2NyaXB0cy9maWdodFJlbmRlcmVyLnRzIiwic3JjL3NjcmlwdHMvZ2FtZVN0YXRlLnRzIiwic3JjL3NjcmlwdHMvbWFpbi50cyIsInNyYy9zY3JpcHRzL21hcC50cyIsInNyYy9zY3JpcHRzL21vbnN0ZXIudHMiLCJzcmMvc2NyaXB0cy9tb3ZlTWFuYWdlci50cyIsInNyYy9zY3JpcHRzL3BsYXllci50cyIsInNyYy9zY3JpcHRzL3NjZW5lTWFuYWdlci50cyIsInNyYy9zY3JpcHRzL3NlbGVjdE1vbnN0ZXJSZW5kZXJlci50cyIsInNyYy9zY3JpcHRzL3V0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUEscUNBQTJDO0FBQzNDLGlDQUE4QjtBQUc5QjtJQStCSSxjQUFZLEtBQWEsRUFBRSxRQUFnQixFQUFFLElBQVksRUFDakQsb0JBQXVDLEVBQ3ZDLGlCQUE0QjtRQUNoQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwQixJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztRQUMxQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUNsQixJQUFJLENBQUMsZUFBZSxHQUFHLGFBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO1FBQ3RFLElBQUksQ0FBQyxTQUFTLEdBQUcsYUFBSyxDQUFDLG1CQUFtQixDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDbEUsQ0FBQztJQXBDRCxzQkFBVyx1QkFBSzthQUFoQjtZQUNJLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztR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O0lBQ2hCLENBQUM7SUFDTCxZQUFDO0FBQUQsQ0FuQ0EsQUFtQ0MsSUFBQTtBQW5DWSxzQkFBSyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImltcG9ydCB7Q2h1ZGlsYSwgTW9uc3Rlcn0gZnJvbSAnLi9tb25zdGVyJztcclxuaW1wb3J0IHtVdGlsc30gZnJvbSAnLi91dGlscyc7XHJcbmltcG9ydCB7SUhhc0Nzc0NsYXNzfSBmcm9tICcuL2ludGVyZmFjZXMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIENlbGwgaW1wbGVtZW50cyBJSGFzQ3NzQ2xhc3Mge1xyXG5cclxuICAgIHByaXZhdGUgcmVhZG9ubHkgX2xhYmVsOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgZ2V0IGxhYmVsKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xhYmVsO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVhZG9ubHkgX2Nzc0NsYXNzOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgZ2V0IGNzc0NsYXNzKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Nzc0NsYXNzO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVhZG9ubHkgX3R5cGU6IHN0cmluZztcclxuICAgIHB1YmxpYyBnZXQgdHlwZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl90eXBlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVhZG9ubHkgX3RyYW5zaXRpb25Db3N0OiBudW1iZXI7XHJcbiAgICBwdWJsaWMgZ2V0IHRyYW5zaXRpb25Db3N0KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RyYW5zaXRpb25Db3N0O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX21vbnN0ZXJzOiBNb25zdGVyO1xyXG4gICAgcHVibGljIGdldCBtb25zdGVyKCk6IE1vbnN0ZXJ7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX21vbnN0ZXJzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBsb290KCkge1xyXG4gICAgICAgIHRoaXMuX21vbnN0ZXJzID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihsYWJlbDogc3RyaW5nLCBjc3NDbGFzczogc3RyaW5nLCB0eXBlOiBzdHJpbmcsXHJcbiAgICAgICAgICAgIHRyYW5zaXRpb25Db3N0TWluTWF4IDogW251bWJlciwgbnVtYmVyXSxcclxuICAgICAgICAgICAgcG9zc2libGVDcmVhdHVyZXM6IE1vbnN0ZXJbXSkge1xyXG4gICAgICAgIHRoaXMuX2xhYmVsID0gbGFiZWw7XHJcbiAgICAgICAgdGhpcy5fY3NzQ2xhc3MgPSBjc3NDbGFzcztcclxuICAgICAgICB0aGlzLl90eXBlID0gdHlwZTtcclxuICAgICAgICB0aGlzLl90cmFuc2l0aW9uQ29zdCA9IFV0aWxzLnJhbmRvbS5hcHBseSh0aGlzLCB0cmFuc2l0aW9uQ29zdE1pbk1heCk7XHJcbiAgICAgICAgdGhpcy5fbW9uc3RlcnMgPSBVdGlscy5yYW5kb21JdGVtRnJvbUFycmF5KHBvc3NpYmxlQ3JlYXR1cmVzKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBMYW5kQ2VsbCBleHRlbmRzIENlbGwge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCdsJywgJ2xhbmQnLCAnJywgWzEsIDJdLCBbbmV3IENodWRpbGEoKV0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTW91bnRDZWxsIGV4dGVuZHMgQ2VsbCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoJ20nLCAnbW91bnQnLCAnJywgWzMsIDVdLCBbbmV3IENodWRpbGEoKV0pO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtJSGFzQ3NzQ2xhc3N9IGZyb20gXCIuL2ludGVyZmFjZXNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBDcmVhdHVyZSBpbXBsZW1lbnRzIElIYXNDc3NDbGFzcyB7XHJcbiAgICBcclxuICAgIHByaXZhdGUgX25hbWU6IHN0cmluZztcclxuICAgIHB1YmxpYyBnZXQgbmFtZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9uYW1lO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNldCBuYW1lKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9uYW1lID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfY3NzQ2xhc3M6IHN0cmluZztcclxuICAgIHB1YmxpYyBnZXQgY3NzQ2xhc3MoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY3NzQ2xhc3M7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gX2xhYmVsIGlzIHNvbWUgY2hhciwgdXNlZCBmb3IgZGVidWdnaW5nXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9sYWJlbDogc3RyaW5nO1xyXG5cclxuICAgIHB1YmxpYyBnZXQgbGFiZWwoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbGFiZWw7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBjc3NDbGFzcyA6IHN0cmluZywgbGFiZWw6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX25hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMuX2Nzc0NsYXNzID0gY3NzQ2xhc3M7XHJcbiAgICAgICAgdGhpcy5fbGFiZWwgPSBsYWJlbDtcclxuICAgIH1cclxuXHJcbn0iLCJpbXBvcnQge01hcH0gZnJvbSAnLi9tYXAnO1xyXG5pbXBvcnQge0kyRENvb3JkaW5hdGVzLCBJSGFzQ3NzQ2xhc3MsIElSZW5kZXJlcn0gZnJvbSAnLi9pbnRlcmZhY2VzJztcclxuaW1wb3J0IHtHYW1lU3RhdGV9IGZyb20gJy4vZ2FtZVN0YXRlJztcclxuaW1wb3J0IHtVdGlsc30gZnJvbSBcIi4vdXRpbHNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBGaWVsZFJlbmRlcmVyIGltcGxlbWVudHMgSVJlbmRlcmVyIHtcclxuXHJcbiAgICBwcml2YXRlIG1hcDogTWFwO1xyXG4gICAgcHJpdmF0ZSBnYW1lU3RhdGU6IEdhbWVTdGF0ZTtcclxuICAgIHByaXZhdGUgZ2FtZUZpZWxkOiBIVE1MRWxlbWVudDtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgbW91c2VMaXN0ZW5lcjogYW55O1xyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lU3RhdGU6IEdhbWVTdGF0ZSwgZ2FtZUZpZWxkOiBIVE1MRWxlbWVudCwgbW91c2VMaXN0ZW5lcjogYW55KSB7XHJcbiAgICAgICAgdGhpcy5tYXAgPSBnYW1lU3RhdGUubWFwO1xyXG4gICAgICAgIHRoaXMuZ2FtZVN0YXRlID0gZ2FtZVN0YXRlO1xyXG4gICAgICAgIHRoaXMuZ2FtZUZpZWxkID0gZ2FtZUZpZWxkO1xyXG4gICAgICAgIHRoaXMubW91c2VMaXN0ZW5lciA9IG1vdXNlTGlzdGVuZXI7IFxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZW5kZXIoKSB7XHJcbiAgICAgICAgbGV0IHRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGFibGUnKTtcclxuICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHRoaXMubWFwLmdldFNpemUoKS55OyArK3kpIHtcclxuICAgICAgICAgICAgbGV0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHggPSAwOyB4ICA8IHRoaXMubWFwLmdldFNpemUoKS54OyArK3gpIHtcclxuICAgICAgICAgICAgICAgIGxldCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcclxuICAgICAgICAgICAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm1vdXNlTGlzdGVuZXIpO1xyXG4gICAgICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKGNlbGwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRhYmxlLmFwcGVuZENoaWxkKHJvdyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZ2FtZUZpZWxkLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5nYW1lRmllbGQuYXBwZW5kQ2hpbGQodGFibGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0VGFibGUoKTogSFRNTFRhYmxlRWxlbWVudCB7XHJcbiAgICAgICAgcmV0dXJuIDxIVE1MVGFibGVFbGVtZW50PiB0aGlzLmdhbWVGaWVsZC5jaGlsZHJlblswXTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldENlbGwoY29vcmRpbmF0ZXM6IEkyRENvb3JkaW5hdGVzKTogRWxlbWVudCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VGFibGUoKS5yb3dzW2Nvb3JkaW5hdGVzLnldLmNlbGxzW2Nvb3JkaW5hdGVzLnhdO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXRIVE1MU3ByaXRlKG9iajogSUhhc0Nzc0NsYXNzKTogSFRNTEVsZW1lbnQge1xyXG4gICAgICAgIGxldCBIVE1MU3ByaXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgSFRNTFNwcml0ZS5jbGFzc0xpc3QuYWRkKCdzcHJpdGUnKTtcclxuICAgICAgICBIVE1MU3ByaXRlLmNsYXNzTGlzdC5hZGQob2JqLmNzc0NsYXNzKTtcclxuICAgICAgICByZXR1cm4gSFRNTFNwcml0ZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldENyZWF0dXJlc0xpc3QoKSB7XHJcbiAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgdGhpcy5nYW1lU3RhdGUucGxheWVyLFxyXG4gICAgICAgICAgICAuLi50aGlzLmdhbWVTdGF0ZS5jcmVhdHVyZXNcclxuICAgICAgICBdXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHVwZGF0ZSgpIHtcclxuICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHRoaXMubWFwLmdldFNpemUoKS55OyArK3kpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB0aGlzLm1hcC5nZXRTaXplKCkueDsgKyt4KSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbWFwQ2VsbCA9IHRoaXMubWFwLmdldENlbGwoeyB4OiB4LCB5OiB5IH0pO1xyXG4gICAgICAgICAgICAgICAgbGV0IEhUTUxDZWxsID0gdGhpcy5nZXRDZWxsKHsgeDogeCwgeTogeSB9KTtcclxuICAgICAgICAgICAgICAgIEhUTUxDZWxsLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICBIVE1MQ2VsbC5hcHBlbmRDaGlsZChGaWVsZFJlbmRlcmVyLmdldEhUTUxTcHJpdGUobWFwQ2VsbCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGNyZWF0dXJlc0xpc3QgPSB0aGlzLmdldENyZWF0dXJlc0xpc3QoKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNyZWF0dXJlc0xpc3QubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgICAgbGV0IGNyZWF0dXJlID0gY3JlYXR1cmVzTGlzdFtpXTtcclxuICAgICAgICAgICAgdGhpcy5nZXRDZWxsKGNyZWF0dXJlLmdldENvb3JkaW5hdGVzKCkpLmFwcGVuZENoaWxkKEZpZWxkUmVuZGVyZXIuZ2V0SFRNTFNwcml0ZShjcmVhdHVyZSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdXBkYXRlQ2VsbHMoY29vcmRpbmF0ZXM6IEkyRENvb3JkaW5hdGVzW10pOiB2b2lkIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvb3JkaW5hdGVzLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgIGxldCBtYXBDZWxsID0gdGhpcy5tYXAuZ2V0Q2VsbChjb29yZGluYXRlc1tpXSk7XHJcbiAgICAgICAgICAgIGxldCBIVE1MQ2VsbCA9IHRoaXMuZ2V0Q2VsbChjb29yZGluYXRlc1tpXSk7XHJcbiAgICAgICAgICAgIEhUTUxDZWxsLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgICAgIEhUTUxDZWxsLmFwcGVuZENoaWxkKEZpZWxkUmVuZGVyZXIuZ2V0SFRNTFNwcml0ZShtYXBDZWxsKSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBjcmVhdHVyZXNMaXN0ID0gdGhpcy5nZXRDcmVhdHVyZXNMaXN0KCk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgY3JlYXR1cmVzTGlzdC5sZW5ndGg7ICsraikge1xyXG4gICAgICAgICAgICAgICAgaWYoVXRpbHMuc2hhbGxvd0VxdWFsKGNyZWF0dXJlc0xpc3Rbal0uZ2V0Q29vcmRpbmF0ZXMoKSwgY29vcmRpbmF0ZXNbaV0pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgSFRNTENlbGwuYXBwZW5kQ2hpbGQoRmllbGRSZW5kZXJlci5nZXRIVE1MU3ByaXRlKGNyZWF0dXJlc0xpc3Rbal0pKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImltcG9ydCB7TW9uc3Rlcn0gZnJvbSBcIi4vbW9uc3RlclwiXHJcblxyXG5leHBvcnQgY2xhc3MgRmlnaHQge1xyXG5cclxuICAgIHByaXZhdGUgcmVhZG9ubHkgX21vbnN0ZXJGaXJzdDogTW9uc3RlcjtcclxuICAgIHB1YmxpYyBnZXQgbW9uc3RlckZpcnN0KCk6IE1vbnN0ZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9tb25zdGVyRmlyc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfbW9uc3RlclNlY29uZDogTW9uc3RlcjtcclxuICAgIHB1YmxpYyBnZXQgbW9uc3RlclNlY29uZCgpOiBNb25zdGVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbW9uc3RlclNlY29uZDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9jdXJyZW50TW9uc3RlcjogTW9uc3RlcjtcclxuICAgIHB1YmxpYyBnZXQgY3VycmVudE1vbnN0ZXIoKTogTW9uc3RlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2N1cnJlbnRNb25zdGVyO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBfZGVmZW5zZU1vbnN0ZXI6IE1vbnN0ZXI7XHJcbiAgICBwdWJsaWMgZ2V0IGRlZmVuc2VNb25zdGVyKCk6IE1vbnN0ZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9kZWZlbnNlTW9uc3RlcjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihtb25zdGVyRmlyc3Q6IE1vbnN0ZXIsIG1vbnN0ZXJTZWNvbmQ6IE1vbnN0ZXIpIHtcclxuICAgICAgICB0aGlzLl9tb25zdGVyRmlyc3QgPSBtb25zdGVyRmlyc3Q7XHJcbiAgICAgICAgdGhpcy5fbW9uc3RlclNlY29uZCA9IG1vbnN0ZXJTZWNvbmQ7XHJcbiAgICAgICAgdGhpcy5fY3VycmVudE1vbnN0ZXIgPSBtb25zdGVyRmlyc3Q7XHJcbiAgICAgICAgdGhpcy5fZGVmZW5zZU1vbnN0ZXIgPSBtb25zdGVyU2Vjb25kO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzd2FwKCkge1xyXG4gICAgICAgIFt0aGlzLl9jdXJyZW50TW9uc3RlciwgdGhpcy5fZGVmZW5zZU1vbnN0ZXJdID1cclxuICAgICAgICAgICAgW3RoaXMuZGVmZW5zZU1vbnN0ZXIsIHRoaXMuY3VycmVudE1vbnN0ZXJdO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpc0ZpbmlzaCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tb25zdGVyRmlyc3QuaXNEZWFkKCkgfHwgdGhpcy5tb25zdGVyU2Vjb25kLmlzRGVhZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRXaW5uZXIoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzRmluaXNoKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgICAgICAgcmV0dXJuICh0aGlzLm1vbnN0ZXJGaXJzdC5pc0RlYWQoKSkgPyB0aGlzLm1vbnN0ZXJTZWNvbmQgOlxyXG4gICAgICAgICAgICB0aGlzLm1vbnN0ZXJGaXJzdDtcclxuICAgIH1cclxuXHJcbn0iLCJpbXBvcnQge01vbnN0ZXJ9IGZyb20gXCIuL21vbnN0ZXJcIjtcclxuaW1wb3J0IHtJUmVuZGVyZXJ9IGZyb20gXCIuL2ludGVyZmFjZXNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBGaWdodFJlbmRlcmVyIGltcGxlbWVudHMgSVJlbmRlcmVyIHtcclxuXHJcbiAgICBwcml2YXRlIGdhbWVGaWdodDogSFRNTEVsZW1lbnQ7XHJcbiAgICBwcml2YXRlIG1vbnN0ZXJzOiBbTW9uc3RlciwgTW9uc3Rlcl07XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IE5FU1pCdXR0b25DbGlja0xpc3RlbmVyOiBhbnk7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IE5FU1hCdXR0b25DbGlja0xpc3RlbmVyOiBhbnk7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZ2FtZUZpZ2h0OiBIVE1MRWxlbWVudCwgbW9uc3RlcnM6IFtNb25zdGVyLCBNb25zdGVyXSwgbGlzdGVuZXJfMTogYW55LCBsaXN0ZW5lcl8yOiBhbnkpIHtcclxuICAgICAgICB0aGlzLmdhbWVGaWdodCA9IGdhbWVGaWdodDtcclxuICAgICAgICB0aGlzLm1vbnN0ZXJzID0gbW9uc3RlcnM7XHJcbiAgICAgICAgdGhpcy5ORVNaQnV0dG9uQ2xpY2tMaXN0ZW5lciA9IGxpc3RlbmVyXzE7XHJcbiAgICAgICAgdGhpcy5ORVNYQnV0dG9uQ2xpY2tMaXN0ZW5lciA9IGxpc3RlbmVyXzI7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlbmRlcigpOiB2b2lkIHtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdXBkYXRlKCk6IHZvaWQge1xyXG4gICAgICAgIGxldCBtb25zdGVyc0RpdiA9IHRoaXMuZ2FtZUZpZ2h0LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ21vbnN0ZXJzJylbMF0uY2hpbGRyZW47XHJcbiAgICAgICAgY29uc29sZS5hc3NlcnQobW9uc3RlcnNEaXYubGVuZ3RoID09IHRoaXMubW9uc3RlcnMubGVuZ3RoKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1vbnN0ZXJzRGl2Lmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgIGxldCBzcHJpdGUgPSBtb25zdGVyc0RpdltpXS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzcHJpdGUnKVswXTtcclxuICAgICAgICAgICAgbGV0IGhlYWx0aCA9IG1vbnN0ZXJzRGl2W2ldLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2hlYWx0aCcpWzBdO1xyXG4gICAgICAgICAgICBsZXQgZGVmZW5zZSA9IG1vbnN0ZXJzRGl2W2ldLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2RlZmVuc2UnKVswXTtcclxuXHJcbiAgICAgICAgICAgIHNwcml0ZS5jbGFzc05hbWUgPSBgc3ByaXRlICR7dGhpcy5tb25zdGVyc1tpXS5jc3NDbGFzc31gO1xyXG4gICAgICAgICAgICBpZiAoaSA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICBzcHJpdGUuY2xhc3NMaXN0LmFkZCgnbWlycm9yWScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGhlYWx0aC5pbm5lckhUTUwgPSBgJHt0aGlzLm1vbnN0ZXJzW2ldLmhlYWx0aH1gO1xyXG4gICAgICAgICAgICBkZWZlbnNlLmlubmVySFRNTCA9IGAke3RoaXMubW9uc3RlcnNbaV0uZGVmZW5zZX1gO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgYnV0dG9ucyA9IHRoaXMuZ2FtZUZpZ2h0LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2FjdGlvbi1idG4nKVswXS5jaGlsZHJlbjtcclxuICAgICAgICBjb25zb2xlLmFzc2VydChidXR0b25zLmxlbmd0aCA9PSAyKTtcclxuICAgICAgICBidXR0b25zWzBdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5ORVNaQnV0dG9uQ2xpY2tMaXN0ZW5lcik7XHJcbiAgICAgICAgYnV0dG9uc1sxXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuTkVTWEJ1dHRvbkNsaWNrTGlzdGVuZXIpO1xyXG4gICAgfVxyXG5cclxufSIsImltcG9ydCB7UGxheWVyfSBmcm9tICcuL3BsYXllcic7XHJcbmltcG9ydCB7TWFwfSBmcm9tICcuL21hcCc7XHJcbmltcG9ydCB7TW92ZU1hbmFnZXJ9IGZyb20gJy4vbW92ZU1hbmFnZXInO1xyXG5pbXBvcnQge0lEcmF3YWJsZUluRmllbGQsIElTY2VuZUluZm99IGZyb20gJy4vaW50ZXJmYWNlcyc7XHJcbmltcG9ydCB7RmlnaHR9IGZyb20gXCIuL2ZpZ2h0XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgR2FtZVN0YXRlIHtcclxuXHJcbiAgICBwdWJsaWMgcGxheWVyOiBQbGF5ZXI7XHJcbiAgICBwdWJsaWMgY3JlYXR1cmVzOiBJRHJhd2FibGVJbkZpZWxkW107XHJcbiAgICBwdWJsaWMgbWFwOiBNYXA7XHJcbiAgICBwdWJsaWMgbW92ZU1hbmFnZXI6IE1vdmVNYW5hZ2VyO1xyXG4gICAgcHVibGljIHNjZW5lczogSVNjZW5lSW5mb1tdO1xyXG4gICAgcHVibGljIGZpZ2h0OiBGaWdodDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwbGF5ZXI6IFBsYXllciwgY3JlYXR1cmVzOiBJRHJhd2FibGVJbkZpZWxkW10pIHtcclxuICAgICAgICB0aGlzLnBsYXllciA9IHBsYXllcjtcclxuICAgICAgICB0aGlzLmNyZWF0dXJlcyA9IGNyZWF0dXJlcztcclxuICAgICAgICB0aGlzLm1hcCA9IG5ldyBNYXAoNSwgNSk7XHJcbiAgICAgICAgdGhpcy5tb3ZlTWFuYWdlciA9IG5ldyBNb3ZlTWFuYWdlcih0aGlzLm1hcCwgdGhpcy5wbGF5ZXIpO1xyXG4gICAgICAgIHRoaXMuc2NlbmVzID0gW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnZmllbGQnLFxyXG4gICAgICAgICAgICAgICAgZWxlbWVudDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWUtZmllbGQnKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnZmlnaHQnLFxyXG4gICAgICAgICAgICAgICAgZWxlbWVudDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWUtZmlnaHQnKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnc2VsZWN0LW1vbnN0ZXInLFxyXG4gICAgICAgICAgICAgICAgZWxlbWVudDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWUtc2VsZWN0LW1vbnN0ZXInKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgICAgIHRoaXMuZmlnaHQgPSBudWxsO1xyXG4gICAgfVxyXG5cclxufSIsImltcG9ydCB7UGxheWVyfSBmcm9tICcuL3BsYXllcic7XHJcbmltcG9ydCB7Q2h1ZGlsYSwgTW9uc3RlciwgUHJpZHVyb2t9IGZyb20gJy4vbW9uc3Rlcic7XHJcbmltcG9ydCB7RmllbGRSZW5kZXJlcn0gZnJvbSAnLi9maWVsZFJlbmRlcmVyJztcclxuaW1wb3J0IHtTY2VuZU1hbmFnZXJ9IGZyb20gJy4vc2NlbmVNYW5hZ2VyJztcclxuaW1wb3J0IHtHYW1lU3RhdGV9IGZyb20gJy4vZ2FtZVN0YXRlJztcclxuaW1wb3J0IHtJMkRDb29yZGluYXRlc30gZnJvbSAnLi9pbnRlcmZhY2VzJztcclxuaW1wb3J0IHtVdGlsc30gZnJvbSBcIi4vdXRpbHNcIjtcclxuaW1wb3J0IHtGaWdodFJlbmRlcmVyfSBmcm9tIFwiLi9maWdodFJlbmRlcmVyXCI7XHJcbmltcG9ydCB7U2VsZWN0TW9uc3RlclJlbmRlcmVyfSBmcm9tICcuL3NlbGVjdE1vbnN0ZXJSZW5kZXJlcidcclxuaW1wb3J0IHtGaWdodH0gZnJvbSAnLi9maWdodCc7XHJcblxyXG4vKiBHbG9iYWwgdmFyaWFibGVzICovXHJcbmNvbnN0IGdhbWVTdGF0ZSA9IG5ldyBHYW1lU3RhdGUoXHJcbiAgICBuZXcgUGxheWVyKFwiU3RldmVcIiwgXCJoZXJvXCIsICdAJywgMCwgMCwgNCwgW25ldyBQcmlkdXJvaygpXSksXHJcbiAgICBbXVxyXG4pO1xyXG5jb25zdCBzY2VuZU1hbmFnZXIgPSBuZXcgU2NlbmVNYW5hZ2VyKGdhbWVTdGF0ZSk7XHJcbmNvbnN0IGZpZWxkUmVuZGVyZXIgPSBuZXcgRmllbGRSZW5kZXJlcihcclxuICAgIGdhbWVTdGF0ZSxcclxuICAgIHNjZW5lTWFuYWdlci5nZXRTY2VuZUluZm8oJ2ZpZWxkJykuZWxlbWVudCxcclxuICAgIGNlbGxDbGlja0xpc3RlbmVyXHJcbik7XHJcbmxldCBmaWdodFJlbmRlcmVyOiBGaWdodFJlbmRlcmVyID0gbnVsbDtcclxubGV0IHNlbGVjdE1vbnN0ZXJSZW5kZXJlcjogU2VsZWN0TW9uc3RlclJlbmRlcmVyID0gbnVsbDtcclxuXHJcbi8qIFByZXBhcmUgZmllbGQgKi9cclxuZmllbGRSZW5kZXJlci5yZW5kZXIoKTtcclxuZmllbGRSZW5kZXJlci51cGRhdGUoKTtcclxuc2NlbmVNYW5hZ2VyLnNob3dTY2VuZSgnZmllbGQnKTtcclxuXHJcbi8qIENsaWNrIExpc3RlbmVyIGZvciBhbGwgY2VsbHMgaW4gZmllbGQgKi9cclxuZnVuY3Rpb24gY2VsbENsaWNrTGlzdGVuZXIoZXZlbnQ6IE1vdXNlRXZlbnQpIHtcclxuXHJcbiAgICBmdW5jdGlvbiBnZXRDb29yZGluYXRlc09mQ2VsbCh0YXJnZXQ6IEV2ZW50VGFyZ2V0KTogSTJEQ29vcmRpbmF0ZXMge1xyXG4gICAgICAgIGxldCBlbGVtZW50ID0gPEhUTUxFbGVtZW50PnRhcmdldDtcclxuICAgICAgICBjb25zdCB0ZCA9IDxIVE1MVGFibGVDZWxsRWxlbWVudD5lbGVtZW50LnBhcmVudEVsZW1lbnQ7XHJcbiAgICAgICAgY29uc3Qgcm93ID0gPEhUTUxUYWJsZVJvd0VsZW1lbnQ+dGQucGFyZW50RWxlbWVudDtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB4OiB0ZC5jZWxsSW5kZXgsXHJcbiAgICAgICAgICAgIHk6IHJvdy5yb3dJbmRleFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjb29yZGluYXRlcyA9IGdldENvb3JkaW5hdGVzT2ZDZWxsKGV2ZW50LnRhcmdldCk7XHJcbiAgICBsZXQgb2xkX2Nvb3JkaW5hdGU6IEkyRENvb3JkaW5hdGVzID0gZ2FtZVN0YXRlLnBsYXllci5nZXRDb29yZGluYXRlcygpO1xyXG4gICAgaWYgKGdhbWVTdGF0ZS5tb3ZlTWFuYWdlci5tb3ZlKGNvb3JkaW5hdGVzKSkge1xyXG4gICAgICAgIGZpZWxkUmVuZGVyZXIudXBkYXRlQ2VsbHMoW1xyXG4gICAgICAgICAgICBvbGRfY29vcmRpbmF0ZSxcclxuICAgICAgICAgICAgZ2FtZVN0YXRlLnBsYXllci5nZXRDb29yZGluYXRlcygpXHJcbiAgICAgICAgXSk7XHJcbiAgICB9IGVsc2UgaWYgKFV0aWxzLnNoYWxsb3dFcXVhbChjb29yZGluYXRlcywgZ2FtZVN0YXRlLnBsYXllci5nZXRDb29yZGluYXRlcygpKSkge1xyXG4gICAgICAgIGlmIChnYW1lU3RhdGUubWFwLmdldENlbGwoY29vcmRpbmF0ZXMpLm1vbnN0ZXIgPT0gbnVsbClcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIHNlbGVjdE1vbnN0ZXJSZW5kZXJlciA9IG5ldyBTZWxlY3RNb25zdGVyUmVuZGVyZXIoXHJcbiAgICAgICAgICAgIHNjZW5lTWFuYWdlci5nZXRTY2VuZUluZm8oJ3NlbGVjdC1tb25zdGVyJykuZWxlbWVudCxcclxuICAgICAgICAgICAgZ2FtZVN0YXRlLnBsYXllcixcclxuICAgICAgICAgICAgT0tCdXR0b25JblNlbGVjdENsaWNrTGlzdGVuZXJcclxuICAgICAgICApXHJcbiAgICAgICAgc2VsZWN0TW9uc3RlclJlbmRlcmVyLnVwZGF0ZSgpO1xyXG4gICAgICAgIHNjZW5lTWFuYWdlci5zaG93U2NlbmUoJ3NlbGVjdC1tb25zdGVyJyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qIENsaWNrIExpc3RlbmVyIGZvciBaIGJ1dHRvbiBpbiBmaWdodCAqL1xyXG5mdW5jdGlvbiBORVNaQnV0dG9uQ2xpY2tMaXN0ZW5lcihldmVudDogTW91c2VFdmVudCkge1xyXG4gICAgY29uc29sZS5sb2coJ2NsaWNrZWQnLCBldmVudC50YXJnZXQpO1xyXG4gICAgZ2FtZVN0YXRlLmZpZ2h0LmRlZmVuc2VNb25zdGVyLmJlQXR0YWNrZWQoZ2FtZVN0YXRlLmZpZ2h0LmN1cnJlbnRNb25zdGVyKTtcclxuICAgIGlmIChnYW1lU3RhdGUuZmlnaHQuaXNGaW5pc2goKSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGdhbWVTdGF0ZS5maWdodC5jdXJyZW50TW9uc3RlciwgIGdhbWVTdGF0ZS5maWdodC5kZWZlbnNlTW9uc3Rlcik7XHJcbiAgICAgICAgZ2FtZVN0YXRlLmZpZ2h0LmN1cnJlbnRNb25zdGVyLkhlYWwoKTtcclxuICAgICAgICBnYW1lU3RhdGUuZmlnaHQuZGVmZW5zZU1vbnN0ZXIuSGVhbCgpO1xyXG4gICAgICAgIGlmIChnYW1lU3RhdGUuZmlnaHQuZ2V0V2lubmVyKCkubG9vdGVkKSB7XHJcbiAgICAgICAgICAgIGdhbWVTdGF0ZS5wbGF5ZXIuYWRkTW9uc3RlcihnYW1lU3RhdGUuZmlnaHQuZGVmZW5zZU1vbnN0ZXIpO1xyXG4gICAgICAgICAgICBnYW1lU3RhdGUuZmlnaHQuZGVmZW5zZU1vbnN0ZXIubG9vdCgpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgYWRkZWQgbW9uc3RlcjogJHtnYW1lU3RhdGUuZmlnaHQuZGVmZW5zZU1vbnN0ZXIuZ2V0U3RyaW5nKCl9YClcclxuICAgICAgICAgICAgZ2FtZVN0YXRlLm1hcC5nZXRDZWxsKFxyXG4gICAgICAgICAgICAgICAgZ2FtZVN0YXRlLnBsYXllci5nZXRDb29yZGluYXRlcygpXHJcbiAgICAgICAgICAgICkubG9vdCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGdhbWVTdGF0ZS5wbGF5ZXIuZGVsZXRlTW9uc3RlcihnYW1lU3RhdGUuZmlnaHQuY3VycmVudE1vbnN0ZXIpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgZGVsZXRlZDogJHtnYW1lU3RhdGUuZmlnaHQuY3VycmVudE1vbnN0ZXIuZ2V0U3RyaW5nKCl9YClcclxuICAgICAgICB9XHJcbiAgICAgICAgc2NlbmVNYW5hZ2VyLnNob3dTY2VuZSgnZmllbGQnKTtcclxuICAgIH1cclxuICAgIGdhbWVTdGF0ZS5maWdodC5zd2FwKCk7XHJcbiAgICBmaWdodFJlbmRlcmVyLnVwZGF0ZSgpO1xyXG59XHJcblxyXG4vKiBDbGljayBMaXN0ZW5lciBmb3IgWCBidXR0b24gaW4gZmlnaHQgKi9cclxuZnVuY3Rpb24gTkVTWEJ1dHRvbkNsaWNrTGlzdGVuZXIoZXZlbnQ6IE1vdXNlRXZlbnQpIHtcclxuICAgIGdhbWVTdGF0ZS5maWdodC5jdXJyZW50TW9uc3Rlci5kZWZlbnNlSGltc2VsZigpO1xyXG4gICAgZ2FtZVN0YXRlLmZpZ2h0LnN3YXAoKTtcclxuICAgIGZpZ2h0UmVuZGVyZXIudXBkYXRlKCk7XHJcbn1cclxuXHJcbi8qIENsaWNrIExpc3RlbmVyIGZvciBPSyBidXR0b24gaW4gc2VsZWN0LW1vbnN0ZXIgKi9cclxuZnVuY3Rpb24gT0tCdXR0b25JblNlbGVjdENsaWNrTGlzdGVuZXIoZXZlbnQ6IE1vdXNlRXZlbnQpIHtcclxuICAgIHNjZW5lTWFuYWdlci5zaG93U2NlbmUoJ2ZpZ2h0Jyk7XHJcbiAgICBsZXQgbW9uc3RlcnM6IFtNb25zdGVyLCBNb25zdGVyXSA9IFtcclxuICAgICAgICBzZWxlY3RNb25zdGVyUmVuZGVyZXIuZ2V0Q2hvb3Nlbk1vbnN0ZXIoKSxcclxuICAgICAgICBnYW1lU3RhdGUubWFwLmdldENlbGwoZ2FtZVN0YXRlLnBsYXllci5nZXRDb29yZGluYXRlcygpKS5tb25zdGVyXHJcbiAgICBdXHJcbiAgICBmaWdodFJlbmRlcmVyID0gbmV3IEZpZ2h0UmVuZGVyZXIoXHJcbiAgICAgICAgc2NlbmVNYW5hZ2VyLmdldFNjZW5lSW5mbygnZmlnaHQnKS5lbGVtZW50LFxyXG4gICAgICAgIG1vbnN0ZXJzLFxyXG4gICAgICAgIE5FU1pCdXR0b25DbGlja0xpc3RlbmVyLFxyXG4gICAgICAgIE5FU1hCdXR0b25DbGlja0xpc3RlbmVyXHJcbiAgICApO1xyXG4gICAgZmlnaHRSZW5kZXJlci51cGRhdGUoKTtcclxuICAgIGdhbWVTdGF0ZS5maWdodCA9IG5ldyBGaWdodCguLi5tb25zdGVycyk7XHJcbn1cclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgKGV2ZW50KSA9PiB7XHJcbiAgICBjb25zdCBrZXlOYW1lID0gZXZlbnQua2V5O1xyXG4gICAgaWYgKGtleU5hbWUudG9Mb3dlckNhc2UoKSA9PSAnMScpIHtcclxuICAgICAgICBzY2VuZU1hbmFnZXIuc2hvd1NjZW5lKCdmaWVsZCcpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoa2V5TmFtZS50b0xvd2VyQ2FzZSgpID09ICcyJykge1xyXG4gICAgICAgIHNjZW5lTWFuYWdlci5zaG93U2NlbmUoJ2ZpZ2h0Jyk7XHJcbiAgICB9XHJcbn0pOyIsImltcG9ydCB7Q2VsbCwgTGFuZENlbGwsIE1vdW50Q2VsbH0gZnJvbSAnLi9jZWxsJztcclxuaW1wb3J0IHtJMkRDb29yZGluYXRlc30gZnJvbSAnLi9pbnRlcmZhY2VzJztcclxuaW1wb3J0IHtVdGlsc30gZnJvbSAnLi91dGlscyc7XHJcblxyXG5leHBvcnQgY2xhc3MgTWFwIHtcclxuXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IHNpemVYOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IHNpemVZOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGRhdGE6IENlbGxbXVtdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHNpemVYOiBudW1iZXIsIHNpemVZOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnNpemVYID0gc2l6ZVg7XHJcbiAgICAgICAgdGhpcy5zaXplWSA9IHNpemVZO1xyXG4gICAgICAgIHRoaXMuZGF0YSA9IE1hcC5nZW5lcmF0ZShzaXplWCwgc2l6ZVkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRDZWxsKGNvb3JkaW5hdGVzOiBJMkRDb29yZGluYXRlcyk6IENlbGwge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRhdGFbY29vcmRpbmF0ZXMueV1bY29vcmRpbmF0ZXMueF07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFNpemUoKTogeyB4OiBudW1iZXIsIHk6IG51bWJlciB9IHtcclxuICAgICAgICByZXR1cm4geyB4OiB0aGlzLnNpemVYLCB5OiB0aGlzLnNpemVZIH07XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdlbmVyYXRlKHNpemVYOiBudW1iZXIsIHNpemVZOiBudW1iZXIpOiBDZWxsW11bXSB7XHJcbiAgICAgICAgY29uc3QgZGVmYXVsdENlbGwgPSBMYW5kQ2VsbDtcclxuICAgICAgICBsZXQgcG9zc2libGVDZWxscyA9IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgb2JqOiBNb3VudENlbGwsXHJcbiAgICAgICAgICAgICAgICByYW5kOiB7bWluOiA1LCBtYXg6IDEwfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGBNYXA6IGdlbmVyYXRlLCAoJHtzaXplWH0sICR7c2l6ZVl9KWApO1xyXG4gICAgICAgIGNvbnN0IGRhdGE6IENlbGxbXVtdID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCBzaXplWTsgKyt5KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJvdzogQ2VsbFtdID0gW107XHJcbiAgICAgICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgc2l6ZVg7ICsreCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHJhbmROdW0gPSBVdGlscy5yYW5kb20oMSwgMTAwKTtcclxuICAgICAgICAgICAgICAgIGxldCBvYmplY3RGb3JDcmVhdGUgPSBudWxsO1xyXG5cclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcG9zc2libGVDZWxscy5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChVdGlscy5pc0luUmFuZ2UocmFuZE51bSwgcG9zc2libGVDZWxsc1tpXS5yYW5kLm1pbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zc2libGVDZWxsc1tpXS5yYW5kLm1heCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0Rm9yQ3JlYXRlID0gcG9zc2libGVDZWxsc1tpXS5vYmo7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIW9iamVjdEZvckNyZWF0ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG9iamVjdEZvckNyZWF0ZSA9IGRlZmF1bHRDZWxsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICByb3cucHVzaChuZXcgb2JqZWN0Rm9yQ3JlYXRlKCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRhdGEucHVzaChyb3cpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyhgTWFwOiBnZW5lcmF0ZWQsICgke3NpemVYfSwgJHtzaXplWX0pYCk7XHJcbiAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge0NyZWF0dXJlfSBmcm9tIFwiLi9jcmVhdHVyZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1vbnN0ZXIgZXh0ZW5kcyBDcmVhdHVyZSB7XHJcblxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfdHlwZTogc3RyaW5nO1xyXG4gICAgcHVibGljIGdldCB0eXBlKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3R5cGU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfbWF4SGVhdGg6IG51bWJlcjtcclxuICAgIHB1YmxpYyBnZXQgbWF4SGVhdGgoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbWF4SGVhdGg7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfaGVhbHRoOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgZ2V0IGhlYWx0aCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9oZWFsdGg7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfZGVmZW5zZTogbnVtYmVyO1xyXG4gICAgcHVibGljIGdldCBkZWZlbnNlKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZmVuc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfYXR0YWNrOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgZ2V0IGF0dGFjaygpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9hdHRhY2s7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfYXR0YWNrQm9vc3RlcjogbnVtYmVyO1xyXG4gICAgcHVibGljIGdldCBhdHRhY2tCb29zdGVyKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2F0dGFja0Jvb3N0ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfbG9vdGVkOiBib29sZWFuO1xyXG4gICAgcHVibGljIGdldCBsb290ZWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xvb3RlZDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIGNzc0NsYXNzOiBzdHJpbmcsIGxhYmVsOiBzdHJpbmcsIHR5cGU6IHN0cmluZyxcclxuICAgICAgICBoZWFsdGg6IG51bWJlciwgZGVmZW5zZTogbnVtYmVyLCBhdHRhY2s6IG51bWJlcixcclxuICAgICAgICBhdHRhY2tCb29zdGVyOiBudW1iZXIsIGxvb3RlZDogYm9vbGVhbikge1xyXG4gICAgICAgIHN1cGVyKG5hbWUsIGNzc0NsYXNzLCBsYWJlbCk7XHJcbiAgICAgICAgdGhpcy5fdHlwZSA9IHR5cGU7XHJcbiAgICAgICAgdGhpcy5fbWF4SGVhdGggPSBoZWFsdGg7XHJcbiAgICAgICAgdGhpcy5faGVhbHRoID0gaGVhbHRoO1xyXG4gICAgICAgIHRoaXMuX2RlZmVuc2UgPSBkZWZlbnNlO1xyXG4gICAgICAgIHRoaXMuX2F0dGFjayA9IGF0dGFjaztcclxuICAgICAgICB0aGlzLl9hdHRhY2tCb29zdGVyID0gYXR0YWNrQm9vc3RlcjtcclxuICAgICAgICB0aGlzLl9sb290ZWQgPSBsb290ZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGJlQXR0YWNrZWQoZW5lbXk6IE1vbnN0ZXIpIHtcclxuICAgICAgICBjb25zdCBkYW1hZ2UgPSB0aGlzLmRlZmVuc2UgLSAoZW5lbXkuYXR0YWNrICsgZW5lbXkuYXR0YWNrQm9vc3Rlcik7XHJcbiAgICAgICAgaWYgKGRhbWFnZSA+PSAwKXtcclxuICAgICAgICAgICAgdGhpcy5faGVhbHRoIC09IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMuX2hlYWx0aCArPSBkYW1hZ2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkZWZlbnNlSGltc2VsZigpIHtcclxuICAgICAgICB0aGlzLl9kZWZlbnNlICs9IDU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGlzRGVhZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faGVhbHRoIDw9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIEhlYWwoKSB7XHJcbiAgICAgICB0aGlzLl9oZWFsdGggPSB0aGlzLm1heEhlYXRoO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRTdHJpbmcoKSB7XHJcbiAgICAgICAgcmV0dXJuIGAke3RoaXMubmFtZX0sIGhwOiAke3RoaXMuaGVhbHRofSwgZGVmZW5jZTogJHt0aGlzLmRlZmVuc2V9LCBhdHRhY2s6ICR7dGhpcy5hdHRhY2t9YDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbG9vdCgpIHtcclxuICAgICAgICB0aGlzLl9sb290ZWQgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFByaWR1cm9rIGV4dGVuZHMgTW9uc3RlciB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoJ1ByaWR1cm9rJywgJ3ByaWR1cm9rJywgJ3AnLCAncmVkJywgMTIwLCA1LCAzMCwgMzAsIHRydWUpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ2h1ZGlsYSBleHRlbmRzIE1vbnN0ZXIge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCdDaHVkaWxhJywgJ2NodWRpbGEnLCAnYycsICdyZWQnLCAxMDAsIDQsIDIwLCAxMCwgZmFsc2UpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtJMkRDb29yZGluYXRlc30gZnJvbSAnLi9pbnRlcmZhY2VzJztcclxuaW1wb3J0IHtNYXB9IGZyb20gJy4vbWFwJztcclxuaW1wb3J0IHtQbGF5ZXJ9IGZyb20gJy4vcGxheWVyJztcclxuXHJcbmV4cG9ydCBjbGFzcyBNb3ZlTWFuYWdlciB7XHJcblxyXG4gICAgcHJpdmF0ZSBwbGF5ZXI6IFBsYXllcjtcclxuICAgIHByaXZhdGUgbWFwOiBNYXA7XHJcblxyXG4gICAgY29uc3RydWN0b3IobWFwOiBNYXAsIHBsYXllcjogUGxheWVyKSB7XHJcbiAgICAgICAgdGhpcy5tYXAgPSBtYXA7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSBwbGF5ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDb29yZGluYXRlcyBhcmUgY29ycmVjdCBpZiB0aGUgbWFwIHJhbmdlIGlzIGluY2x1ZGVkXHJcbiAgICAgKiBhbmQgcG9pbnQgdG8gYW4gYWRqYWNlbnQgY2VsbCBob3Jpem9udGFsbHkgb3IgdmVydGljYWxseVxyXG4gICAgICogQHJldHVybnNcclxuICAgICAqIEBwYXJhbSBjb29yZGluYXRlc1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgaXNDb3JyZWN0Q29vcmRpbmF0ZXMoY29vcmRpbmF0ZXM6IEkyRENvb3JkaW5hdGVzKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuICgwIDw9IGNvb3JkaW5hdGVzLnggJiYgY29vcmRpbmF0ZXMueCA8IHRoaXMubWFwLmdldFNpemUoKS54KSAmJlxyXG4gICAgICAgICAgICAgICAoMCA8PSBjb29yZGluYXRlcy55ICYmIGNvb3JkaW5hdGVzLnkgPCB0aGlzLm1hcC5nZXRTaXplKCkueSkgJiZcclxuICAgICAgICAgICAgICAgKE1hdGguYWJzKGNvb3JkaW5hdGVzLnggLSB0aGlzLnBsYXllci5nZXRDb29yZGluYXRlcygpLngpICtcclxuICAgICAgICAgICAgICAgIE1hdGguYWJzKGNvb3JkaW5hdGVzLnkgLSB0aGlzLnBsYXllci5nZXRDb29yZGluYXRlcygpLnkpID09IDEpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBtb3ZlKGNvb3JkaW5hdGVzOiBJMkRDb29yZGluYXRlcyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICh0aGlzLmlzQ29ycmVjdENvb3JkaW5hdGVzKGNvb3JkaW5hdGVzKSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgJHt0aGlzLnBsYXllci5uYW1lfSBtb3ZlZCB0byAoJHtjb29yZGluYXRlcy54fSwgJHtjb29yZGluYXRlcy55fSlgKTtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIubW92ZShjb29yZGluYXRlcyk7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGAke3RoaXMucGxheWVyLm5hbWV9IG5vdCBtb3ZlZCB0byAoJHtjb29yZGluYXRlcy54fSwgJHtjb29yZGluYXRlcy55fSlgKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImltcG9ydCB7Q3JlYXR1cmV9IGZyb20gXCIuL2NyZWF0dXJlXCI7XHJcbmltcG9ydCB7TW9uc3Rlcn0gZnJvbSBcIi4vbW9uc3RlclwiO1xyXG5pbXBvcnQge0kyRENvb3JkaW5hdGVzLCBJRHJhd2FibGVJbkZpZWxkfSBmcm9tIFwiLi9pbnRlcmZhY2VzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUGxheWVyIGV4dGVuZHMgQ3JlYXR1cmUgaW1wbGVtZW50cyBJRHJhd2FibGVJbkZpZWxkIHtcclxuXHJcbiAgICBwcml2YXRlIHg6IG51bWJlcjtcclxuICAgIHByaXZhdGUgeTogbnVtYmVyO1xyXG5cclxuICAgIHByaXZhdGUgcmVhZG9ubHkgX2F2YWlsYWJsZU1vdmVzOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgZ2V0IGF2YWlsYWJsZU1vdmVzKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2F2YWlsYWJsZU1vdmVzO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2F2YWlsYWJsZU1vbnN0ZXJzOiBNb25zdGVyW107XHJcbiAgICBwdWJsaWMgZ2V0IGF2YWlsYWJsZU1vbnRlcnMoKTogTW9uc3RlcltdIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYXZhaWxhYmxlTW9uc3RlcnM7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBjc3NDbGFzczogc3RyaW5nLCBsYWJlbDogc3RyaW5nLFxyXG4gICAgICAgIHg6IG51bWJlciwgeTogbnVtYmVyLCBhdmFpbGFibGVNb3ZlczogbnVtYmVyLFxyXG4gICAgICAgIGF2YWlsYWJsZU1vbnN0ZXJzOiBNb25zdGVyW10pIHtcclxuICAgICAgICBzdXBlcihuYW1lLCBjc3NDbGFzcywgbGFiZWwpO1xyXG4gICAgICAgIHRoaXMueCA9IHg7XHJcbiAgICAgICAgdGhpcy55ID0geTtcclxuICAgICAgICB0aGlzLl9hdmFpbGFibGVNb3ZlcyA9IGF2YWlsYWJsZU1vdmVzO1xyXG4gICAgICAgIHRoaXMuX2F2YWlsYWJsZU1vbnN0ZXJzID0gYXZhaWxhYmxlTW9uc3RlcnM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG1vdmUoY29vcmRpbmF0ZXM6IEkyRENvb3JkaW5hdGVzKSB7XHJcbiAgICAgICAgdGhpcy54ID0gY29vcmRpbmF0ZXMueDtcclxuICAgICAgICB0aGlzLnkgPSBjb29yZGluYXRlcy55O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRDb29yZGluYXRlcygpOiBJMkRDb29yZGluYXRlcyAge1xyXG4gICAgICAgIHJldHVybiB7IHg6IHRoaXMueCwgeTogdGhpcy55IH07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFkZE1vbnN0ZXIobW9uc3RlcjogTW9uc3Rlcikge1xyXG4gICAgICAgIHRoaXMuX2F2YWlsYWJsZU1vbnN0ZXJzLnB1c2gobW9uc3Rlcik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRlbGV0ZU1vbnN0ZXIobW9uc3RlcjogTW9uc3Rlcikge1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5fYXZhaWxhYmxlTW9uc3RlcnMuaW5kZXhPZihtb25zdGVyKTtcclxuXHJcbiAgICAgICAgdGhpcy5fYXZhaWxhYmxlTW9uc3RlcnMgPSAoaW5kZXggPiAtMSkgPyBbXHJcbiAgICAgICAgICAgIC4uLnRoaXMuX2F2YWlsYWJsZU1vbnN0ZXJzLnNsaWNlKDAsIGluZGV4KSxcclxuICAgICAgICAgICAgLi4udGhpcy5fYXZhaWxhYmxlTW9uc3RlcnMuc2xpY2UoaW5kZXggKyAxKVxyXG4gICAgICAgIF0gOiB0aGlzLl9hdmFpbGFibGVNb25zdGVycztcclxuICAgIH1cclxuXHJcbn0iLCJpbXBvcnQge0lTY2VuZUluZm99IGZyb20gJy4vaW50ZXJmYWNlcyc7XHJcbmltcG9ydCB7R2FtZVN0YXRlfSBmcm9tICcuL2dhbWVTdGF0ZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgU2NlbmVNYW5hZ2VyIHtcclxuXHJcbiAgICBnYW1lU3RhdGU6IEdhbWVTdGF0ZTtcclxuICAgIF9jdXJyZW50U2NlbmU6IHN0cmluZztcclxuXHJcbiAgICBwdWJsaWMgZ2V0IGN1cnJlbnRTY2VuZSgpOiBJU2NlbmVJbmZvIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRTY2VuZUluZm8odGhpcy5fY3VycmVudFNjZW5lKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lU3RhdGU6IEdhbWVTdGF0ZSkge1xyXG4gICAgICAgIHRoaXMuZ2FtZVN0YXRlID0gZ2FtZVN0YXRlO1xyXG4gICAgICAgIHRoaXMuX2N1cnJlbnRTY2VuZSA9IFwiXCI7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFNjZW5lSW5mbyhuYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICBsZXQgc2NlbmVzID0gdGhpcy5nYW1lU3RhdGUuc2NlbmVzO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2NlbmVzLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgIGlmIChzY2VuZXNbaV0ubmFtZSA9PSBuYW1lKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc2NlbmVzW2ldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoZSBzY2VuZSBkb2VzIG5vdCBleGlzdFwiKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2hvd1NjZW5lKG5hbWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX2N1cnJlbnRTY2VuZSA9IG5hbWU7XHJcbiAgICAgICAgbGV0IHNjZW5lID0gdGhpcy5nZXRTY2VuZUluZm8obmFtZSk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmdhbWVTdGF0ZS5zY2VuZXMubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgICAgdGhpcy5nYW1lU3RhdGUuc2NlbmVzW2ldLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzY2VuZS5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxuICAgIH1cclxuXHJcbn0iLCJpbXBvcnQge0lSZW5kZXJlcn0gZnJvbSBcIi4vaW50ZXJmYWNlc1wiO1xyXG5pbXBvcnQge1BsYXllcn0gZnJvbSBcIi4vcGxheWVyXCI7XHJcbmltcG9ydCB7TW9uc3Rlcn0gZnJvbSBcIi4vbW9uc3RlclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNlbGVjdE1vbnN0ZXJSZW5kZXJlciBpbXBsZW1lbnRzIElSZW5kZXJlciB7XHJcbiAgICBwcml2YXRlIGRvbUVsZW1lbnQ6IEhUTUxFbGVtZW50O1xyXG4gICAgcHJpdmF0ZSBwbGF5ZXI6IFBsYXllcjtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgT2tCdXR0b25MaXN0ZW5lcjogYW55O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGRvbUVsZW1lbnQ6IEhUTUxFbGVtZW50LCBwbGF5ZXI6IFBsYXllciwgT2tCdXR0b25MaXN0ZW5lcjogYW55KSB7XHJcbiAgICAgICAgdGhpcy5kb21FbGVtZW50ID0gZG9tRWxlbWVudDtcclxuICAgICAgICB0aGlzLnBsYXllciA9IHBsYXllcjtcclxuICAgICAgICB0aGlzLk9rQnV0dG9uTGlzdGVuZXIgPSBPa0J1dHRvbkxpc3RlbmVyO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZW5kZXIoKTogdm9pZCB7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHVwZGF0ZSgpOiB2b2lkIHtcclxuICAgICAgICBsZXQgc2VsZWN0ID0gdGhpcy5kb21FbGVtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3NlbGVjdCcpWzBdO1xyXG5cclxuICAgICAgICBzZWxlY3QuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucGxheWVyLmF2YWlsYWJsZU1vbnRlcnMubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgICAgbGV0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG4gICAgICAgICAgICBvcHRpb24udmFsdWUgPSBgJHtpfWA7XHJcbiAgICAgICAgICAgIG9wdGlvbi5pbm5lclRleHQgPSB0aGlzLnBsYXllci5hdmFpbGFibGVNb250ZXJzW2ldLmdldFN0cmluZygpO1xyXG4gICAgICAgICAgICBzZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBPa0J1dHRvbiA9IHRoaXMuZG9tRWxlbWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdvaycpWzBdO1xyXG4gICAgICAgIE9rQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5Pa0J1dHRvbkxpc3RlbmVyKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0Q2hvb3Nlbk1vbnN0ZXIoKTogTW9uc3RlciB7XHJcbiAgICAgICAgbGV0IHNlbGVjdCA9IDxIVE1MU2VsZWN0RWxlbWVudD50aGlzLmRvbUVsZW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc2VsZWN0JylbMF07XHJcbiAgICAgICAgbGV0IGluZGV4ID0gc2VsZWN0LnZhbHVlO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGluZGV4KTtcclxuICAgICAgICByZXR1cm4gdGhpcy5wbGF5ZXIuYXZhaWxhYmxlTW9udGVyc1tcclxuICAgICAgICAgICAgcGFyc2VJbnQoaW5kZXgpXHJcbiAgICAgICAgICAgIF07XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgY2xhc3MgVXRpbHMge1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIGEgXHJcbiAgICAgKiBAcGFyYW0gYiBcclxuICAgICAqIEByZXR1cm5zIHJhbmRvbSBudW1iZXIgYmV0d2VlbiBhIGFuZCBiLCBpbmNsdXNpdmVcclxuICAgICAqL1xyXG4gICAgc3RhdGljIHJhbmRvbShhOiBudW1iZXIsIGI6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChiIC0gYSArIDEpKSArIGE7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGlzSW5SYW5nZSh4OiBudW1iZXIsIG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcikge1xyXG4gICAgICAgIHJldHVybiBtaW4gPD0geCAmJiB4IDw9IG1heDtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgcmFuZG9tSXRlbUZyb21BcnJheShhcnI6IGFueVtdKTogYW55e1xyXG4gICAgICAgIHJldHVybiBhcnJbdGhpcy5yYW5kb20oMCwgYXJyLmxlbmd0aCAtIDEpXTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgc2hhbGxvd0VxdWFsKGE6IGFueSwgYjogYW55KTogYm9vbGVhbiB7XHJcbiAgICAgICAgY29uc3Qga2V5czEgPSBPYmplY3Qua2V5cyhhKTtcclxuICAgICAgICBjb25zdCBrZXlzMiA9IE9iamVjdC5rZXlzKGIpO1xyXG5cclxuICAgICAgICBpZiAoa2V5czEubGVuZ3RoICE9PSBrZXlzMi5sZW5ndGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yIChsZXQga2V5IG9mIGtleXMxKSB7XHJcbiAgICAgICAgICAgIGlmIChhW2tleV0gIT09IGJba2V5XSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxufSJdfQ==
