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
    function Cell(label, type, transitionCostMinMax, possibleCreatures) {
        this._label = label;
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
        return _super.call(this, 'l', '', [1, 2], [new monster_1.Chudila()]) || this;
    }
    return LandCell;
}(Cell));
exports.LandCell = LandCell;
var MountCell = /** @class */ (function (_super) {
    __extends(MountCell, _super);
    function MountCell() {
        return _super.call(this, 'm', '', [3, 5], [new monster_1.Chudila()]) || this;
    }
    return MountCell;
}(Cell));
exports.MountCell = MountCell;
},{"./monster":7,"./utils":10}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Creature = void 0;
var Creature = /** @class */ (function () {
    function Creature(name, sprite, label) {
        this._name = name;
        this._sprite = sprite;
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
    Object.defineProperty(Creature.prototype, "sprite", {
        get: function () {
            return this._sprite;
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
exports.DebugRenderer = void 0;
var DebugRenderer = /** @class */ (function () {
    function DebugRenderer(map, player, div) {
        this.map = map;
        this.player = player;
        this.div = div;
    }
    DebugRenderer.prototype.showField = function () {
        console.log("DebugRender: show runned");
        var table = document.createElement('table');
        for (var y = 0; y < this.map.getSize().y; ++y) {
            var tr = document.createElement('tr');
            for (var x = 0; x < this.map.getSize().x; ++x) {
                var td = document.createElement('td');
                if (this.player.getCoordinates().x == x &&
                    this.player.getCoordinates().y == y) {
                    td.innerText = "" + this.player.label;
                    var monster = this.map.getCell(x, y).monster;
                    console.log("Here monster: " + monster.getString());
                }
                else {
                    td.innerText = "" + this.map.getCell(x, y).label;
                }
                tr.appendChild(td);
            }
            table.appendChild(tr);
        }
        console.log("DebugRender: show ended");
        this.div.innerHTML = table.outerHTML;
    };
    DebugRenderer.prototype.showFight = function (fight) {
        console.log(fight);
        var container = document.createElement('div');
        var first = document.createElement('p');
        first.innerText = fight.monsterFirst.getString();
        var second = document.createElement('p');
        second.innerText = fight.monsterSecond.getString();
        container.appendChild(first);
        container.appendChild(second);
        this.div.innerHTML = container.outerHTML;
    };
    return DebugRenderer;
}());
exports.DebugRenderer = DebugRenderer;
},{}],4:[function(require,module,exports){
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
var player_1 = require("./player");
var monster_1 = require("./monster");
var map_1 = require("./map");
var moveManager_1 = require("./moveManager");
var debugRenderer_1 = require("./debugRenderer");
var fight_1 = require("./fight");
var player = new player_1.Player("Steve", null, '@', 0, 0, 4, [new monster_1.Chudila()]);
var map = new map_1.Map(5, 5);
var moveManager = new moveManager_1.MoveManager(map, player);
var debug_ascii_ui = document.getElementById("debug_ascii_ui");
console.log(debug_ascii_ui);
var renderer = new debugRenderer_1.DebugRenderer(map, player, debug_ascii_ui);
var fight = null;
function update(event) {
    if (fight == null) {
        var dx = 0;
        var dy = 0;
        if (event) {
            switch (event.code) {
                case 'KeyW':
                    dx = 0, dy = -1;
                    break;
                case 'KeyA':
                    dx = -1, dy = 0;
                    break;
                case 'KeyS':
                    dx = 0, dy = 1;
                    break;
                case 'KeyD':
                    dx = 1, dy = 0;
                    break;
                case 'KeyE':
                    console.log(player.getCoordinates());
                    player.availableCreatures[0].name = "Huila";
                    fight = new fight_1.Fight(player.availableCreatures[0], map.getCell(player.getCoordinates().x, player.getCoordinates().y).monster);
                    renderer.showFight(fight);
                    break;
                default:
                    break;
            }
        }
        if (dx != 0 || dy != 0) {
            moveManager.move(player.getCoordinates().x + dx, player.getCoordinates().y + dy);
        }
        renderer.showField();
    }
    else {
        switch (event.code) {
            case 'KeyZ':
                fight.defenseMonster.beAttacked(fight.currentMonster);
                fight.swap();
                break;
            case 'KeyX':
                fight.currentMonster.defenseHimself();
                fight.swap();
                break;
            default:
                console.log(event.code);
                break;
        }
        renderer.showFight(fight);
        if (fight.isFinish()) {
            console.log("finish");
            fight.getWinner().Heal();
            fight = null;
        }
    }
}
update(null);
document.addEventListener('keydown', update);
},{"./debugRenderer":3,"./fight":4,"./map":6,"./monster":7,"./moveManager":8,"./player":9}],6:[function(require,module,exports){
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
},{"./cell":1,"./utils":10}],7:[function(require,module,exports){
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
    function Monster(name, sprite, label, type, health, defense, attack, attackBooster) {
        var _this = _super.call(this, name, sprite, label) || this;
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
var creature_1 = require("./creature");
var Player = /** @class */ (function (_super) {
    __extends(Player, _super);
    function Player(name, sprite, label, x, y, availableMoves, availableMonsters) {
        var _this = _super.call(this, name, sprite, label) || this;
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
    Object.defineProperty(Player.prototype, "availableCreatures", {
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
    return Player;
}(creature_1.Creature));
exports.Player = Player;
},{"./creature":2}],10:[function(require,module,exports){
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvY2VsbC50cyIsInNyYy9jcmVhdHVyZS50cyIsInNyYy9kZWJ1Z1JlbmRlcmVyLnRzIiwic3JjL2ZpZ2h0LnRzIiwic3JjL21haW4udHMiLCJzcmMvbWFwLnRzIiwic3JjL21vbnN0ZXIudHMiLCJzcmMvbW92ZU1hbmFnZXIudHMiLCJzcmMvcGxheWVyLnRzIiwic3JjL3V0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUEscUNBQTZDO0FBQzdDLGlDQUFnQztBQUVoQztJQXNCSSxjQUFZLEtBQWEsRUFBRSxJQUFZLEVBQy9CLG9CQUF1QyxFQUN2QyxpQkFBNEI7UUFDaEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDcEIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDbEIsSUFBSSxDQUFDLGNBQWMsR0FBRyxhQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztRQUNyRSxJQUFJLENBQUMsU0FBUyxHQUFHLGFBQUssQ0FBQyxtQkFBbUIsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQ2xFLENBQUM7SUExQkQsc0JBQVcsdUJBQUs7YUFBaEI7WUFDSSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDdkIsQ0FBQzs7O09BQUE7SUFHRCxzQkFBVyxzQkFBSTthQUFmO1lBQ0ksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3RCLENBQUM7OztPQUFBO0lBR0Qsc0JBQVcsK0JBQWE7YUFBeEI7WUFDSSxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7UUFDL0IsQ0FBQzs7O09BQUE7SUFHRCxzQkFBVyx5QkFBTzthQUFsQjtZQUNJLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUMxQixDQUFDOzs7T0FBQTtJQVdMLFdBQUM7QUFBRCxDQS9CQSxBQStC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QWhEMkIsbUJBQVEsR0FnRG5DO0FBaERZLHdCQUFNOzs7OztBQ0huQjtJQUFBO0lBa0JBLENBQUM7SUFoQkc7Ozs7T0FJRztJQUNJLFlBQU0sR0FBYixVQUFjLENBQVMsRUFBRSxDQUFTO1FBQzlCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFFTSxlQUFTLEdBQWhCLFVBQWlCLENBQVMsRUFBRSxHQUFXLEVBQUUsR0FBVztRQUNoRCxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQztJQUNoQyxDQUFDO0lBRU0seUJBQW1CLEdBQTFCLFVBQTJCLEdBQVU7UUFDakMsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFDTCxZQUFDO0FBQUQsQ0FsQkEsQUFrQkMsSUFBQTtBQWxCWSxzQkFBSyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImltcG9ydCB7IE1vbnN0ZXIsIENodWRpbGEgfSBmcm9tICcuL21vbnN0ZXInO1xyXG5pbXBvcnQgeyBVdGlscyB9IGZyb20gJy4vdXRpbHMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIENlbGwge1xyXG5cclxuICAgIHByaXZhdGUgX2xhYmVsOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgZ2V0IGxhYmVsKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xhYmVsO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3R5cGU6IHN0cmluZztcclxuICAgIHB1YmxpYyBnZXQgdHlwZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl90eXBlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3RyYW5zdGlvbkNvc3Q6IG51bWJlcjtcclxuICAgIHB1YmxpYyBnZXQgdHJhbnN0aW9uQ29zdCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl90cmFuc3Rpb25Db3N0O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX21vbnN0ZXJzOiBNb25zdGVyO1xyXG4gICAgcHVibGljIGdldCBtb25zdGVyKCk6IE1vbnN0ZXJ7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX21vbnN0ZXJzO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKGxhYmVsOiBzdHJpbmcsIHR5cGU6IHN0cmluZyxcclxuICAgICAgICAgICAgdHJhbnNpdGlvbkNvc3RNaW5NYXggOiBbbnVtYmVyLCBudW1iZXJdLFxyXG4gICAgICAgICAgICBwb3NzaWJsZUNyZWF0dXJlczogTW9uc3RlcltdKSB7XHJcbiAgICAgICAgdGhpcy5fbGFiZWwgPSBsYWJlbDtcclxuICAgICAgICB0aGlzLl90eXBlID0gdHlwZTtcclxuICAgICAgICB0aGlzLl90cmFuc3Rpb25Db3N0ID0gVXRpbHMucmFuZG9tLmFwcGx5KHRoaXMsIHRyYW5zaXRpb25Db3N0TWluTWF4KTtcclxuICAgICAgICB0aGlzLl9tb25zdGVycyA9IFV0aWxzLnJhbmRvbUl0ZW1Gcm9tQXJyYXkocG9zc2libGVDcmVhdHVyZXMpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIExhbmRDZWxsIGV4dGVuZHMgQ2VsbCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoJ2wnLCAnJywgWzEsIDJdLCBbbmV3IENodWRpbGEoKV0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTW91bnRDZWxsIGV4dGVuZHMgQ2VsbCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoJ20nLCAnJywgWzMsIDVdLCBbbmV3IENodWRpbGEoKV0pO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGNsYXNzIENyZWF0dXJlIHtcclxuICAgIFxyXG4gICAgcHJpdmF0ZSBfbmFtZTogc3RyaW5nO1xyXG4gICAgcHVibGljIGdldCBuYW1lKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX25hbWU7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0IG5hbWUodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX25hbWUgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9zcHJpdGU6IHN0cmluZztcclxuICAgIHB1YmxpYyBnZXQgc3ByaXRlKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Nwcml0ZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBfbGFiZWwgaXMgc29tZSBjaGFyLCB1c2VkIGZvciBkZWJ1Z2dpbmdcclxuICAgIHByaXZhdGUgX2xhYmVsOiBzdHJpbmc7XHJcblxyXG4gICAgcHVibGljIGdldCBsYWJlbCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9sYWJlbDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIHNwcml0ZSA6IHN0cmluZywgbGFiZWw6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX25hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMuX3Nwcml0ZSA9IHNwcml0ZTtcclxuICAgICAgICB0aGlzLl9sYWJlbCA9IGxhYmVsO1xyXG4gICAgfVxyXG5cclxufSIsImltcG9ydCB7IE1hcCB9IGZyb20gJy4vbWFwJztcclxuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSAnLi9wbGF5ZXInO1xyXG5pbXBvcnQgeyBGaWdodCB9IGZyb20gJy4vZmlnaHQnO1xyXG5cclxuZXhwb3J0IGNsYXNzIERlYnVnUmVuZGVyZXIge1xyXG5cclxuICAgIHByaXZhdGUgbWFwOiBNYXA7XHJcbiAgICBwcml2YXRlIHBsYXllcjogUGxheWVyO1xyXG4gICAgcHJpdmF0ZSBkaXY6IEhUTUxFbGVtZW50O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKG1hcDogTWFwLCBwbGF5ZXI6IFBsYXllciwgZGl2OiBIVE1MRWxlbWVudCkge1xyXG4gICAgICAgIHRoaXMubWFwID0gbWFwO1xyXG4gICAgICAgIHRoaXMucGxheWVyID0gcGxheWVyO1xyXG4gICAgICAgIHRoaXMuZGl2ID0gZGl2O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzaG93RmllbGQoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJEZWJ1Z1JlbmRlcjogc2hvdyBydW5uZWRcIilcclxuICAgICAgICBsZXQgdGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0YWJsZScpO1xyXG4gICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgdGhpcy5tYXAuZ2V0U2l6ZSgpLnk7ICsreSkge1xyXG4gICAgICAgICAgICBsZXQgdHIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMubWFwLmdldFNpemUoKS54OyArK3gpIHtcclxuICAgICAgICAgICAgICAgIGxldCB0ZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wbGF5ZXIuZ2V0Q29vcmRpbmF0ZXMoKS54ID09IHggJiZcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5nZXRDb29yZGluYXRlcygpLnkgPT0geSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRkLmlubmVyVGV4dCA9IGAke3RoaXMucGxheWVyLmxhYmVsfWA7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG1vbnN0ZXIgPSB0aGlzLm1hcC5nZXRDZWxsKHgsIHkpLm1vbnN0ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYEhlcmUgbW9uc3RlcjogJHttb25zdGVyLmdldFN0cmluZygpfWApO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZC5pbm5lclRleHQgPSBgJHt0aGlzLm1hcC5nZXRDZWxsKHgsIHkpLmxhYmVsfWA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0ci5hcHBlbmRDaGlsZCh0ZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGFibGUuYXBwZW5kQ2hpbGQodHIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyhcIkRlYnVnUmVuZGVyOiBzaG93IGVuZGVkXCIpXHJcbiAgICAgICAgdGhpcy5kaXYuaW5uZXJIVE1MID0gdGFibGUub3V0ZXJIVE1MO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzaG93RmlnaHQoZmlnaHQ6IEZpZ2h0KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZmlnaHQpO1xyXG4gICAgICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBsZXQgZmlyc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgZmlyc3QuaW5uZXJUZXh0ID0gZmlnaHQubW9uc3RlckZpcnN0LmdldFN0cmluZygpO1xyXG4gICAgICAgIGxldCBzZWNvbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgc2Vjb25kLmlubmVyVGV4dCA9IGZpZ2h0Lm1vbnN0ZXJTZWNvbmQuZ2V0U3RyaW5nKCk7XHJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGZpcnN0KTtcclxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoc2Vjb25kKTtcclxuICAgICAgICB0aGlzLmRpdi5pbm5lckhUTUwgPSBjb250YWluZXIub3V0ZXJIVE1MO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgTW9uc3RlciB9IGZyb20gXCIuL21vbnN0ZXJcIlxyXG5cclxuZXhwb3J0IGNsYXNzIEZpZ2h0IHtcclxuXHJcbiAgICBwcml2YXRlIF9tb25zdGVyRmlyc3Q6IE1vbnN0ZXI7XHJcbiAgICBwdWJsaWMgZ2V0IG1vbnN0ZXJGaXJzdCgpOiBNb25zdGVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbW9uc3RlckZpcnN0O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX21vbnN0ZXJTZWNvbmQ6IE1vbnN0ZXI7XHJcbiAgICBwdWJsaWMgZ2V0IG1vbnN0ZXJTZWNvbmQoKTogTW9uc3RlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX21vbnN0ZXJTZWNvbmQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfY3VycmVudE1vbnN0ZXI6IE1vbnN0ZXI7XHJcbiAgICBwdWJsaWMgZ2V0IGN1cnJlbnRNb25zdGVyKCk6IE1vbnN0ZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jdXJyZW50TW9uc3RlcjtcclxuICAgIH1cclxuICAgIHByaXZhdGUgX2RlZmVuc2VNb25zdGVyOiBNb25zdGVyO1xyXG4gICAgcHVibGljIGdldCBkZWZlbnNlTW9uc3RlcigpOiBNb25zdGVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZGVmZW5zZU1vbnN0ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IobW9uc3RlckZpcnN0OiBNb25zdGVyLCBtb25zdGVyU2Vjb25kOiBNb25zdGVyKSB7XHJcbiAgICAgICAgdGhpcy5fbW9uc3RlckZpcnN0ID0gbW9uc3RlckZpcnN0O1xyXG4gICAgICAgIHRoaXMuX21vbnN0ZXJTZWNvbmQgPSBtb25zdGVyU2Vjb25kO1xyXG4gICAgICAgIHRoaXMuX2N1cnJlbnRNb25zdGVyID0gbW9uc3RlckZpcnN0O1xyXG4gICAgICAgIHRoaXMuX2RlZmVuc2VNb25zdGVyID0gbW9uc3RlclNlY29uZDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3dhcCgpIHtcclxuICAgICAgICBbdGhpcy5fY3VycmVudE1vbnN0ZXIsIHRoaXMuX2RlZmVuc2VNb25zdGVyXSA9XHJcbiAgICAgICAgICAgIFt0aGlzLmRlZmVuc2VNb25zdGVyLCB0aGlzLmN1cnJlbnRNb25zdGVyXTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaXNGaW5pc2goKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubW9uc3RlckZpcnN0LmlzRGVhZCgpIHx8IHRoaXMubW9uc3RlclNlY29uZC5pc0RlYWQoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0V2lubmVyKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5pc0ZpbmlzaCkgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgICAgIHJldHVybiAodGhpcy5tb25zdGVyRmlyc3QuaXNEZWFkKCkpID8gdGhpcy5tb25zdGVyU2Vjb25kIDpcclxuICAgICAgICAgICAgdGhpcy5tb25zdGVyRmlyc3Q7XHJcbiAgICB9XHJcblxyXG59IiwiaW1wb3J0IHsgUGxheWVyIH0gZnJvbSAnLi9wbGF5ZXInO1xyXG5pbXBvcnQgeyBDaHVkaWxhIH0gZnJvbSAnLi9tb25zdGVyJztcclxuaW1wb3J0IHsgTWFwIH0gZnJvbSAnLi9tYXAnO1xyXG5pbXBvcnQgeyBNb3ZlTWFuYWdlciB9IGZyb20gJy4vbW92ZU1hbmFnZXInO1xyXG5pbXBvcnQgeyBEZWJ1Z1JlbmRlcmVyIH0gZnJvbSAnLi9kZWJ1Z1JlbmRlcmVyJztcclxuaW1wb3J0IHsgRmlnaHQgfSBmcm9tICcuL2ZpZ2h0JztcclxuXHJcbnZhciBwbGF5ZXIgPSBuZXcgUGxheWVyKFwiU3RldmVcIiwgbnVsbCwgJ0AnLCAwLCAwLCA0LCBbIG5ldyBDaHVkaWxhKCldKTtcclxudmFyIG1hcCA9IG5ldyBNYXAoNSwgNSk7XHJcbnZhciBtb3ZlTWFuYWdlciA9IG5ldyBNb3ZlTWFuYWdlcihtYXAsIHBsYXllcik7XHJcbnZhciBkZWJ1Z19hc2NpaV91aSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVidWdfYXNjaWlfdWlcIik7XHJcbmNvbnNvbGUubG9nKGRlYnVnX2FzY2lpX3VpKTtcclxudmFyIHJlbmRlcmVyID0gbmV3IERlYnVnUmVuZGVyZXIobWFwLCBwbGF5ZXIsIGRlYnVnX2FzY2lpX3VpKTtcclxuXHJcbnZhciBmaWdodDogRmlnaHQgPSBudWxsO1xyXG5cclxuZnVuY3Rpb24gdXBkYXRlKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XHJcbiAgICBpZiAoZmlnaHQgPT0gbnVsbCkge1xyXG4gICAgICAgIGxldCBkeCA9IDA7XHJcbiAgICAgICAgbGV0IGR5ID0gMDtcclxuICAgICAgICBpZiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgc3dpdGNoIChldmVudC5jb2RlKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdLZXlXJzpcclxuICAgICAgICAgICAgICAgICAgICBkeCA9IDAsIGR5ID0gLTE7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdLZXlBJzpcclxuICAgICAgICAgICAgICAgICAgICBkeCA9IC0xLCBkeSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdLZXlTJzpcclxuICAgICAgICAgICAgICAgICAgICBkeCA9IDAsIGR5ID0gMTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ0tleUQnOlxyXG4gICAgICAgICAgICAgICAgICAgIGR4ID0gMSwgZHkgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnS2V5RSc6XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocGxheWVyLmdldENvb3JkaW5hdGVzKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHBsYXllci5hdmFpbGFibGVDcmVhdHVyZXNbMF0ubmFtZSA9IFwiSHVpbGFcIjtcclxuICAgICAgICAgICAgICAgICAgICBmaWdodCA9IG5ldyBGaWdodChcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxheWVyLmF2YWlsYWJsZUNyZWF0dXJlc1swXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFwLmdldENlbGwocGxheWVyLmdldENvb3JkaW5hdGVzKCkueCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxheWVyLmdldENvb3JkaW5hdGVzKCkueSkubW9uc3RlclxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyZXIuc2hvd0ZpZ2h0KGZpZ2h0KTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGR4ICE9IDAgfHwgZHkgIT0gMCkge1xyXG4gICAgICAgICAgICBtb3ZlTWFuYWdlci5tb3ZlKHBsYXllci5nZXRDb29yZGluYXRlcygpLnggKyBkeCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGF5ZXIuZ2V0Q29vcmRpbmF0ZXMoKS55ICsgZHkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZW5kZXJlci5zaG93RmllbGQoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc3dpdGNoIChldmVudC5jb2RlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ0tleVonOlxyXG4gICAgICAgICAgICAgICAgZmlnaHQuZGVmZW5zZU1vbnN0ZXIuYmVBdHRhY2tlZChmaWdodC5jdXJyZW50TW9uc3Rlcik7XHJcbiAgICAgICAgICAgICAgICBmaWdodC5zd2FwKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnS2V5WCc6XHJcbiAgICAgICAgICAgICAgICBmaWdodC5jdXJyZW50TW9uc3Rlci5kZWZlbnNlSGltc2VsZigpO1xyXG4gICAgICAgICAgICAgICAgZmlnaHQuc3dhcCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhldmVudC5jb2RlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZW5kZXJlci5zaG93RmlnaHQoZmlnaHQpO1xyXG4gICAgICAgIGlmKGZpZ2h0LmlzRmluaXNoKCkpe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImZpbmlzaFwiKTtcclxuICAgICAgICAgICAgZmlnaHQuZ2V0V2lubmVyKCkuSGVhbCgpO1xyXG4gICAgICAgICAgICBmaWdodCA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG51cGRhdGUobnVsbCk7XHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB1cGRhdGUpOyIsImltcG9ydCB7IENlbGwsIExhbmRDZWxsLCBNb3VudENlbGwgfSBmcm9tICcuL2NlbGwnO1xyXG5pbXBvcnQgeyBVdGlscyB9IGZyb20gJy4vdXRpbHMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1hcCB7XHJcblxyXG4gICAgcHJpdmF0ZSBzaXplWDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBzaXplWTogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBkYXRhOiBDZWxsW11bXTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihzaXplWDogbnVtYmVyLCBzaXplWTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5zaXplWCA9IHNpemVYO1xyXG4gICAgICAgIHRoaXMuc2l6ZVkgPSBzaXplWTtcclxuICAgICAgICB0aGlzLmRhdGEgPSBNYXAuZ2VuZXJhdGUoc2l6ZVgsIHNpemVZKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0Q2VsbCh4OiBudW1iZXIsIHk6IG51bWJlcikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRhdGFbeV1beF07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFNpemUoKTogeyB4OiBudW1iZXIsIHk6IG51bWJlciB9IHtcclxuICAgICAgICByZXR1cm4geyB4OiB0aGlzLnNpemVYLCB5OiB0aGlzLnNpemVZIH07XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdlbmVyYXRlKHNpemVYOiBudW1iZXIsIHNpemVZOiBudW1iZXIpOiBDZWxsW11bXSB7XHJcbiAgICAgICAgY29uc3QgZGVmYXVsdENlbGwgPSBMYW5kQ2VsbDtcclxuICAgICAgICBsZXQgcG9zc2libGVDZWxscyA9IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgb2JqOiBNb3VudENlbGwsXHJcbiAgICAgICAgICAgICAgICByYW5kOiB7bWluOiA1LCBtYXg6IDEwfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGBNYXA6IGdlbmVyYXRlLCAoJHtzaXplWH0sICR7c2l6ZVl9KWApO1xyXG4gICAgICAgIHZhciBkYXRhOiBDZWxsW11bXSA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgc2l6ZVk7ICsreSkge1xyXG4gICAgICAgICAgICB2YXIgcm93OiBDZWxsW10gPSBbXTtcclxuICAgICAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBzaXplWDsgKyt4KSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcmFuZE51bSA9IFV0aWxzLnJhbmRvbSgxLCAxMDApO1xyXG4gICAgICAgICAgICAgICAgbGV0IG9iamVjdEZvckNyZWF0ZSA9IG51bGw7XHJcblxyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwb3NzaWJsZUNlbGxzLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKFV0aWxzLmlzSW5SYW5nZShyYW5kTnVtLCBwb3NzaWJsZUNlbGxzW2ldLnJhbmQubWluLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NzaWJsZUNlbGxzW2ldLnJhbmQubWF4KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvYmplY3RGb3JDcmVhdGUgPSBwb3NzaWJsZUNlbGxzW2ldLm9iajtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICghb2JqZWN0Rm9yQ3JlYXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0Rm9yQ3JlYXRlID0gZGVmYXVsdENlbGw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHJvdy5wdXNoKG5ldyBvYmplY3RGb3JDcmVhdGUoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGF0YS5wdXNoKHJvdyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGBNYXA6IGdlbmVyYXRlZCwgKCR7c2l6ZVh9LCAke3NpemVZfSlgKTtcclxuICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IENyZWF0dXJlIH0gZnJvbSBcIi4vY3JlYXR1cmVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBNb25zdGVyIGV4dGVuZHMgQ3JlYXR1cmUge1xyXG5cclxuICAgIHByaXZhdGUgX3R5cGU6IHN0cmluZztcclxuICAgIHB1YmxpYyBnZXQgdHlwZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl90eXBlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX21heEhlYXRoOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgZ2V0IG1heEhlYXRoKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX21heEhlYXRoO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2hlYWx0aDogbnVtYmVyO1xyXG4gICAgcHVibGljIGdldCBoZWFsdGgoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faGVhbHRoO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2RlZmVuc2U6IG51bWJlcjtcclxuICAgIHB1YmxpYyBnZXQgZGVmZW5zZSgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9kZWZlbnNlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2F0dGFjazogbnVtYmVyO1xyXG4gICAgcHVibGljIGdldCBhdHRhY2soKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYXR0YWNrO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2F0dGFja0Jvb3N0ZXI6IG51bWJlcjtcclxuICAgIHB1YmxpYyBnZXQgYXR0YWNrQm9vc3RlcigpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9hdHRhY2tCb29zdGVyO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgc3ByaXRlOnN0cmluZywgbGFiZWw6IHN0cmluZywgdHlwZTogc3RyaW5nLFxyXG4gICAgICAgIGhlYWx0aDogbnVtYmVyLCBkZWZlbnNlOiBudW1iZXIsIGF0dGFjazogbnVtYmVyLFxyXG4gICAgICAgIGF0dGFja0Jvb3N0ZXI6IG51bWJlcikge1xyXG4gICAgICAgIHN1cGVyKG5hbWUsIHNwcml0ZSwgbGFiZWwpO1xyXG4gICAgICAgIHRoaXMuX3R5cGUgPSB0eXBlO1xyXG4gICAgICAgIHRoaXMuX21heEhlYXRoID0gaGVhbHRoO1xyXG4gICAgICAgIHRoaXMuX2hlYWx0aCA9IGhlYWx0aDtcclxuICAgICAgICB0aGlzLl9kZWZlbnNlID0gZGVmZW5zZTtcclxuICAgICAgICB0aGlzLl9hdHRhY2sgPSBhdHRhY2s7XHJcbiAgICAgICAgdGhpcy5fYXR0YWNrQm9vc3RlciA9IGF0dGFja0Jvb3N0ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGJlQXR0YWNrZWQoZW5lbXk6IE1vbnN0ZXIpIHtcclxuICAgICAgICB0aGlzLl9oZWFsdGggLT0gKGVuZW15LmF0dGFjayAtIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fZGVmZW5zZSArIGVuZW15LmF0dGFja0Jvb3N0ZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkZWZlbnNlSGltc2VsZigpIHtcclxuICAgICAgICB0aGlzLl9kZWZlbnNlICs9IDU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGlzRGVhZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faGVhbHRoIDw9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIEhlYWwoKSB7XHJcbiAgICAgICB0aGlzLl9oZWFsdGggPSB0aGlzLm1heEhlYXRoO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRTdHJpbmcoKSB7XHJcbiAgICAgICAgcmV0dXJuIGAke3RoaXMubmFtZX0gJHt0aGlzLmhlYWx0aH1gO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENodWRpbGEgZXh0ZW5kcyBNb25zdGVyIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcignQ2h1ZGlsYScsICcuaW1hZ2UvY2h1ZGlsYS5wbmcnLCAnYycsICdyZWQnLCAxMDAsIDQsIDIwLCAxMCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBNYXAgfSBmcm9tICcuL21hcCc7XHJcbmltcG9ydCB7IFBsYXllciB9IGZyb20gJy4vcGxheWVyJztcclxuXHJcbmV4cG9ydCBjbGFzcyBNb3ZlTWFuYWdlciB7XHJcblxyXG4gICAgcHJpdmF0ZSBwbGF5ZXI6IFBsYXllcjtcclxuICAgIHByaXZhdGUgbWFwOiBNYXA7XHJcblxyXG4gICAgY29uc3RydWN0b3IobWFwOiBNYXAsIHBsYXllcjogUGxheWVyKSB7XHJcbiAgICAgICAgdGhpcy5tYXAgPSBtYXA7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSBwbGF5ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDb29yZGluYXRlcyBhcmUgY29ycmVjdCBpZiB0aGUgbWFwIHJhbmdlIGlzIGluY2x1ZGVkXHJcbiAgICAgKiBhbmQgcG9pbnQgdG8gYW4gYWRqYWNlbnQgY2VsbCBob3Jpem9udGFsbHkgb3IgdmVydGljYWxseSBcclxuICAgICAqIEBwYXJhbSB4XHJcbiAgICAgKiBAcGFyYW0geVxyXG4gICAgICogQHJldHVybnNcclxuICAgICAqL1xyXG4gICAgcHVibGljIGlzQ29ycmVudENvb3JkaW5hdGVzKHg6IG51bWJlciwgeTogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuICgwIDw9IHggJiYgeCA8IHRoaXMubWFwLmdldFNpemUoKS54KSAmJlxyXG4gICAgICAgICAgICAgICAoMCA8PSB5ICYmIHkgPCB0aGlzLm1hcC5nZXRTaXplKCkueSkgJiZcclxuICAgICAgICAgICAgICAgKE1hdGguYWJzKHggLSB0aGlzLnBsYXllci5nZXRDb29yZGluYXRlcygpLngpICtcclxuICAgICAgICAgICAgICAgIE1hdGguYWJzKHkgLSB0aGlzLnBsYXllci5nZXRDb29yZGluYXRlcygpLnkpID09IDEpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBtb3ZlKHg6IG51bWJlciwgeTogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNDb3JyZW50Q29vcmRpbmF0ZXMoeCwgeSkpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYCR7dGhpcy5wbGF5ZXIubmFtZX0gbW92ZWQgdG8gKCR7eH0sICR7eX0pYCk7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyLm1vdmUoeCwgeSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGAke3RoaXMucGxheWVyLm5hbWV9IG5vdCBtb3ZlZCB0byAoJHt4fSwgJHt5fSlgKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImltcG9ydCB7IENyZWF0dXJlIH0gZnJvbSBcIi4vY3JlYXR1cmVcIjtcclxuaW1wb3J0IHsgTW9uc3RlciB9IGZyb20gXCIuL21vbnN0ZXJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQbGF5ZXIgZXh0ZW5kcyBDcmVhdHVyZSB7XHJcblxyXG4gICAgcHJpdmF0ZSB4OiBudW1iZXI7XHJcbiAgICBwcml2YXRlIHk6IG51bWJlcjtcclxuICAgIHByaXZhdGUgX2F2YWlsYWJsZU1vdmVzOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgZ2V0IGF2YWlsYWJsZU1vdmVzKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2F2YWlsYWJsZU1vdmVzO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2F2YWlsYWJsZU1vbnN0ZXJzOiBNb25zdGVyW107XHJcblxyXG4gICAgcHVibGljIGdldCBhdmFpbGFibGVDcmVhdHVyZXMoKTogTW9uc3RlcltdIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYXZhaWxhYmxlTW9uc3RlcnM7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBzcHJpdGUgOiBzdHJpbmcsIGxhYmVsOiBzdHJpbmcsXHJcbiAgICAgICAgeDogbnVtYmVyLCB5OiBudW1iZXIsIGF2YWlsYWJsZU1vdmVzOiBudW1iZXIsXHJcbiAgICAgICAgYXZhaWxhYmxlTW9uc3RlcnM6IE1vbnN0ZXJbXSkge1xyXG4gICAgICAgIHN1cGVyKG5hbWUsIHNwcml0ZSwgbGFiZWwpO1xyXG4gICAgICAgIHRoaXMueCA9IHg7XHJcbiAgICAgICAgdGhpcy55ID0geTtcclxuICAgICAgICB0aGlzLl9hdmFpbGFibGVNb3ZlcyA9IGF2YWlsYWJsZU1vdmVzO1xyXG4gICAgICAgIHRoaXMuX2F2YWlsYWJsZU1vbnN0ZXJzID0gYXZhaWxhYmxlTW9uc3RlcnM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG1vdmUoeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnggPSB4O1xyXG4gICAgICAgIHRoaXMueSA9IHk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldENvb3JkaW5hdGVzKCkgOiB7IHg6IG51bWJlciwgeTogbnVtYmVyIH0ge1xyXG4gICAgICAgIHJldHVybiB7IHg6IHRoaXMueCwgeTogdGhpcy55IH07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFkZE1vc3Rlcihtb25zdGVyOiBNb25zdGVyKSB7XHJcbiAgICAgICAgdGhpcy5fYXZhaWxhYmxlTW9uc3RlcnMucHVzaChtb25zdGVyKTtcclxuICAgIH1cclxuXHJcbiAgICAvKlxyXG4gICAgcHVibGljIGRlbGV0ZU1vbnN0ZXIobW9uc3RlcjogTW9uc3Rlcik6IGJvb2xlYW4ge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fYXZhaWxhYmxlTW9uc3RlcnMubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX2F2YWlsYWJsZU1vbnN0ZXJzW2ldID09PSBtb25zdGVyKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAqL1xyXG5cclxufSIsImV4cG9ydCBjbGFzcyBVdGlscyB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0gYSBcclxuICAgICAqIEBwYXJhbSBiIFxyXG4gICAgICogQHJldHVybnMgcmFuZG9tIG51bWJlciBiZXR3ZWVuIGEgYW5kIGIsIGluY2x1c2l2ZVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgcmFuZG9tKGE6IG51bWJlciwgYjogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGIgLSBhICsgMSkpICsgYTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgaXNJblJhbmdlKHg6IG51bWJlciwgbWluOiBudW1iZXIsIG1heDogbnVtYmVyKSB7XHJcbiAgICAgICAgcmV0dXJuIG1pbiA8PSB4ICYmIHggPD0gbWF4O1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyByYW5kb21JdGVtRnJvbUFycmF5KGFycjogYW55W10pOiBhbnl7XHJcbiAgICAgICAgcmV0dXJuIGFyclt0aGlzLnJhbmRvbSgwLCBhcnIubGVuZ3RoIC0gMSldO1xyXG4gICAgfVxyXG59Il19
