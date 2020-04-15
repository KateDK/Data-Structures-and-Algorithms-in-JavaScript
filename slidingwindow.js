/**
 Write a function called maxSubarraySum which takes an array of integers and number called n.
 the function should calculate the maximum sum of n consecutive elements in the array.
 */

// const maxSubarraySum = (arr, n)=>{
//   if(n > arr.length){
//     return null;
//   }
//   let max = 0;
//   for(let i = 0; i < arr.length; i++){
//     let tempMax = 0;
//     for(let j = i; j < i+n; j++){
//       tempMax+=arr[j];
//     }
//    max =  tempMax >= max ? tempMax : max;
//   }
//   return max;
// };


const maxSubarraySum = (arr, n)=>{
  if(n > arr.length){
    return null;
  }

  let tempMax=0;
  for(let i = 0; i < n; i++){
    tempMax+=arr[i];
  }
  let start = 1;
  let end = n;
  let max = tempMax;

  while(end < arr.length){
  let prevStart = arr[start-1];
  tempMax = max - prevStart + arr[end];

  max = tempMax > max ? tempMax : max;

  start++;
  end++;
  }
  return max;
};


console.log(maxSubarraySum([1,2,3,4,5,6],2));//11
console.log(maxSubarraySum([1,2,3,4,5,6],3));//15
console.log(maxSubarraySum([2,2,2,2],3));//6
console.log(maxSubarraySum([],5));//null
console.log(maxSubarraySum([1,1,1,1],6));//null
console.log(maxSubarraySum([1,2,5,2,8,1,5],4));//17
