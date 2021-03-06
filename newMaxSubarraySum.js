/**
 * Given an array of integers and a number, write a function called maxSubarraySum
 * The function should calculate the maximum sum of n consecutive elements in the array.

 */

const maxSubarraySum = (arr,n)=>{
  if (arr.length < n)  return null;
  let max = 0;
  for(let i = 0; i < n; i++){
    max += arr[i];
  }
  let sum = max;
  for(let i = n; i < arr.length; i++){
    sum+=arr[i]-arr[i-n];
    max = Math.max(max,sum);
  }
return max;
};


console.log(maxSubarraySum([100,200,300,400],2));//700
console.log(maxSubarraySum([1,4,2,10,23,3,1,0,20],4));//37
console.log(maxSubarraySum([3,-2,7,-4,-1,4,-2,1],2));//5
console.log(maxSubarraySum([2,3],3));//null
console.log(maxSubarraySum([1,2,5,2,8,1,5],2));//10
console.log(maxSubarraySum([1,2,5,2,8,1,5],4));//17
console.log(maxSubarraySum([4,2,1,6],1));//6
console.log(maxSubarraySum([4,2,1,6,2],4));//13
console.log(maxSubarraySum([],4));//null
