"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
function CountX_MAS(input) {
    var times = 0;
    for (var i = 1; i < input.length - 1; i++) {
        for (var j = 1; j < input[i].length - 1; j++) {
            var bottomRight = input[i + 1][j + 1];
            var topLeft = input[i - 1][j - 1];
            var topRight = input[i - 1][j + 1];
            var bottomLeft = input[i + 1][j - 1];
            if (input[i][j] == "A") {
                if (topLeft == "M" && bottomRight == "S" && bottomLeft == "M" && topRight == "S")
                    times++;
                if (topLeft == "M" && bottomRight == "S" && bottomLeft == "S" && topRight == "M")
                    times++;
                if (topLeft == "S" && bottomRight == "M" && bottomLeft == "M" && topRight == "S")
                    times++;
                if (topLeft == "S" && bottomRight == "M" && bottomLeft == "S" && topRight == "M")
                    times++;
            }
        }
    }
    return times;
}
var arr = ["MMMSXXMASM",
    "MSAMXMSMSA",
    "AMXSXMAAMM",
    "MSAMASMSMX",
    "XMASAMXAMM",
    "XXAMMXXAMA",
    "SMSMSASXSS",
    "SAXAMASAAA",
    "MAMMMXMMMM",
    "MXMXAXMASX"
];
var input = fs.readFileSync("Day4/input1", 'utf-8');
var data = input.split("\n");
console.log(CountX_MAS(data));
