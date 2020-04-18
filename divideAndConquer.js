/**
 Write a function called search that takes a sorted array and a value, and returns the index where the value is located in the array.
 If the value is not found in the array the function should return -1.
 */

const search = (arr, val) => {
let start = 0;
let end = arr.length;
while(start < end){
  let mid = Math.floor((end-start)/2)+start;
  if(arr[mid]>val){
    end=mid;
  }
  if(arr[mid]<val){
    start = mid+1;
  }
  if(arr[mid]=== val){
    if(arr[mid-1]===val){
      end = mid;
    }else{
      return mid;
    }
  }
}
return -1;
};

console.log(search([1,2,3,4,5,6],4));//3
console.log(search([1,2,3,4,5,6],6));//5
console.log(search([1,2,3,4,5,6],11));//-1
console.log(search([],11));//-1
console.log(search([1,3,5,6,8,9],7));//-1
console.log(search([1, 3, 5, 6, 8, 9], 7));//-1
console.log(search([1,2,3,4,5,6,6],6));//5
console.log(search([1,1,2,3,4,5,6,6],1));//0




