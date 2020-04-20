/* Write a function called 'same'. which accepts two arrays.
The function should return true if every value in the array has its corresponding value squared in the second array.
The frequency of values must be the same. */

function same(arr1, arr2) {
  if (arr1.length === arr2.length) {
    const obj1={};
    const obj2={};
    for(let i = 0; i < arr1.length; i++){
      const squared = arr1[i]*arr1[i];
      obj1[squared] ? obj1[squared]++ : obj1[squared] = 1;


    }
    for(let i = 0; i < arr2.length; i++){
      const compareTo = arr2[i];
      obj2[compareTo] ? obj2[compareTo]++ :obj2[compareTo] = 1;
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


/*
Givent two strings, write a function to determine if the second string is an anagram of the first string. An anagram is a word, phrase or name formed by rearranginf rhe letters of another, such as cinema, formed from iceman.
*/

const isAnagram = (str1,str2)=>{
  if(str1.length === str2.length){
    const map = {};
    for(let i = 0; i < str2.length; i++){
      const currentItem = str1[i];
      map[currentItem] ? map[currentItem]++ : map[currentItem] = 1;
    }
    for(let i = 0; i < str2.length; i++){
      const currentItem = str2[i];
      if(map[currentItem]){
        map[currentItem]--;
      } else{
        return false;
      }
      if(map[currentItem] < 0 ){return false;};
    }

    return true;
  }
  return false;
};

console.log(isAnagram('aaz','zza')); //false
console.log(isAnagram('rat','car')); //false
console.log(isAnagram('awesome','awesom')); //false
console.log(isAnagram('','')); //true
console.log(isAnagram('anagram','nagaram')); //true
console.log(isAnagram('qwerty','qeywrt')); //true
console.log(isAnagram('texttwisttime','timetwisttext')); //true

/**
 Write a function called sameFrequency that takes two positive integers. find if the two numbers have the same frequency of digits.
 Time complexity should be O(n);
 */

const sameFrequency = (n1,n2)=>{

};

console.log(sameFrequency(182,281));//true
console.log(sameFrequency(34,14));//false
console.log(sameFrequency(3589578,5879385));//true
console.log(sameFrequency(22,222));//false
console.log(sameFrequency(3589577,5879385));//false
