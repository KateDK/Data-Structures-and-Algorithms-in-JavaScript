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
