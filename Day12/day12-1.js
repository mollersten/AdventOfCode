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
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
function day12_1(input) {
    var grid = input.split('\n').filter(function (row) { return row.length > 0; }).map(function (row) { return row.split(''); });
    var visited = new Map();
    function explore(plant, row, col) {
        var e_1, _a;
        var directions = [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1]
        ];
        var area = 0;
        var perimeter = 0;
        var queue = [[row, col]];
        visited.set([row, col].join(', '), true);
        while (queue.length > 0) {
            var current_plant = queue[0];
            queue = queue.slice(1);
            area++;
            try {
                for (var directions_1 = (e_1 = void 0, __values(directions)), directions_1_1 = directions_1.next(); !directions_1_1.done; directions_1_1 = directions_1.next()) {
                    var dir = directions_1_1.value;
                    var newRow = current_plant[0] + dir[0];
                    var newCol = current_plant[1] + dir[1];
                    if (newRow < 0 || newCol < 0 || newRow >= grid.length || newCol >= grid[newRow].length) {
                        perimeter++;
                        continue;
                    }
                    if (grid[newRow][newCol] != plant) {
                        perimeter++;
                        continue;
                    }
                    var cur_visit = visited.get([newRow, newCol].join(', ')) || false;
                    if (!cur_visit) {
                        queue.push([newRow, newCol]);
                        visited.set([newRow, newCol].join(', '), true);
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (directions_1_1 && !directions_1_1.done && (_a = directions_1.return)) _a.call(directions_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        return area * perimeter;
    }
    var sum = 0;
    for (var row = 0; row < grid.length; row++) {
        for (var col = 0; col < grid[row].length; col++) {
            var cur_visit = visited.get([row, col].join(', ')) || false;
            if (!cur_visit) {
                sum += explore(grid[row][col], row, col);
            }
        }
    }
    console.log(sum);
}
var test_input = fs.readFileSync('Day12/test_input', 'utf-8');
var input = fs.readFileSync('Day12/input', 'utf-8');
day12_1(input);
