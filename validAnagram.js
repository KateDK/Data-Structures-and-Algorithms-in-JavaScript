/**
 * Given two strings, write a function to determine if the second string is an anagram of the first.
 * An anagram is a word, phrase, or name formed by rearranging the letters of another.
 * example: "cinema" is an anagram of "iceman"
 */

// const validAnagram = (str1,str2)=>{
//   if(str1.length !== str2.length) return false;

//   const map = {};
//   for(let i = 0; i < str1.length; i++){
//     const current = str1[i];
//     map[current] ? map[current]++ : map[current]=1;
//   }

//   for(let i = 0; i < str2.length; i++){
//     const current = str2[i];
//     if(!map[current]){
//       return false;
//     }else{
//       map[current]--;
//     }
//   }

//   return true;
// };


const validAnagram = (str1,str2)=>{
  if(str1.length === str2.length){
    //create map of str1,str2
    const map1 ={};
    const map2 ={};
    //loop over str1 and populate elements in map;
    for(let i = 0; i < str1.length; i++){
      const current = str1[i];
      map1[current] ? map1[current]++ : map1[current]=1;
    }
    //loop over str2 and populate in map
    for(let i = 0; i < str2.length; i++){
      const current = str2[i];
      map2[current] ? map2[current]++ : map2[current]=1;
    }
    //loop over one map and compare to another
    for(key in map1){
      if(map1[key] !== map2[key])return false;
    }
    return true;
  }
  return false;
};

console.log(validAnagram("",""));//true
console.log(validAnagram("cat","mat"));//false
console.log(validAnagram("add","dad"));//true
console.log(validAnagram("abcdefg","gfedcb"));//false
console.log(validAnagram("abcdefg","gfedcba"));//true

