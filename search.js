/**
 * Given a sorted array of integers, write a function called search that accepts a value and returns the index where the value is located in the array.
 * if value is not found return -1
 */
const search = (arr,val) =>{
  let mid = Math.floor(arr.length/2);
  const visited = {};
  while(mid > 0 && mid < arr.length){
    const current = arr[mid];
    if(current === val){
      return mid;
    }else if(current > val){
      if(visited[mid])return -1;
      visited[mid] = true;
      mid--;
    }else{
      if(visited[mid])return -1;
      visited[mid] = true;
      mid++;
    }
  }
  return -1;
};

 console.log(search([1,2,3,4,5,6],4));//3
 console.log(search([1,2,3,4,5,6],6));//5
 console.log(search([1,2,3,4,5,6],11));//-1
 console.log(search([1,2,3,5,6],4));//-1
 console.log(search([],2));//-1
