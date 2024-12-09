import * as fs from 'fs';

let input = fs.readFileSync('Day9/input', 'utf-8');
let test_input = fs.readFileSync('Day9/test_input', 'utf-8');

// Key: id, val: pos, size
function day9_1(input: string) {
    let data = input.split('').map(Number);
    let disk: number[] = [];
    let id = 0;

    for (let i = 0; i < data.length; i++) {
        let times = data[i];
        if (i % 2 === 0) {
            for (let i = 0; i < times; i++) {
                disk.push(id);
            }
            id++;
        } else {
            for (let i = 0; i < times; i++) {
                disk.push(-1);
            }
        }
    }

    let blanks: number[] = disk.map((value, index) => (value === -1 ? index : -1)).filter(index => index !== -1);
    let len = disk.length;
    for (let i of blanks) {
        while (disk[len-1] === -1) {
            disk.pop();
            len--;
        }
        if (len <= i) break;
        disk[i] = disk.pop()!;
        len--;
    }

    let sum = 0;

    for (let i = 0; i < disk.length; i++) {
        sum += i * disk[i];
    }
    console.log(sum);
}

day9_1(input);
