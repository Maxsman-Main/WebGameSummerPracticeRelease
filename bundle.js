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
},{"./monster":6,"./utils":8}],2:[function(require,module,exports){
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.FieldRenderer = void 0;
var FieldRenderer = /** @class */ (function () {
    function FieldRenderer(map, creatures, gameField) {
        this.map = map;
        this.creatures = creatures;
        this.gameField = gameField;
    }
    FieldRenderer.prototype.appendTable = function () {
        var table = document.createElement('table');
        for (var y = 0; y < this.map.getSize().y; ++y) {
            var row = document.createElement('tr');
            for (var x = 0; x < this.map.getSize().x; ++x) {
                var cell = document.createElement('td');
                row.appendChild(cell);
            }
            table.appendChild(row);
        }
        this.gameField.innerHTML = table.outerHTML;
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
        for (var i = 0; i < this.creatures.length; ++i) {
            var creature = this.creatures[i];
            this.getCell(creature.getCoordinates().x, creature.getCoordinates().y).appendChild(FieldRenderer.getHTMLSprite(creature));
        }
    };
    return FieldRenderer;
}());
exports.FieldRenderer = FieldRenderer;
},{}],4:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var player_1 = require("./player");
var monster_1 = require("./monster");
var map_1 = require("./map");
var fieldRenderer_1 = require("./fieldRenderer");
var map = new map_1.Map(5, 5);
var player = new player_1.Player("Steve", "hero", '@', 0, 0, 4, [new monster_1.Chudila()]);
var gameField = document.getElementById('game-field');
var renderer = new fieldRenderer_1.FieldRenderer(map, [player], gameField);
renderer.appendTable();
renderer.fillTable();
},{"./fieldRenderer":3,"./map":5,"./monster":6,"./player":7}],5:[function(require,module,exports){
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
},{"./cell":1,"./utils":8}],6:[function(require,module,exports){
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
        this._health -= (enemy.attack -
            this._defense + enemy.attackBooster);
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
},{"./creature":2}],7:[function(require,module,exports){
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
    Player.prototype.addMoster = function (monster) {
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
},{"./creature":2}],8:[function(require,module,exports){
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
},{}]},{},[4])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvc2NyaXB0cy9jZWxsLnRzIiwic3JjL3NjcmlwdHMvY3JlYXR1cmUudHMiLCJzcmMvc2NyaXB0cy9maWVsZFJlbmRlcmVyLnRzIiwic3JjL3NjcmlwdHMvbWFpbi50cyIsInNyYy9zY3JpcHRzL21hcC50cyIsInNyYy9zY3JpcHRzL21vbnN0ZXIudHMiLCJzcmMvc2NyaXB0cy9wbGF5ZXIudHMiLCJzcmMvc2NyaXB0cy91dGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBLHFDQUE2QztBQUM3QyxpQ0FBZ0M7QUFHaEM7SUEyQkksY0FBWSxLQUFhLEVBQUUsUUFBZ0IsRUFBRSxJQUFZLEVBQ2pELG9CQUF1QyxFQUN2QyxpQkFBNEI7UUFDaEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDcEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7UUFDMUIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDbEIsSUFBSSxDQUFDLGNBQWMsR0FBRyxhQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztRQUNyRSxJQUFJLENBQUMsU0FBUyxHQUFHLGFBQUssQ0FBQyxtQkFBbUIsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQ2xFLENBQUM7SUFoQ0Qsc0JBQVcsdUJBQUs7YUFBaEI7WUFDSSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDdkIsQ0FBQzs7O09BQUE7SUFHRCxzQkFBVywwQkFBUTthQUFuQjtZQUNJLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUMxQixDQUFDOzs7T0FBQTtJQUdELHNCQUFXLHNCQUFJO2FBQWY7WUFDSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDdEIsQ0FBQzs7O09BQUE7SUFHRCxzQkFBVywrQkFBYTthQUF4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QyxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUNMLFlBQUM7QUFBRCxDQWxCQSxBQWtCQyxJQUFBO0FBbEJZLHNCQUFLIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiaW1wb3J0IHsgTW9uc3RlciwgQ2h1ZGlsYSB9IGZyb20gJy4vbW9uc3Rlcic7XHJcbmltcG9ydCB7IFV0aWxzIH0gZnJvbSAnLi91dGlscyc7XHJcbmltcG9ydCB7IElIYXNDc3NDbGFzcyB9IGZyb20gJy4vaW50ZXJmYWNlcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgQ2VsbCBpbXBsZW1lbnRzIElIYXNDc3NDbGFzcyB7XHJcblxyXG4gICAgcHJpdmF0ZSBfbGFiZWw6IHN0cmluZztcclxuICAgIHB1YmxpYyBnZXQgbGFiZWwoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbGFiZWw7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfY3NzQ2xhc3M6IHN0cmluZztcclxuICAgIHB1YmxpYyBnZXQgY3NzQ2xhc3MoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY3NzQ2xhc3M7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfdHlwZTogc3RyaW5nO1xyXG4gICAgcHVibGljIGdldCB0eXBlKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3R5cGU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfdHJhbnN0aW9uQ29zdDogbnVtYmVyO1xyXG4gICAgcHVibGljIGdldCB0cmFuc3Rpb25Db3N0KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RyYW5zdGlvbkNvc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfbW9uc3RlcnM6IE1vbnN0ZXI7XHJcbiAgICBwdWJsaWMgZ2V0IG1vbnN0ZXIoKTogTW9uc3RlcntcclxuICAgICAgICByZXR1cm4gdGhpcy5fbW9uc3RlcnM7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IobGFiZWw6IHN0cmluZywgY3NzQ2xhc3M6IHN0cmluZywgdHlwZTogc3RyaW5nLFxyXG4gICAgICAgICAgICB0cmFuc2l0aW9uQ29zdE1pbk1heCA6IFtudW1iZXIsIG51bWJlcl0sXHJcbiAgICAgICAgICAgIHBvc3NpYmxlQ3JlYXR1cmVzOiBNb25zdGVyW10pIHtcclxuICAgICAgICB0aGlzLl9sYWJlbCA9IGxhYmVsO1xyXG4gICAgICAgIHRoaXMuX2Nzc0NsYXNzID0gY3NzQ2xhc3M7XHJcbiAgICAgICAgdGhpcy5fdHlwZSA9IHR5cGU7XHJcbiAgICAgICAgdGhpcy5fdHJhbnN0aW9uQ29zdCA9IFV0aWxzLnJhbmRvbS5hcHBseSh0aGlzLCB0cmFuc2l0aW9uQ29zdE1pbk1heCk7XHJcbiAgICAgICAgdGhpcy5fbW9uc3RlcnMgPSBVdGlscy5yYW5kb21JdGVtRnJvbUFycmF5KHBvc3NpYmxlQ3JlYXR1cmVzKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBMYW5kQ2VsbCBleHRlbmRzIENlbGwge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCdsJywgJ2xhbmQnLCAnJywgWzEsIDJdLCBbbmV3IENodWRpbGEoKV0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTW91bnRDZWxsIGV4dGVuZHMgQ2VsbCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoJ20nLCAnbW91bnQnLCAnJywgWzMsIDVdLCBbbmV3IENodWRpbGEoKV0pO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgSUhhc0Nzc0NsYXNzIH0gZnJvbSBcIi4vaW50ZXJmYWNlc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIENyZWF0dXJlIGltcGxlbWVudHMgSUhhc0Nzc0NsYXNzIHtcclxuICAgIFxyXG4gICAgcHJpdmF0ZSBfbmFtZTogc3RyaW5nO1xyXG4gICAgcHVibGljIGdldCBuYW1lKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX25hbWU7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0IG5hbWUodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX25hbWUgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9jc3NDbGFzczogc3RyaW5nO1xyXG4gICAgcHVibGljIGdldCBjc3NDbGFzcygpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jc3NDbGFzcztcclxuICAgIH1cclxuXHJcbiAgICAvLyBfbGFiZWwgaXMgc29tZSBjaGFyLCB1c2VkIGZvciBkZWJ1Z2dpbmdcclxuICAgIHByaXZhdGUgX2xhYmVsOiBzdHJpbmc7XHJcblxyXG4gICAgcHVibGljIGdldCBsYWJlbCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9sYWJlbDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIGNzc0NsYXNzIDogc3RyaW5nLCBsYWJlbDogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fbmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5fY3NzQ2xhc3MgPSBjc3NDbGFzcztcclxuICAgICAgICB0aGlzLl9sYWJlbCA9IGxhYmVsO1xyXG4gICAgfVxyXG5cclxufSIsImltcG9ydCB7IE1hcCB9IGZyb20gJy4vbWFwJztcclxuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSAnLi9wbGF5ZXInOyBcclxuaW1wb3J0IHsgSURyYXdhYmxlSW5GaWVsZCwgSUhhc0Nzc0NsYXNzIH0gZnJvbSAnLi9pbnRlcmZhY2VzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBGaWVsZFJlbmRlcmVyIHtcclxuXHJcbiAgICBwcml2YXRlIG1hcDogTWFwO1xyXG4gICAgcHJpdmF0ZSBjcmVhdHVyZXM6IElEcmF3YWJsZUluRmllbGRbXTtcclxuICAgIHByaXZhdGUgZ2FtZUZpZWxkOiBIVE1MRWxlbWVudDtcclxuICAgIFxyXG4gICAgY29uc3RydWN0b3IobWFwOiBNYXAsIGNyZWF0dXJlczogSURyYXdhYmxlSW5GaWVsZFtdLCBnYW1lRmllbGQ6IEhUTUxFbGVtZW50KSB7XHJcbiAgICAgICAgdGhpcy5tYXAgPSBtYXA7XHJcbiAgICAgICAgdGhpcy5jcmVhdHVyZXMgPSBjcmVhdHVyZXM7XHJcbiAgICAgICAgdGhpcy5nYW1lRmllbGQgPSBnYW1lRmllbGQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFwcGVuZFRhYmxlKCkge1xyXG4gICAgICAgIGxldCB0YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RhYmxlJyk7XHJcbiAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCB0aGlzLm1hcC5nZXRTaXplKCkueTsgKyt5KSB7XHJcbiAgICAgICAgICAgIGxldCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCAgPCB0aGlzLm1hcC5nZXRTaXplKCkueDsgKyt4KSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XHJcbiAgICAgICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQoY2VsbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGFibGUuYXBwZW5kQ2hpbGQocm93KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5nYW1lRmllbGQuaW5uZXJIVE1MID0gdGFibGUub3V0ZXJIVE1MO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0VGFibGUoKTogSFRNTFRhYmxlRWxlbWVudCB7XHJcbiAgICAgICAgcmV0dXJuIDxIVE1MVGFibGVFbGVtZW50PiB0aGlzLmdhbWVGaWVsZC5jaGlsZHJlblswXTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldENlbGwoeDogbnVtYmVyLCB5Om51bWJlcik6IEVsZW1lbnQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldFRhYmxlKCkucm93c1t5XS5jZWxsc1t4XTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0SFRNTFNwcml0ZShvYmo6IElIYXNDc3NDbGFzcyk6IEhUTUxFbGVtZW50IHtcclxuICAgICAgICBsZXQgSFRNTFNwcml0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIEhUTUxTcHJpdGUuY2xhc3NMaXN0LmFkZCgnc3ByaXRlJyk7XHJcbiAgICAgICAgSFRNTFNwcml0ZS5jbGFzc0xpc3QuYWRkKG9iai5jc3NDbGFzcyk7XHJcbiAgICAgICAgcmV0dXJuIEhUTUxTcHJpdGU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGZpbGxUYWJsZSgpIHtcclxuICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHRoaXMubWFwLmdldFNpemUoKS55OyArK3kpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB0aGlzLm1hcC5nZXRTaXplKCkueDsgKyt4KSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbWFwQ2VsbCA9IHRoaXMubWFwLmdldENlbGwoeCwgeSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdldENlbGwoeCwgeSkuaW5uZXJIVE1MID1cclxuICAgICAgICAgICAgICAgICAgICBGaWVsZFJlbmRlcmVyLmdldEhUTUxTcHJpdGUobWFwQ2VsbCkub3V0ZXJIVE1MO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jcmVhdHVyZXMubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgICAgbGV0IGNyZWF0dXJlID0gdGhpcy5jcmVhdHVyZXNbaV07XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0Q2VsbChcclxuICAgICAgICAgICAgICAgIGNyZWF0dXJlLmdldENvb3JkaW5hdGVzKCkueCxcclxuICAgICAgICAgICAgICAgIGNyZWF0dXJlLmdldENvb3JkaW5hdGVzKCkueVxyXG4gICAgICAgICAgICApLmFwcGVuZENoaWxkKEZpZWxkUmVuZGVyZXIuZ2V0SFRNTFNwcml0ZShjcmVhdHVyZSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImltcG9ydCB7IFBsYXllciB9IGZyb20gJy4vcGxheWVyJztcclxuaW1wb3J0IHsgQ2h1ZGlsYSB9IGZyb20gJy4vbW9uc3Rlcic7XHJcbmltcG9ydCB7IE1hcCB9IGZyb20gJy4vbWFwJztcclxuaW1wb3J0IHsgTW92ZU1hbmFnZXIgfSBmcm9tICcuL21vdmVNYW5hZ2VyJztcclxuaW1wb3J0IHsgRGVidWdSZW5kZXJlciB9IGZyb20gJy4vZGVidWdSZW5kZXJlcic7XHJcbmltcG9ydCB7IEZpZ2h0IH0gZnJvbSAnLi9maWdodCc7XHJcbmltcG9ydCB7IEZpZWxkUmVuZGVyZXIgfSBmcm9tICcuL2ZpZWxkUmVuZGVyZXInO1xyXG5cclxudmFyIG1hcCA9IG5ldyBNYXAoNSwgNSk7XHJcbnZhciBwbGF5ZXIgPSBuZXcgUGxheWVyKFwiU3RldmVcIiwgXCJoZXJvXCIsICdAJywgMCwgMCwgNCwgWyBuZXcgQ2h1ZGlsYSgpXSk7XHJcbnZhciBnYW1lRmllbGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZS1maWVsZCcpO1xyXG52YXIgcmVuZGVyZXIgPSBuZXcgRmllbGRSZW5kZXJlcihtYXAsIFtwbGF5ZXJdLCBnYW1lRmllbGQpO1xyXG5yZW5kZXJlci5hcHBlbmRUYWJsZSgpO1xyXG5yZW5kZXJlci5maWxsVGFibGUoKTsiLCJpbXBvcnQgeyBDZWxsLCBMYW5kQ2VsbCwgTW91bnRDZWxsIH0gZnJvbSAnLi9jZWxsJztcclxuaW1wb3J0IHsgVXRpbHMgfSBmcm9tICcuL3V0aWxzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBNYXAge1xyXG5cclxuICAgIHByaXZhdGUgc2l6ZVg6IG51bWJlcjtcclxuICAgIHByaXZhdGUgc2l6ZVk6IG51bWJlcjtcclxuICAgIHByaXZhdGUgZGF0YTogQ2VsbFtdW107XHJcblxyXG4gICAgY29uc3RydWN0b3Ioc2l6ZVg6IG51bWJlciwgc2l6ZVk6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuc2l6ZVggPSBzaXplWDtcclxuICAgICAgICB0aGlzLnNpemVZID0gc2l6ZVk7XHJcbiAgICAgICAgdGhpcy5kYXRhID0gTWFwLmdlbmVyYXRlKHNpemVYLCBzaXplWSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldENlbGwoeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kYXRhW3ldW3hdO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRTaXplKCk6IHsgeDogbnVtYmVyLCB5OiBudW1iZXIgfSB7XHJcbiAgICAgICAgcmV0dXJuIHsgeDogdGhpcy5zaXplWCwgeTogdGhpcy5zaXplWSB9O1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZW5lcmF0ZShzaXplWDogbnVtYmVyLCBzaXplWTogbnVtYmVyKTogQ2VsbFtdW10ge1xyXG4gICAgICAgIGNvbnN0IGRlZmF1bHRDZWxsID0gTGFuZENlbGw7XHJcbiAgICAgICAgbGV0IHBvc3NpYmxlQ2VsbHMgPSBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG9iajogTW91bnRDZWxsLFxyXG4gICAgICAgICAgICAgICAgcmFuZDoge21pbjogNSwgbWF4OiAxMH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgICAgICBjb25zb2xlLmxvZyhgTWFwOiBnZW5lcmF0ZSwgKCR7c2l6ZVh9LCAke3NpemVZfSlgKTtcclxuICAgICAgICB2YXIgZGF0YTogQ2VsbFtdW10gPSBbXTtcclxuICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHNpemVZOyArK3kpIHtcclxuICAgICAgICAgICAgdmFyIHJvdzogQ2VsbFtdID0gW107XHJcbiAgICAgICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgc2l6ZVg7ICsreCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHJhbmROdW0gPSBVdGlscy5yYW5kb20oMSwgMTAwKTtcclxuICAgICAgICAgICAgICAgIGxldCBvYmplY3RGb3JDcmVhdGUgPSBudWxsO1xyXG5cclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcG9zc2libGVDZWxscy5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChVdGlscy5pc0luUmFuZ2UocmFuZE51bSwgcG9zc2libGVDZWxsc1tpXS5yYW5kLm1pbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zc2libGVDZWxsc1tpXS5yYW5kLm1heCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0Rm9yQ3JlYXRlID0gcG9zc2libGVDZWxsc1tpXS5vYmo7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIW9iamVjdEZvckNyZWF0ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG9iamVjdEZvckNyZWF0ZSA9IGRlZmF1bHRDZWxsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICByb3cucHVzaChuZXcgb2JqZWN0Rm9yQ3JlYXRlKCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRhdGEucHVzaChyb3cpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyhgTWFwOiBnZW5lcmF0ZWQsICgke3NpemVYfSwgJHtzaXplWX0pYCk7XHJcbiAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBDcmVhdHVyZSB9IGZyb20gXCIuL2NyZWF0dXJlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgTW9uc3RlciBleHRlbmRzIENyZWF0dXJlIHtcclxuXHJcbiAgICBwcml2YXRlIF90eXBlOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgZ2V0IHR5cGUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdHlwZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9tYXhIZWF0aDogbnVtYmVyO1xyXG4gICAgcHVibGljIGdldCBtYXhIZWF0aCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9tYXhIZWF0aDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9oZWFsdGg6IG51bWJlcjtcclxuICAgIHB1YmxpYyBnZXQgaGVhbHRoKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2hlYWx0aDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9kZWZlbnNlOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgZ2V0IGRlZmVuc2UoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZGVmZW5zZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9hdHRhY2s6IG51bWJlcjtcclxuICAgIHB1YmxpYyBnZXQgYXR0YWNrKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2F0dGFjaztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9hdHRhY2tCb29zdGVyOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgZ2V0IGF0dGFja0Jvb3N0ZXIoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYXR0YWNrQm9vc3RlcjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIGNzc0NsYXNzOiBzdHJpbmcsIGxhYmVsOiBzdHJpbmcsIHR5cGU6IHN0cmluZyxcclxuICAgICAgICBoZWFsdGg6IG51bWJlciwgZGVmZW5zZTogbnVtYmVyLCBhdHRhY2s6IG51bWJlcixcclxuICAgICAgICBhdHRhY2tCb29zdGVyOiBudW1iZXIpIHtcclxuICAgICAgICBzdXBlcihuYW1lLCBjc3NDbGFzcywgbGFiZWwpO1xyXG4gICAgICAgIHRoaXMuX3R5cGUgPSB0eXBlO1xyXG4gICAgICAgIHRoaXMuX21heEhlYXRoID0gaGVhbHRoO1xyXG4gICAgICAgIHRoaXMuX2hlYWx0aCA9IGhlYWx0aDtcclxuICAgICAgICB0aGlzLl9kZWZlbnNlID0gZGVmZW5zZTtcclxuICAgICAgICB0aGlzLl9hdHRhY2sgPSBhdHRhY2s7XHJcbiAgICAgICAgdGhpcy5fYXR0YWNrQm9vc3RlciA9IGF0dGFja0Jvb3N0ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGJlQXR0YWNrZWQoZW5lbXk6IE1vbnN0ZXIpIHtcclxuICAgICAgICB0aGlzLl9oZWFsdGggLT0gKGVuZW15LmF0dGFjayAtIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fZGVmZW5zZSArIGVuZW15LmF0dGFja0Jvb3N0ZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkZWZlbnNlSGltc2VsZigpIHtcclxuICAgICAgICB0aGlzLl9kZWZlbnNlICs9IDU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGlzRGVhZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faGVhbHRoIDw9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIEhlYWwoKSB7XHJcbiAgICAgICB0aGlzLl9oZWFsdGggPSB0aGlzLm1heEhlYXRoO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRTdHJpbmcoKSB7XHJcbiAgICAgICAgcmV0dXJuIGAke3RoaXMubmFtZX0gJHt0aGlzLmhlYWx0aH1gO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENodWRpbGEgZXh0ZW5kcyBNb25zdGVyIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcignQ2h1ZGlsYScsICcuaW1hZ2UvY2h1ZGlsYS5wbmcnLCAnYycsICdyZWQnLCAxMDAsIDQsIDIwLCAxMCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBDcmVhdHVyZSB9IGZyb20gXCIuL2NyZWF0dXJlXCI7XHJcbmltcG9ydCB7IE1vbnN0ZXIgfSBmcm9tIFwiLi9tb25zdGVyXCI7XHJcbmltcG9ydCB7IElEcmF3YWJsZUluRmllbGQgfSBmcm9tIFwiLi9pbnRlcmZhY2VzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUGxheWVyIGV4dGVuZHMgQ3JlYXR1cmUgaW1wbGVtZW50cyBJRHJhd2FibGVJbkZpZWxkIHtcclxuXHJcbiAgICBwcml2YXRlIHg6IG51bWJlcjtcclxuICAgIHByaXZhdGUgeTogbnVtYmVyO1xyXG5cclxuICAgIHByaXZhdGUgX2F2YWlsYWJsZU1vdmVzOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgZ2V0IGF2YWlsYWJsZU1vdmVzKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2F2YWlsYWJsZU1vdmVzO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2F2YWlsYWJsZU1vbnN0ZXJzOiBNb25zdGVyW107XHJcbiAgICBwdWJsaWMgZ2V0IGF2YWlsYWJsZU1vbnRlcnMoKTogTW9uc3RlcltdIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYXZhaWxhYmxlTW9uc3RlcnM7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBjc3NDbGFzczogc3RyaW5nLCBsYWJlbDogc3RyaW5nLFxyXG4gICAgICAgIHg6IG51bWJlciwgeTogbnVtYmVyLCBhdmFpbGFibGVNb3ZlczogbnVtYmVyLFxyXG4gICAgICAgIGF2YWlsYWJsZU1vbnN0ZXJzOiBNb25zdGVyW10pIHtcclxuICAgICAgICBzdXBlcihuYW1lLCBjc3NDbGFzcywgbGFiZWwpO1xyXG4gICAgICAgIHRoaXMueCA9IHg7XHJcbiAgICAgICAgdGhpcy55ID0geTtcclxuICAgICAgICB0aGlzLl9hdmFpbGFibGVNb3ZlcyA9IGF2YWlsYWJsZU1vdmVzO1xyXG4gICAgICAgIHRoaXMuX2F2YWlsYWJsZU1vbnN0ZXJzID0gYXZhaWxhYmxlTW9uc3RlcnM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG1vdmUoeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnggPSB4O1xyXG4gICAgICAgIHRoaXMueSA9IHk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldENvb3JkaW5hdGVzKCkgOiB7IHg6IG51bWJlciwgeTogbnVtYmVyIH0ge1xyXG4gICAgICAgIHJldHVybiB7IHg6IHRoaXMueCwgeTogdGhpcy55IH07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFkZE1vc3Rlcihtb25zdGVyOiBNb25zdGVyKSB7XHJcbiAgICAgICAgdGhpcy5fYXZhaWxhYmxlTW9uc3RlcnMucHVzaChtb25zdGVyKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGVsZXRlTW9uc3Rlcihtb25zdGVyOiBNb25zdGVyKSB7XHJcbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLl9hdmFpbGFibGVNb25zdGVycy5pbmRleE9mKG1vbnN0ZXIpO1xyXG5cclxuICAgICAgICBjb25zdCBuZXdBcnJheSA9IChpbmRleCA+IC0xKSA/IFtcclxuICAgICAgICAgICAgLi4udGhpcy5fYXZhaWxhYmxlTW9uc3RlcnMuc2xpY2UoMCwgaW5kZXgpLFxyXG4gICAgICAgICAgICAuLi50aGlzLl9hdmFpbGFibGVNb25zdGVycy5zbGljZShpbmRleCArIDEpXHJcbiAgICAgICAgXSA6IHRoaXMuX2F2YWlsYWJsZU1vbnN0ZXJzO1xyXG5cclxuICAgICAgICB0aGlzLl9hdmFpbGFibGVNb25zdGVycyA9IG5ld0FycmF5O1xyXG4gICAgfVxyXG5cclxufSIsImV4cG9ydCBjbGFzcyBVdGlscyB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0gYSBcclxuICAgICAqIEBwYXJhbSBiIFxyXG4gICAgICogQHJldHVybnMgcmFuZG9tIG51bWJlciBiZXR3ZWVuIGEgYW5kIGIsIGluY2x1c2l2ZVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgcmFuZG9tKGE6IG51bWJlciwgYjogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGIgLSBhICsgMSkpICsgYTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgaXNJblJhbmdlKHg6IG51bWJlciwgbWluOiBudW1iZXIsIG1heDogbnVtYmVyKSB7XHJcbiAgICAgICAgcmV0dXJuIG1pbiA8PSB4ICYmIHggPD0gbWF4O1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyByYW5kb21JdGVtRnJvbUFycmF5KGFycjogYW55W10pOiBhbnl7XHJcbiAgICAgICAgcmV0dXJuIGFyclt0aGlzLnJhbmRvbSgwLCBhcnIubGVuZ3RoIC0gMSldO1xyXG4gICAgfVxyXG59Il19
