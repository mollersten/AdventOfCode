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
function day7_1() {
    var testEquations = fs.readFileSync('Day7/test_input', 'utf-8').split('\n').map(function (eq) { return eq.split(/[: ]+/).map(Number); });
    testEquations.pop();
    var equations = fs.readFileSync('Day7/input', 'utf-8').split('\n').map(function (eq) { return eq.split(/[: ]+/).map(Number); });
    equations.pop();
    var operatorCombos = [];
    var operators = ['+', '*'];
    var stringCombinations = [];
    var sum = 0;
    for (var _i = 0, equations_1 = equations; _i < equations_1.length; _i++) {
        var eq = equations_1[_i];
        var answer = eq.shift();
        operatorCombos = function generateCombinations(count) {
            if (count === 0)
                return [[]];
            var combinations = [];
            operators.forEach(function (op) {
                var subCombos = generateCombinations(count - 1);
                subCombos.forEach(function (comb) {
                    combinations.push(__spreadArray([op], comb, true));
                });
            });
            return combinations;
        }(eq.length - 1);
        for (var i = 0; i < operatorCombos.length; i++) {
            for (var j = 0; j < eq.length; j++) {
                if (!stringCombinations[i])
                    stringCombinations[i] = "" + eq[0];
                stringCombinations[i] += operatorCombos[i][j] + eq[j + 1];
            }
            var tokens = stringCombinations[i].match(/(\d+|\+|\-|\*|\/)/g);
            var result = Number(tokens[0]);
            for (var k = 1; k < tokens.length; k += 2) {
                var operator = tokens[k];
                var nextVal = Number(tokens[k + 1]);
                switch (operator) {
                    case '*':
                        result *= nextVal;
                        break;
                    case '+':
                        result += nextVal;
                        break;
                    default:
                        break;
                }
            }
            if (result == answer) {
                sum += answer;
                break;
            }
            stringCombinations = [];
        }
    }
    console.log(sum);
}
day7_1();
