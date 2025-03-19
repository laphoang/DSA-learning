function mergeSort(arr) {
    // base case
    if (arr.length <= 1) {
        return arr;
    }
    
    // split
    let mid_index = Math.floor(arr.length / 2);
    let left = arr.slice(0, mid_index);
    let right = arr.slice(mid_index);

    // merge
    return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
    result_arr = [];
    let i = j = 0;
    while (i < left.length && j < right.length) {
        // compare and push to result array
        if (left[i] <= right[j]) {
            result_arr.push(left[i]);
            i++;
        }
        else {
            result_arr.push(right[j]);
            j++;
        }
    }
    // add the remaining element to the result array
    result_arr.push(...left.slice(i));
    result_arr.push(...right.slice(j));
    // return
    return result_arr;
}

test_arr = [5,4,3,2,1,0];
result_arr = mergeSort(test_arr);
console.log(result_arr);