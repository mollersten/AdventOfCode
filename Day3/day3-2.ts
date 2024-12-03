import * as fs from 'fs';

function SumOfData(input: string): number {
    let fixed = input.match(/mul\(\d+,\d+\)/g);
    if (fixed == null) {
        return 0;
    }

    let parsedMuls = fixed?.map(str => str.replace('mul(', '').replace(')', '').split(',').map(Number));

    let totalSum = 0;
    for (let muls of parsedMuls!) {
        console.log("Multiplying... " + muls[0] + " and " + muls[1]);
        totalSum += muls[0] * muls[1]; 
    }
    return totalSum;
}

function FilterDo(input: string): number {
    let data_arr = input.concat().split("don't()");
    console.log(data_arr.length);
    let two_d_arr = data_arr.map(str => str.split("do()"));

    let totalSum = 0;
    for (let i = 0; i < two_d_arr.length; i++) {
        if (i == 0) totalSum += SumOfData(two_d_arr[i][0]);
        for (let j = 1; j < two_d_arr[i].length; j++) {
            totalSum += SumOfData(two_d_arr[i][j]);
        }
    }

    return totalSum;
}

let data = fs.readFileSync('Day3/input1', 'utf-8');
let data2 = "xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))";
console.log(FilterDo(data));

