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



// function same(arr1,arr2){
//   if(arr1.length !== arr2.length) return false;
//   const map1 = {};
//   const map2 = {};

//   arr1.map(elm=>{
//     map1[elm] ? map1[elm]++ : map1[elm]=1;
//   });

//   arr2.map(elm=>{
//     map2[elm] ? map2[elm]++ : map2[elm]=1;
//   });

//   for(let key in map1){
//     const sqr = key**2;
//     if(!map2[sqr]){
//       return false;
//     };
//     if(map2[sqr] !== map1[key]){
//       return false;
//     };
//   };
//   return true;
//  }

//  console.log(same([1],[1]));//true
//  console.log(same([2],[4,4]));//false
//  console.log(same([2,2],[4,4]));//true

const same = (arr1, arr2)=>{
  //check arrays equal in length;
  if(arr1.length === arr2.length){
    //create map obj
    const mapObj = {};
    //loop over arr1
    for(let i = 0; i < arr2.length; i++){
      const elm = arr1[i]*arr1[i];
      //square every element
      mapObj[elm] ? mapObj[elm]++ : mapObj[elm]=1;
      //store every squared element in map obj

    }
    //loop over arr2 from the end
    let i = arr2.length-1;
    while(i >=0){
      const current = arr2[i];
      if(mapObj[current] > 0){
        mapObj[current]--;
        arr2.pop();
      }else{
        return false;
      }
      //check if element in map obj
      //pop last element from arr1
      i--;
    }
    return true;
  }else{
    return false;
  }
};

console.log(same([1,2],[1,4]));//true
console.log(same([3,3,2,1],[9,4,9,1]));//true
console.log(same([3,3,2,1],[9,9,9,1]));//false
console.log(same([3,3,2,1],[9,9,4]));//false
console.log(same([3,3,2,1],[9,9,4,1,4]));//false
console.log(same([],[]));//true
