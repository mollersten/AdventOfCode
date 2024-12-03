"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
function SumOfData(input) {
    var fixed = input.match(/mul\(\d+,\d+\)/g);
    if (fixed == null) {
        return 0;
    }
    var parsedMuls = fixed === null || fixed === void 0 ? void 0 : fixed.map(function (str) { return str.replace('mul(', '').replace(')', '').split(',').map(Number); });
    var totalSum = 0;
    for (var _i = 0, _a = parsedMuls; _i < _a.length; _i++) {
        var muls = _a[_i];
        console.log("Multiplying... " + muls[0] + " and " + muls[1]);
        totalSum += muls[0] * muls[1];
    }
    return totalSum;
}
function FilterDo(input) {
    var data_arr = input.concat().split("don't()");
    console.log(data_arr.length);
    var two_d_arr = data_arr.map(function (str) { return str.split("do()"); });
    var totalSum = 0;
    for (var i = 0; i < two_d_arr.length; i++) {
        if (i == 0)
            totalSum += SumOfData(two_d_arr[i][0]);
        for (var j = 1; j < two_d_arr[i].length; j++) {
            totalSum += SumOfData(two_d_arr[i][j]);
        }
    }
    return totalSum;
}
var data = fs.readFileSync('Day3/input1', 'utf-8');
var data2 = "xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))";
console.log(FilterDo(data));
