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

  let max = tempMax;

  for(let i = n; i < arr.length; i++){
    tempMax = max - arr[i-n]+arr[i];
    max = Math.max(tempMax,max);
  }
  return max;
};


console.log(maxSubarraySum([1,2,3,4,5,6],2));//11
console.log(maxSubarraySum([1,2,3,4,5,6],3));//15
console.log(maxSubarraySum([2,2,2,2],3));//6
console.log(maxSubarraySum([],5));//null
console.log(maxSubarraySum([1,1,1,1],6));//null
console.log(maxSubarraySum([1,2,5,2,8,1,5],4));//17


/*
Write a function called minSubArray that takes an array of positive integers and a positive integer.
The function should return the minimal length of contiguous subarray of which the sum is greater or equal to the integer passed to the function. The function should return 0 if none exsist.
*/

const minSubArray = (arr, num) => {};

console.log(minSubArray([2,3,1,2,4,3],7));//2
console.log(minSubArray([2,1,6,5,4],9));//2
console.log(minSubArray([3,1,7,11,2,9,8,21,62,33,19],));//1
console.log(minSubArray([1,4,16,22,5,7,8,9,10],39));//3
console.log(minSubArray([1,4,16,22,5,7,8,9,10],55));//5
console.log(minSubArray([4,3,3,8,1,2,3],11));//0
console.log(minSubArray([1,4,16,22,5,7,8,9,10],95));//0


/*
Write a function called findLongestSubstring that takes a string and returns the length of the longest substring with all distinct characters
*/

const findLongestSubstring = (str) => {
  let map = {};
  let length = 0;
  let start = 0;
  let end = 0;
  let tempLength = length;

  while(end < str.length){
    let current = str[end];
    if(map[current]){
      map[str[start]] = false;
      start++;
      length = Math.max(length, tempLength);
      tempLength = end - start;
    }else{
      end++;
      tempLength++;
      map[current] = current;
      length = Math.max(length, tempLength);
    }
  }

  return length;
};

console.log(findLongestSubstring(""));//0
console.log(findLongestSubstring("rithmschool"));//7
console.log(findLongestSubstring("thisisawesome"));//6
console.log(findLongestSubstring("thecatinthehat"));//7
console.log(findLongestSubstring("bbbbbbb"));//1
console.log(findLongestSubstring("longestsubstring"));//8
console.log(findLongestSubstring("thisishowwedoit"));//6
