import * as fs from 'fs';

let test_input = fs.readFileSync('Day10/test_input', 'utf-8');
let input = fs.readFileSync('Day10/input', 'utf-8');


function day10_1(data: string) {
    const original_grid: number[][] = data.split('\n').filter(str => str.length != 0).map(str => str.split('').map(Number));
    let grid: number[][] = original_grid.map(row => row.map(num => num));
    let output = 0;


    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            let pos = [i, j];
            let element = grid[i][j];

            if (element === 0) {
                let visited: Map<string, boolean> = new Map();
                let reachable: Map<string, boolean> = new Map();
                explore(pos[0], pos[1], 0, visited, reachable);

                output += reachable.size;
            }
        }
    }



    console.log(output); 

    function explore(row: number, col: number, height: number, visited: Map<string, boolean>, reachable: Map<string, boolean>) {
        const direction: number[][] = [
            [-1, 0],
            [1, 0],
            [0, 1],
            [0, -1]
        ];
        if (row < 0 || row >= grid.length || col < 0 || col >= grid[row].length) return;

        if (grid[row][col] != height) return;

        let currentPos = [row, col];

        if (visited.get(currentPos.join(', '))) return;

        visited.set(currentPos.join(', '), true);

        if (height === 9) {
            reachable.set(currentPos.join(', '), true);
            return;
        }

        for (let i = 0; i < direction.length; i++) {
            let nextRow = row + direction[i][0];
            let nextCol = col + direction[i][1];

            explore(nextRow, nextCol, height+1, visited, reachable);
        }
    }
}

day10_1(input);
