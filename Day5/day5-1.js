"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
function AlreadyCorrect(rules, input) {
    var correct_arr = [];
    var first_index;
    var second_index;
    for (var i = 0; i < input.length; i++) {
        var correct = true;
        for (var _i = 0, rules_1 = rules; _i < rules_1.length; _i++) {
            var rule = rules_1[_i];
            first_index = 0;
            second_index = 0;
            if (input[i].includes(rule[0]) && input[i].includes(rule[1])) {
                for (var j = 0; j < input[i].length; j++) {
                    if (rule[0] == input[i][j]) {
                        first_index = j;
                    }
                    else if (rule[1] == input[i][j]) {
                        second_index = j;
                    }
                }
                if (first_index > second_index) {
                    correct = false;
                    break;
                }
            }
        }
        if (correct) {
            correct_arr.push(input[i]);
        }
    }
    correct_arr.pop();
    return correct_arr.reduce(function (sum, arr) { return sum + arr[Math.floor(arr.length / 2)]; }, 0);
}
var input = fs.readFileSync("input", "utf-8");
var split_input = input.split("\n\n");
var rules_str = split_input[0];
var arrs_str = split_input[1];
var rules = rules_str.split("\n").map(function (str) { return str.split("|"); }).map(function (rows) { return rows.map(function (num) { return parseInt(num); }); });
var arrs = arrs_str.split("\n").map(function (str) { return str.split(","); }).map(function (rows) { return rows.map(function (num) { return parseInt(num); }); });
console.log(AlreadyCorrect(rules, arrs));
