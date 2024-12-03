import * as fs from 'fs';
// Only the four highlighted sections are 
// real mul instructions. Adding up the result of each instruction produces 161 (2*4 + 5*5 + 11*8 + 8*5).

function SumOfData(input: string): number {
    let fixed = input.match(/mul\(\d+,\d+\)/g);

    let fixed2 = fixed?.map(str => str.replace('mul(', '').replace(')', '').split(',').map(str => parseInt(str)));

    let sum1 = 0;
    for (let muls of fixed2!) {
        sum1 += muls[0] * muls[1];
    }
    return sum1;
}

let data = fs.readFileSync("Day3/input1", 'utf-8');
console.log(SumOfData(data));



