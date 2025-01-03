"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var Direction;
(function (Direction) {
    Direction[Direction["Increasing"] = 0] = "Increasing";
    Direction[Direction["Decreasing"] = 1] = "Decreasing";
})(Direction || (Direction = {}));
function isContinous(input) {
    var dir;
    var maxJump = 3;
    if (input[0] < input[1]) {
        dir = Direction.Increasing;
    }
    else if (input[0] > input[1]) {
        dir = Direction.Decreasing;
    }
    else {
        return false;
    }
    for (var i = 0; i < input.length; i++) {
        var jump = Math.abs(input[i] - input[i + 1]);
        if (jump > maxJump || jump == 0) {
            return false;
        }
        if (dir == Direction.Decreasing && input[i] < input[i + 1]) {
            return false;
        }
        if (dir == Direction.Increasing && input[i] > input[i + 1]) {
            return false;
        }
    }
    return true;
}
var data = fs.readFileSync("AdventOfCode2/input1", "utf8");
//let input1 = [7, 6, 4, 2, 1];
//let input2 = [1, 2, 7, 8, 9];
//let input3 = [9, 7, 6, 2, 1];
//let input4 = [1, 3, 2, 4, 5];
//let input5 = [8, 6, 4, 4, 1];
//let input6 = [1, 3, 6, 7, 9];
var arr = data.split("\n");
var two_d_arr = arr.map(function (row) { return row.split(' '); });
var number_arr = two_d_arr.map(function (row) { return row.map(function (str) { return parseInt(str); }); });
var sum = 0;
for (var i = 0; i < number_arr.length; i++) {
    if (isContinous(number_arr[i]))
        sum += 1;
}
console.log(sum);
