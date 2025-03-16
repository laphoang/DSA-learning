// 1 -> 5 -> 16

class Node {
    constructor(value) {
        this.value = value,
        this.next = null,
        this.prev = null
    }
}

class LinkedList {
    constructor(value) {
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }

    append(appendValue) {
        // init new Node
        let newNode = new Node(appendValue);
        // set next of tailNode point to newNode
        this.tail.next = newNode;
        // set prev Node of newNode point to current tail
        newNode.prev = this.tail;
        // set tail to newNode
        this.tail = newNode;
        // increment length
        this.length++;
        return this;
    }


    prepend(prependValue) {
        // init new Node
        let newNode = new Node(prependValue);
        // set newNode's next point to head
        newNode.next = this.head;
        // set headNode's prev point to newNode
        this.head.prev = newNode;
        // set head to newNode
        this.head = newNode;
        // increment length
        this.length++;
        return this;
    }

    printList() {
        const resultArr = [];
        let currentNode = this.head;
        while (currentNode.next !== null) {
            resultArr.push(currentNode.value);
            currentNode = currentNode.next;
        }
        resultArr.push(this.tail.value);
        console.log(resultArr); 
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
            return;
        }

        // traverse to the index location - 1 (previousNode)
        let previousNode = this.traverse(index - 1);
        // create new node
        let newNode = new Node(value);
        // new node's next = previousNode's next
        newNode.next = previousNode.next;
        // new node's prev = previousNode
        newNode.prev = previousNode;
        // previousNode's next = new node
        previousNode.next = newNode;
        // increment length
        this.length++;
        return this;
        // <- 1 ->            <- 3 ->  <- 4 ->
        //           <- 2 ->
    }

    remove(index) {
        // traverse to the previous index location
        let previousNode = this.traverse(index - 1);
        // node about to remove
        let removingNode = previousNode.next;
        // removingNode's next
        let nextNode = removingNode.next;
        // set previousNode's next to nextNode
        previousNode.next = removingNode.next;
        // set nextNode's prev to previousNode
        nextNode.prev = previousNode; 
        // decrease length
        this.length--;
        return this;
    }
    }

const newLinkedList = new LinkedList(1);
newLinkedList.append(2);
newLinkedList.append(3);
newLinkedList.prepend(0);
console.log(newLinkedList);
console.log('---------');
console.log(newLinkedList.traverse(0));
console.log('---------');
console.log(newLinkedList.traverse(1));


