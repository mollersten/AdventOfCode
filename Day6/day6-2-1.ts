import * as fs from 'fs';

function day6_2() {
    let test_input = fs.readFileSync("Day6/test_input", "utf-8");
    let input = fs.readFileSync("Day6/input", "utf-8");

    let grid: string[][] = input.split('\n').filter(row => row !== '').map(row => row.split(''));

    let direction = [
        [-1, 0],
        [0, 1],
        [1, 0],
        [0, -1]
    ];

    let guardDirection = 0;
    let guardCol = -1;
    let guardRow = -1;

    for (let row = 0; row < grid.length; row++) {
        if (guardRow >= 0) break;
        for (let col = 0; col < grid[row].length; col++) {
            if (grid[row][col] === '^') {
                console.log("Row: " + row + ", Col: " + col);
                guardRow = row;
                guardCol = col;
                break;
            }
        }
    }

    let output = 0;

    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[row].length; col++) {
            if (grid[row][col] !== '.') {
                continue;
            }

            grid[row][col] = '#';

            let visited: Map<string, boolean> = new Map();
            let currentRow = guardRow;
            let currentCol = guardCol;
            let currentDirection = guardDirection;

            let loopDetected = false;

            while (true) {
                let guardState = JSON.stringify(currentRow + " " + currentCol + " " + currentDirection);
                if (visited.get(guardState)) {
                    loopDetected = true;
                    break;
                }
                visited.set(guardState, true);
                let nextGuardRow = currentRow + direction[currentDirection][0];
                let nextGuardCol = currentCol + direction[currentDirection][1];

                if (nextGuardCol < 0 || nextGuardCol >= grid[0].length || nextGuardRow < 0 || nextGuardRow >= grid.length) {
                    break;
                }



                if (grid[nextGuardRow][nextGuardCol] === '#') {
                    currentDirection = (currentDirection + 1) % 4;
                } else {
                    currentRow = nextGuardRow;
                    currentCol = nextGuardCol;
                }


            }
            if (loopDetected) {
                output++;
            }

            grid[row][col] = '.';
        }
    }
    console.log(output);
}

day6_2();


