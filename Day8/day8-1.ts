import * as fs from 'fs';

let input = fs.readFileSync('Day8/input', 'utf-8');
let test_input = fs.readFileSync('Day8/test_input', 'utf-8');


function day8_1(input: string) {
    let grid: string[][] = input.split("\n").filter(row => row.length > 0).map(str => str.split(''));

    let antennas: Map<string, number[][]> = new Map();
    let antiNodes: Map<string, boolean> = new Map();

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] != '.') {
                const array = antennas.get(grid[i][j]) ?? [];
                array.unshift([i, j]);
                antennas.set(grid[i][j], array);
            }
        }
    }
    antennas.forEach((positions, _) => {
        for (let i = 0; i < positions.length; i++) {
            for (let j = i + 1; j < positions.length; j++) {
                const pos1 = positions[i];
                const pos2 = positions[j];

                const deltaX = pos2[0] - pos1[0];
                const deltaY = pos2[1] - pos1[1];

                const antiNode1 = [pos1[0] - deltaX, pos1[1] - deltaY];
                const antiNode2 = [pos2[0] + deltaX, pos2[1] + deltaY];


                if (antiNode1[0] >= 0 && antiNode1[0] < grid.length && antiNode1[1] >= 0 && antiNode1[1] < grid[0].length) {
                    antiNodes.set(antiNode1.join(', '), true);
                }

                if (antiNode2[0] >= 0 && antiNode2[0] < grid.length && antiNode2[1] >= 0 && antiNode2[1] < grid[0].length) {
                    antiNodes.set(antiNode2.join(', '), true);
                }
            }
        }
    });
    console.log(antiNodes.size);
}

day8_1(test_input);
