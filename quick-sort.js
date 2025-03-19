function quickSort(arr) {
    // base case
    if (arr.length <= 1) {
        return arr;
    }
    // choose a pivot from arr
    // choose the last element
    let pivot = arr[arr.length - 1];
    // left array
    let left = [];
    // right array
    let right = [];
    // conquer: partition the array: rearrange the array around pivot
    // iterate through the array
    for (let i = 0; i < arr.length - 1; i++) {    
        // if arr[i] < pivot, add to left array
        if (arr[i] < pivot) {
            left.push(arr[i]);
        }
        else {
            right.push(arr[i]);
        }
    // return array with pivot and recursive call for left array and right array
}
    return [...quickSort(left), pivot, ...quickSort(right)];
}

test_arr = [5,1,7,2,1,2,6,13,82,-4];
result = quickSort(test_arr);
console.log(result);