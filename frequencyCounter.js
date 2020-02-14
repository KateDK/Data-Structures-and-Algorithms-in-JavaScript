/* Write a function called 'same'. which accepts two arrays.
The function should return true if every value in the array has its corresponding value squared in the second array.
The frequency of values must be the same. */

function same(arr1, arr2) {
  if (arr1.length === arr2.length) {
    const obj1={};
    const obj2={};
    for(let i = 0; i < arr1.length; i++){
      const squared = arr1[i]*arr1[i];
      const compareTo = arr2[i];
      if(obj1[squared]){
        obj1[squared]++;
      }else{
        obj1[squared] = 1;
      }
      if(obj2[compareTo]){
        obj2[compareTo]++;
      }else{
        obj2[compareTo] = 1;

      }
    }
    const compare = Object.keys(obj1);
    for(let i = 0; i < compare.length; i++){
      const currentItem = compare[i];
      if(obj2[currentItem] !== obj1[currentItem]){
        return false;
      }
    }
    return true;
    }
    return false;
}

console.log(same([1, 2, 3], [4, 1, 9])); //true
console.log(same([2, 1, 3], [4, 1, 9])); //true
console.log(same([1, 2, 3], [1, 9])); //false
console.log(same([1, 2, 1], [4, 4, 1])); //false
