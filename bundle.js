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
    var old_coordinate = gameState.player.getCoordinates();
    if (gameState.moveManager.move(coordinates)) {
        fieldRenderer.updateCells([
            old_coordinate,
            gameState.player.getCoordinates()
        ]);
    }
    else {
        if (coordinates == gameState.player.getCoordinates())
            sceneManager.showScene('fight');
    }
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
        var scene = this.getSceneInfo(name);
        for (var i = 0; i < this.gameState.scenes.length; ++i) {
            this.gameState.scenes[i].element.classList.add('hide');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvc2NyaXB0cy9jZWxsLnRzIiwic3JjL3NjcmlwdHMvY3JlYXR1cmUudHMiLCJzcmMvc2NyaXB0cy9maWVsZFJlbmRlcmVyLnRzIiwic3JjL3NjcmlwdHMvZ2FtZVN0YXRlLnRzIiwic3JjL3NjcmlwdHMvbWFpbi50cyIsInNyYy9zY3JpcHRzL21hcC50cyIsInNyYy9zY3JpcHRzL21vbnN0ZXIudHMiLCJzcmMvc2NyaXB0cy9tb3ZlTWFuYWdlci50cyIsInNyYy9zY3JpcHRzL3BsYXllci50cyIsInNyYy9zY3JpcHRzL3NjZW5lTWFuYWdlci50cyIsInNyYy9zY3JpcHRzL3V0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUEscUNBQTJDO0FBQzNDLGlDQUE4QjtBQUc5QjtJQTJCSSxjQUFZLEtBQWEsRUFBRSxRQUFnQixFQUFFLElBQVksRUFDakQsb0JBQXVDLEVBQ3ZDLGlCQUE0QjtRQUNoQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwQixJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztRQUMxQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUNsQixJQUFJLENBQUMsZUFBZSxHQUFHLGFBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO1FBQ3RFLElBQUksQ0FBQyxTQUFTLEdBQUcsYUFBSyxDQUFDLG1CQUFtQixDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDbEUsQ0FBQztJQWhDRCxzQkFBVyx1QkFBSzthQUFoQjtZQUNJLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN2QixDQUFDOzs7T0FBQTtJQUdELHNCQUFXLDBCQUFRO2FBQW5CO1lBQ0ksT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQzFCLENBQUM7OztPQUFBO0lBR0Qs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LElBQUE7QUFuQ1ksc0JBQUsiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJpbXBvcnQge0NodWRpbGEsIE1vbnN0ZXJ9IGZyb20gJy4vbW9uc3Rlcic7XHJcbmltcG9ydCB7VXRpbHN9IGZyb20gJy4vdXRpbHMnO1xyXG5pbXBvcnQge0lIYXNDc3NDbGFzc30gZnJvbSAnLi9pbnRlcmZhY2VzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBDZWxsIGltcGxlbWVudHMgSUhhc0Nzc0NsYXNzIHtcclxuXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9sYWJlbDogc3RyaW5nO1xyXG4gICAgcHVibGljIGdldCBsYWJlbCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9sYWJlbDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9jc3NDbGFzczogc3RyaW5nO1xyXG4gICAgcHVibGljIGdldCBjc3NDbGFzcygpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jc3NDbGFzcztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IF90eXBlOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgZ2V0IHR5cGUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdHlwZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IF90cmFuc2l0aW9uQ29zdDogbnVtYmVyO1xyXG4gICAgcHVibGljIGdldCB0cmFuc2l0aW9uQ29zdCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl90cmFuc2l0aW9uQ29zdDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9tb25zdGVyczogTW9uc3RlcjtcclxuICAgIHB1YmxpYyBnZXQgbW9uc3RlcigpOiBNb25zdGVye1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9tb25zdGVycztcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihsYWJlbDogc3RyaW5nLCBjc3NDbGFzczogc3RyaW5nLCB0eXBlOiBzdHJpbmcsXHJcbiAgICAgICAgICAgIHRyYW5zaXRpb25Db3N0TWluTWF4IDogW251bWJlciwgbnVtYmVyXSxcclxuICAgICAgICAgICAgcG9zc2libGVDcmVhdHVyZXM6IE1vbnN0ZXJbXSkge1xyXG4gICAgICAgIHRoaXMuX2xhYmVsID0gbGFiZWw7XHJcbiAgICAgICAgdGhpcy5fY3NzQ2xhc3MgPSBjc3NDbGFzcztcclxuICAgICAgICB0aGlzLl90eXBlID0gdHlwZTtcclxuICAgICAgICB0aGlzLl90cmFuc2l0aW9uQ29zdCA9IFV0aWxzLnJhbmRvbS5hcHBseSh0aGlzLCB0cmFuc2l0aW9uQ29zdE1pbk1heCk7XHJcbiAgICAgICAgdGhpcy5fbW9uc3RlcnMgPSBVdGlscy5yYW5kb21JdGVtRnJvbUFycmF5KHBvc3NpYmxlQ3JlYXR1cmVzKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBMYW5kQ2VsbCBleHRlbmRzIENlbGwge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCdsJywgJ2xhbmQnLCAnJywgWzEsIDJdLCBbbmV3IENodWRpbGEoKV0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTW91bnRDZWxsIGV4dGVuZHMgQ2VsbCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoJ20nLCAnbW91bnQnLCAnJywgWzMsIDVdLCBbbmV3IENodWRpbGEoKV0pO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtJSGFzQ3NzQ2xhc3N9IGZyb20gXCIuL2ludGVyZmFjZXNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBDcmVhdHVyZSBpbXBsZW1lbnRzIElIYXNDc3NDbGFzcyB7XHJcbiAgICBcclxuICAgIHByaXZhdGUgX25hbWU6IHN0cmluZztcclxuICAgIHB1YmxpYyBnZXQgbmFtZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9uYW1lO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNldCBuYW1lKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9uYW1lID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfY3NzQ2xhc3M6IHN0cmluZztcclxuICAgIHB1YmxpYyBnZXQgY3NzQ2xhc3MoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY3NzQ2xhc3M7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gX2xhYmVsIGlzIHNvbWUgY2hhciwgdXNlZCBmb3IgZGVidWdnaW5nXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9sYWJlbDogc3RyaW5nO1xyXG5cclxuICAgIHB1YmxpYyBnZXQgbGFiZWwoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbGFiZWw7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBjc3NDbGFzcyA6IHN0cmluZywgbGFiZWw6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX25hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMuX2Nzc0NsYXNzID0gY3NzQ2xhc3M7XHJcbiAgICAgICAgdGhpcy5fbGFiZWwgPSBsYWJlbDtcclxuICAgIH1cclxuXHJcbn0iLCJpbXBvcnQge01hcH0gZnJvbSAnLi9tYXAnO1xyXG5pbXBvcnQge0kyRGNvb3JkaW5hdGVzLCBJSGFzQ3NzQ2xhc3N9IGZyb20gJy4vaW50ZXJmYWNlcyc7XHJcbmltcG9ydCB7R2FtZVN0YXRlfSBmcm9tICcuL2dhbWVTdGF0ZSc7XHJcbmltcG9ydCB7VXRpbHN9IGZyb20gXCIuL3V0aWxzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRmllbGRSZW5kZXJlciB7XHJcblxyXG4gICAgcHJpdmF0ZSBtYXA6IE1hcDtcclxuICAgIHByaXZhdGUgZ2FtZVN0YXRlOiBHYW1lU3RhdGU7XHJcbiAgICBwcml2YXRlIGdhbWVGaWVsZDogSFRNTEVsZW1lbnQ7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IG1vdXNlTGlzdGVuZXI6IGFueTtcclxuICAgIFxyXG4gICAgY29uc3RydWN0b3IoZ2FtZVN0YXRlOiBHYW1lU3RhdGUsIGdhbWVGaWVsZDogSFRNTEVsZW1lbnQsIG1vdXNlTGlzdGVuZXI6IGFueSkge1xyXG4gICAgICAgIHRoaXMubWFwID0gZ2FtZVN0YXRlLm1hcDtcclxuICAgICAgICB0aGlzLmdhbWVTdGF0ZSA9IGdhbWVTdGF0ZTtcclxuICAgICAgICB0aGlzLmdhbWVGaWVsZCA9IGdhbWVGaWVsZDtcclxuICAgICAgICB0aGlzLm1vdXNlTGlzdGVuZXIgPSBtb3VzZUxpc3RlbmVyOyBcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXBwZW5kVGFibGUoKSB7XHJcbiAgICAgICAgbGV0IHRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGFibGUnKTtcclxuICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHRoaXMubWFwLmdldFNpemUoKS55OyArK3kpIHtcclxuICAgICAgICAgICAgbGV0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHggPSAwOyB4ICA8IHRoaXMubWFwLmdldFNpemUoKS54OyArK3gpIHtcclxuICAgICAgICAgICAgICAgIGxldCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcclxuICAgICAgICAgICAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm1vdXNlTGlzdGVuZXIpO1xyXG4gICAgICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKGNlbGwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRhYmxlLmFwcGVuZENoaWxkKHJvdyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZ2FtZUZpZWxkLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5nYW1lRmllbGQuYXBwZW5kQ2hpbGQodGFibGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0VGFibGUoKTogSFRNTFRhYmxlRWxlbWVudCB7XHJcbiAgICAgICAgcmV0dXJuIDxIVE1MVGFibGVFbGVtZW50PiB0aGlzLmdhbWVGaWVsZC5jaGlsZHJlblswXTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldENlbGwoY29vcmRpbmF0ZXM6IEkyRGNvb3JkaW5hdGVzKTogRWxlbWVudCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VGFibGUoKS5yb3dzW2Nvb3JkaW5hdGVzLnldLmNlbGxzW2Nvb3JkaW5hdGVzLnhdO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXRIVE1MU3ByaXRlKG9iajogSUhhc0Nzc0NsYXNzKTogSFRNTEVsZW1lbnQge1xyXG4gICAgICAgIGxldCBIVE1MU3ByaXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgSFRNTFNwcml0ZS5jbGFzc0xpc3QuYWRkKCdzcHJpdGUnKTtcclxuICAgICAgICBIVE1MU3ByaXRlLmNsYXNzTGlzdC5hZGQob2JqLmNzc0NsYXNzKTtcclxuICAgICAgICByZXR1cm4gSFRNTFNwcml0ZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldENyZWF0dXJlc0xpc3QoKSB7XHJcbiAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgdGhpcy5nYW1lU3RhdGUucGxheWVyLFxyXG4gICAgICAgICAgICAuLi50aGlzLmdhbWVTdGF0ZS5jcmVhdHVyZXNcclxuICAgICAgICBdXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGZpbGxUYWJsZSgpIHtcclxuICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHRoaXMubWFwLmdldFNpemUoKS55OyArK3kpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB0aGlzLm1hcC5nZXRTaXplKCkueDsgKyt4KSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbWFwQ2VsbCA9IHRoaXMubWFwLmdldENlbGwoeyB4OiB4LCB5OiB5IH0pO1xyXG4gICAgICAgICAgICAgICAgbGV0IEhUTUxDZWxsID0gdGhpcy5nZXRDZWxsKHsgeDogeCwgeTogeSB9KTtcclxuICAgICAgICAgICAgICAgIEhUTUxDZWxsLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICBIVE1MQ2VsbC5hcHBlbmRDaGlsZChGaWVsZFJlbmRlcmVyLmdldEhUTUxTcHJpdGUobWFwQ2VsbCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGNyZWF0dXJlc0xpc3QgPSB0aGlzLmdldENyZWF0dXJlc0xpc3QoKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNyZWF0dXJlc0xpc3QubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgICAgbGV0IGNyZWF0dXJlID0gY3JlYXR1cmVzTGlzdFtpXTtcclxuICAgICAgICAgICAgdGhpcy5nZXRDZWxsKGNyZWF0dXJlLmdldENvb3JkaW5hdGVzKCkpLmFwcGVuZENoaWxkKEZpZWxkUmVuZGVyZXIuZ2V0SFRNTFNwcml0ZShjcmVhdHVyZSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdXBkYXRlQ2VsbHMoY29vcmRpbmF0ZXM6IEkyRGNvb3JkaW5hdGVzW10pOiB2b2lkIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvb3JkaW5hdGVzLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgIGxldCBtYXBDZWxsID0gdGhpcy5tYXAuZ2V0Q2VsbChjb29yZGluYXRlc1tpXSk7XHJcbiAgICAgICAgICAgIGxldCBIVE1MQ2VsbCA9IHRoaXMuZ2V0Q2VsbChjb29yZGluYXRlc1tpXSk7XHJcbiAgICAgICAgICAgIEhUTUxDZWxsLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgICAgIEhUTUxDZWxsLmFwcGVuZENoaWxkKEZpZWxkUmVuZGVyZXIuZ2V0SFRNTFNwcml0ZShtYXBDZWxsKSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBjcmVhdHVyZXNMaXN0ID0gdGhpcy5nZXRDcmVhdHVyZXNMaXN0KCk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgY3JlYXR1cmVzTGlzdC5sZW5ndGg7ICsraikge1xyXG4gICAgICAgICAgICAgICAgaWYoVXRpbHMuc2hhbGxvd0VxdWFsKGNyZWF0dXJlc0xpc3Rbal0uZ2V0Q29vcmRpbmF0ZXMoKSwgY29vcmRpbmF0ZXNbaV0pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgSFRNTENlbGwuYXBwZW5kQ2hpbGQoRmllbGRSZW5kZXJlci5nZXRIVE1MU3ByaXRlKGNyZWF0dXJlc0xpc3Rbal0pKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImltcG9ydCB7UGxheWVyfSBmcm9tICcuL3BsYXllcic7XHJcbmltcG9ydCB7TWFwfSBmcm9tICcuL21hcCc7XHJcbmltcG9ydCB7TW92ZU1hbmFnZXJ9IGZyb20gJy4vbW92ZU1hbmFnZXInO1xyXG5pbXBvcnQge0lEcmF3YWJsZUluRmllbGQsIElTY2VuZUluZm99IGZyb20gJy4vaW50ZXJmYWNlcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgR2FtZVN0YXRlIHtcclxuXHJcbiAgICBwdWJsaWMgcGxheWVyOiBQbGF5ZXI7XHJcbiAgICBwdWJsaWMgY3JlYXR1cmVzOiBJRHJhd2FibGVJbkZpZWxkW107XHJcbiAgICBwdWJsaWMgbWFwOiBNYXA7XHJcbiAgICBwdWJsaWMgbW92ZU1hbmFnZXI6IE1vdmVNYW5hZ2VyO1xyXG4gICAgcHVibGljIHNjZW5lczogSVNjZW5lSW5mb1tdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHBsYXllcjogUGxheWVyLCBjcmVhdHVyZXM6IElEcmF3YWJsZUluRmllbGRbXSkge1xyXG4gICAgICAgIHRoaXMucGxheWVyID0gcGxheWVyO1xyXG4gICAgICAgIHRoaXMuY3JlYXR1cmVzID0gY3JlYXR1cmVzO1xyXG4gICAgICAgIHRoaXMubWFwID0gbmV3IE1hcCg1LCA1KTtcclxuICAgICAgICB0aGlzLm1vdmVNYW5hZ2VyID0gbmV3IE1vdmVNYW5hZ2VyKHRoaXMubWFwLCB0aGlzLnBsYXllcik7XHJcbiAgICAgICAgdGhpcy5zY2VuZXMgPSBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdmaWVsZCcsXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50OiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZS1maWVsZCcpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdmaWdodCcsXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50OiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZS1maWdodCcpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICB9XHJcblxyXG59IiwiaW1wb3J0IHtQbGF5ZXJ9IGZyb20gJy4vcGxheWVyJztcclxuaW1wb3J0IHtDaHVkaWxhfSBmcm9tICcuL21vbnN0ZXInO1xyXG5pbXBvcnQge0ZpZWxkUmVuZGVyZXJ9IGZyb20gJy4vZmllbGRSZW5kZXJlcic7XHJcbmltcG9ydCB7U2NlbmVNYW5hZ2VyfSBmcm9tICcuL3NjZW5lTWFuYWdlcic7XHJcbmltcG9ydCB7R2FtZVN0YXRlfSBmcm9tICcuL2dhbWVTdGF0ZSc7XHJcbmltcG9ydCB7STJEY29vcmRpbmF0ZXN9IGZyb20gJy4vaW50ZXJmYWNlcyc7XHJcblxyXG4vKiBHbG9iYWwgdmFyaWFibGVzICovXHJcbmNvbnN0IGdhbWVTdGF0ZSA9IG5ldyBHYW1lU3RhdGUoXHJcbiAgICBuZXcgUGxheWVyKFwiU3RldmVcIiwgXCJoZXJvXCIsICdAJywgMCwgMCwgNCwgW25ldyBDaHVkaWxhKCldKSxcclxuICAgIFtdXHJcbik7XHJcbmNvbnN0IHNjZW5lTWFuYWdlciA9IG5ldyBTY2VuZU1hbmFnZXIoZ2FtZVN0YXRlKTtcclxuY29uc3QgZmllbGRSZW5kZXJlciA9IG5ldyBGaWVsZFJlbmRlcmVyKFxyXG4gICAgZ2FtZVN0YXRlLFxyXG4gICAgc2NlbmVNYW5hZ2VyLmdldFNjZW5lSW5mbygnZmllbGQnKS5lbGVtZW50LFxyXG4gICAgY2VsbENsaWNrTGlzdGVuZXJcclxuKTtcclxuXHJcbi8qIFByZXBhcmUgZmllbGQgKi9cclxuZmllbGRSZW5kZXJlci5hcHBlbmRUYWJsZSgpO1xyXG5maWVsZFJlbmRlcmVyLmZpbGxUYWJsZSgpO1xyXG5zY2VuZU1hbmFnZXIuc2hvd1NjZW5lKCdmaWVsZCcpO1xyXG5cclxuLyogQ2xpY2sgTGlzdGVuZXIgZm9yIGFsbCBjZWxscyBpbiBmaWVsZCAqL1xyXG5mdW5jdGlvbiBjZWxsQ2xpY2tMaXN0ZW5lcihldmVudDogTW91c2VFdmVudCkge1xyXG5cclxuICAgIGZ1bmN0aW9uIGdldENvb3JkaW5hdGVzT2ZDZWxsKHRhcmdldDogRXZlbnRUYXJnZXQpOiBJMkRjb29yZGluYXRlcyB7XHJcbiAgICAgICAgbGV0IGVsZW1lbnQgPSA8SFRNTEVsZW1lbnQ+dGFyZ2V0O1xyXG4gICAgICAgIGNvbnN0IHRkID0gPEhUTUxUYWJsZUNlbGxFbGVtZW50PmVsZW1lbnQucGFyZW50RWxlbWVudDtcclxuICAgICAgICBjb25zdCByb3cgPSA8SFRNTFRhYmxlUm93RWxlbWVudD50ZC5wYXJlbnRFbGVtZW50O1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHg6IHRkLmNlbGxJbmRleCxcclxuICAgICAgICAgICAgeTogcm93LnJvd0luZGV4XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNvb3JkaW5hdGVzID0gZ2V0Q29vcmRpbmF0ZXNPZkNlbGwoZXZlbnQudGFyZ2V0KTtcclxuICAgIGxldCBvbGRfY29vcmRpbmF0ZTogSTJEY29vcmRpbmF0ZXMgPSBnYW1lU3RhdGUucGxheWVyLmdldENvb3JkaW5hdGVzKCk7XHJcbiAgICBpZiAoZ2FtZVN0YXRlLm1vdmVNYW5hZ2VyLm1vdmUoY29vcmRpbmF0ZXMpKSB7XHJcbiAgICAgICAgZmllbGRSZW5kZXJlci51cGRhdGVDZWxscyhbXHJcbiAgICAgICAgICAgIG9sZF9jb29yZGluYXRlLFxyXG4gICAgICAgICAgICBnYW1lU3RhdGUucGxheWVyLmdldENvb3JkaW5hdGVzKClcclxuICAgICAgICBdKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKGNvb3JkaW5hdGVzID09IGdhbWVTdGF0ZS5wbGF5ZXIuZ2V0Q29vcmRpbmF0ZXMoKSlcclxuICAgICAgICAgICAgc2NlbmVNYW5hZ2VyLnNob3dTY2VuZSgnZmlnaHQnKTtcclxuICAgIH1cclxufVxyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCAoZXZlbnQpID0+IHtcclxuICAgIGNvbnN0IGtleU5hbWUgPSBldmVudC5rZXk7XHJcbiAgICBpZiAoa2V5TmFtZS50b0xvd2VyQ2FzZSgpID09ICcxJykge1xyXG4gICAgICAgIHNjZW5lTWFuYWdlci5zaG93U2NlbmUoJ2ZpZWxkJyk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChrZXlOYW1lLnRvTG93ZXJDYXNlKCkgPT0gJzInKSB7XHJcbiAgICAgICAgc2NlbmVNYW5hZ2VyLnNob3dTY2VuZSgnZmlnaHQnKTtcclxuICAgIH1cclxufSk7IiwiaW1wb3J0IHtDZWxsLCBMYW5kQ2VsbCwgTW91bnRDZWxsfSBmcm9tICcuL2NlbGwnO1xyXG5pbXBvcnQge0kyRGNvb3JkaW5hdGVzfSBmcm9tICcuL2ludGVyZmFjZXMnO1xyXG5pbXBvcnQge1V0aWxzfSBmcm9tICcuL3V0aWxzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBNYXAge1xyXG5cclxuICAgIHByaXZhdGUgcmVhZG9ubHkgc2l6ZVg6IG51bWJlcjtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgc2l6ZVk6IG51bWJlcjtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgZGF0YTogQ2VsbFtdW107XHJcblxyXG4gICAgY29uc3RydWN0b3Ioc2l6ZVg6IG51bWJlciwgc2l6ZVk6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuc2l6ZVggPSBzaXplWDtcclxuICAgICAgICB0aGlzLnNpemVZID0gc2l6ZVk7XHJcbiAgICAgICAgdGhpcy5kYXRhID0gTWFwLmdlbmVyYXRlKHNpemVYLCBzaXplWSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldENlbGwoY29vcmRpbmF0ZXM6IEkyRGNvb3JkaW5hdGVzKTogQ2VsbCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YVtjb29yZGluYXRlcy55XVtjb29yZGluYXRlcy54XTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0U2l6ZSgpOiB7IHg6IG51bWJlciwgeTogbnVtYmVyIH0ge1xyXG4gICAgICAgIHJldHVybiB7IHg6IHRoaXMuc2l6ZVgsIHk6IHRoaXMuc2l6ZVkgfTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2VuZXJhdGUoc2l6ZVg6IG51bWJlciwgc2l6ZVk6IG51bWJlcik6IENlbGxbXVtdIHtcclxuICAgICAgICBjb25zdCBkZWZhdWx0Q2VsbCA9IExhbmRDZWxsO1xyXG4gICAgICAgIGxldCBwb3NzaWJsZUNlbGxzID0gW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBvYmo6IE1vdW50Q2VsbCxcclxuICAgICAgICAgICAgICAgIHJhbmQ6IHttaW46IDUsIG1heDogMTB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICAgICAgY29uc29sZS5sb2coYE1hcDogZ2VuZXJhdGUsICgke3NpemVYfSwgJHtzaXplWX0pYCk7XHJcbiAgICAgICAgY29uc3QgZGF0YTogQ2VsbFtdW10gPSBbXTtcclxuICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHNpemVZOyArK3kpIHtcclxuICAgICAgICAgICAgY29uc3Qgcm93OiBDZWxsW10gPSBbXTtcclxuICAgICAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBzaXplWDsgKyt4KSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcmFuZE51bSA9IFV0aWxzLnJhbmRvbSgxLCAxMDApO1xyXG4gICAgICAgICAgICAgICAgbGV0IG9iamVjdEZvckNyZWF0ZSA9IG51bGw7XHJcblxyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwb3NzaWJsZUNlbGxzLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKFV0aWxzLmlzSW5SYW5nZShyYW5kTnVtLCBwb3NzaWJsZUNlbGxzW2ldLnJhbmQubWluLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NzaWJsZUNlbGxzW2ldLnJhbmQubWF4KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvYmplY3RGb3JDcmVhdGUgPSBwb3NzaWJsZUNlbGxzW2ldLm9iajtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICghb2JqZWN0Rm9yQ3JlYXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0Rm9yQ3JlYXRlID0gZGVmYXVsdENlbGw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHJvdy5wdXNoKG5ldyBvYmplY3RGb3JDcmVhdGUoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGF0YS5wdXNoKHJvdyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGBNYXA6IGdlbmVyYXRlZCwgKCR7c2l6ZVh9LCAke3NpemVZfSlgKTtcclxuICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgIH1cclxufSIsImltcG9ydCB7Q3JlYXR1cmV9IGZyb20gXCIuL2NyZWF0dXJlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgTW9uc3RlciBleHRlbmRzIENyZWF0dXJlIHtcclxuXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IF90eXBlOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgZ2V0IHR5cGUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdHlwZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9tYXhIZWF0aDogbnVtYmVyO1xyXG4gICAgcHVibGljIGdldCBtYXhIZWF0aCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9tYXhIZWF0aDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9oZWFsdGg6IG51bWJlcjtcclxuICAgIHB1YmxpYyBnZXQgaGVhbHRoKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2hlYWx0aDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9kZWZlbnNlOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgZ2V0IGRlZmVuc2UoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZGVmZW5zZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9hdHRhY2s6IG51bWJlcjtcclxuICAgIHB1YmxpYyBnZXQgYXR0YWNrKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2F0dGFjaztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9hdHRhY2tCb29zdGVyOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgZ2V0IGF0dGFja0Jvb3N0ZXIoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYXR0YWNrQm9vc3RlcjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIGNzc0NsYXNzOiBzdHJpbmcsIGxhYmVsOiBzdHJpbmcsIHR5cGU6IHN0cmluZyxcclxuICAgICAgICBoZWFsdGg6IG51bWJlciwgZGVmZW5zZTogbnVtYmVyLCBhdHRhY2s6IG51bWJlcixcclxuICAgICAgICBhdHRhY2tCb29zdGVyOiBudW1iZXIpIHtcclxuICAgICAgICBzdXBlcihuYW1lLCBjc3NDbGFzcywgbGFiZWwpO1xyXG4gICAgICAgIHRoaXMuX3R5cGUgPSB0eXBlO1xyXG4gICAgICAgIHRoaXMuX21heEhlYXRoID0gaGVhbHRoO1xyXG4gICAgICAgIHRoaXMuX2hlYWx0aCA9IGhlYWx0aDtcclxuICAgICAgICB0aGlzLl9kZWZlbnNlID0gZGVmZW5zZTtcclxuICAgICAgICB0aGlzLl9hdHRhY2sgPSBhdHRhY2s7XHJcbiAgICAgICAgdGhpcy5fYXR0YWNrQm9vc3RlciA9IGF0dGFja0Jvb3N0ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGJlQXR0YWNrZWQoZW5lbXk6IE1vbnN0ZXIpIHtcclxuICAgICAgICBjb25zdCBkYW1hZ2UgPSB0aGlzLmRlZmVuc2UgLSAoZW5lbXkuYXR0YWNrICsgZW5lbXkuYXR0YWNrQm9vc3Rlcik7XHJcbiAgICAgICAgaWYgKGRhbWFnZSA+PSAwKXtcclxuICAgICAgICAgICAgdGhpcy5faGVhbHRoIC09IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMuX2hlYWx0aCArPSBkYW1hZ2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkZWZlbnNlSGltc2VsZigpIHtcclxuICAgICAgICB0aGlzLl9kZWZlbnNlICs9IDU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGlzRGVhZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faGVhbHRoIDw9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIEhlYWwoKSB7XHJcbiAgICAgICB0aGlzLl9oZWFsdGggPSB0aGlzLm1heEhlYXRoO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRTdHJpbmcoKSB7XHJcbiAgICAgICAgcmV0dXJuIGAke3RoaXMubmFtZX0gJHt0aGlzLmhlYWx0aH1gO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENodWRpbGEgZXh0ZW5kcyBNb25zdGVyIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcignQ2h1ZGlsYScsICcuaW1hZ2UvY2h1ZGlsYS5wbmcnLCAnYycsICdyZWQnLCAxMDAsIDQsIDIwLCAxMCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge0kyRGNvb3JkaW5hdGVzfSBmcm9tICcuL2ludGVyZmFjZXMnO1xyXG5pbXBvcnQge01hcH0gZnJvbSAnLi9tYXAnO1xyXG5pbXBvcnQge1BsYXllcn0gZnJvbSAnLi9wbGF5ZXInO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1vdmVNYW5hZ2VyIHtcclxuXHJcbiAgICBwcml2YXRlIHBsYXllcjogUGxheWVyO1xyXG4gICAgcHJpdmF0ZSBtYXA6IE1hcDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihtYXA6IE1hcCwgcGxheWVyOiBQbGF5ZXIpIHtcclxuICAgICAgICB0aGlzLm1hcCA9IG1hcDtcclxuICAgICAgICB0aGlzLnBsYXllciA9IHBsYXllcjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENvb3JkaW5hdGVzIGFyZSBjb3JyZWN0IGlmIHRoZSBtYXAgcmFuZ2UgaXMgaW5jbHVkZWRcclxuICAgICAqIGFuZCBwb2ludCB0byBhbiBhZGphY2VudCBjZWxsIGhvcml6b250YWxseSBvciB2ZXJ0aWNhbGx5XHJcbiAgICAgKiBAcmV0dXJuc1xyXG4gICAgICogQHBhcmFtIGNvb3JkaW5hdGVzXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBpc0NvcnJlY3RDb29yZGluYXRlcyhjb29yZGluYXRlczogSTJEY29vcmRpbmF0ZXMpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gKDAgPD0gY29vcmRpbmF0ZXMueCAmJiBjb29yZGluYXRlcy54IDwgdGhpcy5tYXAuZ2V0U2l6ZSgpLngpICYmXHJcbiAgICAgICAgICAgICAgICgwIDw9IGNvb3JkaW5hdGVzLnkgJiYgY29vcmRpbmF0ZXMueSA8IHRoaXMubWFwLmdldFNpemUoKS55KSAmJlxyXG4gICAgICAgICAgICAgICAoTWF0aC5hYnMoY29vcmRpbmF0ZXMueCAtIHRoaXMucGxheWVyLmdldENvb3JkaW5hdGVzKCkueCkgK1xyXG4gICAgICAgICAgICAgICAgTWF0aC5hYnMoY29vcmRpbmF0ZXMueSAtIHRoaXMucGxheWVyLmdldENvb3JkaW5hdGVzKCkueSkgPT0gMSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG1vdmUoY29vcmRpbmF0ZXM6IEkyRGNvb3JkaW5hdGVzKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNDb3JyZWN0Q29vcmRpbmF0ZXMoY29vcmRpbmF0ZXMpKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGAke3RoaXMucGxheWVyLm5hbWV9IG1vdmVkIHRvICgke2Nvb3JkaW5hdGVzLnh9LCAke2Nvb3JkaW5hdGVzLnl9KWApO1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllci5tb3ZlKGNvb3JkaW5hdGVzKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYCR7dGhpcy5wbGF5ZXIubmFtZX0gbm90IG1vdmVkIHRvICgke2Nvb3JkaW5hdGVzLnh9LCAke2Nvb3JkaW5hdGVzLnl9KWApO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtDcmVhdHVyZX0gZnJvbSBcIi4vY3JlYXR1cmVcIjtcclxuaW1wb3J0IHtNb25zdGVyfSBmcm9tIFwiLi9tb25zdGVyXCI7XHJcbmltcG9ydCB7STJEY29vcmRpbmF0ZXMsIElEcmF3YWJsZUluRmllbGR9IGZyb20gXCIuL2ludGVyZmFjZXNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQbGF5ZXIgZXh0ZW5kcyBDcmVhdHVyZSBpbXBsZW1lbnRzIElEcmF3YWJsZUluRmllbGQge1xyXG5cclxuICAgIHByaXZhdGUgeDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSB5OiBudW1iZXI7XHJcblxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfYXZhaWxhYmxlTW92ZXM6IG51bWJlcjtcclxuICAgIHB1YmxpYyBnZXQgYXZhaWxhYmxlTW92ZXMoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYXZhaWxhYmxlTW92ZXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfYXZhaWxhYmxlTW9uc3RlcnM6IE1vbnN0ZXJbXTtcclxuICAgIHB1YmxpYyBnZXQgYXZhaWxhYmxlTW9udGVycygpOiBNb25zdGVyW10ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9hdmFpbGFibGVNb25zdGVycztcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIGNzc0NsYXNzOiBzdHJpbmcsIGxhYmVsOiBzdHJpbmcsXHJcbiAgICAgICAgeDogbnVtYmVyLCB5OiBudW1iZXIsIGF2YWlsYWJsZU1vdmVzOiBudW1iZXIsXHJcbiAgICAgICAgYXZhaWxhYmxlTW9uc3RlcnM6IE1vbnN0ZXJbXSkge1xyXG4gICAgICAgIHN1cGVyKG5hbWUsIGNzc0NsYXNzLCBsYWJlbCk7XHJcbiAgICAgICAgdGhpcy54ID0geDtcclxuICAgICAgICB0aGlzLnkgPSB5O1xyXG4gICAgICAgIHRoaXMuX2F2YWlsYWJsZU1vdmVzID0gYXZhaWxhYmxlTW92ZXM7XHJcbiAgICAgICAgdGhpcy5fYXZhaWxhYmxlTW9uc3RlcnMgPSBhdmFpbGFibGVNb25zdGVycztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbW92ZShjb29yZGluYXRlczogSTJEY29vcmRpbmF0ZXMpIHtcclxuICAgICAgICB0aGlzLnggPSBjb29yZGluYXRlcy54O1xyXG4gICAgICAgIHRoaXMueSA9IGNvb3JkaW5hdGVzLnk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldENvb3JkaW5hdGVzKCk6IEkyRGNvb3JkaW5hdGVzICB7XHJcbiAgICAgICAgcmV0dXJuIHsgeDogdGhpcy54LCB5OiB0aGlzLnkgfTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWRkTW9uc3Rlcihtb25zdGVyOiBNb25zdGVyKSB7XHJcbiAgICAgICAgdGhpcy5fYXZhaWxhYmxlTW9uc3RlcnMucHVzaChtb25zdGVyKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGVsZXRlTW9uc3Rlcihtb25zdGVyOiBNb25zdGVyKSB7XHJcbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLl9hdmFpbGFibGVNb25zdGVycy5pbmRleE9mKG1vbnN0ZXIpO1xyXG5cclxuICAgICAgICB0aGlzLl9hdmFpbGFibGVNb25zdGVycyA9IChpbmRleCA+IC0xKSA/IFtcclxuICAgICAgICAgICAgLi4udGhpcy5fYXZhaWxhYmxlTW9uc3RlcnMuc2xpY2UoMCwgaW5kZXgpLFxyXG4gICAgICAgICAgICAuLi50aGlzLl9hdmFpbGFibGVNb25zdGVycy5zbGljZShpbmRleCArIDEpXHJcbiAgICAgICAgXSA6IHRoaXMuX2F2YWlsYWJsZU1vbnN0ZXJzO1xyXG4gICAgfVxyXG5cclxufSIsImltcG9ydCB7SVNjZW5lSW5mb30gZnJvbSAnLi9pbnRlcmZhY2VzJztcclxuaW1wb3J0IHtHYW1lU3RhdGV9IGZyb20gJy4vZ2FtZVN0YXRlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBTY2VuZU1hbmFnZXIge1xyXG5cclxuICAgIGdhbWVTdGF0ZTogR2FtZVN0YXRlO1xyXG4gICAgX2N1cnJlbnRTY2VuZTogc3RyaW5nO1xyXG5cclxuICAgIHB1YmxpYyBnZXQgY3VycmVudFNjZW5lKCk6IElTY2VuZUluZm8ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldFNjZW5lSW5mbyh0aGlzLl9jdXJyZW50U2NlbmUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKGdhbWVTdGF0ZTogR2FtZVN0YXRlKSB7XHJcbiAgICAgICAgdGhpcy5nYW1lU3RhdGUgPSBnYW1lU3RhdGU7XHJcbiAgICAgICAgdGhpcy5fY3VycmVudFNjZW5lID0gXCJcIjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0U2NlbmVJbmZvKG5hbWU6IHN0cmluZykge1xyXG4gICAgICAgIGxldCBzY2VuZXMgPSB0aGlzLmdhbWVTdGF0ZS5zY2VuZXM7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzY2VuZXMubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgICAgaWYgKHNjZW5lc1tpXS5uYW1lID09IG5hbWUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBzY2VuZXNbaV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHNjZW5lIGRvZXMgbm90IGV4aXN0XCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzaG93U2NlbmUobmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fY3VycmVudFNjZW5lID0gbmFtZTtcclxuICAgICAgICBsZXQgc2NlbmUgPSB0aGlzLmdldFNjZW5lSW5mbyhuYW1lKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZ2FtZVN0YXRlLnNjZW5lcy5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVTdGF0ZS5zY2VuZXNbaV0uZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNjZW5lLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xyXG4gICAgfVxyXG5cclxufSIsImV4cG9ydCBjbGFzcyBVdGlscyB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0gYSBcclxuICAgICAqIEBwYXJhbSBiIFxyXG4gICAgICogQHJldHVybnMgcmFuZG9tIG51bWJlciBiZXR3ZWVuIGEgYW5kIGIsIGluY2x1c2l2ZVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgcmFuZG9tKGE6IG51bWJlciwgYjogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGIgLSBhICsgMSkpICsgYTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgaXNJblJhbmdlKHg6IG51bWJlciwgbWluOiBudW1iZXIsIG1heDogbnVtYmVyKSB7XHJcbiAgICAgICAgcmV0dXJuIG1pbiA8PSB4ICYmIHggPD0gbWF4O1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyByYW5kb21JdGVtRnJvbUFycmF5KGFycjogYW55W10pOiBhbnl7XHJcbiAgICAgICAgcmV0dXJuIGFyclt0aGlzLnJhbmRvbSgwLCBhcnIubGVuZ3RoIC0gMSldO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBzaGFsbG93RXF1YWwoYTogYW55LCBiOiBhbnkpOiBib29sZWFuIHtcclxuICAgICAgICBjb25zdCBrZXlzMSA9IE9iamVjdC5rZXlzKGEpO1xyXG4gICAgICAgIGNvbnN0IGtleXMyID0gT2JqZWN0LmtleXMoYik7XHJcblxyXG4gICAgICAgIGlmIChrZXlzMS5sZW5ndGggIT09IGtleXMyLmxlbmd0aCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKGxldCBrZXkgb2Yga2V5czEpIHtcclxuICAgICAgICAgICAgaWYgKGFba2V5XSAhPT0gYltrZXldKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG59Il19
