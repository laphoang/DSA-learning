// HashTable class
// constructor: new array for location
// _hash func
// set func: set location for new data
// get func: get data by the location

class HashTable {
    constructor(size) {
        this.data = new Array(size);
        this.size = size;
    }

    _hash(key) {
        let hash = 0;
        let primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hash = (hash * primeNumber + String(key).charCodeAt(i)) % this.size;
        }
        return hash;
    }

    set(obj) {
        if (Array.isArray(obj) && obj.length === 2) {
            let location = this._hash(obj[0]);
            if (!this.data[location]) {
                this.data[location] = [];
            }
            this.data[location].push(obj);
        } else {
            console.log('Error input, must be an array of length 2')
        }
    }

    get(key) {
        let location = this._hash(key);
        let returnDataArr = [];
        if (this.data[location]) {
        for (let element of this.data[location]) {
            if (element[0] === key) {
                returnDataArr.push(element);
            }
        }
        if (returnDataArr.length === 1) {
            return returnDataArr[0];  
        } else {
            return returnDataArr;  
        }
    }
    }
}

input1 = [1, 'alo'];
input2 = ['a', 1];
input3 = [12, [1,2,3]];
input4 = [1,2];

const NewHashTable = new HashTable(10);

NewHashTable.set(input1);
NewHashTable.set(input2);
NewHashTable.set(input3);
NewHashTable.set(input4);

let output1 = NewHashTable.get(1);
let output2 = NewHashTable.get('a');
let output3 = NewHashTable.get(12);
let output4 = NewHashTable.get(1);

console.log(NewHashTable.data);
console.log(output1);
console.log(output2);
console.log(output3);
console.log(output4);


