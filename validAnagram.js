/**
 * Given two strings, write a function to determine if the second string is an anagram of the first.
 * An anagram is a word, phrase, or name formed by rearranging the letters of another.
 * example: "cinema" is an anagram of "iceman"
 */

const validAnagram = (str1,str2)=>{
  if(str1.length !== str2.length) return false;

  const map1 = {};
  for(let i = 0; i < str1.length; i++){
    const current = str1[i];
    map1[current] ? map1[current]++ : map1[current]=1;
  }

  const map2 = {};
  for(let i = 0; i < str2.length; i++){
    const current = str2[i];
    map2[current] ? map2[current]++ : map2[current]=1;
  }

  for(let key in map1){
    if(!map2[key] || map1[key] !== map2[key]) return false;
  }

  return true;
};

console.log(validAnagram("",""));//true
console.log(validAnagram("cat","mat"));//false
console.log(validAnagram("add","dad"));//true
console.log(validAnagram("abcdefg","gfedcb"));//false
console.log(validAnagram("abcdefg","gfedcba"));//true

