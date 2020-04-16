/**
 Write a function called search that takes a sorted array and a value, and returns the index where the value is located in the array.
 If the value is not found in the array the function should return -1.
 */

const search = (arr, val) => {
  let index = Math.floor(arr.length / 2);
  let visited = {};
  while (index >= 0 && index < arr.length) {
    const current = arr[index];

    if (visited[index]) {
      return -1;
    } else {
      visited[index] = true;

      if (current === val) {
        return index;
      }
      if (current > val) {
        index--;
      } else {
        index++;
      }
    }
  }
  return -1;
};

console.log(search([1,2,3,4,5,6],4));//3
console.log(search([1,2,3,4,5,6],6));//5
console.log(search([1,2,3,4,5,6],11));//-1
console.log(search([],11));//-1
console.log(search([1,3,5,6,8,9],7));//-1
console.log(search([1, 3, 5, 6, 8, 9], 7));//-1
console.log(search([1,2,3,4,5,6,6],6));//5
console.log(search([1,1,2,3,4,5,6,6],1));//0




