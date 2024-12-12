"use strict";
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
function day11_2(input) {
    var e_1, _a, e_2, _b;
    var data = input.split(" ").map(Number);
    var stones_map = new Map();
    try {
        for (var data_1 = __values(data), data_1_1 = data_1.next(); !data_1_1.done; data_1_1 = data_1.next()) {
            var stone = data_1_1.value;
            increaseStone(stones_map, stone, 1);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (data_1_1 && !data_1_1.done && (_a = data_1.return)) _a.call(data_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    function increaseStone(map, key, amount) {
        var current_val = map.get(key) || 0;
        map.set(key, current_val + amount);
    }
    function blink(times, stones) {
        var e_3, _a;
        while (times > 0) {
            var newStones = new Map();
            try {
                for (var stones_1 = (e_3 = void 0, __values(stones)), stones_1_1 = stones_1.next(); !stones_1_1.done; stones_1_1 = stones_1.next()) {
                    var _b = __read(stones_1_1.value, 2), stone = _b[0], count = _b[1];
                    if (stone === 0) {
                        increaseStone(newStones, stone + 1, count);
                    }
                    else if (stone.toString().length % 2 === 0) {
                        var half = stone.toString().length / 2;
                        var stone1 = Number(stone.toString().slice(0, half));
                        var stone2 = Number(stone.toString().slice(half));
                        increaseStone(newStones, stone1, count);
                        increaseStone(newStones, stone2, count);
                    }
                    else {
                        increaseStone(newStones, stone * 2024, count);
                    }
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (stones_1_1 && !stones_1_1.done && (_a = stones_1.return)) _a.call(stones_1);
                }
                finally { if (e_3) throw e_3.error; }
            }
            stones = newStones;
            times--;
        }
        return stones;
    }
    var blink_map = blink(75, stones_map);
    var output = 0;
    try {
        for (var _c = __values(blink_map.keys()), _d = _c.next(); !_d.done; _d = _c.next()) {
            var key = _d.value;
            output += blink_map.get(key) || 0;
        }
    }
    catch (e_2_1) { e_2 = { error: e_2_1 }; }
    finally {
        try {
            if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
        }
        finally { if (e_2) throw e_2.error; }
    }
    console.log(output);
}
var test_input = fs.readFileSync('Day11/test_input', 'utf-8');
var input = fs.readFileSync('Day11/input', 'utf-8');
day11_2(input);
