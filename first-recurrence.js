let array1 = [2,5,1,2,6,12,124,1,3,6];
//return 2
let array2 = [2,1,1,2,5,1,4,2,1];
//return 1
let array3 = [2,3,4,5];
//return undefined

class FirstRecurrence {
    constructor() {
    }
    
    checkNumExists(arr) {
        let numObj = {};
        for (let num of arr) {
            if (numObj[num]) {
                return num;
            } else {
                numObj[num] = true;
            }
        }
        return undefined;
    }
}

let finder = new FirstRecurrence();
console.log('array1: ', finder.checkNumExists(array1));
console.log('array2: ', finder.checkNumExists(array2));
console.log('array3: ', finder.checkNumExists(array3));


