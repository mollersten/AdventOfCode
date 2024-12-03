"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
// Only the four highlighted sections are 
// real mul instructions. Adding up the result of each instruction produces 161 (2*4 + 5*5 + 11*8 + 8*5).
function SumOfData(input) {
    var fixed = input.match(/mul\(\d+,\d+\)/g);
    var fixed2 = fixed === null || fixed === void 0 ? void 0 : fixed.map(function (str) { return str.replace('mul(', '').replace(')', '').split(',').map(function (str) { return parseInt(str); }); });
    var sum1 = 0;
    for (var _i = 0, _a = fixed2; _i < _a.length; _i++) {
        var muls = _a[_i];
        sum1 += muls[0] * muls[1];
    }
    return sum1;
}
var data = fs.readFileSync("Day3/input1", 'utf-8');
console.log(SumOfData(data));
