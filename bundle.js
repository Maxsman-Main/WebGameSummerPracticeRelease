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
},{"./monster":7,"./utils":11}],2:[function(require,module,exports){
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
    FieldRenderer.prototype.appendTable = function () {
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
    FieldRenderer.prototype.fillTable = function () {
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
                    console.log("YES");
                    HTMLCell.appendChild(FieldRenderer.getHTMLSprite(creaturesList[j]));
                }
            }
        }
    };
    return FieldRenderer;
}());
exports.FieldRenderer = FieldRenderer;
},{"./utils":11}],4:[function(require,module,exports){
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
            }
        ];
    }
    return GameState;
}());
exports.GameState = GameState;
},{"./map":6,"./moveManager":8}],5:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var player_1 = require("./player");
var monster_1 = require("./monster");
var fieldRenderer_1 = require("./fieldRenderer");
var sceneManager_1 = require("./sceneManager");
var gameState_1 = require("./gameState");
/* Global variables */
var gameState = new gameState_1.GameState(new player_1.Player("Steve", "hero", '@', 0, 0, 4, [new monster_1.Chudila()]), []);
var sceneManager = new sceneManager_1.SceneManager(gameState);
var fieldRenderer = new fieldRenderer_1.FieldRenderer(gameState, sceneManager.getSceneInfo('field').element, cellClickListener);
/* Prepare field */
fieldRenderer.appendTable();
fieldRenderer.fillTable();
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
    if (gameState.moveManager.isCorrectCoordinates(coordinates)) {
        // move
        var old_coordinate = gameState.player.getCoordinates();
        gameState.moveManager.move(coordinates);
        fieldRenderer.updateCells([
            old_coordinate,
            gameState.player.getCoordinates()
        ]);
    }
    else {
        if (coordinates == gameState.player.getCoordinates())
            sceneManager.showScene('fight');
    }
    console.log(gameState.player.getCoordinates());
}
document.addEventListener('keypress', function (event) {
    var keyName = event.key;
    console.log(keyName);
    if (keyName.toLowerCase() == '1') {
        sceneManager.showScene('field');
    }
    else if (keyName.toLowerCase() == '2') {
        sceneManager.showScene('fight');
    }
});
},{"./fieldRenderer":3,"./gameState":4,"./monster":7,"./player":9,"./sceneManager":10}],6:[function(require,module,exports){
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
},{"./cell":1,"./utils":11}],7:[function(require,module,exports){
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
exports.Chudila = exports.Monster = void 0;
var creature_1 = require("./creature");
var Monster = /** @class */ (function (_super) {
    __extends(Monster, _super);
    function Monster(name, cssClass, label, type, health, defense, attack, attackBooster) {
        var _this = _super.call(this, name, cssClass, label) || this;
        _this._type = type;
        _this._maxHeath = health;
        _this._health = health;
        _this._defense = defense;
        _this._attack = attack;
        _this._attackBooster = attackBooster;
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
        return this.name + " " + this.health;
    };
    return Monster;
}(creature_1.Creature));
exports.Monster = Monster;
var Chudila = /** @class */ (function (_super) {
    __extends(Chudila, _super);
    function Chudila() {
        return _super.call(this, 'Chudila', '.image/chudila.png', 'c', 'red', 100, 4, 20, 10) || this;
    }
    return Chudila;
}(Monster));
exports.Chudila = Chudila;
},{"./creature":2}],8:[function(require,module,exports){
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
            console.log(this.player.name + " moved to (" + coordinates + ")");
            this.player.move(coordinates);
            return true;
        }
        else {
            console.log(this.player.name + " not moved to (" + coordinates + ")");
            return false;
        }
    };
    return MoveManager;
}());
exports.MoveManager = MoveManager;
},{}],9:[function(require,module,exports){
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
},{"./creature":2}],10:[function(require,module,exports){
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
        console.log("ShowScene " + name + ", " + this.gameState.scenes.length);
        var scene = this.getSceneInfo(name);
        for (var i = 0; i < this.gameState.scenes.length; ++i) {
            this.gameState.scenes[i].element.classList.add('hide');
            console.log(this.gameState.scenes[i].name, i);
        }
        scene.element.classList.remove('hide');
    };
    return SceneManager;
}());
exports.SceneManager = SceneManager;
},{}],11:[function(require,module,exports){
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
},{}]},{},[5])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvc2NyaXB0cy9jZWxsLnRzIiwic3JjL3NjcmlwdHMvY3JlYXR1cmUudHMiLCJzcmMvc2NyaXB0cy9maWVsZFJlbmRlcmVyLnRzIiwic3JjL3NjcmlwdHMvZ2FtZVN0YXRlLnRzIiwic3JjL3NjcmlwdHMvbWFpbi50cyIsInNyYy9zY3JpcHRzL21hcC50cyIsInNyYy9zY3JpcHRzL21vbnN0ZXIudHMiLCJzcmMvc2NyaXB0cy9tb3ZlTWFuYWdlci50cyIsInNyYy9zY3JpcHRzL3BsYXllci50cyIsInNyYy9zY3JpcHRzL3NjZW5lTWFuYWdlci50cyIsInNyYy9zY3JpcHRzL3V0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUEscUNBQTJDO0FBQzNDLGlDQUE4QjtBQUc5QjtJQTJCSSxjQUFZLEtBQWEsRUFBRSxRQUFnQixFQUFFLElBQVksRUFDakQsb0JBQXVDLEVBQ3ZDLGlCQUE0QjtRQUNoQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwQixJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztRQUMxQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUNsQixJQUFJLENBQUMsZUFBZSxHQUFHLGFBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO1FBQ3RFLElBQUksQ0FBQyxTQUFTLEdBQUcsYUFBSyxDQUFDLG1CQUFtQixDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDbEUsQ0FBQztJQWhDRCxzQkFBVyx1QkFBSzthQUFoQjtZQUNJLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN2QixDQUFDOzs7T0FBQTtJQUdELHNCQUFXLDBCQUFRO2FBQW5CO1lBQ0ksT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQzFCLENBQUM7OztPQUFBO0lBR0Qs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QU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFN0IsSUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLEtBQUssQ0FBQyxNQUFNLEVBQUU7WUFDL0IsT0FBTyxLQUFLLENBQUM7U0FDaEI7UUFFRCxLQUFnQixVQUFLLEVBQUwsZUFBSyxFQUFMLG1CQUFLLEVBQUwsSUFBSyxFQUFFO1lBQWxCLElBQUksR0FBRyxjQUFBO1lBQ1IsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUNuQixPQUFPLEtBQUssQ0FBQzthQUNoQjtTQUNKO1FBRUQsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUNMLFlBQUM7QUFBRCxDQW5DQSxBQW1DQyxJQUFBO0FBbkNZLHNCQUFLIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiaW1wb3J0IHtDaHVkaWxhLCBNb25zdGVyfSBmcm9tICcuL21vbnN0ZXInO1xyXG5pbXBvcnQge1V0aWxzfSBmcm9tICcuL3V0aWxzJztcclxuaW1wb3J0IHtJSGFzQ3NzQ2xhc3N9IGZyb20gJy4vaW50ZXJmYWNlcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgQ2VsbCBpbXBsZW1lbnRzIElIYXNDc3NDbGFzcyB7XHJcblxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfbGFiZWw6IHN0cmluZztcclxuICAgIHB1YmxpYyBnZXQgbGFiZWwoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbGFiZWw7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfY3NzQ2xhc3M6IHN0cmluZztcclxuICAgIHB1YmxpYyBnZXQgY3NzQ2xhc3MoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY3NzQ2xhc3M7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfdHlwZTogc3RyaW5nO1xyXG4gICAgcHVibGljIGdldCB0eXBlKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3R5cGU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfdHJhbnNpdGlvbkNvc3Q6IG51bWJlcjtcclxuICAgIHB1YmxpYyBnZXQgdHJhbnNpdGlvbkNvc3QoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdHJhbnNpdGlvbkNvc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfbW9uc3RlcnM6IE1vbnN0ZXI7XHJcbiAgICBwdWJsaWMgZ2V0IG1vbnN0ZXIoKTogTW9uc3RlcntcclxuICAgICAgICByZXR1cm4gdGhpcy5fbW9uc3RlcnM7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IobGFiZWw6IHN0cmluZywgY3NzQ2xhc3M6IHN0cmluZywgdHlwZTogc3RyaW5nLFxyXG4gICAgICAgICAgICB0cmFuc2l0aW9uQ29zdE1pbk1heCA6IFtudW1iZXIsIG51bWJlcl0sXHJcbiAgICAgICAgICAgIHBvc3NpYmxlQ3JlYXR1cmVzOiBNb25zdGVyW10pIHtcclxuICAgICAgICB0aGlzLl9sYWJlbCA9IGxhYmVsO1xyXG4gICAgICAgIHRoaXMuX2Nzc0NsYXNzID0gY3NzQ2xhc3M7XHJcbiAgICAgICAgdGhpcy5fdHlwZSA9IHR5cGU7XHJcbiAgICAgICAgdGhpcy5fdHJhbnNpdGlvbkNvc3QgPSBVdGlscy5yYW5kb20uYXBwbHkodGhpcywgdHJhbnNpdGlvbkNvc3RNaW5NYXgpO1xyXG4gICAgICAgIHRoaXMuX21vbnN0ZXJzID0gVXRpbHMucmFuZG9tSXRlbUZyb21BcnJheShwb3NzaWJsZUNyZWF0dXJlcyk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTGFuZENlbGwgZXh0ZW5kcyBDZWxsIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcignbCcsICdsYW5kJywgJycsIFsxLCAyXSwgW25ldyBDaHVkaWxhKCldKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIE1vdW50Q2VsbCBleHRlbmRzIENlbGwge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCdtJywgJ21vdW50JywgJycsIFszLCA1XSwgW25ldyBDaHVkaWxhKCldKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7SUhhc0Nzc0NsYXNzfSBmcm9tIFwiLi9pbnRlcmZhY2VzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQ3JlYXR1cmUgaW1wbGVtZW50cyBJSGFzQ3NzQ2xhc3Mge1xyXG4gICAgXHJcbiAgICBwcml2YXRlIF9uYW1lOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgZ2V0IG5hbWUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbmFtZTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXQgbmFtZSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fbmFtZSA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVhZG9ubHkgX2Nzc0NsYXNzOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgZ2V0IGNzc0NsYXNzKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Nzc0NsYXNzO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIF9sYWJlbCBpcyBzb21lIGNoYXIsIHVzZWQgZm9yIGRlYnVnZ2luZ1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfbGFiZWw6IHN0cmluZztcclxuXHJcbiAgICBwdWJsaWMgZ2V0IGxhYmVsKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xhYmVsO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgY3NzQ2xhc3MgOiBzdHJpbmcsIGxhYmVsOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9uYW1lID0gbmFtZTtcclxuICAgICAgICB0aGlzLl9jc3NDbGFzcyA9IGNzc0NsYXNzO1xyXG4gICAgICAgIHRoaXMuX2xhYmVsID0gbGFiZWw7XHJcbiAgICB9XHJcblxyXG59IiwiaW1wb3J0IHtNYXB9IGZyb20gJy4vbWFwJztcclxuaW1wb3J0IHtJMkRjb29yZGluYXRlcywgSUhhc0Nzc0NsYXNzfSBmcm9tICcuL2ludGVyZmFjZXMnO1xyXG5pbXBvcnQge0dhbWVTdGF0ZX0gZnJvbSAnLi9nYW1lU3RhdGUnO1xyXG5pbXBvcnQge1V0aWxzfSBmcm9tIFwiLi91dGlsc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEZpZWxkUmVuZGVyZXIge1xyXG5cclxuICAgIHByaXZhdGUgbWFwOiBNYXA7XHJcbiAgICBwcml2YXRlIGdhbWVTdGF0ZTogR2FtZVN0YXRlO1xyXG4gICAgcHJpdmF0ZSBnYW1lRmllbGQ6IEhUTUxFbGVtZW50O1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBtb3VzZUxpc3RlbmVyOiBhbnk7XHJcbiAgICBcclxuICAgIGNvbnN0cnVjdG9yKGdhbWVTdGF0ZTogR2FtZVN0YXRlLCBnYW1lRmllbGQ6IEhUTUxFbGVtZW50LCBtb3VzZUxpc3RlbmVyOiBhbnkpIHtcclxuICAgICAgICB0aGlzLm1hcCA9IGdhbWVTdGF0ZS5tYXA7XHJcbiAgICAgICAgdGhpcy5nYW1lU3RhdGUgPSBnYW1lU3RhdGU7XHJcbiAgICAgICAgdGhpcy5nYW1lRmllbGQgPSBnYW1lRmllbGQ7XHJcbiAgICAgICAgdGhpcy5tb3VzZUxpc3RlbmVyID0gbW91c2VMaXN0ZW5lcjsgXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFwcGVuZFRhYmxlKCkge1xyXG4gICAgICAgIGxldCB0YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RhYmxlJyk7XHJcbiAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCB0aGlzLm1hcC5nZXRTaXplKCkueTsgKyt5KSB7XHJcbiAgICAgICAgICAgIGxldCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCAgPCB0aGlzLm1hcC5nZXRTaXplKCkueDsgKyt4KSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XHJcbiAgICAgICAgICAgICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5tb3VzZUxpc3RlbmVyKTtcclxuICAgICAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZChjZWxsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0YWJsZS5hcHBlbmRDaGlsZChyb3cpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmdhbWVGaWVsZC5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgIHRoaXMuZ2FtZUZpZWxkLmFwcGVuZENoaWxkKHRhYmxlKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldFRhYmxlKCk6IEhUTUxUYWJsZUVsZW1lbnQge1xyXG4gICAgICAgIHJldHVybiA8SFRNTFRhYmxlRWxlbWVudD4gdGhpcy5nYW1lRmllbGQuY2hpbGRyZW5bMF07XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRDZWxsKGNvb3JkaW5hdGVzOiBJMkRjb29yZGluYXRlcyk6IEVsZW1lbnQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldFRhYmxlKCkucm93c1tjb29yZGluYXRlcy55XS5jZWxsc1tjb29yZGluYXRlcy54XTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0SFRNTFNwcml0ZShvYmo6IElIYXNDc3NDbGFzcyk6IEhUTUxFbGVtZW50IHtcclxuICAgICAgICBsZXQgSFRNTFNwcml0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIEhUTUxTcHJpdGUuY2xhc3NMaXN0LmFkZCgnc3ByaXRlJyk7XHJcbiAgICAgICAgSFRNTFNwcml0ZS5jbGFzc0xpc3QuYWRkKG9iai5jc3NDbGFzcyk7XHJcbiAgICAgICAgcmV0dXJuIEhUTUxTcHJpdGU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRDcmVhdHVyZXNMaXN0KCkge1xyXG4gICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZVN0YXRlLnBsYXllcixcclxuICAgICAgICAgICAgLi4udGhpcy5nYW1lU3RhdGUuY3JlYXR1cmVzXHJcbiAgICAgICAgXVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBmaWxsVGFibGUoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCB0aGlzLm1hcC5nZXRTaXplKCkueTsgKyt5KSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgdGhpcy5tYXAuZ2V0U2l6ZSgpLng7ICsreCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IG1hcENlbGwgPSB0aGlzLm1hcC5nZXRDZWxsKHsgeDogeCwgeTogeSB9KTtcclxuICAgICAgICAgICAgICAgIGxldCBIVE1MQ2VsbCA9IHRoaXMuZ2V0Q2VsbCh7IHg6IHgsIHk6IHkgfSk7XHJcbiAgICAgICAgICAgICAgICBIVE1MQ2VsbC5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgSFRNTENlbGwuYXBwZW5kQ2hpbGQoRmllbGRSZW5kZXJlci5nZXRIVE1MU3ByaXRlKG1hcENlbGwpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBjcmVhdHVyZXNMaXN0ID0gdGhpcy5nZXRDcmVhdHVyZXNMaXN0KCk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjcmVhdHVyZXNMaXN0Lmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgIGxldCBjcmVhdHVyZSA9IGNyZWF0dXJlc0xpc3RbaV07XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0Q2VsbChjcmVhdHVyZS5nZXRDb29yZGluYXRlcygpKS5hcHBlbmRDaGlsZChGaWVsZFJlbmRlcmVyLmdldEhUTUxTcHJpdGUoY3JlYXR1cmUpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHVwZGF0ZUNlbGxzKGNvb3JkaW5hdGVzOiBJMkRjb29yZGluYXRlc1tdKTogdm9pZCB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb29yZGluYXRlcy5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICBsZXQgbWFwQ2VsbCA9IHRoaXMubWFwLmdldENlbGwoY29vcmRpbmF0ZXNbaV0pO1xyXG4gICAgICAgICAgICBsZXQgSFRNTENlbGwgPSB0aGlzLmdldENlbGwoY29vcmRpbmF0ZXNbaV0pO1xyXG4gICAgICAgICAgICBIVE1MQ2VsbC5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgICAgICBIVE1MQ2VsbC5hcHBlbmRDaGlsZChGaWVsZFJlbmRlcmVyLmdldEhUTUxTcHJpdGUobWFwQ2VsbCkpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgY3JlYXR1cmVzTGlzdCA9IHRoaXMuZ2V0Q3JlYXR1cmVzTGlzdCgpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGNyZWF0dXJlc0xpc3QubGVuZ3RoOyArK2opIHtcclxuICAgICAgICAgICAgICAgIGlmKFV0aWxzLnNoYWxsb3dFcXVhbChjcmVhdHVyZXNMaXN0W2pdLmdldENvb3JkaW5hdGVzKCksIGNvb3JkaW5hdGVzW2ldKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiWUVTXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIEhUTUxDZWxsLmFwcGVuZENoaWxkKEZpZWxkUmVuZGVyZXIuZ2V0SFRNTFNwcml0ZShjcmVhdHVyZXNMaXN0W2pdKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge1BsYXllcn0gZnJvbSAnLi9wbGF5ZXInO1xyXG5pbXBvcnQge01hcH0gZnJvbSAnLi9tYXAnO1xyXG5pbXBvcnQge01vdmVNYW5hZ2VyfSBmcm9tICcuL21vdmVNYW5hZ2VyJztcclxuaW1wb3J0IHtJRHJhd2FibGVJbkZpZWxkLCBJU2NlbmVJbmZvfSBmcm9tICcuL2ludGVyZmFjZXMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEdhbWVTdGF0ZSB7XHJcblxyXG4gICAgcHVibGljIHBsYXllcjogUGxheWVyO1xyXG4gICAgcHVibGljIGNyZWF0dXJlczogSURyYXdhYmxlSW5GaWVsZFtdO1xyXG4gICAgcHVibGljIG1hcDogTWFwO1xyXG4gICAgcHVibGljIG1vdmVNYW5hZ2VyOiBNb3ZlTWFuYWdlcjtcclxuICAgIHB1YmxpYyBzY2VuZXM6IElTY2VuZUluZm9bXTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwbGF5ZXI6IFBsYXllciwgY3JlYXR1cmVzOiBJRHJhd2FibGVJbkZpZWxkW10pIHtcclxuICAgICAgICB0aGlzLnBsYXllciA9IHBsYXllcjtcclxuICAgICAgICB0aGlzLmNyZWF0dXJlcyA9IGNyZWF0dXJlcztcclxuICAgICAgICB0aGlzLm1hcCA9IG5ldyBNYXAoNSwgNSk7XHJcbiAgICAgICAgdGhpcy5tb3ZlTWFuYWdlciA9IG5ldyBNb3ZlTWFuYWdlcih0aGlzLm1hcCwgdGhpcy5wbGF5ZXIpO1xyXG4gICAgICAgIHRoaXMuc2NlbmVzID0gW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnZmllbGQnLFxyXG4gICAgICAgICAgICAgICAgZWxlbWVudDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWUtZmllbGQnKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnZmlnaHQnLFxyXG4gICAgICAgICAgICAgICAgZWxlbWVudDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWUtZmlnaHQnKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgfVxyXG5cclxufSIsImltcG9ydCB7UGxheWVyfSBmcm9tICcuL3BsYXllcic7XHJcbmltcG9ydCB7Q2h1ZGlsYX0gZnJvbSAnLi9tb25zdGVyJztcclxuaW1wb3J0IHtGaWVsZFJlbmRlcmVyfSBmcm9tICcuL2ZpZWxkUmVuZGVyZXInO1xyXG5pbXBvcnQge1NjZW5lTWFuYWdlcn0gZnJvbSAnLi9zY2VuZU1hbmFnZXInO1xyXG5pbXBvcnQge0dhbWVTdGF0ZX0gZnJvbSAnLi9nYW1lU3RhdGUnO1xyXG5pbXBvcnQge0kyRGNvb3JkaW5hdGVzfSBmcm9tICcuL2ludGVyZmFjZXMnO1xyXG5cclxuLyogR2xvYmFsIHZhcmlhYmxlcyAqL1xyXG5jb25zdCBnYW1lU3RhdGUgPSBuZXcgR2FtZVN0YXRlKFxyXG4gICAgbmV3IFBsYXllcihcIlN0ZXZlXCIsIFwiaGVyb1wiLCAnQCcsIDAsIDAsIDQsIFtuZXcgQ2h1ZGlsYSgpXSksXHJcbiAgICBbXVxyXG4pO1xyXG5jb25zdCBzY2VuZU1hbmFnZXIgPSBuZXcgU2NlbmVNYW5hZ2VyKGdhbWVTdGF0ZSk7XHJcbmNvbnN0IGZpZWxkUmVuZGVyZXIgPSBuZXcgRmllbGRSZW5kZXJlcihcclxuICAgIGdhbWVTdGF0ZSxcclxuICAgIHNjZW5lTWFuYWdlci5nZXRTY2VuZUluZm8oJ2ZpZWxkJykuZWxlbWVudCxcclxuICAgIGNlbGxDbGlja0xpc3RlbmVyXHJcbik7XHJcblxyXG4vKiBQcmVwYXJlIGZpZWxkICovXHJcbmZpZWxkUmVuZGVyZXIuYXBwZW5kVGFibGUoKTtcclxuZmllbGRSZW5kZXJlci5maWxsVGFibGUoKTtcclxuc2NlbmVNYW5hZ2VyLnNob3dTY2VuZSgnZmllbGQnKTtcclxuXHJcbi8qIENsaWNrIExpc3RlbmVyIGZvciBhbGwgY2VsbHMgaW4gZmllbGQgKi9cclxuZnVuY3Rpb24gY2VsbENsaWNrTGlzdGVuZXIoZXZlbnQ6IE1vdXNlRXZlbnQpIHtcclxuXHJcbiAgICBmdW5jdGlvbiBnZXRDb29yZGluYXRlc09mQ2VsbCh0YXJnZXQ6IEV2ZW50VGFyZ2V0KTogSTJEY29vcmRpbmF0ZXMge1xyXG4gICAgICAgIGxldCBlbGVtZW50ID0gPEhUTUxFbGVtZW50PnRhcmdldDtcclxuICAgICAgICBjb25zdCB0ZCA9IDxIVE1MVGFibGVDZWxsRWxlbWVudD5lbGVtZW50LnBhcmVudEVsZW1lbnQ7XHJcbiAgICAgICAgY29uc3Qgcm93ID0gPEhUTUxUYWJsZVJvd0VsZW1lbnQ+dGQucGFyZW50RWxlbWVudDtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB4OiB0ZC5jZWxsSW5kZXgsXHJcbiAgICAgICAgICAgIHk6IHJvdy5yb3dJbmRleFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjb29yZGluYXRlcyA9IGdldENvb3JkaW5hdGVzT2ZDZWxsKGV2ZW50LnRhcmdldCk7XHJcbiAgICBpZiAoZ2FtZVN0YXRlLm1vdmVNYW5hZ2VyLmlzQ29ycmVjdENvb3JkaW5hdGVzKGNvb3JkaW5hdGVzKSkge1xyXG4gICAgICAgIC8vIG1vdmVcclxuICAgICAgICBsZXQgb2xkX2Nvb3JkaW5hdGU6IEkyRGNvb3JkaW5hdGVzID0gZ2FtZVN0YXRlLnBsYXllci5nZXRDb29yZGluYXRlcygpO1xyXG4gICAgICAgIGdhbWVTdGF0ZS5tb3ZlTWFuYWdlci5tb3ZlKGNvb3JkaW5hdGVzKTtcclxuXHJcbiAgICAgICAgZmllbGRSZW5kZXJlci51cGRhdGVDZWxscyhbXHJcbiAgICAgICAgICAgIG9sZF9jb29yZGluYXRlLFxyXG4gICAgICAgICAgICBnYW1lU3RhdGUucGxheWVyLmdldENvb3JkaW5hdGVzKClcclxuICAgICAgICBdKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKGNvb3JkaW5hdGVzID09IGdhbWVTdGF0ZS5wbGF5ZXIuZ2V0Q29vcmRpbmF0ZXMoKSlcclxuICAgICAgICAgICAgc2NlbmVNYW5hZ2VyLnNob3dTY2VuZSgnZmlnaHQnKTtcclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKGdhbWVTdGF0ZS5wbGF5ZXIuZ2V0Q29vcmRpbmF0ZXMoKSk7XHJcbn1cclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgKGV2ZW50KSA9PiB7XHJcbiAgICBjb25zdCBrZXlOYW1lID0gZXZlbnQua2V5O1xyXG4gICAgY29uc29sZS5sb2coa2V5TmFtZSk7XHJcbiAgICBpZiAoa2V5TmFtZS50b0xvd2VyQ2FzZSgpID09ICcxJykge1xyXG4gICAgICAgIHNjZW5lTWFuYWdlci5zaG93U2NlbmUoJ2ZpZWxkJyk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChrZXlOYW1lLnRvTG93ZXJDYXNlKCkgPT0gJzInKSB7XHJcbiAgICAgICAgc2NlbmVNYW5hZ2VyLnNob3dTY2VuZSgnZmlnaHQnKTtcclxuICAgIH1cclxufSk7IiwiaW1wb3J0IHtDZWxsLCBMYW5kQ2VsbCwgTW91bnRDZWxsfSBmcm9tICcuL2NlbGwnO1xyXG5pbXBvcnQge0kyRGNvb3JkaW5hdGVzfSBmcm9tICcuL2ludGVyZmFjZXMnO1xyXG5pbXBvcnQge1V0aWxzfSBmcm9tICcuL3V0aWxzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBNYXAge1xyXG5cclxuICAgIHByaXZhdGUgcmVhZG9ubHkgc2l6ZVg6IG51bWJlcjtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgc2l6ZVk6IG51bWJlcjtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgZGF0YTogQ2VsbFtdW107XHJcblxyXG4gICAgY29uc3RydWN0b3Ioc2l6ZVg6IG51bWJlciwgc2l6ZVk6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuc2l6ZVggPSBzaXplWDtcclxuICAgICAgICB0aGlzLnNpemVZID0gc2l6ZVk7XHJcbiAgICAgICAgdGhpcy5kYXRhID0gTWFwLmdlbmVyYXRlKHNpemVYLCBzaXplWSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldENlbGwoY29vcmRpbmF0ZXM6IEkyRGNvb3JkaW5hdGVzKTogQ2VsbCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YVtjb29yZGluYXRlcy55XVtjb29yZGluYXRlcy54XTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0U2l6ZSgpOiB7IHg6IG51bWJlciwgeTogbnVtYmVyIH0ge1xyXG4gICAgICAgIHJldHVybiB7IHg6IHRoaXMuc2l6ZVgsIHk6IHRoaXMuc2l6ZVkgfTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2VuZXJhdGUoc2l6ZVg6IG51bWJlciwgc2l6ZVk6IG51bWJlcik6IENlbGxbXVtdIHtcclxuICAgICAgICBjb25zdCBkZWZhdWx0Q2VsbCA9IExhbmRDZWxsO1xyXG4gICAgICAgIGxldCBwb3NzaWJsZUNlbGxzID0gW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBvYmo6IE1vdW50Q2VsbCxcclxuICAgICAgICAgICAgICAgIHJhbmQ6IHttaW46IDUsIG1heDogMTB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICAgICAgY29uc29sZS5sb2coYE1hcDogZ2VuZXJhdGUsICgke3NpemVYfSwgJHtzaXplWX0pYCk7XHJcbiAgICAgICAgY29uc3QgZGF0YTogQ2VsbFtdW10gPSBbXTtcclxuICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHNpemVZOyArK3kpIHtcclxuICAgICAgICAgICAgY29uc3Qgcm93OiBDZWxsW10gPSBbXTtcclxuICAgICAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBzaXplWDsgKyt4KSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcmFuZE51bSA9IFV0aWxzLnJhbmRvbSgxLCAxMDApO1xyXG4gICAgICAgICAgICAgICAgbGV0IG9iamVjdEZvckNyZWF0ZSA9IG51bGw7XHJcblxyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwb3NzaWJsZUNlbGxzLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKFV0aWxzLmlzSW5SYW5nZShyYW5kTnVtLCBwb3NzaWJsZUNlbGxzW2ldLnJhbmQubWluLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NzaWJsZUNlbGxzW2ldLnJhbmQubWF4KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvYmplY3RGb3JDcmVhdGUgPSBwb3NzaWJsZUNlbGxzW2ldLm9iajtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICghb2JqZWN0Rm9yQ3JlYXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0Rm9yQ3JlYXRlID0gZGVmYXVsdENlbGw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHJvdy5wdXNoKG5ldyBvYmplY3RGb3JDcmVhdGUoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGF0YS5wdXNoKHJvdyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGBNYXA6IGdlbmVyYXRlZCwgKCR7c2l6ZVh9LCAke3NpemVZfSlgKTtcclxuICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgIH1cclxufSIsImltcG9ydCB7Q3JlYXR1cmV9IGZyb20gXCIuL2NyZWF0dXJlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgTW9uc3RlciBleHRlbmRzIENyZWF0dXJlIHtcclxuXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IF90eXBlOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgZ2V0IHR5cGUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdHlwZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9tYXhIZWF0aDogbnVtYmVyO1xyXG4gICAgcHVibGljIGdldCBtYXhIZWF0aCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9tYXhIZWF0aDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9oZWFsdGg6IG51bWJlcjtcclxuICAgIHB1YmxpYyBnZXQgaGVhbHRoKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2hlYWx0aDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9kZWZlbnNlOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgZ2V0IGRlZmVuc2UoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZGVmZW5zZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9hdHRhY2s6IG51bWJlcjtcclxuICAgIHB1YmxpYyBnZXQgYXR0YWNrKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2F0dGFjaztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9hdHRhY2tCb29zdGVyOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgZ2V0IGF0dGFja0Jvb3N0ZXIoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYXR0YWNrQm9vc3RlcjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIGNzc0NsYXNzOiBzdHJpbmcsIGxhYmVsOiBzdHJpbmcsIHR5cGU6IHN0cmluZyxcclxuICAgICAgICBoZWFsdGg6IG51bWJlciwgZGVmZW5zZTogbnVtYmVyLCBhdHRhY2s6IG51bWJlcixcclxuICAgICAgICBhdHRhY2tCb29zdGVyOiBudW1iZXIpIHtcclxuICAgICAgICBzdXBlcihuYW1lLCBjc3NDbGFzcywgbGFiZWwpO1xyXG4gICAgICAgIHRoaXMuX3R5cGUgPSB0eXBlO1xyXG4gICAgICAgIHRoaXMuX21heEhlYXRoID0gaGVhbHRoO1xyXG4gICAgICAgIHRoaXMuX2hlYWx0aCA9IGhlYWx0aDtcclxuICAgICAgICB0aGlzLl9kZWZlbnNlID0gZGVmZW5zZTtcclxuICAgICAgICB0aGlzLl9hdHRhY2sgPSBhdHRhY2s7XHJcbiAgICAgICAgdGhpcy5fYXR0YWNrQm9vc3RlciA9IGF0dGFja0Jvb3N0ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGJlQXR0YWNrZWQoZW5lbXk6IE1vbnN0ZXIpIHtcclxuICAgICAgICBjb25zdCBkYW1hZ2UgPSB0aGlzLmRlZmVuc2UgLSAoZW5lbXkuYXR0YWNrICsgZW5lbXkuYXR0YWNrQm9vc3Rlcik7XHJcbiAgICAgICAgaWYgKGRhbWFnZSA+PSAwKXtcclxuICAgICAgICAgICAgdGhpcy5faGVhbHRoIC09IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMuX2hlYWx0aCArPSBkYW1hZ2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkZWZlbnNlSGltc2VsZigpIHtcclxuICAgICAgICB0aGlzLl9kZWZlbnNlICs9IDU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGlzRGVhZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faGVhbHRoIDw9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIEhlYWwoKSB7XHJcbiAgICAgICB0aGlzLl9oZWFsdGggPSB0aGlzLm1heEhlYXRoO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRTdHJpbmcoKSB7XHJcbiAgICAgICAgcmV0dXJuIGAke3RoaXMubmFtZX0gJHt0aGlzLmhlYWx0aH1gO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENodWRpbGEgZXh0ZW5kcyBNb25zdGVyIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcignQ2h1ZGlsYScsICcuaW1hZ2UvY2h1ZGlsYS5wbmcnLCAnYycsICdyZWQnLCAxMDAsIDQsIDIwLCAxMCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge0kyRGNvb3JkaW5hdGVzfSBmcm9tICcuL2ludGVyZmFjZXMnO1xyXG5pbXBvcnQge01hcH0gZnJvbSAnLi9tYXAnO1xyXG5pbXBvcnQge1BsYXllcn0gZnJvbSAnLi9wbGF5ZXInO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1vdmVNYW5hZ2VyIHtcclxuXHJcbiAgICBwcml2YXRlIHBsYXllcjogUGxheWVyO1xyXG4gICAgcHJpdmF0ZSBtYXA6IE1hcDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihtYXA6IE1hcCwgcGxheWVyOiBQbGF5ZXIpIHtcclxuICAgICAgICB0aGlzLm1hcCA9IG1hcDtcclxuICAgICAgICB0aGlzLnBsYXllciA9IHBsYXllcjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENvb3JkaW5hdGVzIGFyZSBjb3JyZWN0IGlmIHRoZSBtYXAgcmFuZ2UgaXMgaW5jbHVkZWRcclxuICAgICAqIGFuZCBwb2ludCB0byBhbiBhZGphY2VudCBjZWxsIGhvcml6b250YWxseSBvciB2ZXJ0aWNhbGx5XHJcbiAgICAgKiBAcmV0dXJuc1xyXG4gICAgICogQHBhcmFtIGNvb3JkaW5hdGVzXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBpc0NvcnJlY3RDb29yZGluYXRlcyhjb29yZGluYXRlczogSTJEY29vcmRpbmF0ZXMpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gKDAgPD0gY29vcmRpbmF0ZXMueCAmJiBjb29yZGluYXRlcy54IDwgdGhpcy5tYXAuZ2V0U2l6ZSgpLngpICYmXHJcbiAgICAgICAgICAgICAgICgwIDw9IGNvb3JkaW5hdGVzLnkgJiYgY29vcmRpbmF0ZXMueSA8IHRoaXMubWFwLmdldFNpemUoKS55KSAmJlxyXG4gICAgICAgICAgICAgICAoTWF0aC5hYnMoY29vcmRpbmF0ZXMueCAtIHRoaXMucGxheWVyLmdldENvb3JkaW5hdGVzKCkueCkgK1xyXG4gICAgICAgICAgICAgICAgTWF0aC5hYnMoY29vcmRpbmF0ZXMueSAtIHRoaXMucGxheWVyLmdldENvb3JkaW5hdGVzKCkueSkgPT0gMSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG1vdmUoY29vcmRpbmF0ZXM6IEkyRGNvb3JkaW5hdGVzKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNDb3JyZWN0Q29vcmRpbmF0ZXMoY29vcmRpbmF0ZXMpKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGAke3RoaXMucGxheWVyLm5hbWV9IG1vdmVkIHRvICgke2Nvb3JkaW5hdGVzfSlgKTtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIubW92ZShjb29yZGluYXRlcyk7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGAke3RoaXMucGxheWVyLm5hbWV9IG5vdCBtb3ZlZCB0byAoJHtjb29yZGluYXRlc30pYCk7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge0NyZWF0dXJlfSBmcm9tIFwiLi9jcmVhdHVyZVwiO1xyXG5pbXBvcnQge01vbnN0ZXJ9IGZyb20gXCIuL21vbnN0ZXJcIjtcclxuaW1wb3J0IHtJMkRjb29yZGluYXRlcywgSURyYXdhYmxlSW5GaWVsZH0gZnJvbSBcIi4vaW50ZXJmYWNlc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBsYXllciBleHRlbmRzIENyZWF0dXJlIGltcGxlbWVudHMgSURyYXdhYmxlSW5GaWVsZCB7XHJcblxyXG4gICAgcHJpdmF0ZSB4OiBudW1iZXI7XHJcbiAgICBwcml2YXRlIHk6IG51bWJlcjtcclxuXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9hdmFpbGFibGVNb3ZlczogbnVtYmVyO1xyXG4gICAgcHVibGljIGdldCBhdmFpbGFibGVNb3ZlcygpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9hdmFpbGFibGVNb3ZlcztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9hdmFpbGFibGVNb25zdGVyczogTW9uc3RlcltdO1xyXG4gICAgcHVibGljIGdldCBhdmFpbGFibGVNb250ZXJzKCk6IE1vbnN0ZXJbXSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2F2YWlsYWJsZU1vbnN0ZXJzO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgY3NzQ2xhc3M6IHN0cmluZywgbGFiZWw6IHN0cmluZyxcclxuICAgICAgICB4OiBudW1iZXIsIHk6IG51bWJlciwgYXZhaWxhYmxlTW92ZXM6IG51bWJlcixcclxuICAgICAgICBhdmFpbGFibGVNb25zdGVyczogTW9uc3RlcltdKSB7XHJcbiAgICAgICAgc3VwZXIobmFtZSwgY3NzQ2xhc3MsIGxhYmVsKTtcclxuICAgICAgICB0aGlzLnggPSB4O1xyXG4gICAgICAgIHRoaXMueSA9IHk7XHJcbiAgICAgICAgdGhpcy5fYXZhaWxhYmxlTW92ZXMgPSBhdmFpbGFibGVNb3ZlcztcclxuICAgICAgICB0aGlzLl9hdmFpbGFibGVNb25zdGVycyA9IGF2YWlsYWJsZU1vbnN0ZXJzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBtb3ZlKGNvb3JkaW5hdGVzOiBJMkRjb29yZGluYXRlcykge1xyXG4gICAgICAgIHRoaXMueCA9IGNvb3JkaW5hdGVzLng7XHJcbiAgICAgICAgdGhpcy55ID0gY29vcmRpbmF0ZXMueTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0Q29vcmRpbmF0ZXMoKTogSTJEY29vcmRpbmF0ZXMgIHtcclxuICAgICAgICByZXR1cm4geyB4OiB0aGlzLngsIHk6IHRoaXMueSB9O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhZGRNb25zdGVyKG1vbnN0ZXI6IE1vbnN0ZXIpIHtcclxuICAgICAgICB0aGlzLl9hdmFpbGFibGVNb25zdGVycy5wdXNoKG1vbnN0ZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkZWxldGVNb25zdGVyKG1vbnN0ZXI6IE1vbnN0ZXIpIHtcclxuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuX2F2YWlsYWJsZU1vbnN0ZXJzLmluZGV4T2YobW9uc3Rlcik7XHJcblxyXG4gICAgICAgIHRoaXMuX2F2YWlsYWJsZU1vbnN0ZXJzID0gKGluZGV4ID4gLTEpID8gW1xyXG4gICAgICAgICAgICAuLi50aGlzLl9hdmFpbGFibGVNb25zdGVycy5zbGljZSgwLCBpbmRleCksXHJcbiAgICAgICAgICAgIC4uLnRoaXMuX2F2YWlsYWJsZU1vbnN0ZXJzLnNsaWNlKGluZGV4ICsgMSlcclxuICAgICAgICBdIDogdGhpcy5fYXZhaWxhYmxlTW9uc3RlcnM7XHJcbiAgICB9XHJcblxyXG59IiwiaW1wb3J0IHtJU2NlbmVJbmZvfSBmcm9tICcuL2ludGVyZmFjZXMnO1xyXG5pbXBvcnQge0dhbWVTdGF0ZX0gZnJvbSAnLi9nYW1lU3RhdGUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNjZW5lTWFuYWdlciB7XHJcblxyXG4gICAgZ2FtZVN0YXRlOiBHYW1lU3RhdGU7XHJcbiAgICBfY3VycmVudFNjZW5lOiBzdHJpbmc7XHJcblxyXG4gICAgcHVibGljIGdldCBjdXJyZW50U2NlbmUoKTogSVNjZW5lSW5mbyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0U2NlbmVJbmZvKHRoaXMuX2N1cnJlbnRTY2VuZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IoZ2FtZVN0YXRlOiBHYW1lU3RhdGUpIHtcclxuICAgICAgICB0aGlzLmdhbWVTdGF0ZSA9IGdhbWVTdGF0ZTtcclxuICAgICAgICB0aGlzLl9jdXJyZW50U2NlbmUgPSBcIlwiO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRTY2VuZUluZm8obmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgbGV0IHNjZW5lcyA9IHRoaXMuZ2FtZVN0YXRlLnNjZW5lcztcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNjZW5lcy5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICBpZiAoc2NlbmVzW2ldLm5hbWUgPT0gbmFtZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNjZW5lc1tpXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc2NlbmUgZG9lcyBub3QgZXhpc3RcIik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNob3dTY2VuZShuYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9jdXJyZW50U2NlbmUgPSBuYW1lO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBTaG93U2NlbmUgJHtuYW1lfSwgJHt0aGlzLmdhbWVTdGF0ZS5zY2VuZXMubGVuZ3RofWApXHJcbiAgICAgICAgbGV0IHNjZW5lID0gdGhpcy5nZXRTY2VuZUluZm8obmFtZSk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmdhbWVTdGF0ZS5zY2VuZXMubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgICAgdGhpcy5nYW1lU3RhdGUuc2NlbmVzW2ldLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmdhbWVTdGF0ZS5zY2VuZXNbaV0ubmFtZSwgaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNjZW5lLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xyXG4gICAgfVxyXG5cclxufSIsImV4cG9ydCBjbGFzcyBVdGlscyB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0gYSBcclxuICAgICAqIEBwYXJhbSBiIFxyXG4gICAgICogQHJldHVybnMgcmFuZG9tIG51bWJlciBiZXR3ZWVuIGEgYW5kIGIsIGluY2x1c2l2ZVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgcmFuZG9tKGE6IG51bWJlciwgYjogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGIgLSBhICsgMSkpICsgYTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgaXNJblJhbmdlKHg6IG51bWJlciwgbWluOiBudW1iZXIsIG1heDogbnVtYmVyKSB7XHJcbiAgICAgICAgcmV0dXJuIG1pbiA8PSB4ICYmIHggPD0gbWF4O1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyByYW5kb21JdGVtRnJvbUFycmF5KGFycjogYW55W10pOiBhbnl7XHJcbiAgICAgICAgcmV0dXJuIGFyclt0aGlzLnJhbmRvbSgwLCBhcnIubGVuZ3RoIC0gMSldO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBzaGFsbG93RXF1YWwoYTogYW55LCBiOiBhbnkpOiBib29sZWFuIHtcclxuICAgICAgICBjb25zdCBrZXlzMSA9IE9iamVjdC5rZXlzKGEpO1xyXG4gICAgICAgIGNvbnN0IGtleXMyID0gT2JqZWN0LmtleXMoYik7XHJcblxyXG4gICAgICAgIGlmIChrZXlzMS5sZW5ndGggIT09IGtleXMyLmxlbmd0aCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKGxldCBrZXkgb2Yga2V5czEpIHtcclxuICAgICAgICAgICAgaWYgKGFba2V5XSAhPT0gYltrZXldKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG59Il19
