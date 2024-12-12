"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var Node = /** @class */ (function () {
    function Node(num) {
        this.next = null;
        this.num = num;
        this.length = num.toString().length;
    }
    Node.prototype.get_length = function () {
        return this.length;
    };
    Node.prototype.get_value = function () {
        return this.num;
    };
    return Node;
}());
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    LinkedList.prototype.get_size = function () {
        return this.size;
    };
    LinkedList.prototype.append = function (value) {
        this.size++;
        var newNode = new Node(value);
        if (!this.tail) {
            this.head = newNode;
            this.tail = newNode;
            return;
        }
        var current = this.tail;
        current.next = newNode;
        this.tail = newNode;
    };
    LinkedList.prototype.pop_head = function () {
        if (!this.head) {
            return null;
        }
        var head = this.head;
        this.head = this.head.next;
        head.next = null;
        if (!this.head) {
            this.tail = null;
        }
        return head;
    };
    return LinkedList;
}());
function day11_1(input) {
    var data = input.split(" ").map(Number);
    var data_list = new LinkedList();
    for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
        var stone = data_1[_i];
        data_list.append(stone);
    }
    function blink(times, stones) {
        while (times > 0) {
            var stones_list = new LinkedList();
            var stone = stones.pop_head();
            while (stone) {
                var stoneLength = stone.get_length();
                if (stone.get_value() === 0) {
                    stones_list.append(1);
                }
                else if (stoneLength % 2 == 0) {
                    var factor = Math.pow(10, stoneLength / 2);
                    var stone1 = Math.floor(stone.get_value() / factor);
                    var stone2 = stone.get_value() % factor;
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
    var stones_transformed = blink(25, data_list);
    console.log(stones_transformed.size);
}
var test_input = fs.readFileSync('Day11/test_input', 'utf-8');
var input = fs.readFileSync('Day11/input', 'utf-8');
day11_1(input);
