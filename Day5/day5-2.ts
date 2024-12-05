import * as fs from "fs";

function AlreadyCorrect(rules: number[][], input: number[][]) {
    let correct_arr: number[][] = [];

    let first_index: number;
    let second_index: number;
    for (let i = 0; i < input.length; i++) {
        let correct = true;
        for (let k = 0; k < rules.length; k++) {
            first_index = 0;
            second_index = 0;
            if (input[i].includes(rules[k][0]) && input[i].includes(rules[k][1])) {
                for (let j = 0; j < input[i].length; j++) {
                    if (rules[k][0] == input[i][j]) {
                        first_index = j;
                    } else if (rules[k][1] == input[i][j]) {
                        second_index = j;
                    }
                }
                if (first_index! > second_index!){
                    correct = false;
                    let temp = input[i][first_index];
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
    return correct_arr.reduce((sum, arr) => sum + arr[Math.floor(arr.length/2)], 0);
}

let input = fs.readFileSync("input", "utf-8");

let split_input = input.split("\n\n");

let rules_str = split_input[0];
let arrs_str = split_input[1];

let rules = rules_str.split("\n").map(str => str.split("|")).map(rows => rows.map(num => parseInt(num)));
let arrs = arrs_str.split("\n").map(str => str.split(",")).map(rows => rows.map(num => parseInt(num)));



console.log(AlreadyCorrect(rules, arrs));

