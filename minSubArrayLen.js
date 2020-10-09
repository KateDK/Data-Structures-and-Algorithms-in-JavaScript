/**
 * Write a function called minSubArrayLen which takes an array of positive integers and a positive integer.
 * this function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function.
 *
 * if there isn't one, return 0.
 */

 const minSubArrayLen = (arr, num) => {

 };


console.log(minSubArrayLen([2,3,1,2,4,3],7));//2 =>[4,3] is the smallest sub array
console.log(minSubArrayLen([2,1,6,5,4],9));//2
console.log(minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19],52));//1
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],39));//3
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],55));//5
console.log(minSubArrayLen([4,3,3,8,1,2,3],11));//2
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,19],95));//0
