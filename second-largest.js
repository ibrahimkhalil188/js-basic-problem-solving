function getSecondLargest(array) {
    let largest = array[0];
    let secondLargest = array[0];
    for (const element of array) {
        if (element > largest) {
            secondLargest = largest;
            largest = element;
        } else if (element > secondLargest) {
            secondLargest = element;
        }

    }
    return secondLargest;
}

const array = [2, 6, 8, 2, 56, 8, 65, 3, 23, 54, 76, 73];
const number = getSecondLargest(array);
console.log(number)