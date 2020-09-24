/**
 * Write a function called sameFrequency.
 * Given two positive integers, find out if the two numbers have the same frequency of digits.
 * Time complexity should be O(n)
 */

const sameFrequency = (num1,num2) =>{
  const n1 = ""+num1;
  const n2 = ""+num2;
  if(n1.length !== n2.length)return false;
  const map = {};
  for(let i = 0; i < n1.length; i++){
    const current = n1[i];
    map[current] ? map[current]++ : map[current]=1;
  }
  for(let i = 0; i < n2.length; i++){
    const current = n2[i];
    if(map[current]){
      map[current]--;
    }else{
      return false;
    }
  }
  return true;
};

 console.log(sameFrequency(182,281));//true
 console.log(sameFrequency(34,14));//false
 console.log(sameFrequency(3589578,5879385));//true
 console.log(sameFrequency(22,222));//false
