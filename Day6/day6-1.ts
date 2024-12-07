import * as fs from 'fs';

let test_input = fs.readFileSync("Day6/test_input", "utf-8");
let input = fs.readFileSync("Day6/input", "utf-8");
type row = string[];

let field: row[] = input.split('\n').filter(row => row !== '').map(row => row.split(''));

enum Direction {
    Up = '^',
    Down = 'v',
    Right = '>',
    Left = '<',
    NoDirection = '',
}

type Position = {
    x: number,
    y: number
};

function GuardPosition(field: row[]) : [Position, Direction] {
    for (let i = 0; i < field.length; i++) {
        for (let j = 0; j < field[i].length; j++) {
            if (field[i][j] != '.' && field[i][j] != '#') {
                return [{ x: j, y: i }, field[i][j] as Direction];
            }
        }
    }
    return [{ x: 0, y: 0 }, Direction.NoDirection];
}

function GuardPath(dir: Direction, position: Position, field: row[]): number {
    let sum = 0;

    if (dir == Direction.NoDirection) return 0;

    while (position.x > 0 && position.y > 0 && position.x < field.length && position.y < field[0].length) {
        if (position.x < 0 && position.y < 0 && position.x >= field.length && position.y >= field[0].length)
            break;
        switch (dir) {
            case Direction.Up:
                if (field[position.y-1][position.x] === '#') { 
                    dir = Direction.Right;
            }
            else {  
                position.y--;
                if (field[position.y][position.x] !== 'X'){
                    field[position.y][position.x] = 'X';
                    sum++;
                }
            }
            break;

            case Direction.Right:
                if (field[position.y][position.x+1] === '#') dir = Direction.Down;
            else {  
                position.x++;
                if (field[position.y][position.x] !== 'X'){
                    field[position.y][position.x] = 'X';
                    sum++;
                }
            }
            break;

            case Direction.Down:
                if (field[position.y+1][position.x] === '#') dir = Direction.Left;
            else {  
                position.y++;
                if (field[position.y][position.x] !== 'X'){
                    field[position.y][position.x] = 'X';
                    sum++;
                }
            }
            break;

            case Direction.Left:
                if (field[position.y][position.x-1] === '#') dir = Direction.Up;
            else {  
                position.x--;
                if (field[position.y][position.x] !== 'X'){
                    field[position.y][position.x] = 'X';
                    sum++;
                }
            }
            break;

            default:
                console.log("No direction"); 
        }
    }
    sum++;
    return sum;
}

let guardPosition = GuardPosition(field);
console.log(guardPosition);
console.log(GuardPath(guardPosition[1], guardPosition[0], field));
