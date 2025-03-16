class Node {
    constructor(value) {
        this.value = value,
        this.next = null
    }
}

class LinkedList {
    constructor(value) {
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }

    append(appendValue) {
        let newNode = new Node(appendValue);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }

    prepend(prependValue) {
        let newNode = new Node(prependValue);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }

    printList() {
        const resultArr = [];
        let currentNode = this.head;
        if (this.length === 0) {
            console.log(resultArr);
            return undefined;
        }
        while (currentNode.next !== null) {
            resultArr.push(currentNode.value);
            currentNode = currentNode.next;
        }
        resultArr.push(this.tail.value);
        console.log(resultArr);
        return undefined;
    }

    traverse(index) {
        let indexCount = 0;
        let currentNode = this.head;
        if (index > this.length - 1) {
            return undefined;
        }
        while (indexCount < index) {
            currentNode = currentNode.next;
            indexCount++;
        }
        return currentNode;
    }

    insert(index, value) {
        // if index === 0, prepend
        if (index === 0) {
            this.prepend(value);
            return this;
        }

        // traverse to the index location - 1
        let currentNode = this.traverse(index - 1);
        // create new node
        let newNode = new Node(value);
        // new node's next = index location - 1's next
        newNode.next = currentNode.next;
        // index location - 1's next = new node
        currentNode.next = newNode
        // increment length;
        this.length++;
        // return
        return this;
        // 1 ->            3 -> 4
        //      2 ->
    }

    remove(index) {
        if (index >= this.length) {
            console.log('The index exceeds the length of linked list');
            return undefined;
        }
        // if removing head
        if (index === 0) {
            // set the head to head's next node
            this.head = this.head.next;
        }
        else {
        // traverse to the previous index location
        let previousNode = this.traverse(index - 1);
        // node about to remove
        let removingNode = previousNode.next;
        // set previousNode's next to nextNode
        previousNode.next = removingNode.next;
        // if removing tail: set tail
        if (index === this.length - 1) {
           this.tail = previousNode; 
        }
        }
        // decrease length
        this.length--;
        return this;
    }

    _reverse(current_node, previous_node) {
        // base case: done reversing all the linked list, reach the last element
        if (current_node === null) {
            // replace head and tail
            let head = this.head;
            this.head = this.tail;
            this.tail = head;
            return this;
        }
        // currentNode
        let nextNode = current_node.next;
        // set currentNode's next point to previous node
        current_node.next = previous_node;

        // recursive call
        return this._reverse(nextNode, current_node);
    }

    reverse() {
        return this._reverse(this.head, null);
    }
    }

class Stack extends LinkedList {
    constructor(value) {
        super(value);
    }

    push(value) {
        return this.prepend(value);
    }

    pop() {
        let pop_value = this.head;
        this.remove(0);
        return pop_value;
    }
}

const new_stack = new Stack(0);
new_stack.push(1);
new_stack.push(2);
new_stack.push(3);
console.log(new_stack.length);
new_stack.printList();
console.log(new_stack.pop());
console.log(new_stack.pop());

console.log(new_stack.length);
new_stack.printList();


