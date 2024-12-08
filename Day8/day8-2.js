"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var input = fs.readFileSync('Day8/input', 'utf-8');
var test_input = fs.readFileSync('Day8/test_input', 'utf-8');
function day8_1(input) {
    var _a;
    var grid = input.split("\n").filter(function (row) { return row.length > 0; }).map(function (str) { return str.split(''); });
    var antennas = new Map();
    var antiNodes = new Map();
    for (var i = 0; i < grid.length; i++) {
        for (var j = 0; j < grid[i].length; j++) {
            if (grid[i][j] != '.') {
                var array = (_a = antennas.get(grid[i][j])) !== null && _a !== void 0 ? _a : [];
                array.unshift([i, j]);
                antennas.set(grid[i][j], array);
            }
        }
    }
    antennas.forEach(function (positions, _) {
        for (var i = 0; i < positions.length; i++) {
            for (var j = i + 1; j < positions.length; j++) {
                var pos1 = positions[i];
                var pos2 = positions[j];
                var deltaX = pos2[0] - pos1[0];
                var deltaY = pos2[1] - pos1[1];
                var antiNode1 = [pos1[0] - deltaX, pos1[1] - deltaY];
                var antiNode2 = [pos2[0] + deltaX, pos2[1] + deltaY];
                antiNodes.set([pos1[0], pos1[1]].join(', '), true);
                antiNodes.set([pos2[0], pos2[1]].join(', '), true);
                if (antiNode1[0] >= 0 && antiNode1[0] < grid.length && antiNode1[1] >= 0 && antiNode1[1] < grid[0].length) {
                    while (antiNode1[0] >= 0 && antiNode1[0] < grid.length && antiNode1[1] >= 0 && antiNode1[1] < grid[0].length) {
                        antiNodes.set(antiNode1.join(', '), true);
                        antiNode1[0] -= deltaX;
                        antiNode1[1] -= deltaY;
                    }
                }
                if (antiNode2[0] >= 0 && antiNode2[0] < grid.length && antiNode2[1] >= 0 && antiNode2[1] < grid[0].length) {
                    while (antiNode2[0] >= 0 && antiNode2[0] < grid.length && antiNode2[1] >= 0 && antiNode2[1] < grid[0].length) {
                        antiNodes.set(antiNode2.join(', '), true);
                        antiNode2[0] += deltaX;
                        antiNode2[1] += deltaY;
                    }
                }
            }
        }
    });
    console.log(antiNodes);
    console.log(antiNodes.size);
}
day8_1(input);
