"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var test_input = fs.readFileSync("Day6/test_input", "utf-8");
var input = fs.readFileSync("Day6/input", "utf-8");
var field = input.split('\n').filter(function (row) { return row !== ''; }).map(function (row) { return row.split(''); });
var Direction;
(function (Direction) {
    Direction["Up"] = "^";
    Direction["Down"] = "v";
    Direction["Right"] = ">";
    Direction["Left"] = "<";
    Direction["NoDirection"] = "";
})(Direction || (Direction = {}));
function GuardPosition(field) {
    for (var i = 0; i < field.length; i++) {
        for (var j = 0; j < field[i].length; j++) {
            if (field[i][j] != '.' && field[i][j] != '#') {
                return [{ x: j, y: i }, field[i][j]];
            }
        }
    }
    return [{ x: 0, y: 0 }, Direction.NoDirection];
}
function SwitchDirection(dir, position, field) {
    var sum = 0;
    if (dir == Direction.NoDirection)
        return 0;
    while (position.x > 0 && position.y > 0 && position.x < field.length && position.y < field[0].length) {
        console.log(field[0][105]);
        if (position.x < 0 && position.y < 0 && position.x >= field.length && position.y >= field[0].length)
            break;
        switch (dir) {
            case Direction.Up:
                if (field[position.y - 1][position.x] === '#') {
                    dir = Direction.Right;
                }
                else {
                    position.y--;
                    if (field[position.y][position.x] !== 'X') {
                        console.log(position);
                        console.log(position.y);
                        field[position.y][position.x] = 'X';
                        sum++;
                    }
                }
                break;
            case Direction.Right:
                if (field[position.y][position.x + 1] === '#')
                    dir = Direction.Down;
                else {
                    position.x++;
                    if (field[position.y][position.x] !== 'X') {
                        field[position.y][position.x] = 'X';
                        sum++;
                    }
                }
                break;
            case Direction.Down:
                if (field[position.y + 1][position.x] === '#')
                    dir = Direction.Left;
                else {
                    position.y++;
                    if (field[position.y][position.x] !== 'X') {
                        field[position.y][position.x] = 'X';
                        sum++;
                    }
                }
                break;
            case Direction.Left:
                if (field[position.y][position.x - 1] === '#')
                    dir = Direction.Up;
                else {
                    position.x--;
                    if (field[position.y][position.x] !== 'X') {
                        field[position.y][position.x] = 'X';
                        sum++;
                    }
                }
                break;
            default:
                console.log("No direction");
        }
    }
    sum++;
    return sum;
}
var guardPosition = GuardPosition(field);
console.log(guardPosition);
console.log(SwitchDirection(guardPosition[1], guardPosition[0], field));
