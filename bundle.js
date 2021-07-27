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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvc2NyaXB0cy9jZWxsLnRzIiwic3JjL3NjcmlwdHMvY3JlYXR1cmUudHMiLCJzcmMvc2NyaXB0cy9maWVsZFJlbmRlcmVyLnRzIiwic3JjL3NjcmlwdHMvZmlnaHQudHMiLCJzcmMvc2NyaXB0cy9maWdodFJlbmRlcmVyLnRzIiwic3JjL3NjcmlwdHMvZ2FtZVN0YXRlLnRzIiwic3JjL3NjcmlwdHMvbWFpbi50cyIsInNyYy9zY3JpcHRzL21hcC50cyIsInNyYy9zY3JpcHRzL21vbnN0ZXIudHMiLCJzcmMvc2NyaXB0cy9tb3ZlTWFuYWdlci50cyIsInNyYy9zY3JpcHRzL3BsYXllci50cyIsInNyYy9zY3JpcHRzL3NjZW5lTWFuYWdlci50cyIsInNyYy9zY3JpcHRzL3NlbGVjdE1vbnN0ZXJSZW5kZXJlci50cyIsInNyYy9zY3JpcHRzL3V0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUEscUNBQTJDO0FBQzNDLGlDQUE4QjtBQUc5QjtJQStCSSxjQUFZLEtBQWEsRUFBRSxRQUFnQixFQUFFLElBQVksRUFDakQsb0JBQXVDLEVBQ3ZDLGlCQUE0QjtRQUNoQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwQixJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztRQUMxQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUNsQixJQUFJLENBQUMsZUFBZSxHQUFHLGFBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO1FBQ3RFLElBQUksQ0FBQyxTQUFTLEdBQUcsYUFBSyxDQUFDLG1CQUFtQixDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDbEUsQ0FBQztJQXBDRCxzQkFBVyx1QkFBSzthQUFoQjtZQUNJLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztR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OiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiaW1wb3J0IHtDaHVkaWxhLCBNb25zdGVyfSBmcm9tICcuL21vbnN0ZXInO1xyXG5pbXBvcnQge1V0aWxzfSBmcm9tICcuL3V0aWxzJztcclxuaW1wb3J0IHtJSGFzQ3NzQ2xhc3N9IGZyb20gJy4vaW50ZXJmYWNlcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgQ2VsbCBpbXBsZW1lbnRzIElIYXNDc3NDbGFzcyB7XHJcblxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfbGFiZWw6IHN0cmluZztcclxuICAgIHB1YmxpYyBnZXQgbGFiZWwoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbGFiZWw7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfY3NzQ2xhc3M6IHN0cmluZztcclxuICAgIHB1YmxpYyBnZXQgY3NzQ2xhc3MoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY3NzQ2xhc3M7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfdHlwZTogc3RyaW5nO1xyXG4gICAgcHVibGljIGdldCB0eXBlKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3R5cGU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfdHJhbnNpdGlvbkNvc3Q6IG51bWJlcjtcclxuICAgIHB1YmxpYyBnZXQgdHJhbnNpdGlvbkNvc3QoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdHJhbnNpdGlvbkNvc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfbW9uc3RlcnM6IE1vbnN0ZXI7XHJcbiAgICBwdWJsaWMgZ2V0IG1vbnN0ZXIoKTogTW9uc3RlcntcclxuICAgICAgICByZXR1cm4gdGhpcy5fbW9uc3RlcnM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGxvb3QoKSB7XHJcbiAgICAgICAgdGhpcy5fbW9uc3RlcnMgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKGxhYmVsOiBzdHJpbmcsIGNzc0NsYXNzOiBzdHJpbmcsIHR5cGU6IHN0cmluZyxcclxuICAgICAgICAgICAgdHJhbnNpdGlvbkNvc3RNaW5NYXggOiBbbnVtYmVyLCBudW1iZXJdLFxyXG4gICAgICAgICAgICBwb3NzaWJsZUNyZWF0dXJlczogTW9uc3RlcltdKSB7XHJcbiAgICAgICAgdGhpcy5fbGFiZWwgPSBsYWJlbDtcclxuICAgICAgICB0aGlzLl9jc3NDbGFzcyA9IGNzc0NsYXNzO1xyXG4gICAgICAgIHRoaXMuX3R5cGUgPSB0eXBlO1xyXG4gICAgICAgIHRoaXMuX3RyYW5zaXRpb25Db3N0ID0gVXRpbHMucmFuZG9tLmFwcGx5KHRoaXMsIHRyYW5zaXRpb25Db3N0TWluTWF4KTtcclxuICAgICAgICB0aGlzLl9tb25zdGVycyA9IFV0aWxzLnJhbmRvbUl0ZW1Gcm9tQXJyYXkocG9zc2libGVDcmVhdHVyZXMpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIExhbmRDZWxsIGV4dGVuZHMgQ2VsbCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoJ2wnLCAnbGFuZCcsICcnLCBbMSwgMl0sIFtuZXcgQ2h1ZGlsYSgpXSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBNb3VudENlbGwgZXh0ZW5kcyBDZWxsIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcignbScsICdtb3VudCcsICcnLCBbMywgNV0sIFtuZXcgQ2h1ZGlsYSgpXSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge0lIYXNDc3NDbGFzc30gZnJvbSBcIi4vaW50ZXJmYWNlc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIENyZWF0dXJlIGltcGxlbWVudHMgSUhhc0Nzc0NsYXNzIHtcclxuICAgIFxyXG4gICAgcHJpdmF0ZSBfbmFtZTogc3RyaW5nO1xyXG4gICAgcHVibGljIGdldCBuYW1lKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX25hbWU7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0IG5hbWUodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX25hbWUgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9jc3NDbGFzczogc3RyaW5nO1xyXG4gICAgcHVibGljIGdldCBjc3NDbGFzcygpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jc3NDbGFzcztcclxuICAgIH1cclxuXHJcbiAgICAvLyBfbGFiZWwgaXMgc29tZSBjaGFyLCB1c2VkIGZvciBkZWJ1Z2dpbmdcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgX2xhYmVsOiBzdHJpbmc7XHJcblxyXG4gICAgcHVibGljIGdldCBsYWJlbCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9sYWJlbDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIGNzc0NsYXNzIDogc3RyaW5nLCBsYWJlbDogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fbmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5fY3NzQ2xhc3MgPSBjc3NDbGFzcztcclxuICAgICAgICB0aGlzLl9sYWJlbCA9IGxhYmVsO1xyXG4gICAgfVxyXG5cclxufSIsImltcG9ydCB7TWFwfSBmcm9tICcuL21hcCc7XHJcbmltcG9ydCB7STJEQ29vcmRpbmF0ZXMsIElIYXNDc3NDbGFzcywgSVJlbmRlcmVyfSBmcm9tICcuL2ludGVyZmFjZXMnO1xyXG5pbXBvcnQge0dhbWVTdGF0ZX0gZnJvbSAnLi9nYW1lU3RhdGUnO1xyXG5pbXBvcnQge1V0aWxzfSBmcm9tIFwiLi91dGlsc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEZpZWxkUmVuZGVyZXIgaW1wbGVtZW50cyBJUmVuZGVyZXIge1xyXG5cclxuICAgIHByaXZhdGUgbWFwOiBNYXA7XHJcbiAgICBwcml2YXRlIGdhbWVTdGF0ZTogR2FtZVN0YXRlO1xyXG4gICAgcHJpdmF0ZSBnYW1lRmllbGQ6IEhUTUxFbGVtZW50O1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBtb3VzZUxpc3RlbmVyOiBhbnk7XHJcbiAgICBcclxuICAgIGNvbnN0cnVjdG9yKGdhbWVTdGF0ZTogR2FtZVN0YXRlLCBnYW1lRmllbGQ6IEhUTUxFbGVtZW50LCBtb3VzZUxpc3RlbmVyOiBhbnkpIHtcclxuICAgICAgICB0aGlzLm1hcCA9IGdhbWVTdGF0ZS5tYXA7XHJcbiAgICAgICAgdGhpcy5nYW1lU3RhdGUgPSBnYW1lU3RhdGU7XHJcbiAgICAgICAgdGhpcy5nYW1lRmllbGQgPSBnYW1lRmllbGQ7XHJcbiAgICAgICAgdGhpcy5tb3VzZUxpc3RlbmVyID0gbW91c2VMaXN0ZW5lcjsgXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlbmRlcigpIHtcclxuICAgICAgICBsZXQgdGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0YWJsZScpO1xyXG4gICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgdGhpcy5tYXAuZ2V0U2l6ZSgpLnk7ICsreSkge1xyXG4gICAgICAgICAgICBsZXQgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggIDwgdGhpcy5tYXAuZ2V0U2l6ZSgpLng7ICsreCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xyXG4gICAgICAgICAgICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMubW91c2VMaXN0ZW5lcik7XHJcbiAgICAgICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQoY2VsbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGFibGUuYXBwZW5kQ2hpbGQocm93KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5nYW1lRmllbGQuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICB0aGlzLmdhbWVGaWVsZC5hcHBlbmRDaGlsZCh0YWJsZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRUYWJsZSgpOiBIVE1MVGFibGVFbGVtZW50IHtcclxuICAgICAgICByZXR1cm4gPEhUTUxUYWJsZUVsZW1lbnQ+IHRoaXMuZ2FtZUZpZWxkLmNoaWxkcmVuWzBdO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0Q2VsbChjb29yZGluYXRlczogSTJEQ29vcmRpbmF0ZXMpOiBFbGVtZW50IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRUYWJsZSgpLnJvd3NbY29vcmRpbmF0ZXMueV0uY2VsbHNbY29vcmRpbmF0ZXMueF07XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldEhUTUxTcHJpdGUob2JqOiBJSGFzQ3NzQ2xhc3MpOiBIVE1MRWxlbWVudCB7XHJcbiAgICAgICAgbGV0IEhUTUxTcHJpdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBIVE1MU3ByaXRlLmNsYXNzTGlzdC5hZGQoJ3Nwcml0ZScpO1xyXG4gICAgICAgIEhUTUxTcHJpdGUuY2xhc3NMaXN0LmFkZChvYmouY3NzQ2xhc3MpO1xyXG4gICAgICAgIHJldHVybiBIVE1MU3ByaXRlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0Q3JlYXR1cmVzTGlzdCgpIHtcclxuICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVTdGF0ZS5wbGF5ZXIsXHJcbiAgICAgICAgICAgIC4uLnRoaXMuZ2FtZVN0YXRlLmNyZWF0dXJlc1xyXG4gICAgICAgIF1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdXBkYXRlKCkge1xyXG4gICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgdGhpcy5tYXAuZ2V0U2l6ZSgpLnk7ICsreSkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMubWFwLmdldFNpemUoKS54OyArK3gpIHtcclxuICAgICAgICAgICAgICAgIGxldCBtYXBDZWxsID0gdGhpcy5tYXAuZ2V0Q2VsbCh7IHg6IHgsIHk6IHkgfSk7XHJcbiAgICAgICAgICAgICAgICBsZXQgSFRNTENlbGwgPSB0aGlzLmdldENlbGwoeyB4OiB4LCB5OiB5IH0pO1xyXG4gICAgICAgICAgICAgICAgSFRNTENlbGwuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICAgICAgICAgIEhUTUxDZWxsLmFwcGVuZENoaWxkKEZpZWxkUmVuZGVyZXIuZ2V0SFRNTFNwcml0ZShtYXBDZWxsKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgY3JlYXR1cmVzTGlzdCA9IHRoaXMuZ2V0Q3JlYXR1cmVzTGlzdCgpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY3JlYXR1cmVzTGlzdC5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICBsZXQgY3JlYXR1cmUgPSBjcmVhdHVyZXNMaXN0W2ldO1xyXG4gICAgICAgICAgICB0aGlzLmdldENlbGwoY3JlYXR1cmUuZ2V0Q29vcmRpbmF0ZXMoKSkuYXBwZW5kQ2hpbGQoRmllbGRSZW5kZXJlci5nZXRIVE1MU3ByaXRlKGNyZWF0dXJlKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1cGRhdGVDZWxscyhjb29yZGluYXRlczogSTJEQ29vcmRpbmF0ZXNbXSk6IHZvaWQge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29vcmRpbmF0ZXMubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgICAgbGV0IG1hcENlbGwgPSB0aGlzLm1hcC5nZXRDZWxsKGNvb3JkaW5hdGVzW2ldKTtcclxuICAgICAgICAgICAgbGV0IEhUTUxDZWxsID0gdGhpcy5nZXRDZWxsKGNvb3JkaW5hdGVzW2ldKTtcclxuICAgICAgICAgICAgSFRNTENlbGwuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICAgICAgSFRNTENlbGwuYXBwZW5kQ2hpbGQoRmllbGRSZW5kZXJlci5nZXRIVE1MU3ByaXRlKG1hcENlbGwpKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGNyZWF0dXJlc0xpc3QgPSB0aGlzLmdldENyZWF0dXJlc0xpc3QoKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjcmVhdHVyZXNMaXN0Lmxlbmd0aDsgKytqKSB7XHJcbiAgICAgICAgICAgICAgICBpZihVdGlscy5zaGFsbG93RXF1YWwoY3JlYXR1cmVzTGlzdFtqXS5nZXRDb29yZGluYXRlcygpLCBjb29yZGluYXRlc1tpXSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBIVE1MQ2VsbC5hcHBlbmRDaGlsZChGaWVsZFJlbmRlcmVyLmdldEhUTUxTcHJpdGUoY3JlYXR1cmVzTGlzdFtqXSkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtNb25zdGVyfSBmcm9tIFwiLi9tb25zdGVyXCJcclxuXHJcbmV4cG9ydCBjbGFzcyBGaWdodCB7XHJcblxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfbW9uc3RlckZpcnN0OiBNb25zdGVyO1xyXG4gICAgcHVibGljIGdldCBtb25zdGVyRmlyc3QoKTogTW9uc3RlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX21vbnN0ZXJGaXJzdDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9tb25zdGVyU2Vjb25kOiBNb25zdGVyO1xyXG4gICAgcHVibGljIGdldCBtb25zdGVyU2Vjb25kKCk6IE1vbnN0ZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9tb25zdGVyU2Vjb25kO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2N1cnJlbnRNb25zdGVyOiBNb25zdGVyO1xyXG4gICAgcHVibGljIGdldCBjdXJyZW50TW9uc3RlcigpOiBNb25zdGVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY3VycmVudE1vbnN0ZXI7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIF9kZWZlbnNlTW9uc3RlcjogTW9uc3RlcjtcclxuICAgIHB1YmxpYyBnZXQgZGVmZW5zZU1vbnN0ZXIoKTogTW9uc3RlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZmVuc2VNb25zdGVyO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKG1vbnN0ZXJGaXJzdDogTW9uc3RlciwgbW9uc3RlclNlY29uZDogTW9uc3Rlcikge1xyXG4gICAgICAgIHRoaXMuX21vbnN0ZXJGaXJzdCA9IG1vbnN0ZXJGaXJzdDtcclxuICAgICAgICB0aGlzLl9tb25zdGVyU2Vjb25kID0gbW9uc3RlclNlY29uZDtcclxuICAgICAgICB0aGlzLl9jdXJyZW50TW9uc3RlciA9IG1vbnN0ZXJGaXJzdDtcclxuICAgICAgICB0aGlzLl9kZWZlbnNlTW9uc3RlciA9IG1vbnN0ZXJTZWNvbmQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN3YXAoKSB7XHJcbiAgICAgICAgW3RoaXMuX2N1cnJlbnRNb25zdGVyLCB0aGlzLl9kZWZlbnNlTW9uc3Rlcl0gPVxyXG4gICAgICAgICAgICBbdGhpcy5kZWZlbnNlTW9uc3RlciwgdGhpcy5jdXJyZW50TW9uc3Rlcl07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGlzRmluaXNoKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1vbnN0ZXJGaXJzdC5pc0RlYWQoKSB8fCB0aGlzLm1vbnN0ZXJTZWNvbmQuaXNEZWFkKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFdpbm5lcigpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNGaW5pc2gpIHJldHVybiBudWxsO1xyXG5cclxuICAgICAgICByZXR1cm4gKHRoaXMubW9uc3RlckZpcnN0LmlzRGVhZCgpKSA/IHRoaXMubW9uc3RlclNlY29uZCA6XHJcbiAgICAgICAgICAgIHRoaXMubW9uc3RlckZpcnN0O1xyXG4gICAgfVxyXG5cclxufSIsImltcG9ydCB7TW9uc3Rlcn0gZnJvbSBcIi4vbW9uc3RlclwiO1xyXG5pbXBvcnQge0lSZW5kZXJlcn0gZnJvbSBcIi4vaW50ZXJmYWNlc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEZpZ2h0UmVuZGVyZXIgaW1wbGVtZW50cyBJUmVuZGVyZXIge1xyXG5cclxuICAgIHByaXZhdGUgZ2FtZUZpZ2h0OiBIVE1MRWxlbWVudDtcclxuICAgIHByaXZhdGUgbW9uc3RlcnM6IFtNb25zdGVyLCBNb25zdGVyXTtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgTkVTWkJ1dHRvbkNsaWNrTGlzdGVuZXI6IGFueTtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgTkVTWEJ1dHRvbkNsaWNrTGlzdGVuZXI6IGFueTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lRmlnaHQ6IEhUTUxFbGVtZW50LCBtb25zdGVyczogW01vbnN0ZXIsIE1vbnN0ZXJdLCBsaXN0ZW5lcl8xOiBhbnksIGxpc3RlbmVyXzI6IGFueSkge1xyXG4gICAgICAgIHRoaXMuZ2FtZUZpZ2h0ID0gZ2FtZUZpZ2h0O1xyXG4gICAgICAgIHRoaXMubW9uc3RlcnMgPSBtb25zdGVycztcclxuICAgICAgICB0aGlzLk5FU1pCdXR0b25DbGlja0xpc3RlbmVyID0gbGlzdGVuZXJfMTtcclxuICAgICAgICB0aGlzLk5FU1hCdXR0b25DbGlja0xpc3RlbmVyID0gbGlzdGVuZXJfMjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVuZGVyKCk6IHZvaWQge1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1cGRhdGUoKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IG1vbnN0ZXJzRGl2ID0gdGhpcy5nYW1lRmlnaHQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbW9uc3RlcnMnKVswXS5jaGlsZHJlbjtcclxuICAgICAgICBjb25zb2xlLmFzc2VydChtb25zdGVyc0Rpdi5sZW5ndGggPT0gdGhpcy5tb25zdGVycy5sZW5ndGgpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbW9uc3RlcnNEaXYubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgICAgbGV0IHNwcml0ZSA9IG1vbnN0ZXJzRGl2W2ldLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3Nwcml0ZScpWzBdO1xyXG4gICAgICAgICAgICBsZXQgaGVhbHRoID0gbW9uc3RlcnNEaXZbaV0uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaGVhbHRoJylbMF07XHJcbiAgICAgICAgICAgIGxldCBkZWZlbnNlID0gbW9uc3RlcnNEaXZbaV0uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZGVmZW5zZScpWzBdO1xyXG5cclxuICAgICAgICAgICAgc3ByaXRlLmNsYXNzTmFtZSA9IGBzcHJpdGUgJHt0aGlzLm1vbnN0ZXJzW2ldLmNzc0NsYXNzfWA7XHJcbiAgICAgICAgICAgIGlmIChpID09IDEpIHtcclxuICAgICAgICAgICAgICAgIHNwcml0ZS5jbGFzc0xpc3QuYWRkKCdtaXJyb3JZJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaGVhbHRoLmlubmVySFRNTCA9IGAke3RoaXMubW9uc3RlcnNbaV0uaGVhbHRofWA7XHJcbiAgICAgICAgICAgIGRlZmVuc2UuaW5uZXJIVE1MID0gYCR7dGhpcy5tb25zdGVyc1tpXS5kZWZlbnNlfWA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBidXR0b25zID0gdGhpcy5nYW1lRmlnaHQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYWN0aW9uLWJ0bicpWzBdLmNoaWxkcmVuO1xyXG4gICAgICAgIGNvbnNvbGUuYXNzZXJ0KGJ1dHRvbnMubGVuZ3RoID09IDIpO1xyXG4gICAgICAgIGJ1dHRvbnNbMF0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLk5FU1pCdXR0b25DbGlja0xpc3RlbmVyKTtcclxuICAgICAgICBidXR0b25zWzFdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5ORVNYQnV0dG9uQ2xpY2tMaXN0ZW5lcik7XHJcbiAgICB9XHJcblxyXG59IiwiaW1wb3J0IHtQbGF5ZXJ9IGZyb20gJy4vcGxheWVyJztcclxuaW1wb3J0IHtNYXB9IGZyb20gJy4vbWFwJztcclxuaW1wb3J0IHtNb3ZlTWFuYWdlcn0gZnJvbSAnLi9tb3ZlTWFuYWdlcic7XHJcbmltcG9ydCB7SURyYXdhYmxlSW5GaWVsZCwgSVNjZW5lSW5mb30gZnJvbSAnLi9pbnRlcmZhY2VzJztcclxuaW1wb3J0IHtGaWdodH0gZnJvbSBcIi4vZmlnaHRcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBHYW1lU3RhdGUge1xyXG5cclxuICAgIHB1YmxpYyBwbGF5ZXI6IFBsYXllcjtcclxuICAgIHB1YmxpYyBjcmVhdHVyZXM6IElEcmF3YWJsZUluRmllbGRbXTtcclxuICAgIHB1YmxpYyBtYXA6IE1hcDtcclxuICAgIHB1YmxpYyBtb3ZlTWFuYWdlcjogTW92ZU1hbmFnZXI7XHJcbiAgICBwdWJsaWMgc2NlbmVzOiBJU2NlbmVJbmZvW107XHJcbiAgICBwdWJsaWMgZmlnaHQ6IEZpZ2h0O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHBsYXllcjogUGxheWVyLCBjcmVhdHVyZXM6IElEcmF3YWJsZUluRmllbGRbXSkge1xyXG4gICAgICAgIHRoaXMucGxheWVyID0gcGxheWVyO1xyXG4gICAgICAgIHRoaXMuY3JlYXR1cmVzID0gY3JlYXR1cmVzO1xyXG4gICAgICAgIHRoaXMubWFwID0gbmV3IE1hcCg1LCA1KTtcclxuICAgICAgICB0aGlzLm1vdmVNYW5hZ2VyID0gbmV3IE1vdmVNYW5hZ2VyKHRoaXMubWFwLCB0aGlzLnBsYXllcik7XHJcbiAgICAgICAgdGhpcy5zY2VuZXMgPSBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdmaWVsZCcsXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50OiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZS1maWVsZCcpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdmaWdodCcsXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50OiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZS1maWdodCcpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdzZWxlY3QtbW9uc3RlcicsXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50OiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZS1zZWxlY3QtbW9uc3RlcicpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICAgICAgdGhpcy5maWdodCA9IG51bGw7XHJcbiAgICB9XHJcblxyXG59IiwiaW1wb3J0IHtQbGF5ZXJ9IGZyb20gJy4vcGxheWVyJztcclxuaW1wb3J0IHtDaHVkaWxhLCBNb25zdGVyLCBQcmlkdXJva30gZnJvbSAnLi9tb25zdGVyJztcclxuaW1wb3J0IHtGaWVsZFJlbmRlcmVyfSBmcm9tICcuL2ZpZWxkUmVuZGVyZXInO1xyXG5pbXBvcnQge1NjZW5lTWFuYWdlcn0gZnJvbSAnLi9zY2VuZU1hbmFnZXInO1xyXG5pbXBvcnQge0dhbWVTdGF0ZX0gZnJvbSAnLi9nYW1lU3RhdGUnO1xyXG5pbXBvcnQge0kyRENvb3JkaW5hdGVzfSBmcm9tICcuL2ludGVyZmFjZXMnO1xyXG5pbXBvcnQge1V0aWxzfSBmcm9tIFwiLi91dGlsc1wiO1xyXG5pbXBvcnQge0ZpZ2h0UmVuZGVyZXJ9IGZyb20gXCIuL2ZpZ2h0UmVuZGVyZXJcIjtcclxuaW1wb3J0IHtTZWxlY3RNb25zdGVyUmVuZGVyZXJ9IGZyb20gJy4vc2VsZWN0TW9uc3RlclJlbmRlcmVyJ1xyXG5pbXBvcnQge0ZpZ2h0fSBmcm9tICcuL2ZpZ2h0JztcclxuXHJcbi8qIEdsb2JhbCB2YXJpYWJsZXMgKi9cclxuY29uc3QgZ2FtZVN0YXRlID0gbmV3IEdhbWVTdGF0ZShcclxuICAgIG5ldyBQbGF5ZXIoXCJTdGV2ZVwiLCBcImhlcm9cIiwgJ0AnLCAwLCAwLCA0LCBbbmV3IFByaWR1cm9rKCldKSxcclxuICAgIFtdXHJcbik7XHJcbmNvbnN0IHNjZW5lTWFuYWdlciA9IG5ldyBTY2VuZU1hbmFnZXIoZ2FtZVN0YXRlKTtcclxuY29uc3QgZmllbGRSZW5kZXJlciA9IG5ldyBGaWVsZFJlbmRlcmVyKFxyXG4gICAgZ2FtZVN0YXRlLFxyXG4gICAgc2NlbmVNYW5hZ2VyLmdldFNjZW5lSW5mbygnZmllbGQnKS5lbGVtZW50LFxyXG4gICAgY2VsbENsaWNrTGlzdGVuZXJcclxuKTtcclxubGV0IGZpZ2h0UmVuZGVyZXI6IEZpZ2h0UmVuZGVyZXIgPSBudWxsO1xyXG5sZXQgc2VsZWN0TW9uc3RlclJlbmRlcmVyOiBTZWxlY3RNb25zdGVyUmVuZGVyZXIgPSBudWxsO1xyXG5cclxuLyogUHJlcGFyZSBmaWVsZCAqL1xyXG5maWVsZFJlbmRlcmVyLnJlbmRlcigpO1xyXG5maWVsZFJlbmRlcmVyLnVwZGF0ZSgpO1xyXG5zY2VuZU1hbmFnZXIuc2hvd1NjZW5lKCdmaWVsZCcpO1xyXG5cclxuLyogQ2xpY2sgTGlzdGVuZXIgZm9yIGFsbCBjZWxscyBpbiBmaWVsZCAqL1xyXG5mdW5jdGlvbiBjZWxsQ2xpY2tMaXN0ZW5lcihldmVudDogTW91c2VFdmVudCkge1xyXG5cclxuICAgIGZ1bmN0aW9uIGdldENvb3JkaW5hdGVzT2ZDZWxsKHRhcmdldDogRXZlbnRUYXJnZXQpOiBJMkRDb29yZGluYXRlcyB7XHJcbiAgICAgICAgbGV0IGVsZW1lbnQgPSA8SFRNTEVsZW1lbnQ+dGFyZ2V0O1xyXG4gICAgICAgIGNvbnN0IHRkID0gPEhUTUxUYWJsZUNlbGxFbGVtZW50PmVsZW1lbnQucGFyZW50RWxlbWVudDtcclxuICAgICAgICBjb25zdCByb3cgPSA8SFRNTFRhYmxlUm93RWxlbWVudD50ZC5wYXJlbnRFbGVtZW50O1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHg6IHRkLmNlbGxJbmRleCxcclxuICAgICAgICAgICAgeTogcm93LnJvd0luZGV4XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNvb3JkaW5hdGVzID0gZ2V0Q29vcmRpbmF0ZXNPZkNlbGwoZXZlbnQudGFyZ2V0KTtcclxuICAgIGxldCBvbGRfY29vcmRpbmF0ZTogSTJEQ29vcmRpbmF0ZXMgPSBnYW1lU3RhdGUucGxheWVyLmdldENvb3JkaW5hdGVzKCk7XHJcbiAgICBpZiAoZ2FtZVN0YXRlLm1vdmVNYW5hZ2VyLm1vdmUoY29vcmRpbmF0ZXMpKSB7XHJcbiAgICAgICAgZmllbGRSZW5kZXJlci51cGRhdGVDZWxscyhbXHJcbiAgICAgICAgICAgIG9sZF9jb29yZGluYXRlLFxyXG4gICAgICAgICAgICBnYW1lU3RhdGUucGxheWVyLmdldENvb3JkaW5hdGVzKClcclxuICAgICAgICBdKTtcclxuICAgIH0gZWxzZSBpZiAoVXRpbHMuc2hhbGxvd0VxdWFsKGNvb3JkaW5hdGVzLCBnYW1lU3RhdGUucGxheWVyLmdldENvb3JkaW5hdGVzKCkpKSB7XHJcbiAgICAgICAgaWYgKGdhbWVTdGF0ZS5tYXAuZ2V0Q2VsbChjb29yZGluYXRlcykubW9uc3RlciA9PSBudWxsKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgc2VsZWN0TW9uc3RlclJlbmRlcmVyID0gbmV3IFNlbGVjdE1vbnN0ZXJSZW5kZXJlcihcclxuICAgICAgICAgICAgc2NlbmVNYW5hZ2VyLmdldFNjZW5lSW5mbygnc2VsZWN0LW1vbnN0ZXInKS5lbGVtZW50LFxyXG4gICAgICAgICAgICBnYW1lU3RhdGUucGxheWVyLFxyXG4gICAgICAgICAgICBPS0J1dHRvbkluU2VsZWN0Q2xpY2tMaXN0ZW5lclxyXG4gICAgICAgIClcclxuICAgICAgICBzZWxlY3RNb25zdGVyUmVuZGVyZXIudXBkYXRlKCk7XHJcbiAgICAgICAgc2NlbmVNYW5hZ2VyLnNob3dTY2VuZSgnc2VsZWN0LW1vbnN0ZXInKTtcclxuICAgIH1cclxufVxyXG5cclxuLyogQ2xpY2sgTGlzdGVuZXIgZm9yIFogYnV0dG9uIGluIGZpZ2h0ICovXHJcbmZ1bmN0aW9uIE5FU1pCdXR0b25DbGlja0xpc3RlbmVyKGV2ZW50OiBNb3VzZUV2ZW50KSB7XHJcbiAgICBjb25zb2xlLmxvZygnY2xpY2tlZCcsIGV2ZW50LnRhcmdldCk7XHJcbiAgICBnYW1lU3RhdGUuZmlnaHQuZGVmZW5zZU1vbnN0ZXIuYmVBdHRhY2tlZChnYW1lU3RhdGUuZmlnaHQuY3VycmVudE1vbnN0ZXIpO1xyXG4gICAgaWYgKGdhbWVTdGF0ZS5maWdodC5pc0ZpbmlzaCgpKSB7XHJcbiAgICAgICAgZ2FtZVN0YXRlLmZpZ2h0LmN1cnJlbnRNb25zdGVyLkhlYWwoKTtcclxuICAgICAgICBnYW1lU3RhdGUuZmlnaHQuZGVmZW5zZU1vbnN0ZXIuSGVhbCgpO1xyXG4gICAgICAgIGlmIChnYW1lU3RhdGUuZmlnaHQuZ2V0V2lubmVyKCkubG9vdGVkKSB7XHJcbiAgICAgICAgICAgIGdhbWVTdGF0ZS5wbGF5ZXIuYWRkTW9uc3RlcihnYW1lU3RhdGUuZmlnaHQuZGVmZW5zZU1vbnN0ZXIpO1xyXG4gICAgICAgICAgICBnYW1lU3RhdGUuZmlnaHQuZGVmZW5zZU1vbnN0ZXIubG9vdCgpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgYWRkZWQgbW9uc3RlcjogJHtnYW1lU3RhdGUuZmlnaHQuZGVmZW5zZU1vbnN0ZXIuZ2V0U3RyaW5nKCl9YClcclxuICAgICAgICAgICAgZ2FtZVN0YXRlLm1hcC5nZXRDZWxsKFxyXG4gICAgICAgICAgICAgICAgZ2FtZVN0YXRlLnBsYXllci5nZXRDb29yZGluYXRlcygpXHJcbiAgICAgICAgICAgICkubG9vdCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGdhbWVTdGF0ZS5wbGF5ZXIuZGVsZXRlTW9uc3RlcihnYW1lU3RhdGUuZmlnaHQuY3VycmVudE1vbnN0ZXIpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgZGVsZXRlZDogJHtnYW1lU3RhdGUuZmlnaHQuY3VycmVudE1vbnN0ZXIuZ2V0U3RyaW5nKCl9YClcclxuICAgICAgICB9XHJcbiAgICAgICAgc2NlbmVNYW5hZ2VyLnNob3dTY2VuZSgnZmllbGQnKTtcclxuICAgIH1cclxuICAgIGdhbWVTdGF0ZS5maWdodC5zd2FwKCk7XHJcbiAgICBmaWdodFJlbmRlcmVyLnVwZGF0ZSgpO1xyXG59XHJcblxyXG4vKiBDbGljayBMaXN0ZW5lciBmb3IgWCBidXR0b24gaW4gZmlnaHQgKi9cclxuZnVuY3Rpb24gTkVTWEJ1dHRvbkNsaWNrTGlzdGVuZXIoZXZlbnQ6IE1vdXNlRXZlbnQpIHtcclxuICAgIGdhbWVTdGF0ZS5maWdodC5jdXJyZW50TW9uc3Rlci5kZWZlbnNlSGltc2VsZigpO1xyXG4gICAgZ2FtZVN0YXRlLmZpZ2h0LnN3YXAoKTtcclxuICAgIGZpZ2h0UmVuZGVyZXIudXBkYXRlKCk7XHJcbn1cclxuXHJcbi8qIENsaWNrIExpc3RlbmVyIGZvciBPSyBidXR0b24gaW4gc2VsZWN0LW1vbnN0ZXIgKi9cclxuZnVuY3Rpb24gT0tCdXR0b25JblNlbGVjdENsaWNrTGlzdGVuZXIoZXZlbnQ6IE1vdXNlRXZlbnQpIHtcclxuICAgIHNjZW5lTWFuYWdlci5zaG93U2NlbmUoJ2ZpZ2h0Jyk7XHJcbiAgICBsZXQgbW9uc3RlcnM6IFtNb25zdGVyLCBNb25zdGVyXSA9IFtcclxuICAgICAgICBzZWxlY3RNb25zdGVyUmVuZGVyZXIuZ2V0Q2hvb3Nlbk1vbnN0ZXIoKSxcclxuICAgICAgICBnYW1lU3RhdGUubWFwLmdldENlbGwoZ2FtZVN0YXRlLnBsYXllci5nZXRDb29yZGluYXRlcygpKS5tb25zdGVyXHJcbiAgICBdXHJcbiAgICBmaWdodFJlbmRlcmVyID0gbmV3IEZpZ2h0UmVuZGVyZXIoXHJcbiAgICAgICAgc2NlbmVNYW5hZ2VyLmdldFNjZW5lSW5mbygnZmlnaHQnKS5lbGVtZW50LFxyXG4gICAgICAgIG1vbnN0ZXJzLFxyXG4gICAgICAgIE5FU1pCdXR0b25DbGlja0xpc3RlbmVyLFxyXG4gICAgICAgIE5FU1hCdXR0b25DbGlja0xpc3RlbmVyXHJcbiAgICApO1xyXG4gICAgZmlnaHRSZW5kZXJlci51cGRhdGUoKTtcclxuICAgIGdhbWVTdGF0ZS5maWdodCA9IG5ldyBGaWdodCguLi5tb25zdGVycyk7XHJcbn1cclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgKGV2ZW50KSA9PiB7XHJcbiAgICBjb25zdCBrZXlOYW1lID0gZXZlbnQua2V5O1xyXG4gICAgaWYgKGtleU5hbWUudG9Mb3dlckNhc2UoKSA9PSAnMScpIHtcclxuICAgICAgICBzY2VuZU1hbmFnZXIuc2hvd1NjZW5lKCdmaWVsZCcpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoa2V5TmFtZS50b0xvd2VyQ2FzZSgpID09ICcyJykge1xyXG4gICAgICAgIHNjZW5lTWFuYWdlci5zaG93U2NlbmUoJ2ZpZ2h0Jyk7XHJcbiAgICB9XHJcbn0pOyIsImltcG9ydCB7Q2VsbCwgTGFuZENlbGwsIE1vdW50Q2VsbH0gZnJvbSAnLi9jZWxsJztcclxuaW1wb3J0IHtJMkRDb29yZGluYXRlc30gZnJvbSAnLi9pbnRlcmZhY2VzJztcclxuaW1wb3J0IHtVdGlsc30gZnJvbSAnLi91dGlscyc7XHJcblxyXG5leHBvcnQgY2xhc3MgTWFwIHtcclxuXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IHNpemVYOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IHNpemVZOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGRhdGE6IENlbGxbXVtdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHNpemVYOiBudW1iZXIsIHNpemVZOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnNpemVYID0gc2l6ZVg7XHJcbiAgICAgICAgdGhpcy5zaXplWSA9IHNpemVZO1xyXG4gICAgICAgIHRoaXMuZGF0YSA9IE1hcC5nZW5lcmF0ZShzaXplWCwgc2l6ZVkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRDZWxsKGNvb3JkaW5hdGVzOiBJMkRDb29yZGluYXRlcyk6IENlbGwge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRhdGFbY29vcmRpbmF0ZXMueV1bY29vcmRpbmF0ZXMueF07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFNpemUoKTogeyB4OiBudW1iZXIsIHk6IG51bWJlciB9IHtcclxuICAgICAgICByZXR1cm4geyB4OiB0aGlzLnNpemVYLCB5OiB0aGlzLnNpemVZIH07XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdlbmVyYXRlKHNpemVYOiBudW1iZXIsIHNpemVZOiBudW1iZXIpOiBDZWxsW11bXSB7XHJcbiAgICAgICAgY29uc3QgZGVmYXVsdENlbGwgPSBMYW5kQ2VsbDtcclxuICAgICAgICBsZXQgcG9zc2libGVDZWxscyA9IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgb2JqOiBNb3VudENlbGwsXHJcbiAgICAgICAgICAgICAgICByYW5kOiB7bWluOiA1LCBtYXg6IDEwfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGBNYXA6IGdlbmVyYXRlLCAoJHtzaXplWH0sICR7c2l6ZVl9KWApO1xyXG4gICAgICAgIGNvbnN0IGRhdGE6IENlbGxbXVtdID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCBzaXplWTsgKyt5KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJvdzogQ2VsbFtdID0gW107XHJcbiAgICAgICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgc2l6ZVg7ICsreCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHJhbmROdW0gPSBVdGlscy5yYW5kb20oMSwgMTAwKTtcclxuICAgICAgICAgICAgICAgIGxldCBvYmplY3RGb3JDcmVhdGUgPSBudWxsO1xyXG5cclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcG9zc2libGVDZWxscy5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChVdGlscy5pc0luUmFuZ2UocmFuZE51bSwgcG9zc2libGVDZWxsc1tpXS5yYW5kLm1pbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zc2libGVDZWxsc1tpXS5yYW5kLm1heCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0Rm9yQ3JlYXRlID0gcG9zc2libGVDZWxsc1tpXS5vYmo7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIW9iamVjdEZvckNyZWF0ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG9iamVjdEZvckNyZWF0ZSA9IGRlZmF1bHRDZWxsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICByb3cucHVzaChuZXcgb2JqZWN0Rm9yQ3JlYXRlKCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRhdGEucHVzaChyb3cpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyhgTWFwOiBnZW5lcmF0ZWQsICgke3NpemVYfSwgJHtzaXplWX0pYCk7XHJcbiAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge0NyZWF0dXJlfSBmcm9tIFwiLi9jcmVhdHVyZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1vbnN0ZXIgZXh0ZW5kcyBDcmVhdHVyZSB7XHJcblxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfdHlwZTogc3RyaW5nO1xyXG4gICAgcHVibGljIGdldCB0eXBlKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3R5cGU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfbWF4SGVhdGg6IG51bWJlcjtcclxuICAgIHB1YmxpYyBnZXQgbWF4SGVhdGgoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbWF4SGVhdGg7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfaGVhbHRoOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgZ2V0IGhlYWx0aCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9oZWFsdGg7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfZGVmZW5zZTogbnVtYmVyO1xyXG4gICAgcHVibGljIGdldCBkZWZlbnNlKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZmVuc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfYXR0YWNrOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgZ2V0IGF0dGFjaygpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9hdHRhY2s7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfYXR0YWNrQm9vc3RlcjogbnVtYmVyO1xyXG4gICAgcHVibGljIGdldCBhdHRhY2tCb29zdGVyKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2F0dGFja0Jvb3N0ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfbG9vdGVkOiBib29sZWFuO1xyXG4gICAgcHVibGljIGdldCBsb290ZWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xvb3RlZDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIGNzc0NsYXNzOiBzdHJpbmcsIGxhYmVsOiBzdHJpbmcsIHR5cGU6IHN0cmluZyxcclxuICAgICAgICBoZWFsdGg6IG51bWJlciwgZGVmZW5zZTogbnVtYmVyLCBhdHRhY2s6IG51bWJlcixcclxuICAgICAgICBhdHRhY2tCb29zdGVyOiBudW1iZXIsIGxvb3RlZDogYm9vbGVhbikge1xyXG4gICAgICAgIHN1cGVyKG5hbWUsIGNzc0NsYXNzLCBsYWJlbCk7XHJcbiAgICAgICAgdGhpcy5fdHlwZSA9IHR5cGU7XHJcbiAgICAgICAgdGhpcy5fbWF4SGVhdGggPSBoZWFsdGg7XHJcbiAgICAgICAgdGhpcy5faGVhbHRoID0gaGVhbHRoO1xyXG4gICAgICAgIHRoaXMuX2RlZmVuc2UgPSBkZWZlbnNlO1xyXG4gICAgICAgIHRoaXMuX2F0dGFjayA9IGF0dGFjaztcclxuICAgICAgICB0aGlzLl9hdHRhY2tCb29zdGVyID0gYXR0YWNrQm9vc3RlcjtcclxuICAgICAgICB0aGlzLl9sb290ZWQgPSBsb290ZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGJlQXR0YWNrZWQoZW5lbXk6IE1vbnN0ZXIpIHtcclxuICAgICAgICBjb25zdCBkYW1hZ2UgPSB0aGlzLmRlZmVuc2UgLSAoZW5lbXkuYXR0YWNrICsgZW5lbXkuYXR0YWNrQm9vc3Rlcik7XHJcbiAgICAgICAgaWYgKGRhbWFnZSA+PSAwKXtcclxuICAgICAgICAgICAgdGhpcy5faGVhbHRoIC09IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMuX2hlYWx0aCArPSBkYW1hZ2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkZWZlbnNlSGltc2VsZigpIHtcclxuICAgICAgICB0aGlzLl9kZWZlbnNlICs9IDU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGlzRGVhZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faGVhbHRoIDw9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIEhlYWwoKSB7XHJcbiAgICAgICB0aGlzLl9oZWFsdGggPSB0aGlzLm1heEhlYXRoO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRTdHJpbmcoKSB7XHJcbiAgICAgICAgcmV0dXJuIGAke3RoaXMubmFtZX0sIGhwOiAke3RoaXMuaGVhbHRofSwgZGVmZW5jZTogJHt0aGlzLmRlZmVuc2V9LCBhdHRhY2s6ICR7dGhpcy5hdHRhY2t9YDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbG9vdCgpIHtcclxuICAgICAgICB0aGlzLl9sb290ZWQgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFByaWR1cm9rIGV4dGVuZHMgTW9uc3RlciB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoJ1ByaWR1cm9rJywgJ3ByaWR1cm9rJywgJ3AnLCAncmVkJywgMTIwLCA1LCAzMCwgMzAsIHRydWUpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ2h1ZGlsYSBleHRlbmRzIE1vbnN0ZXIge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCdDaHVkaWxhJywgJ2NodWRpbGEnLCAnYycsICdyZWQnLCAxMDAsIDQsIDIwLCAxMCwgZmFsc2UpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtJMkRDb29yZGluYXRlc30gZnJvbSAnLi9pbnRlcmZhY2VzJztcclxuaW1wb3J0IHtNYXB9IGZyb20gJy4vbWFwJztcclxuaW1wb3J0IHtQbGF5ZXJ9IGZyb20gJy4vcGxheWVyJztcclxuXHJcbmV4cG9ydCBjbGFzcyBNb3ZlTWFuYWdlciB7XHJcblxyXG4gICAgcHJpdmF0ZSBwbGF5ZXI6IFBsYXllcjtcclxuICAgIHByaXZhdGUgbWFwOiBNYXA7XHJcblxyXG4gICAgY29uc3RydWN0b3IobWFwOiBNYXAsIHBsYXllcjogUGxheWVyKSB7XHJcbiAgICAgICAgdGhpcy5tYXAgPSBtYXA7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSBwbGF5ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDb29yZGluYXRlcyBhcmUgY29ycmVjdCBpZiB0aGUgbWFwIHJhbmdlIGlzIGluY2x1ZGVkXHJcbiAgICAgKiBhbmQgcG9pbnQgdG8gYW4gYWRqYWNlbnQgY2VsbCBob3Jpem9udGFsbHkgb3IgdmVydGljYWxseVxyXG4gICAgICogQHJldHVybnNcclxuICAgICAqIEBwYXJhbSBjb29yZGluYXRlc1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgaXNDb3JyZWN0Q29vcmRpbmF0ZXMoY29vcmRpbmF0ZXM6IEkyRENvb3JkaW5hdGVzKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuICgwIDw9IGNvb3JkaW5hdGVzLnggJiYgY29vcmRpbmF0ZXMueCA8IHRoaXMubWFwLmdldFNpemUoKS54KSAmJlxyXG4gICAgICAgICAgICAgICAoMCA8PSBjb29yZGluYXRlcy55ICYmIGNvb3JkaW5hdGVzLnkgPCB0aGlzLm1hcC5nZXRTaXplKCkueSkgJiZcclxuICAgICAgICAgICAgICAgKE1hdGguYWJzKGNvb3JkaW5hdGVzLnggLSB0aGlzLnBsYXllci5nZXRDb29yZGluYXRlcygpLngpICtcclxuICAgICAgICAgICAgICAgIE1hdGguYWJzKGNvb3JkaW5hdGVzLnkgLSB0aGlzLnBsYXllci5nZXRDb29yZGluYXRlcygpLnkpID09IDEpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBtb3ZlKGNvb3JkaW5hdGVzOiBJMkRDb29yZGluYXRlcyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICh0aGlzLmlzQ29ycmVjdENvb3JkaW5hdGVzKGNvb3JkaW5hdGVzKSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgJHt0aGlzLnBsYXllci5uYW1lfSBtb3ZlZCB0byAoJHtjb29yZGluYXRlcy54fSwgJHtjb29yZGluYXRlcy55fSlgKTtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIubW92ZShjb29yZGluYXRlcyk7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGAke3RoaXMucGxheWVyLm5hbWV9IG5vdCBtb3ZlZCB0byAoJHtjb29yZGluYXRlcy54fSwgJHtjb29yZGluYXRlcy55fSlgKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImltcG9ydCB7Q3JlYXR1cmV9IGZyb20gXCIuL2NyZWF0dXJlXCI7XHJcbmltcG9ydCB7TW9uc3Rlcn0gZnJvbSBcIi4vbW9uc3RlclwiO1xyXG5pbXBvcnQge0kyRENvb3JkaW5hdGVzLCBJRHJhd2FibGVJbkZpZWxkfSBmcm9tIFwiLi9pbnRlcmZhY2VzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUGxheWVyIGV4dGVuZHMgQ3JlYXR1cmUgaW1wbGVtZW50cyBJRHJhd2FibGVJbkZpZWxkIHtcclxuXHJcbiAgICBwcml2YXRlIHg6IG51bWJlcjtcclxuICAgIHByaXZhdGUgeTogbnVtYmVyO1xyXG5cclxuICAgIHByaXZhdGUgcmVhZG9ubHkgX2F2YWlsYWJsZU1vdmVzOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgZ2V0IGF2YWlsYWJsZU1vdmVzKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2F2YWlsYWJsZU1vdmVzO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2F2YWlsYWJsZU1vbnN0ZXJzOiBNb25zdGVyW107XHJcbiAgICBwdWJsaWMgZ2V0IGF2YWlsYWJsZU1vbnRlcnMoKTogTW9uc3RlcltdIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYXZhaWxhYmxlTW9uc3RlcnM7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBjc3NDbGFzczogc3RyaW5nLCBsYWJlbDogc3RyaW5nLFxyXG4gICAgICAgIHg6IG51bWJlciwgeTogbnVtYmVyLCBhdmFpbGFibGVNb3ZlczogbnVtYmVyLFxyXG4gICAgICAgIGF2YWlsYWJsZU1vbnN0ZXJzOiBNb25zdGVyW10pIHtcclxuICAgICAgICBzdXBlcihuYW1lLCBjc3NDbGFzcywgbGFiZWwpO1xyXG4gICAgICAgIHRoaXMueCA9IHg7XHJcbiAgICAgICAgdGhpcy55ID0geTtcclxuICAgICAgICB0aGlzLl9hdmFpbGFibGVNb3ZlcyA9IGF2YWlsYWJsZU1vdmVzO1xyXG4gICAgICAgIHRoaXMuX2F2YWlsYWJsZU1vbnN0ZXJzID0gYXZhaWxhYmxlTW9uc3RlcnM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG1vdmUoY29vcmRpbmF0ZXM6IEkyRENvb3JkaW5hdGVzKSB7XHJcbiAgICAgICAgdGhpcy54ID0gY29vcmRpbmF0ZXMueDtcclxuICAgICAgICB0aGlzLnkgPSBjb29yZGluYXRlcy55O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRDb29yZGluYXRlcygpOiBJMkRDb29yZGluYXRlcyAge1xyXG4gICAgICAgIHJldHVybiB7IHg6IHRoaXMueCwgeTogdGhpcy55IH07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFkZE1vbnN0ZXIobW9uc3RlcjogTW9uc3Rlcikge1xyXG4gICAgICAgIHRoaXMuX2F2YWlsYWJsZU1vbnN0ZXJzLnB1c2gobW9uc3Rlcik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRlbGV0ZU1vbnN0ZXIobW9uc3RlcjogTW9uc3Rlcikge1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5fYXZhaWxhYmxlTW9uc3RlcnMuaW5kZXhPZihtb25zdGVyKTtcclxuXHJcbiAgICAgICAgdGhpcy5fYXZhaWxhYmxlTW9uc3RlcnMgPSAoaW5kZXggPiAtMSkgPyBbXHJcbiAgICAgICAgICAgIC4uLnRoaXMuX2F2YWlsYWJsZU1vbnN0ZXJzLnNsaWNlKDAsIGluZGV4KSxcclxuICAgICAgICAgICAgLi4udGhpcy5fYXZhaWxhYmxlTW9uc3RlcnMuc2xpY2UoaW5kZXggKyAxKVxyXG4gICAgICAgIF0gOiB0aGlzLl9hdmFpbGFibGVNb25zdGVycztcclxuICAgIH1cclxuXHJcbn0iLCJpbXBvcnQge0lTY2VuZUluZm99IGZyb20gJy4vaW50ZXJmYWNlcyc7XHJcbmltcG9ydCB7R2FtZVN0YXRlfSBmcm9tICcuL2dhbWVTdGF0ZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgU2NlbmVNYW5hZ2VyIHtcclxuXHJcbiAgICBnYW1lU3RhdGU6IEdhbWVTdGF0ZTtcclxuICAgIF9jdXJyZW50U2NlbmU6IHN0cmluZztcclxuXHJcbiAgICBwdWJsaWMgZ2V0IGN1cnJlbnRTY2VuZSgpOiBJU2NlbmVJbmZvIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRTY2VuZUluZm8odGhpcy5fY3VycmVudFNjZW5lKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lU3RhdGU6IEdhbWVTdGF0ZSkge1xyXG4gICAgICAgIHRoaXMuZ2FtZVN0YXRlID0gZ2FtZVN0YXRlO1xyXG4gICAgICAgIHRoaXMuX2N1cnJlbnRTY2VuZSA9IFwiXCI7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFNjZW5lSW5mbyhuYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICBsZXQgc2NlbmVzID0gdGhpcy5nYW1lU3RhdGUuc2NlbmVzO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2NlbmVzLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgIGlmIChzY2VuZXNbaV0ubmFtZSA9PSBuYW1lKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc2NlbmVzW2ldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoZSBzY2VuZSBkb2VzIG5vdCBleGlzdFwiKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2hvd1NjZW5lKG5hbWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX2N1cnJlbnRTY2VuZSA9IG5hbWU7XHJcbiAgICAgICAgbGV0IHNjZW5lID0gdGhpcy5nZXRTY2VuZUluZm8obmFtZSk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmdhbWVTdGF0ZS5zY2VuZXMubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgICAgdGhpcy5nYW1lU3RhdGUuc2NlbmVzW2ldLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzY2VuZS5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxuICAgIH1cclxuXHJcbn0iLCJpbXBvcnQge0lSZW5kZXJlcn0gZnJvbSBcIi4vaW50ZXJmYWNlc1wiO1xyXG5pbXBvcnQge1BsYXllcn0gZnJvbSBcIi4vcGxheWVyXCI7XHJcbmltcG9ydCB7TW9uc3Rlcn0gZnJvbSBcIi4vbW9uc3RlclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNlbGVjdE1vbnN0ZXJSZW5kZXJlciBpbXBsZW1lbnRzIElSZW5kZXJlciB7XHJcbiAgICBwcml2YXRlIGRvbUVsZW1lbnQ6IEhUTUxFbGVtZW50O1xyXG4gICAgcHJpdmF0ZSBwbGF5ZXI6IFBsYXllcjtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgT2tCdXR0b25MaXN0ZW5lcjogYW55O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGRvbUVsZW1lbnQ6IEhUTUxFbGVtZW50LCBwbGF5ZXI6IFBsYXllciwgT2tCdXR0b25MaXN0ZW5lcjogYW55KSB7XHJcbiAgICAgICAgdGhpcy5kb21FbGVtZW50ID0gZG9tRWxlbWVudDtcclxuICAgICAgICB0aGlzLnBsYXllciA9IHBsYXllcjtcclxuICAgICAgICB0aGlzLk9rQnV0dG9uTGlzdGVuZXIgPSBPa0J1dHRvbkxpc3RlbmVyO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZW5kZXIoKTogdm9pZCB7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHVwZGF0ZSgpOiB2b2lkIHtcclxuICAgICAgICBsZXQgc2VsZWN0ID0gdGhpcy5kb21FbGVtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3NlbGVjdCcpWzBdO1xyXG5cclxuICAgICAgICBzZWxlY3QuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucGxheWVyLmF2YWlsYWJsZU1vbnRlcnMubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgICAgbGV0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG4gICAgICAgICAgICBvcHRpb24udmFsdWUgPSBgJHtpfWA7XHJcbiAgICAgICAgICAgIG9wdGlvbi5pbm5lclRleHQgPSB0aGlzLnBsYXllci5hdmFpbGFibGVNb250ZXJzW2ldLmdldFN0cmluZygpO1xyXG4gICAgICAgICAgICBzZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBPa0J1dHRvbiA9IHRoaXMuZG9tRWxlbWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdvaycpWzBdO1xyXG4gICAgICAgIE9rQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5Pa0J1dHRvbkxpc3RlbmVyKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0Q2hvb3Nlbk1vbnN0ZXIoKTogTW9uc3RlciB7XHJcbiAgICAgICAgbGV0IHNlbGVjdCA9IDxIVE1MU2VsZWN0RWxlbWVudD50aGlzLmRvbUVsZW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc2VsZWN0JylbMF07XHJcbiAgICAgICAgbGV0IGluZGV4ID0gc2VsZWN0LnZhbHVlO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGluZGV4KTtcclxuICAgICAgICByZXR1cm4gdGhpcy5wbGF5ZXIuYXZhaWxhYmxlTW9udGVyc1tcclxuICAgICAgICAgICAgcGFyc2VJbnQoaW5kZXgpXHJcbiAgICAgICAgICAgIF07XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgY2xhc3MgVXRpbHMge1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIGEgXHJcbiAgICAgKiBAcGFyYW0gYiBcclxuICAgICAqIEByZXR1cm5zIHJhbmRvbSBudW1iZXIgYmV0d2VlbiBhIGFuZCBiLCBpbmNsdXNpdmVcclxuICAgICAqL1xyXG4gICAgc3RhdGljIHJhbmRvbShhOiBudW1iZXIsIGI6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChiIC0gYSArIDEpKSArIGE7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGlzSW5SYW5nZSh4OiBudW1iZXIsIG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcikge1xyXG4gICAgICAgIHJldHVybiBtaW4gPD0geCAmJiB4IDw9IG1heDtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgcmFuZG9tSXRlbUZyb21BcnJheShhcnI6IGFueVtdKTogYW55e1xyXG4gICAgICAgIHJldHVybiBhcnJbdGhpcy5yYW5kb20oMCwgYXJyLmxlbmd0aCAtIDEpXTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgc2hhbGxvd0VxdWFsKGE6IGFueSwgYjogYW55KTogYm9vbGVhbiB7XHJcbiAgICAgICAgY29uc3Qga2V5czEgPSBPYmplY3Qua2V5cyhhKTtcclxuICAgICAgICBjb25zdCBrZXlzMiA9IE9iamVjdC5rZXlzKGIpO1xyXG5cclxuICAgICAgICBpZiAoa2V5czEubGVuZ3RoICE9PSBrZXlzMi5sZW5ndGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yIChsZXQga2V5IG9mIGtleXMxKSB7XHJcbiAgICAgICAgICAgIGlmIChhW2tleV0gIT09IGJba2V5XSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxufSJdfQ==
