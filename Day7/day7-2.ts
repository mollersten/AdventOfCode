import * as fs from 'fs';

function day7_2() {

    let testEquations = fs.readFileSync('Day7/test_input', 'utf-8').split('\n').map(eq => eq.split(/[: ]+/).map(Number));
    testEquations.pop();
    let equations = fs.readFileSync('Day7/input', 'utf-8').split('\n').map(eq => eq.split(/[: ]+/).map(Number));
    equations.pop();
    let operatorCombos: string[][] = [];
    let operators = ['+', '*', '|'];
    let stringCombinations: string[] = [];
    let sum = 0;
    for (let eq of equations) {
        let answer = eq.shift();
        operatorCombos = function generateCombinations(count: number) : string[][] {
            if (count === 0) return [[]];

            let combinations: string[][] = [];

            operators.forEach(op => {
                let subCombos = generateCombinations(count - 1);
                subCombos.forEach(comb => {
                    combinations.push([op, ...comb]);
               });

            });
            return combinations;
        }(eq.length-1); 

        for (let i = 0; i < operatorCombos.length; i++) {
            for (let j = 0; j < eq.length; j++) {
                if (!stringCombinations[i]) stringCombinations[i] = "" + eq[0]; 
                stringCombinations[i] += operatorCombos[i][j] + eq[j+1]; 
            }
            const tokens = stringCombinations[i].match(/(\d+|\+|\||\*|\/)/g);
            let result = Number(tokens![0]);

            for (let k = 1; k < tokens!.length; k += 2) {
               let operator = tokens![k];
               let nextVal = Number(tokens![k+1]);

               switch (operator) {
                   case '*':
                       result *= nextVal;
                   break;
                   
                   case '+':
                       result += nextVal;
                   break;

                   case '|':
                       let factor = nextVal.toString().length;
                       result *= Math.pow(10, factor);
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

day7_2();
