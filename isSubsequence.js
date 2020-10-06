/**
 * Write a function called isSubsequence which takes two strings and checks whether the characters in the first string form a subsequence of the characters in the second string.
 * The characters in the first string should appear somewhere in the second string, without their order changing.
 */


 const isSubsequence = (str1,str2) => {
  let first = 0;
  let second = 0;
  while(second < str2.length){
    if(str1[first] === str2[second]) first++;
    if(first === str1.length) return true;
    second++;
  }
  return false;
 };

 console.log(isSubsequence("hello","hello world"));//true
 console.log(isSubsequence("sing","sting"));//true
 console.log(isSubsequence("abc","abracadabra"));//true
 console.log(isSubsequence("abc","acb"));//false
