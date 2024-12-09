import * as fs from 'fs';

let input = fs.readFileSync('Day9/input', 'utf-8');
let test_input = fs.readFileSync('Day9/test_input', 'utf-8');

// Key: id, val: pos, size
function day9_2(input: string) {
    let data = input.split('').map(Number);

    let id = 0;
    let pos = 0;
    let files: Map<number, [number, number]> = new Map();
    let blanks: number[][] = [];

    for (let i = 0; i < data.length; i++) {
        let size = data[i];
        if (i % 2 === 0) {
            files.set(id, [pos, size]);
            id += 1;
        } else if (size !== 0) {
            blanks.push([pos, size]);
        }
        pos += size;
    }

    while (id > 0) {
        id--;
        let cur_file = files.get(id);
        let pos = cur_file![0];
        let size = cur_file![1]; 

        for (let i = 0; i < blanks.length; i++) {
            let pos_blank = blanks[i][0];
            let size_blank = blanks[i][1]; 

            if (pos_blank >= pos) {
                blanks = blanks.slice(0, i);
                break;
            } if (size <= size_blank) {
                files.set(id, [pos_blank, size]);
                if (size === size_blank) {
                    blanks = [...blanks.slice(0, i), ...blanks.slice(i+1)];
                } else {
                    blanks[i] = [pos_blank + size, size_blank - size];
                }
                break;
            }

        }
    }
    let sum = 0;
    for (let i = 0; i < files.size; i++) {
        let cur_file = files.get(i);
        for (let j = cur_file![0]; j < cur_file![0] + cur_file![1]; j++) {
            sum += i * j;
        }
    }
    
    console.log(sum);
}

day9_2(input);
