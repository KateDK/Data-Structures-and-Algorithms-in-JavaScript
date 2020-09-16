/**
 * Given two strings, write a function to determine if the second string is an anagram of the first.
 * An anagram is a word, phrase, or name formed by rearranging the letters of another.
 * example: "cinema" is an anagram of "iceman"
 */

const validAnagram = (str1,str2)=>{
  if(str1.length !== str2.length) return false;

  const map = {};
  for(let i = 0; i < str1.length; i++){
    const current = str1[i];
    map[current] ? map[current]++ : map[current]=1;
  }

  for(let i = 0; i < str2.length; i++){
    const current = str2[i];
    if(!map[current]){
      return false;
    }else{
      map[current]--;
    }
  }

  return true;
};

console.log(validAnagram("",""));//true
console.log(validAnagram("cat","mat"));//false
console.log(validAnagram("add","dad"));//true
console.log(validAnagram("abcdefg","gfedcb"));//false
console.log(validAnagram("abcdefg","gfedcba"));//true

