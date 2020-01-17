console.log('This is working')
"use strict";

function indexOf(array, value) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] == value) {
            return i;
        }
    }
    return -1;
};

function binarySearch(array, value, start, end) {
    let start = start === undefined ? 0 : start;
    let end = end === undefined ? array.length : end;

    if (start > end) {
        return -1
    }

    const index = Math.floor((start + end) / 2);
    const item = array[index];

    console.log(start, end);
    if(item == value) {
        return index;
    }
    else if (item < value) {
        return binarySearch(array, value, index + 1, end);
    }

    else if (item > value) {
        return binarySearch(array, value, start, index -1);
    }
};

class BinarySearchTree {
    constructor(key = null, value = null, parent = null) {
        this.key = key;
        this.value = value;
        this.parent = parent;
        this.left = null;
        this.right = null;
    }

    dfs(values = []) {
        if (this.left) {
            values = this.left.dfs(values);
        }
        values.push(this.value);

        if (this.right) {
            values = this.right.dfs(values);
        }
        return values;
    };

    bfs(tree, values = []) {
        const queue = new Queue();
        const node = tree.root;
        queue.enqueue(node);
        while (queue.length) {
            const node = queue.dequeue();
            values.push(node.value);
            if(node.left) {
                queue.enqueue(node.left)
            }

            if(node.right) {
                queue.enqueue(node.right)
            }
        }
        return values;
    }
};

//1. How many searches?

/* Given a sorted list 3, 5, 6, 8, 11, 12, 14, 15, 17, 18 and using the recursive binary search algorithm, identify the sequence of numbers that each recursive call will search to try and find 8.*/

11, 6, 8

/*Given a sorted list 3, 5, 6, 8, 11, 12, 14, 15, 17, 18 and using the recursive binary search algorithm, identify the sequence of numbers that each recursive call will search to try and find 16.*/

[3, 5, 6, 8, 11, 12, 14, 15, 17, 18]

11, 14, 15, 17, -1