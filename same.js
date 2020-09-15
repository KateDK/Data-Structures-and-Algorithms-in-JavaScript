/**
 * Write a function called same, which accepts two arrays.
 * The function should return true if every value in the first array has its corresponding value squared in the second array. The frequency of values must be the same.
 */

//  function same(arr1,arr2){
//   if(arr1.length !== arr2.length) return false;
//   for(let i = 0; i < arr1.length; i++){
//     const sqrIndex = arr2.indexOf(arr1[i]**2);
//     sqrIndex === -1 ? false : arr2.splice(sqrIndex,1);
//   }
//   return true;
//  }

function same(arr1,arr2){
  if(arr1.length !== arr2.length) return false;
  const map1 = {};
  const map2 = {};

  arr1.map(elm=>{
    map1[elm] ? map1[elm]++ : map1[elm]=1;
  });

  arr2.map(elm=>{
    map2[elm] ? map2[elm]++ : map2[elm]=1;
  });

  for(let key in map1){
    const sqr = key**2;
    if(!map2[sqr]){
      return false;
    };
    if(map2[sqr] !== map1[key]){
      return false;
    };
  };
  return true;
 }

 console.log(same([1],[1]));//true
 console.log(same([2],[4,4]));//false
 console.log(same([2,2],[4,4]));//true
