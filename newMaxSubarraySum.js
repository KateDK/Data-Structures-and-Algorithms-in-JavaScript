/**
 * Given an array of integers and a number, write a function called maxSubarraySum
 * The function should calculate the maximum sum of n consecutive elements in the array.

 */

const maxSubarraySum = (arr,n)=>{
  if (arr.length < n)  return null;
  let sum = arr[0];
  let max;
  for(let i = 1; i < n; i++){
    sum += arr[i];
  }
  max = sum;
  for(let i = n; i < arr.length; i++){
    let newSum = sum+arr[i]-arr[i-n];
    max = Math.max(sum,newSum);
  }
return max;
};


console.log(maxSubarraySum([100,200,300,400],2));//700
console.log(maxSubarraySum([1,4,2,10,23,3,1,0,20],4));//39
console.log(maxSubarraySum([3,-2,7,-4,-1,4,-2,1],2));//5
console.log(maxSubarraySum([2,3],3));//null
