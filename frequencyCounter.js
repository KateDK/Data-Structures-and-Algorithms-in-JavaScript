/* Write a function called 'same'. which accepts two arrays.
The function should return true if every value in the array has its corresponding value squared in the second array.
The frequency of values must be the same. */

function same(arr1, arr2) {
  if (arr1.length === arr2.length) {
    const squared = arr1.map(num => num * num).sort();
    arr2.sort();
    return squared.join("") === arr2.join("");
    }
    return false;
}

console.log(same([1, 2, 3], [4, 1, 9])); //true
console.log(same([2, 1, 3], [4, 1, 9])); //true
console.log(same([1, 2, 3], [1, 9])); //false
console.log(same([1, 2, 1], [4, 4, 1])); //false
