/**
 * write a function called maxSubArraySum which takes an array of integers and a number called n.
 * The function should calculate the maximum sum of n consecutive elements in the array.
 */

const maxSubArraySum = (arr,n) => {
  if(arr.length === 0) return null;
  let maxSum = 0;
  for(let i = 0; i < n; i++){
    maxSum+=arr[i];
  }
  let tempSum = maxSum;
  for(let i = n; i < arr.length; i++){
    tempSum = tempSum-arr[i-n]+arr[i];
    maxSum = Math.max(maxSum,tempSum);
  }
  return maxSum;
};

 console.log(maxSubArraySum([1,2,5,2,8,1,5],2));//10
 console.log(maxSubArraySum([1,2,5,2,8,1,5],4));//17
 console.log(maxSubArraySum([4,2,1,6],1));//6
 console.log(maxSubArraySum([4,2,1,6,2],4));//13
 console.log(maxSubArraySum([],4));//null
