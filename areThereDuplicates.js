/**
 * Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in. You can solve this using the frequency counter pattern OR the multiple pointers pattern.
 */

const areThereDuplicates = (...arguments) =>{
  const map = {};
  for(let i = 0; i < arguments.length; i++){
    const current = arguments[i];
    if(map[current]){
      return true;
    }else{
      map[current]=1;
    }
  }
  return false;
};

 console.log(areThereDuplicates(1,2,3));//false
 console.log(areThereDuplicates(1,2,2));//true
 console.log(areThereDuplicates("a","b","c","a"));//true
