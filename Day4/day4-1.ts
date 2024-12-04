import * as fs from "fs";



function CountXMAS(input: string[]) : number {
    let times = 0;
    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < input[i].length; j++) {
            if (input[i][j] == "X") {
                if (j+3 < input[i].length)
                    if ((input[i][j+1] == "M" && input[i][j+2] == "A" && input[i][j+3] == "S")) times++;

                if (j-3 >= 0)
                    if (input[i][j-1] == "M" && input[i][j-2] == "A" && input[i][j-3] == "S") times++;

                if (i+3 < input.length)
                    if (input[i+1][j] == "M" && input[i+2][j] == "A" && input[i+3][j] == "S") times++;

                if (i-3 >= 0) 
                    if (input[i-1][j] == "M" && input[i-2][j] == "A" && input[i-3][j] == "S") times++;
                if (i+3 < input.length && j+3 < input[i].length)
                    if (input[i+1][j+1] == "M" && input[i+2][j+2] == "A" && input[i+3][j+3] == "S") times++;    

                if (i-3 >= 0 && j-3 >= 0)
                    if (input[i-1][j-1] == "M" && input[i-2][j-2] == "A" && input[i-3][j-3] == "S") times++;

                if (i-3 >= 0 && j+3 < input[i].length)
                    if (input[i-1][j+1] == "M" && input[i-2][j+2] == "A" && input[i-3][j+3] == "S") times++;

                if (i+3 < input.length && j-3 >= 0) 
                    if (input[i+1][j-1] == "M" && input[i+2][j-2] == "A" && input[i+3][j-3] == "S") times++;
            }
        }
    }
    return times;
}


let input = fs.readFileSync("Day4/input1", 'utf-8');

let data = input.split("\n");

console.log(CountXMAS(data));














