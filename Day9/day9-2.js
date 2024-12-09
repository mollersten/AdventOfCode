"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var input = fs.readFileSync('Day9/input', 'utf-8');
var test_input = fs.readFileSync('Day9/test_input', 'utf-8');
// Key: id, val: pos, size
function day9_2(input) {
    var data = input.split('').map(Number);
    var id = 0;
    var pos = 0;
    var files = new Map();
    var blanks = [];
    for (var i = 0; i < data.length; i++) {
        var size = data[i];
        if (i % 2 === 0) {
            files.set(id, [pos, size]);
            id += 1;
        }
        else if (size !== 0) {
            blanks.push([pos, size]);
        }
        pos += size;
    }
    while (id > 0) {
        id--;
        var cur_file = files.get(id);
        var pos_1 = cur_file[0];
        var size = cur_file[1];
        for (var i = 0; i < blanks.length; i++) {
            var pos_blank = blanks[i][0];
            var size_blank = blanks[i][1];
            if (pos_blank >= pos_1) {
                blanks = blanks.slice(0, i);
                break;
            }
            if (size <= size_blank) {
                files.set(id, [pos_blank, size]);
                if (size === size_blank) {
                    blanks = __spreadArray(__spreadArray([], blanks.slice(0, i), true), blanks.slice(i + 1), true);
                }
                else {
                    blanks[i] = [pos_blank + size, size_blank - size];
                }
                break;
            }
        }
    }
    var sum = 0;
    for (var i = 0; i < files.size; i++) {
        var cur_file = files.get(i);
        for (var j = cur_file[0]; j < cur_file[0] + cur_file[1]; j++) {
            sum += i * j;
        }
    }
    console.log(sum);
}
day9_2(input);
