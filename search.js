/**
 * Given a sorted array of integers, write a function called search that accepts a value and returns the index where the value is located in the array.
 * if value is not found return -1
 */
const search = (arr,val) =>{
  let min = 0;
  let max = arr.length-1;

  while(min<=max){
    let middle = Math.floor(min+
      max);
      let current = arr[middle];
      if(current > val){
        max = middle-1;
      }
      else if(current < val){
        min = middle+1;
      }
      else{
        return middle;
      }
  }
  return -1;
};

 console.log(search([1,2,3,4,5,6],4));//3
 console.log(search([1,2,3,4,5,6],6));//5
 console.log(search([1,2,3,4,5,6],11));//-1
 console.log(search([1,2,3,5,6],4));//-1
 console.log(search([],2));//-1
