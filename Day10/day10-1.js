"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var test_input = fs.readFileSync('Day10/test_input', 'utf-8');
var input = fs.readFileSync('Day10/input', 'utf-8');
function day10_1(data) {
    var original_grid = data.split('\n').filter(function (str) { return str.length != 0; }).map(function (str) { return str.split('').map(Number); });
    var grid = original_grid.map(function (row) { return row.map(function (num) { return num; }); });
    var output = 0;
    for (var i = 0; i < grid.length; i++) {
        for (var j = 0; j < grid[i].length; j++) {
            var pos = [i, j];
            var element = grid[i][j];
            if (element === 0) {
                var visited = new Map();
                var reachable = new Map();
                explore(pos[0], pos[1], 0, visited, reachable);
                output += reachable.size;
            }
        }
    }
    console.log(output);
    function explore(row, col, height, visited, reachable) {
        var direction = [
            [-1, 0],
            [1, 0],
            [0, 1],
            [0, -1]
        ];
        if (row < 0 || row >= grid.length || col < 0 || col >= grid[row].length)
            return;
        if (grid[row][col] != height)
            return;
        var currentPos = [row, col];
        if (visited.get(currentPos.join(', ')))
            return;
        visited.set(currentPos.join(', '), true);
        if (height === 9) {
            reachable.set(currentPos.join(', '), true);
            return;
        }
        for (var i = 0; i < direction.length; i++) {
            var nextRow = row + direction[i][0];
            var nextCol = col + direction[i][1];
            explore(nextRow, nextCol, height + 1, visited, reachable);
        }
    }
}
day10_1(input);
