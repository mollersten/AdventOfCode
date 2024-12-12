import * as fs from 'fs';

function day11_2(input: string) {
    let data = input.split(" ").map(Number);

    let stones_map: Map<number, number> = new Map();
    for (let stone of data) {
        increaseStone(stones_map, stone, 1);
    }




    function increaseStone(map: Map<number, number>, key: number, amount: number) {
        let current_val = map.get(key) || 0;

        map.set(key, current_val + amount);
    }


    function blink(times: number, stones: Map<number, number>) : Map <number, number> {

        while (times > 0) {
            let newStones: Map<number, number> = new Map();
            for (let [stone, count] of stones) {
                if (stone === 0) {
                    increaseStone(newStones, stone+1, count);
                } else if (stone.toString().length % 2 === 0) {
                    const half = stone.toString().length / 2;

                    const stone1 = Number(stone.toString().slice(0, half));
                    const stone2 = Number(stone.toString().slice(half));

                    increaseStone(newStones, stone1, count);
                    increaseStone(newStones, stone2, count);
                }
                else {
                    increaseStone(newStones, stone * 2024, count);
                }
            }
            stones = newStones;
            times--;
        }
        return stones;
    }

    let blink_map = blink(75, stones_map);
    let output = 0;
    for (let key of blink_map.keys()) {
        output += blink_map.get(key) || 0;
    }

    console.log(output);
}


let test_input = fs.readFileSync('Day11/test_input', 'utf-8');
let input = fs.readFileSync('Day11/input', 'utf-8');

day11_2(input);
