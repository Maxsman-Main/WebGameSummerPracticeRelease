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
        this._transtionCost = utils_1.Utils.random.apply(this, transitionCostMinMax);
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
    Object.defineProperty(Cell.prototype, "transtionCost", {
        get: function () {
            return this._transtionCost;
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
    FieldRenderer.prototype.getCell = function (x, y) {
        return this.getTable().rows[y].cells[x];
    };
    FieldRenderer.getHTMLSprite = function (obj) {
        var HTMLSprite = document.createElement('div');
        HTMLSprite.classList.add('sprite');
        HTMLSprite.classList.add(obj.cssClass);
        return HTMLSprite;
    };
    FieldRenderer.prototype.fillTable = function () {
        for (var y = 0; y < this.map.getSize().y; ++y) {
            for (var x = 0; x < this.map.getSize().x; ++x) {
                var mapCell = this.map.getCell(x, y);
                this.getCell(x, y).innerHTML =
                    FieldRenderer.getHTMLSprite(mapCell).outerHTML;
            }
        }
        var listOfCreatures = __spreadArray([
            this.gameState.player
        ], this.gameState.creatures);
        for (var i = 0; i < listOfCreatures.length; ++i) {
            var creature = listOfCreatures[i];
            this.getCell(creature.getCoordinates().x, creature.getCoordinates().y).appendChild(FieldRenderer.getHTMLSprite(creature));
        }
    };
    return FieldRenderer;
}());
exports.FieldRenderer = FieldRenderer;
},{}],4:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameState = void 0;
var map_1 = require("./map");
var moveManager_1 = require("./moveManager");
var GameState = /** @class */ (function () {
    function GameState(player, creatures) {
        this.player = player;
        this.creatures = creatures,
            this.map = new map_1.Map(5, 5),
            this.moveManager = new moveManager_1.MoveManager(this.map, this.player),
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
var gameState = new gameState_1.GameState(new player_1.Player("Steve", "hero", '@', 0, 0, 4, [new monster_1.Chudila()]), []);
var sceneManager = new sceneManager_1.SceneManager(gameState);
var fieldRenderer = new fieldRenderer_1.FieldRenderer(gameState, sceneManager.getSceneInfo('field').element, cellClickListener);
fieldRenderer.appendTable();
fieldRenderer.fillTable();
sceneManager.showScene('field');
function cellClickListener(event) {
    var _a, _b, _c;
    function getCoordinatesOfCell(target) {
        var element = target;
        var td = element.parentElement;
        var row = td.parentElement;
        return [td.cellIndex, row.rowIndex];
    }
    var coordinates = getCoordinatesOfCell(event.target);
    if ((_a = gameState.moveManager).isCorrentCoordinates.apply(_a, coordinates)) {
        // move
        (_b = gameState.moveManager).move.apply(_b, coordinates);
        // if monster is alive
        if ((_c = gameState.map).getCell.apply(_c, coordinates).monster != null) {
            console.log("yes");
        }
    }
    else {
        var coordinatesOfPlayer = gameState.player.getCoordinates();
        if (coordinatesOfPlayer.x == coordinates[0] &&
            coordinatesOfPlayer.y == coordinates[1]) {
            sceneManager.showScene('fight');
        }
    }
    console.log(gameState.player.getCoordinates());
    fieldRenderer.fillTable();
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
    Map.prototype.getCell = function (x, y) {
        return this.data[y][x];
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
     * @param x
     * @param y
     * @returns
     */
    MoveManager.prototype.isCorrentCoordinates = function (x, y) {
        return (0 <= x && x < this.map.getSize().x) &&
            (0 <= y && y < this.map.getSize().y) &&
            (Math.abs(x - this.player.getCoordinates().x) +
                Math.abs(y - this.player.getCoordinates().y) == 1);
    };
    MoveManager.prototype.move = function (x, y) {
        if (this.isCorrentCoordinates(x, y)) {
            console.log(this.player.name + " moved to (" + x + ", " + y + ")");
            this.player.move(x, y);
            return true;
        }
        else {
            console.log(this.player.name + " not moved to (" + x + ", " + y + ")");
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
    Player.prototype.move = function (x, y) {
        this.x = x;
        this.y = y;
    };
    Player.prototype.getCoordinates = function () {
        return { x: this.x, y: this.y };
    };
    Player.prototype.addMonster = function (monster) {
        this._availableMonsters.push(monster);
    };
    Player.prototype.deleteMonster = function (monster) {
        var index = this._availableMonsters.indexOf(monster);
        var newArray = (index > -1) ? __spreadArray(__spreadArray([], this._availableMonsters.slice(0, index)), this._availableMonsters.slice(index + 1)) : this._availableMonsters;
        this._availableMonsters = newArray;
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
    return Utils;
}());
exports.Utils = Utils;
},{}]},{},[5])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvc2NyaXB0cy9jZWxsLnRzIiwic3JjL3NjcmlwdHMvY3JlYXR1cmUudHMiLCJzcmMvc2NyaXB0cy9maWVsZFJlbmRlcmVyLnRzIiwic3JjL3NjcmlwdHMvZ2FtZVN0YXRlLnRzIiwic3JjL3NjcmlwdHMvbWFpbi50cyIsInNyYy9zY3JpcHRzL21hcC50cyIsInNyYy9zY3JpcHRzL21vbnN0ZXIudHMiLCJzcmMvc2NyaXB0cy9tb3ZlTWFuYWdlci50cyIsInNyYy9zY3JpcHRzL3BsYXllci50cyIsInNyYy9zY3JpcHRzL3NjZW5lTWFuYWdlci50cyIsInNyYy9zY3JpcHRzL3V0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUEscUNBQTZDO0FBQzdDLGlDQUFnQztBQUdoQztJQTJCSSxjQUFZLEtBQWEsRUFBRSxRQUFnQixFQUFFLElBQVksRUFDakQsb0JBQXVDLEVBQ3ZDLGlCQUE0QjtRQUNoQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwQixJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztRQUMxQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUNsQixJQUFJLENBQUMsY0FBYyxHQUFHLGFBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO1FBQ3JFLElBQUksQ0FBQyxTQUFTLEdBQUcsYUFBSyxDQUFDLG1CQUFtQixDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDbEUsQ0FBQztJQWhDRCxzQkFBVyx1QkFBSzthQUFoQjtZQUNJLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN2QixDQUFDOzs7T0FBQTtJQUdELHNCQUFXLDBCQUFRO2FBQW5CO1lBQ0ksT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQzFCLENBQUM7OztPQUFBO0lBR0Qs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QWxCQSxBQWtCQyxJQUFBO0FBbEJZLHNCQUFLIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiaW1wb3J0IHsgTW9uc3RlciwgQ2h1ZGlsYSB9IGZyb20gJy4vbW9uc3Rlcic7XHJcbmltcG9ydCB7IFV0aWxzIH0gZnJvbSAnLi91dGlscyc7XHJcbmltcG9ydCB7IElIYXNDc3NDbGFzcyB9IGZyb20gJy4vaW50ZXJmYWNlcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgQ2VsbCBpbXBsZW1lbnRzIElIYXNDc3NDbGFzcyB7XHJcblxyXG4gICAgcHJpdmF0ZSBfbGFiZWw6IHN0cmluZztcclxuICAgIHB1YmxpYyBnZXQgbGFiZWwoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbGFiZWw7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfY3NzQ2xhc3M6IHN0cmluZztcclxuICAgIHB1YmxpYyBnZXQgY3NzQ2xhc3MoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY3NzQ2xhc3M7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfdHlwZTogc3RyaW5nO1xyXG4gICAgcHVibGljIGdldCB0eXBlKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3R5cGU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfdHJhbnN0aW9uQ29zdDogbnVtYmVyO1xyXG4gICAgcHVibGljIGdldCB0cmFuc3Rpb25Db3N0KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RyYW5zdGlvbkNvc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfbW9uc3RlcnM6IE1vbnN0ZXI7XHJcbiAgICBwdWJsaWMgZ2V0IG1vbnN0ZXIoKTogTW9uc3RlcntcclxuICAgICAgICByZXR1cm4gdGhpcy5fbW9uc3RlcnM7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IobGFiZWw6IHN0cmluZywgY3NzQ2xhc3M6IHN0cmluZywgdHlwZTogc3RyaW5nLFxyXG4gICAgICAgICAgICB0cmFuc2l0aW9uQ29zdE1pbk1heCA6IFtudW1iZXIsIG51bWJlcl0sXHJcbiAgICAgICAgICAgIHBvc3NpYmxlQ3JlYXR1cmVzOiBNb25zdGVyW10pIHtcclxuICAgICAgICB0aGlzLl9sYWJlbCA9IGxhYmVsO1xyXG4gICAgICAgIHRoaXMuX2Nzc0NsYXNzID0gY3NzQ2xhc3M7XHJcbiAgICAgICAgdGhpcy5fdHlwZSA9IHR5cGU7XHJcbiAgICAgICAgdGhpcy5fdHJhbnN0aW9uQ29zdCA9IFV0aWxzLnJhbmRvbS5hcHBseSh0aGlzLCB0cmFuc2l0aW9uQ29zdE1pbk1heCk7XHJcbiAgICAgICAgdGhpcy5fbW9uc3RlcnMgPSBVdGlscy5yYW5kb21JdGVtRnJvbUFycmF5KHBvc3NpYmxlQ3JlYXR1cmVzKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBMYW5kQ2VsbCBleHRlbmRzIENlbGwge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCdsJywgJ2xhbmQnLCAnJywgWzEsIDJdLCBbbmV3IENodWRpbGEoKV0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTW91bnRDZWxsIGV4dGVuZHMgQ2VsbCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoJ20nLCAnbW91bnQnLCAnJywgWzMsIDVdLCBbbmV3IENodWRpbGEoKV0pO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgSUhhc0Nzc0NsYXNzIH0gZnJvbSBcIi4vaW50ZXJmYWNlc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIENyZWF0dXJlIGltcGxlbWVudHMgSUhhc0Nzc0NsYXNzIHtcclxuICAgIFxyXG4gICAgcHJpdmF0ZSBfbmFtZTogc3RyaW5nO1xyXG4gICAgcHVibGljIGdldCBuYW1lKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX25hbWU7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0IG5hbWUodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX25hbWUgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9jc3NDbGFzczogc3RyaW5nO1xyXG4gICAgcHVibGljIGdldCBjc3NDbGFzcygpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jc3NDbGFzcztcclxuICAgIH1cclxuXHJcbiAgICAvLyBfbGFiZWwgaXMgc29tZSBjaGFyLCB1c2VkIGZvciBkZWJ1Z2dpbmdcclxuICAgIHByaXZhdGUgX2xhYmVsOiBzdHJpbmc7XHJcblxyXG4gICAgcHVibGljIGdldCBsYWJlbCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9sYWJlbDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIGNzc0NsYXNzIDogc3RyaW5nLCBsYWJlbDogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fbmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5fY3NzQ2xhc3MgPSBjc3NDbGFzcztcclxuICAgICAgICB0aGlzLl9sYWJlbCA9IGxhYmVsO1xyXG4gICAgfVxyXG5cclxufSIsImltcG9ydCB7IE1hcCB9IGZyb20gJy4vbWFwJztcclxuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSAnLi9wbGF5ZXInOyBcclxuaW1wb3J0IHsgSURyYXdhYmxlSW5GaWVsZCwgSUhhc0Nzc0NsYXNzIH0gZnJvbSAnLi9pbnRlcmZhY2VzJztcclxuaW1wb3J0IHsgR2FtZVN0YXRlIH0gZnJvbSAnLi9nYW1lU3RhdGUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEZpZWxkUmVuZGVyZXIge1xyXG5cclxuICAgIHByaXZhdGUgbWFwOiBNYXA7XHJcbiAgICBwcml2YXRlIGdhbWVTdGF0ZTogR2FtZVN0YXRlO1xyXG4gICAgcHJpdmF0ZSBnYW1lRmllbGQ6IEhUTUxFbGVtZW50O1xyXG4gICAgcHJpdmF0ZSBtb3VzZUxpc3RlbmVyOiBhbnk7XHJcbiAgICBcclxuICAgIGNvbnN0cnVjdG9yKGdhbWVTdGF0ZTogR2FtZVN0YXRlLCBnYW1lRmllbGQ6IEhUTUxFbGVtZW50LCBtb3VzZUxpc3RlbmVyOiBhbnkpIHtcclxuICAgICAgICB0aGlzLm1hcCA9IGdhbWVTdGF0ZS5tYXA7XHJcbiAgICAgICAgdGhpcy5nYW1lU3RhdGUgPSBnYW1lU3RhdGU7XHJcbiAgICAgICAgdGhpcy5nYW1lRmllbGQgPSBnYW1lRmllbGQ7XHJcbiAgICAgICAgdGhpcy5tb3VzZUxpc3RlbmVyID0gbW91c2VMaXN0ZW5lcjsgXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFwcGVuZFRhYmxlKCkge1xyXG4gICAgICAgIGxldCB0YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RhYmxlJyk7XHJcbiAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCB0aGlzLm1hcC5nZXRTaXplKCkueTsgKyt5KSB7XHJcbiAgICAgICAgICAgIGxldCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCAgPCB0aGlzLm1hcC5nZXRTaXplKCkueDsgKyt4KSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XHJcbiAgICAgICAgICAgICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5tb3VzZUxpc3RlbmVyKTtcclxuICAgICAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZChjZWxsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0YWJsZS5hcHBlbmRDaGlsZChyb3cpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmdhbWVGaWVsZC5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgIHRoaXMuZ2FtZUZpZWxkLmFwcGVuZENoaWxkKHRhYmxlKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldFRhYmxlKCk6IEhUTUxUYWJsZUVsZW1lbnQge1xyXG4gICAgICAgIHJldHVybiA8SFRNTFRhYmxlRWxlbWVudD4gdGhpcy5nYW1lRmllbGQuY2hpbGRyZW5bMF07XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRDZWxsKHg6IG51bWJlciwgeTpudW1iZXIpOiBFbGVtZW50IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRUYWJsZSgpLnJvd3NbeV0uY2VsbHNbeF07XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldEhUTUxTcHJpdGUob2JqOiBJSGFzQ3NzQ2xhc3MpOiBIVE1MRWxlbWVudCB7XHJcbiAgICAgICAgbGV0IEhUTUxTcHJpdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBIVE1MU3ByaXRlLmNsYXNzTGlzdC5hZGQoJ3Nwcml0ZScpO1xyXG4gICAgICAgIEhUTUxTcHJpdGUuY2xhc3NMaXN0LmFkZChvYmouY3NzQ2xhc3MpO1xyXG4gICAgICAgIHJldHVybiBIVE1MU3ByaXRlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBmaWxsVGFibGUoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCB0aGlzLm1hcC5nZXRTaXplKCkueTsgKyt5KSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgdGhpcy5tYXAuZ2V0U2l6ZSgpLng7ICsreCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IG1hcENlbGwgPSB0aGlzLm1hcC5nZXRDZWxsKHgsIHkpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRDZWxsKHgsIHkpLmlubmVySFRNTCA9XHJcbiAgICAgICAgICAgICAgICAgICAgRmllbGRSZW5kZXJlci5nZXRIVE1MU3ByaXRlKG1hcENlbGwpLm91dGVySFRNTDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgbGlzdE9mQ3JlYXR1cmVzID0gW1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVTdGF0ZS5wbGF5ZXIsXHJcbiAgICAgICAgICAgIC4uLnRoaXMuZ2FtZVN0YXRlLmNyZWF0dXJlc1xyXG4gICAgICAgIF1cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpc3RPZkNyZWF0dXJlcy5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICBsZXQgY3JlYXR1cmUgPSBsaXN0T2ZDcmVhdHVyZXNbaV07XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0Q2VsbChcclxuICAgICAgICAgICAgICAgIGNyZWF0dXJlLmdldENvb3JkaW5hdGVzKCkueCxcclxuICAgICAgICAgICAgICAgIGNyZWF0dXJlLmdldENvb3JkaW5hdGVzKCkueVxyXG4gICAgICAgICAgICApLmFwcGVuZENoaWxkKEZpZWxkUmVuZGVyZXIuZ2V0SFRNTFNwcml0ZShjcmVhdHVyZSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImltcG9ydCB7IFBsYXllciB9IGZyb20gJy4vcGxheWVyJztcclxuaW1wb3J0IHsgTWFwIH0gZnJvbSAnLi9tYXAnO1xyXG5pbXBvcnQgeyBDcmVhdHVyZSB9IGZyb20gJy4vY3JlYXR1cmUnO1xyXG5pbXBvcnQgeyBNb3ZlTWFuYWdlciB9IGZyb20gJy4vbW92ZU1hbmFnZXInO1xyXG5pbXBvcnQgeyBJRHJhd2FibGVJbkZpZWxkLCBJU2NlbmVJbmZvIH0gZnJvbSAnLi9pbnRlcmZhY2VzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBHYW1lU3RhdGUge1xyXG5cclxuXHJcbiAgICBwdWJsaWMgcGxheWVyOiBQbGF5ZXI7XHJcbiAgICBwdWJsaWMgY3JlYXR1cmVzOiBJRHJhd2FibGVJbkZpZWxkW107XHJcbiAgICBwdWJsaWMgbWFwOiBNYXA7XHJcbiAgICBwdWJsaWMgbW92ZU1hbmFnZXI6IE1vdmVNYW5hZ2VyO1xyXG4gICAgcHVibGljIHNjZW5lczogSVNjZW5lSW5mb1tdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHBsYXllcjogUGxheWVyLCBjcmVhdHVyZXM6IElEcmF3YWJsZUluRmllbGRbXSkge1xyXG4gICAgICAgIHRoaXMucGxheWVyID0gcGxheWVyO1xyXG4gICAgICAgIHRoaXMuY3JlYXR1cmVzID0gY3JlYXR1cmVzLFxyXG4gICAgICAgIHRoaXMubWFwID0gbmV3IE1hcCg1LCA1KSxcclxuICAgICAgICB0aGlzLm1vdmVNYW5hZ2VyID0gbmV3IE1vdmVNYW5hZ2VyKHRoaXMubWFwLCB0aGlzLnBsYXllciksXHJcbiAgICAgICAgdGhpcy5zY2VuZXMgPSBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdmaWVsZCcsXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50OiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZS1maWVsZCcpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdmaWdodCcsXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50OiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZS1maWdodCcpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICB9XHJcblxyXG59IiwiaW1wb3J0IHsgUGxheWVyIH0gZnJvbSAnLi9wbGF5ZXInO1xyXG5pbXBvcnQgeyBDaHVkaWxhIH0gZnJvbSAnLi9tb25zdGVyJztcclxuaW1wb3J0IHsgRmllbGRSZW5kZXJlciB9IGZyb20gJy4vZmllbGRSZW5kZXJlcic7XHJcbmltcG9ydCB7IFNjZW5lTWFuYWdlciB9IGZyb20gJy4vc2NlbmVNYW5hZ2VyJztcclxuaW1wb3J0IHsgR2FtZVN0YXRlIH0gZnJvbSAnLi9nYW1lU3RhdGUnO1xyXG5cclxuXHJcbnZhciBnYW1lU3RhdGUgPSBuZXcgR2FtZVN0YXRlKFxyXG4gICAgbmV3IFBsYXllcihcIlN0ZXZlXCIsIFwiaGVyb1wiLCAnQCcsIDAsIDAsIDQsIFsgbmV3IENodWRpbGEoKSBdKSxcclxuICAgIFtdXHJcbik7XHJcblxyXG52YXIgc2NlbmVNYW5hZ2VyID0gbmV3IFNjZW5lTWFuYWdlcihnYW1lU3RhdGUpO1xyXG52YXIgZmllbGRSZW5kZXJlciA9IG5ldyBGaWVsZFJlbmRlcmVyKFxyXG4gICAgZ2FtZVN0YXRlLFxyXG4gICAgc2NlbmVNYW5hZ2VyLmdldFNjZW5lSW5mbygnZmllbGQnKS5lbGVtZW50LFxyXG4gICAgY2VsbENsaWNrTGlzdGVuZXJcclxuKTtcclxuZmllbGRSZW5kZXJlci5hcHBlbmRUYWJsZSgpO1xyXG5maWVsZFJlbmRlcmVyLmZpbGxUYWJsZSgpO1xyXG5cclxuc2NlbmVNYW5hZ2VyLnNob3dTY2VuZSgnZmllbGQnKTtcclxuXHJcbmZ1bmN0aW9uIGNlbGxDbGlja0xpc3RlbmVyKGV2ZW50OiBNb3VzZUV2ZW50KSB7XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0Q29vcmRpbmF0ZXNPZkNlbGwodGFyZ2V0OiBFdmVudFRhcmdldCk6IFtudW1iZXIsIG51bWJlcl0ge1xyXG4gICAgICAgIHZhciBlbGVtZW50ID0gPEhUTUxFbGVtZW50PiB0YXJnZXQ7XHJcbiAgICAgICAgdmFyIHRkID0gPEhUTUxUYWJsZUNlbGxFbGVtZW50PiBlbGVtZW50LnBhcmVudEVsZW1lbnQ7XHJcbiAgICAgICAgdmFyIHJvdyA9IDxIVE1MVGFibGVSb3dFbGVtZW50PiB0ZC5wYXJlbnRFbGVtZW50O1xyXG4gICAgICAgIHJldHVybiBbdGQuY2VsbEluZGV4LCByb3cucm93SW5kZXhdO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBjb29yZGluYXRlcyA9IGdldENvb3JkaW5hdGVzT2ZDZWxsKGV2ZW50LnRhcmdldCk7XHJcbiAgICBpZiAoZ2FtZVN0YXRlLm1vdmVNYW5hZ2VyLmlzQ29ycmVudENvb3JkaW5hdGVzKC4uLmNvb3JkaW5hdGVzKSkge1xyXG4gICAgICAgIC8vIG1vdmVcclxuICAgICAgICBnYW1lU3RhdGUubW92ZU1hbmFnZXIubW92ZSguLi5jb29yZGluYXRlcyk7XHJcbiAgICAgICAgLy8gaWYgbW9uc3RlciBpcyBhbGl2ZVxyXG4gICAgICAgIGlmIChnYW1lU3RhdGUubWFwLmdldENlbGwoLi4uY29vcmRpbmF0ZXMpLm1vbnN0ZXIgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInllc1wiKTtcclxuICAgICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHZhciBjb29yZGluYXRlc09mUGxheWVyID0gZ2FtZVN0YXRlLnBsYXllci5nZXRDb29yZGluYXRlcygpO1xyXG4gICAgICAgIGlmIChjb29yZGluYXRlc09mUGxheWVyLnggPT0gY29vcmRpbmF0ZXNbMF0gJiZcclxuICAgICAgICAgICAgY29vcmRpbmF0ZXNPZlBsYXllci55ID09IGNvb3JkaW5hdGVzWzFdKSB7XHJcbiAgICAgICAgICAgIHNjZW5lTWFuYWdlci5zaG93U2NlbmUoJ2ZpZ2h0Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2coZ2FtZVN0YXRlLnBsYXllci5nZXRDb29yZGluYXRlcygpKTtcclxuICAgIGZpZWxkUmVuZGVyZXIuZmlsbFRhYmxlKCk7XHJcbn1cclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgKGV2ZW50KSA9PiB7XHJcbiAgICBjb25zdCBrZXlOYW1lID0gZXZlbnQua2V5O1xyXG4gICAgY29uc29sZS5sb2coa2V5TmFtZSk7XHJcbiAgICBpZiAoa2V5TmFtZS50b0xvd2VyQ2FzZSgpID09ICcxJykge1xyXG4gICAgICAgIHNjZW5lTWFuYWdlci5zaG93U2NlbmUoJ2ZpZWxkJyk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChrZXlOYW1lLnRvTG93ZXJDYXNlKCkgPT0gJzInKSB7XHJcbiAgICAgICAgc2NlbmVNYW5hZ2VyLnNob3dTY2VuZSgnZmlnaHQnKTtcclxuICAgIH1cclxufSk7IiwiaW1wb3J0IHsgQ2VsbCwgTGFuZENlbGwsIE1vdW50Q2VsbCB9IGZyb20gJy4vY2VsbCc7XHJcbmltcG9ydCB7IFV0aWxzIH0gZnJvbSAnLi91dGlscyc7XHJcblxyXG5leHBvcnQgY2xhc3MgTWFwIHtcclxuXHJcbiAgICBwcml2YXRlIHNpemVYOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIHNpemVZOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIGRhdGE6IENlbGxbXVtdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHNpemVYOiBudW1iZXIsIHNpemVZOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnNpemVYID0gc2l6ZVg7XHJcbiAgICAgICAgdGhpcy5zaXplWSA9IHNpemVZO1xyXG4gICAgICAgIHRoaXMuZGF0YSA9IE1hcC5nZW5lcmF0ZShzaXplWCwgc2l6ZVkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRDZWxsKHg6IG51bWJlciwgeTogbnVtYmVyKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YVt5XVt4XTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0U2l6ZSgpOiB7IHg6IG51bWJlciwgeTogbnVtYmVyIH0ge1xyXG4gICAgICAgIHJldHVybiB7IHg6IHRoaXMuc2l6ZVgsIHk6IHRoaXMuc2l6ZVkgfTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2VuZXJhdGUoc2l6ZVg6IG51bWJlciwgc2l6ZVk6IG51bWJlcik6IENlbGxbXVtdIHtcclxuICAgICAgICBjb25zdCBkZWZhdWx0Q2VsbCA9IExhbmRDZWxsO1xyXG4gICAgICAgIGxldCBwb3NzaWJsZUNlbGxzID0gW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBvYmo6IE1vdW50Q2VsbCxcclxuICAgICAgICAgICAgICAgIHJhbmQ6IHttaW46IDUsIG1heDogMTB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICAgICAgY29uc29sZS5sb2coYE1hcDogZ2VuZXJhdGUsICgke3NpemVYfSwgJHtzaXplWX0pYCk7XHJcbiAgICAgICAgdmFyIGRhdGE6IENlbGxbXVtdID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCBzaXplWTsgKyt5KSB7XHJcbiAgICAgICAgICAgIHZhciByb3c6IENlbGxbXSA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHNpemVYOyArK3gpIHtcclxuICAgICAgICAgICAgICAgIGxldCByYW5kTnVtID0gVXRpbHMucmFuZG9tKDEsIDEwMCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgb2JqZWN0Rm9yQ3JlYXRlID0gbnVsbDtcclxuXHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBvc3NpYmxlQ2VsbHMubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoVXRpbHMuaXNJblJhbmdlKHJhbmROdW0sIHBvc3NpYmxlQ2VsbHNbaV0ucmFuZC5taW4sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc3NpYmxlQ2VsbHNbaV0ucmFuZC5tYXgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdEZvckNyZWF0ZSA9IHBvc3NpYmxlQ2VsbHNbaV0ub2JqO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCFvYmplY3RGb3JDcmVhdGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBvYmplY3RGb3JDcmVhdGUgPSBkZWZhdWx0Q2VsbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgcm93LnB1c2gobmV3IG9iamVjdEZvckNyZWF0ZSgpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkYXRhLnB1c2gocm93KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coYE1hcDogZ2VuZXJhdGVkLCAoJHtzaXplWH0sICR7c2l6ZVl9KWApO1xyXG4gICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgQ3JlYXR1cmUgfSBmcm9tIFwiLi9jcmVhdHVyZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1vbnN0ZXIgZXh0ZW5kcyBDcmVhdHVyZSB7XHJcblxyXG4gICAgcHJpdmF0ZSBfdHlwZTogc3RyaW5nO1xyXG4gICAgcHVibGljIGdldCB0eXBlKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3R5cGU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfbWF4SGVhdGg6IG51bWJlcjtcclxuICAgIHB1YmxpYyBnZXQgbWF4SGVhdGgoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbWF4SGVhdGg7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfaGVhbHRoOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgZ2V0IGhlYWx0aCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9oZWFsdGg7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfZGVmZW5zZTogbnVtYmVyO1xyXG4gICAgcHVibGljIGdldCBkZWZlbnNlKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RlZmVuc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfYXR0YWNrOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgZ2V0IGF0dGFjaygpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9hdHRhY2s7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfYXR0YWNrQm9vc3RlcjogbnVtYmVyO1xyXG4gICAgcHVibGljIGdldCBhdHRhY2tCb29zdGVyKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2F0dGFja0Jvb3N0ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBjc3NDbGFzczogc3RyaW5nLCBsYWJlbDogc3RyaW5nLCB0eXBlOiBzdHJpbmcsXHJcbiAgICAgICAgaGVhbHRoOiBudW1iZXIsIGRlZmVuc2U6IG51bWJlciwgYXR0YWNrOiBudW1iZXIsXHJcbiAgICAgICAgYXR0YWNrQm9vc3RlcjogbnVtYmVyKSB7XHJcbiAgICAgICAgc3VwZXIobmFtZSwgY3NzQ2xhc3MsIGxhYmVsKTtcclxuICAgICAgICB0aGlzLl90eXBlID0gdHlwZTtcclxuICAgICAgICB0aGlzLl9tYXhIZWF0aCA9IGhlYWx0aDtcclxuICAgICAgICB0aGlzLl9oZWFsdGggPSBoZWFsdGg7XHJcbiAgICAgICAgdGhpcy5fZGVmZW5zZSA9IGRlZmVuc2U7XHJcbiAgICAgICAgdGhpcy5fYXR0YWNrID0gYXR0YWNrO1xyXG4gICAgICAgIHRoaXMuX2F0dGFja0Jvb3N0ZXIgPSBhdHRhY2tCb29zdGVyO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBiZUF0dGFja2VkKGVuZW15OiBNb25zdGVyKSB7XHJcbiAgICAgICAgdmFyIGRhbWFnZSA9IHRoaXMuZGVmZW5zZSAtIChlbmVteS5hdHRhY2sgKyBlbmVteS5hdHRhY2tCb29zdGVyKTtcclxuICAgICAgICBpZiAoZGFtYWdlID49IDApe1xyXG4gICAgICAgICAgICB0aGlzLl9oZWFsdGggLT0gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5faGVhbHRoICs9IGRhbWFnZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRlZmVuc2VIaW1zZWxmKCkge1xyXG4gICAgICAgIHRoaXMuX2RlZmVuc2UgKz0gNTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaXNEZWFkKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9oZWFsdGggPD0gMDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgSGVhbCgpIHtcclxuICAgICAgIHRoaXMuX2hlYWx0aCA9IHRoaXMubWF4SGVhdGg7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFN0cmluZygpIHtcclxuICAgICAgICByZXR1cm4gYCR7dGhpcy5uYW1lfSAke3RoaXMuaGVhbHRofWA7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ2h1ZGlsYSBleHRlbmRzIE1vbnN0ZXIge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCdDaHVkaWxhJywgJy5pbWFnZS9jaHVkaWxhLnBuZycsICdjJywgJ3JlZCcsIDEwMCwgNCwgMjAsIDEwKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IE1hcCB9IGZyb20gJy4vbWFwJztcclxuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSAnLi9wbGF5ZXInO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1vdmVNYW5hZ2VyIHtcclxuXHJcbiAgICBwcml2YXRlIHBsYXllcjogUGxheWVyO1xyXG4gICAgcHJpdmF0ZSBtYXA6IE1hcDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihtYXA6IE1hcCwgcGxheWVyOiBQbGF5ZXIpIHtcclxuICAgICAgICB0aGlzLm1hcCA9IG1hcDtcclxuICAgICAgICB0aGlzLnBsYXllciA9IHBsYXllcjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENvb3JkaW5hdGVzIGFyZSBjb3JyZWN0IGlmIHRoZSBtYXAgcmFuZ2UgaXMgaW5jbHVkZWRcclxuICAgICAqIGFuZCBwb2ludCB0byBhbiBhZGphY2VudCBjZWxsIGhvcml6b250YWxseSBvciB2ZXJ0aWNhbGx5IFxyXG4gICAgICogQHBhcmFtIHhcclxuICAgICAqIEBwYXJhbSB5XHJcbiAgICAgKiBAcmV0dXJuc1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgaXNDb3JyZW50Q29vcmRpbmF0ZXMoeDogbnVtYmVyLCB5OiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gKDAgPD0geCAmJiB4IDwgdGhpcy5tYXAuZ2V0U2l6ZSgpLngpICYmXHJcbiAgICAgICAgICAgICAgICgwIDw9IHkgJiYgeSA8IHRoaXMubWFwLmdldFNpemUoKS55KSAmJlxyXG4gICAgICAgICAgICAgICAoTWF0aC5hYnMoeCAtIHRoaXMucGxheWVyLmdldENvb3JkaW5hdGVzKCkueCkgK1xyXG4gICAgICAgICAgICAgICAgTWF0aC5hYnMoeSAtIHRoaXMucGxheWVyLmdldENvb3JkaW5hdGVzKCkueSkgPT0gMSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG1vdmUoeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcclxuICAgICAgICBpZiAodGhpcy5pc0NvcnJlbnRDb29yZGluYXRlcyh4LCB5KSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgJHt0aGlzLnBsYXllci5uYW1lfSBtb3ZlZCB0byAoJHt4fSwgJHt5fSlgKTtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIubW92ZSh4LCB5KTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYCR7dGhpcy5wbGF5ZXIubmFtZX0gbm90IG1vdmVkIHRvICgke3h9LCAke3l9KWApO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgQ3JlYXR1cmUgfSBmcm9tIFwiLi9jcmVhdHVyZVwiO1xyXG5pbXBvcnQgeyBNb25zdGVyIH0gZnJvbSBcIi4vbW9uc3RlclwiO1xyXG5pbXBvcnQgeyBJRHJhd2FibGVJbkZpZWxkIH0gZnJvbSBcIi4vaW50ZXJmYWNlc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBsYXllciBleHRlbmRzIENyZWF0dXJlIGltcGxlbWVudHMgSURyYXdhYmxlSW5GaWVsZCB7XHJcblxyXG4gICAgcHJpdmF0ZSB4OiBudW1iZXI7XHJcbiAgICBwcml2YXRlIHk6IG51bWJlcjtcclxuXHJcbiAgICBwcml2YXRlIF9hdmFpbGFibGVNb3ZlczogbnVtYmVyO1xyXG4gICAgcHVibGljIGdldCBhdmFpbGFibGVNb3ZlcygpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9hdmFpbGFibGVNb3ZlcztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9hdmFpbGFibGVNb25zdGVyczogTW9uc3RlcltdO1xyXG4gICAgcHVibGljIGdldCBhdmFpbGFibGVNb250ZXJzKCk6IE1vbnN0ZXJbXSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2F2YWlsYWJsZU1vbnN0ZXJzO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgY3NzQ2xhc3M6IHN0cmluZywgbGFiZWw6IHN0cmluZyxcclxuICAgICAgICB4OiBudW1iZXIsIHk6IG51bWJlciwgYXZhaWxhYmxlTW92ZXM6IG51bWJlcixcclxuICAgICAgICBhdmFpbGFibGVNb25zdGVyczogTW9uc3RlcltdKSB7XHJcbiAgICAgICAgc3VwZXIobmFtZSwgY3NzQ2xhc3MsIGxhYmVsKTtcclxuICAgICAgICB0aGlzLnggPSB4O1xyXG4gICAgICAgIHRoaXMueSA9IHk7XHJcbiAgICAgICAgdGhpcy5fYXZhaWxhYmxlTW92ZXMgPSBhdmFpbGFibGVNb3ZlcztcclxuICAgICAgICB0aGlzLl9hdmFpbGFibGVNb25zdGVycyA9IGF2YWlsYWJsZU1vbnN0ZXJzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBtb3ZlKHg6IG51bWJlciwgeTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy54ID0geDtcclxuICAgICAgICB0aGlzLnkgPSB5O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRDb29yZGluYXRlcygpIDogeyB4OiBudW1iZXIsIHk6IG51bWJlciB9IHtcclxuICAgICAgICByZXR1cm4geyB4OiB0aGlzLngsIHk6IHRoaXMueSB9O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhZGRNb25zdGVyKG1vbnN0ZXI6IE1vbnN0ZXIpIHtcclxuICAgICAgICB0aGlzLl9hdmFpbGFibGVNb25zdGVycy5wdXNoKG1vbnN0ZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkZWxldGVNb25zdGVyKG1vbnN0ZXI6IE1vbnN0ZXIpIHtcclxuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuX2F2YWlsYWJsZU1vbnN0ZXJzLmluZGV4T2YobW9uc3Rlcik7XHJcblxyXG4gICAgICAgIGNvbnN0IG5ld0FycmF5ID0gKGluZGV4ID4gLTEpID8gW1xyXG4gICAgICAgICAgICAuLi50aGlzLl9hdmFpbGFibGVNb25zdGVycy5zbGljZSgwLCBpbmRleCksXHJcbiAgICAgICAgICAgIC4uLnRoaXMuX2F2YWlsYWJsZU1vbnN0ZXJzLnNsaWNlKGluZGV4ICsgMSlcclxuICAgICAgICBdIDogdGhpcy5fYXZhaWxhYmxlTW9uc3RlcnM7XHJcblxyXG4gICAgICAgIHRoaXMuX2F2YWlsYWJsZU1vbnN0ZXJzID0gbmV3QXJyYXk7XHJcbiAgICB9XHJcblxyXG59IiwiaW1wb3J0IHsgSVNjZW5lSW5mbyB9IGZyb20gJy4vaW50ZXJmYWNlcyc7XHJcbmltcG9ydCB7IEdhbWVTdGF0ZSB9IGZyb20gJy4vZ2FtZVN0YXRlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBTY2VuZU1hbmFnZXIge1xyXG5cclxuICAgIGdhbWVTdGF0ZTogR2FtZVN0YXRlO1xyXG4gICAgX2N1cnJlbnRTY2VuZTogc3RyaW5nO1xyXG5cclxuICAgIHB1YmxpYyBnZXQgY3VycmVudFNjZW5lKCk6IElTY2VuZUluZm8ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldFNjZW5lSW5mbyh0aGlzLl9jdXJyZW50U2NlbmUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKGdhbWVTdGF0ZTogR2FtZVN0YXRlKSB7XHJcbiAgICAgICAgdGhpcy5nYW1lU3RhdGUgPSBnYW1lU3RhdGU7XHJcbiAgICAgICAgdGhpcy5fY3VycmVudFNjZW5lID0gXCJcIjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0U2NlbmVJbmZvKG5hbWU6IHN0cmluZykge1xyXG4gICAgICAgIGxldCBzY2VuZXMgPSB0aGlzLmdhbWVTdGF0ZS5zY2VuZXM7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzY2VuZXMubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgICAgaWYgKHNjZW5lc1tpXS5uYW1lID09IG5hbWUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBzY2VuZXNbaV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHNjZW5lIGRvZXMgbm90IGV4aXN0XCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzaG93U2NlbmUobmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fY3VycmVudFNjZW5lID0gbmFtZTtcclxuICAgICAgICBjb25zb2xlLmxvZyhgU2hvd1NjZW5lICR7bmFtZX0sICR7dGhpcy5nYW1lU3RhdGUuc2NlbmVzLmxlbmd0aH1gKVxyXG4gICAgICAgIGxldCBzY2VuZSA9IHRoaXMuZ2V0U2NlbmVJbmZvKG5hbWUpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5nYW1lU3RhdGUuc2NlbmVzLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZVN0YXRlLnNjZW5lc1tpXS5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5nYW1lU3RhdGUuc2NlbmVzW2ldLm5hbWUsIGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzY2VuZS5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxuICAgIH1cclxuXHJcbn0iLCJleHBvcnQgY2xhc3MgVXRpbHMge1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIGEgXHJcbiAgICAgKiBAcGFyYW0gYiBcclxuICAgICAqIEByZXR1cm5zIHJhbmRvbSBudW1iZXIgYmV0d2VlbiBhIGFuZCBiLCBpbmNsdXNpdmVcclxuICAgICAqL1xyXG4gICAgc3RhdGljIHJhbmRvbShhOiBudW1iZXIsIGI6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChiIC0gYSArIDEpKSArIGE7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGlzSW5SYW5nZSh4OiBudW1iZXIsIG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcikge1xyXG4gICAgICAgIHJldHVybiBtaW4gPD0geCAmJiB4IDw9IG1heDtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgcmFuZG9tSXRlbUZyb21BcnJheShhcnI6IGFueVtdKTogYW55e1xyXG4gICAgICAgIHJldHVybiBhcnJbdGhpcy5yYW5kb20oMCwgYXJyLmxlbmd0aCAtIDEpXTtcclxuICAgIH1cclxufSJdfQ==
