import * as fs from "fs";


enum Direction {
    Increasing,
    Decreasing
}

function isContinous(input: number[]) : Boolean {
    let dir: Direction;
    const maxJump = 3;
    if (input[0] < input[1]) {
        dir = Direction.Increasing;
    }
    else if (input[0] > input[1]) {
        dir = Direction.Decreasing;
    } 
    else {
        return false;
    }

    for (let i = 0; i < input.length; i++) {
        let jump = Math.abs(input[i] - input[i + 1]);
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

function isValid(input: number[]) : Boolean {
    if (isContinous(input)) {
        return true;
    }

    for (let i = 0; i < input.length; i++) {
        let fixed = [...input.slice(0, i), ...input.slice(i+1)];
        if (isContinous(fixed)) {
            return true;
        }
    }
    return false;
}
let data = fs.readFileSync("AdventOfCode2/input1", "utf8");

//let input1 = [7, 6, 4, 2, 1];
//let input2 = [1, 2, 7, 8, 9];
//let input3 = [9, 7, 6, 2, 1];
//let input4 = [1, 3, 2, 4, 5];
//let input5 = [8, 6, 4, 4, 1];
//let input6 = [1, 3, 6, 7, 9];

let arr = data.split("\n");
let two_d_arr = arr.map(row => row.split(' '));

let number_arr: number[][] = two_d_arr.map(row => row.map(str => parseInt(str)));
let sum = 0;

for (let i = 0; i < number_arr.length; i++) {
    if (isValid(number_arr[i])) sum += 1;
}
console.log(sum);


















