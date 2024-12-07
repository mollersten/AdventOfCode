"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
function day6_2() {
    var test_input = fs.readFileSync("Day6/test_input", "utf-8");
    var input = fs.readFileSync("Day6/input", "utf-8");
    var grid = input.split('\n').filter(function (row) { return row !== ''; }).map(function (row) { return row.split(''); });
    var direction = [
        [-1, 0],
        [0, 1],
        [1, 0],
        [0, -1]
    ];
    var guardDirection = 0;
    var guardCol = -1;
    var guardRow = -1;
    for (var row = 0; row < grid.length; row++) {
        if (guardRow >= 0)
            break;
        for (var col = 0; col < grid[row].length; col++) {
            if (grid[row][col] === '^') {
                console.log("Row: " + row + ", Col: " + col);
                guardRow = row;
                guardCol = col;
                break;
            }
        }
    }
    var output = 0;
    for (var row = 0; row < grid.length; row++) {
        for (var col = 0; col < grid[row].length; col++) {
            if (grid[row][col] !== '.') {
                continue;
            }
            grid[row][col] = '#';
            var visited = new Map();
            var currentRow = guardRow;
            var currentCol = guardCol;
            var currentDirection = guardDirection;
            var loopDetected = false;
            while (true) {
                var guardState = JSON.stringify(currentRow + " " + currentCol + " " + currentDirection);
                if (visited.get(guardState)) {
                    loopDetected = true;
                    break;
                }
                visited.set(guardState, true);
                var nextGuardRow = currentRow + direction[currentDirection][0];
                var nextGuardCol = currentCol + direction[currentDirection][1];
                if (nextGuardCol < 0 || nextGuardCol >= grid[0].length || nextGuardRow < 0 || nextGuardRow >= grid.length) {
                    break;
                }
                if (grid[nextGuardRow][nextGuardCol] === '#') {
                    currentDirection = (currentDirection + 1) % 4;
                }
                else {
                    currentRow = nextGuardRow;
                    currentCol = nextGuardCol;
                }
            }
            if (loopDetected) {
                output++;
            }
            grid[row][col] = '.';
        }
    }
    console.log(output);
}
day6_2();
