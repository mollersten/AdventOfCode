import * as fs from 'fs';

function day12_1(input: string) {
    let grid = input.split('\n').filter(row=> row.length > 0).map(row => row.split(''));
    let visited: Map<string, boolean> = new Map();

    function explore(plant: string, row: number, col: number) : number {
        let directions = [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1]
        ];
        let area = 0;
        let perimeter = 0;

        let queue: number[][] = [[row, col]];
        visited.set([row, col].join(', '), true);

        while (queue.length > 0) {
            let current_plant = queue[0];
            queue = queue.slice(1);
            area++;

            for (let dir of directions) {
                const newRow = current_plant[0] + dir[0];
                const newCol = current_plant[1] + dir[1];

                if (newRow < 0 || newCol < 0 || newRow >= grid.length || newCol >= grid[newRow].length) {
                    perimeter++;
                    continue;
                }

                if (grid[newRow][newCol] != plant) {
                    perimeter++;
                    continue;
                }

                const cur_visit = visited.get([newRow, newCol].join(', ')) || false;
                if (!cur_visit) {
                    queue.push([newRow, newCol]);
                    visited.set([newRow, newCol].join(', '), true);
                }
            }
        }
        return area * perimeter;
    }
    let sum = 0;
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[row].length; col++) {
            const cur_visit = visited.get([row, col].join(', ')) || false;
            if (!cur_visit) {
                sum += explore(grid[row][col], row, col);
            }
        }
    }
    console.log(sum);
}

let test_input = fs.readFileSync('Day12/test_input', 'utf-8');
let input = fs.readFileSync('Day12/input', 'utf-8');
day12_1(input);
