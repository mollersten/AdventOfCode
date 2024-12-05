"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
function AlreadyCorrect(rules, input) {
    var correct_arr = [];
    var first_index;
    var second_index;
    for (var i = 0; i < input.length; i++) {
        var correct = true;
        for (var k = 0; k < rules.length; k++) {
            first_index = 0;
            second_index = 0;
            if (input[i].includes(rules[k][0]) && input[i].includes(rules[k][1])) {
                for (var j = 0; j < input[i].length; j++) {
                    if (rules[k][0] == input[i][j]) {
                        first_index = j;
                    }
                    else if (rules[k][1] == input[i][j]) {
                        second_index = j;
                    }
                }
                if (first_index > second_index) {
                    correct = false;
                    var temp = input[i][first_index];
                    input[i][first_index] = input[i][second_index];
                    input[i][second_index] = temp;
                    k = second_index;
                }
            }
        }
        if (!correct) {
            correct_arr.push(input[i]);
        }
    }
    return correct_arr.reduce(function (sum, arr) { return sum + arr[Math.floor(arr.length / 2)]; }, 0);
}
var input = fs.readFileSync("input", "utf-8");
var split_input = input.split("\n\n");
var rules_str = split_input[0];
var arrs_str = split_input[1];
var rules = rules_str.split("\n").map(function (str) { return str.split("|"); }).map(function (rows) { return rows.map(function (num) { return parseInt(num); }); });
var arrs = arrs_str.split("\n").map(function (str) { return str.split(","); }).map(function (rows) { return rows.map(function (num) { return parseInt(num); }); });
console.log(AlreadyCorrect(rules, arrs));
