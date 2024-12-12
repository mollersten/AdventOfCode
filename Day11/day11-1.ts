import * as fs from 'fs';

class Node  {
    num: number;
    next: Node | null = null;
    length: number;

    constructor(num: number) {
        this.num = num;
        this.length = num.toString().length;
    }

    get_length() {
        return this.length;
    }
    
    get_value() {
        return this.num;
    }
}

class LinkedList {
    head: Node | null = null;
    tail: Node | null = null;
    size = 0;

    get_size() {
        return this.size;
    }
    append(value: number) {
        this.size++;
        const newNode = new Node(value);
        if(!this.tail) {
            this.head = newNode;
            this.tail = newNode;
            return;
        }
        let current = this.tail;
        current.next = newNode;
        this.tail = newNode;
    }

    pop_head() : Node | null {
        if (!this.head) {
            return null;
        }

        let head = this.head;
        this.head = this.head.next;
        head.next = null;

        if (!this.head) {
            this.tail = null;
        }

        return head;
    }
}
function day11_1(input: string) {
    let data = input.split(" ").map(Number);
    let data_list: LinkedList = new LinkedList();

    for (let stone of data) {
        data_list.append(stone);
    }
    

    function blink(times: number, stones: LinkedList) : LinkedList {

        while (times > 0) {
            let stones_list = new LinkedList(); 
            let stone = stones.pop_head();
            while (stone) {
                let stoneLength = stone.get_length();
                if (stone.get_value() === 0) {
                    stones_list.append(1);
                }
                else if (stoneLength % 2 == 0) {
                    let factor = Math.pow(10, stoneLength / 2);
                    let stone1 = Math.floor(stone.get_value() / factor);
                    let stone2 = stone.get_value() % factor;

                    stones_list.append(stone1);
                    stones_list.append(stone2);
                }
                else {
                    stones_list.append(stone.get_value() * 2024);
                }

                stone = stones.pop_head();
            }
            stones = stones_list;
            times--;
        }
        return stones;
    } 

    let stones_transformed: LinkedList = blink(25, data_list);

    console.log(stones_transformed.size);
}

let test_input = fs.readFileSync('Day11/test_input', 'utf-8');
let input = fs.readFileSync('Day11/input', 'utf-8');

day11_1(input);
