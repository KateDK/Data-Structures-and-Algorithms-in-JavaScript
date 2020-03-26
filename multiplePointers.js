/*
Write a function called sumZero wich accepts a sorted array of integers.
The function should find the first pair where the sum is 0.
Return an array that includes both values that sum to zero or undefined if a pair does not exsist.
*/

function sumZero(arr){
  let firstIndex = 0;
  let lastIndex = arr.length-1 ;
  while(lastIndex > firstIndex){
    const first = arr[firstIndex];
    const last = arr[lastIndex];
    if(first + last === 0){
      return [first,last];
    }
    if(first + last > 0){
      lastIndex--;
    }
    if(first + last < 0){
      firstIndex++;
    }
  }
  return undefined;
}

console.log(sumZero([-3,-2,-1,0,1,2,3]));//[-3,3];
console.log(sumZero([-3,-2,-1,0,1,2,3,4]));//[-3,3];
console.log(sumZero([-2,-1,0,0,3,4]));//[0,0];
console.log(sumZero([-2,0,1,3]));//undefined
console.log(sumZero([1,2,3]));//undefined
console.log(sumZero([]));//undefined


/**
  implement a function called countUniqueValues, which takes a sorted array and counts the unique values in the array.
  There can be negative numbers in the array, but it will always be sorted.
 */

// const countUniqueValues = (arr) => {
//   const map = {};
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     const current = arr[i];
//     if (!map[current]) {
//       map[current] = true;
//       count++;
//     }
//   }
//   return count;
// };

// const countUniqueValues = (arr) => {
//   if(arr.length === 0) return 0;
//   let first = 0;
//   let second = first+1;
//   let count = 1;
//   while(second < arr.length){
//     if(arr[first] === arr[second]){
//       second++;
//     }else{
//       count++;
//       first = second;
//       second++;
//     }
//   }
//   return count;
// };

const countUniqueValues = (arr) => {
  let count = arr.length > 1 ? 1 : 0;
  for (let i = 1; i < arr.length; i++) {
    const prev = arr[i - 1];
    const current = arr[i];
    if (current !== prev) {
      count++;
    }
  }
  return count;
};

 console.log(countUniqueValues([1,1,1,1,1,2])); //2
 console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13])); //7
 console.log(countUniqueValues([])); //0
 console.log(countUniqueValues([-2,-1,-1,0,1])); //4
