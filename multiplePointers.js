/*
Write a function called sumZero wich accepts a sorted array of integers.
The function should find the first pair where the sum is 0.
Return an array that includes both values that sum to zero or undefined if a pair does not exsist.
*/

function sumZero(arr){
  let first = 0;
  let last = arr.length-1 ;
  while(last > first){
    if(arr[first] + arr[last] === 0){
      return [arr[first],arr[last]];
    }
    if(arr[first] + arr[last] > 0){
      last--;
    }
    if(arr[first] + arr[last] < 0){
      first++;
    }
  }
  return undefined;
}

console.log(sumZero([-3,-2,-1,0,1,2,3]));//[-3,3];
console.log(sumZero([-2,0,1,3]));//undefined
console.log(sumZero([1,2,3]));//undefined
console.log(sumZero([]));//undefined
