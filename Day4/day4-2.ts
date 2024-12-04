import * as fs from "fs";

function CountX_MAS(input: string[]): number {
    let times = 0;


    for (let i = 1; i < input.length-1; i++) {
        for (let j = 1; j < input[i].length-1; j++) {
            let bottomRight = input[i+1][j+1];
            let topLeft = input[i-1][j-1];
            let topRight = input[i-1][j+1];
            let bottomLeft = input[i+1][j-1];


            if (input[i][j] == "A") {
                if (topLeft == "M" && bottomRight == "S" && bottomLeft == "M" && topRight == "S") times++;
                if (topLeft == "M" && bottomRight == "S" && bottomLeft == "S" && topRight == "M") times++;
                if (topLeft == "S" && bottomRight == "M" && bottomLeft == "M" && topRight == "S") times++;
                if (topLeft == "S" && bottomRight == "M" && bottomLeft == "S" && topRight == "M") times++;
            }
        }
    }
    return times;
}

let input = fs.readFileSync("Day4/input1", 'utf-8');

let data = input.split("\n");

console.log(CountX_MAS(data));

