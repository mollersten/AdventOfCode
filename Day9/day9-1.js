"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var input = fs.readFileSync('Day9/input', 'utf-8');
var test_input = fs.readFileSync('Day9/test_input', 'utf-8');
// Key: id, val: pos, size
function day9_1(input) {
    var data = input.split('').map(Number);
    var disk = [];
    var id = 0;
    for (var i = 0; i < data.length; i++) {
        var times = data[i];
        if (i % 2 === 0) {
            for (var i_1 = 0; i_1 < times; i_1++) {
                disk.push(id);
            }
            id++;
        }
        else {
            for (var i_2 = 0; i_2 < times; i_2++) {
                disk.push(-1);
            }
        }
    }
    var blanks = disk.map(function (value, index) { return (value === -1 ? index : -1); }).filter(function (index) { return index !== -1; });
    var len = disk.length;
    for (var _i = 0, blanks_1 = blanks; _i < blanks_1.length; _i++) {
        var i = blanks_1[_i];
        while (disk[len - 1] === -1) {
            disk.pop();
            len--;
        }
        if (len <= i)
            break;
        disk[i] = disk.pop();
        len--;
    }
    var sum = 0;
    for (var i = 0; i < disk.length; i++) {
        sum += i * disk[i];
    }
    console.log(sum);
}
day9_1(input);
