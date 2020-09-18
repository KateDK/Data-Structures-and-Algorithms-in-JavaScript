/**
 * Write a function called sumZero which accepts a sorted array of integers.
 * The function should find the first pair where the sum iz 0.
 * Return an array that includes both values that sum to zero or undefined if pair does not exist.
 */

 const sumZero = (arr)=>{
   if(arr.length <= 1) return undefined;
  let start = 0;
  let end = arr.length-1;
  while(end > start){
    let sum = arr[start] + arr[end];
    if(sum === 0){
      return([arr[start],arr[end]]);
    }else if(sum > 0){
      end--;
    }else{
      start++;
    }
  }
  return undefined;
 };

 console.log(sumZero([-3,-2,-1,0,1,2,3]));//[-3,3]
 console.log(sumZero([-2,0,1,3]));//undefind
 console.log(sumZero([1,2,3]));//undefined
 console.log(sumZero([0,0,1,2,3]));//[0,0]
 console.log(sumZero([-3,0,0,1,2,3]));//[-3,3]
 console.log(sumZero([-3,-2,-1,0,0,1]));//[-1,1]
 console.log(sumZero([]));//undefined
 console.log(sumZero([0]));//undefined
 console.log(sumZero([2]));//undefined
