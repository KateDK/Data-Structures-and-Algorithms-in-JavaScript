/**
 * Big O
 * -----
 * Big O is a system that allows us to evaluate fow efficient our code is (in terms of run time or space).
 *
 * Why is big O important:
 * -----------------------
 * - Having a unified language on performance helps us understand and communicate to others about our code.
 * - Big O can be helpful when thinking about trade-offs about our code.
 * - Can help us identify pain points in our code.
 * - Big O can come up in interviews
 *
 *
 * Timing our code:
 * ----------------
 * Given the next two functions that arrive at the same result, how can we determine which one is better?
 *
 * function funcA(n){
 *  let sum = 0;
 *  for(let i = 0; i <= n; i++){
 *    sum+=i;
 *  }
 * return sum;
 * }
 *
 * function funcB(n){
 *  return n*(n+1)/2;
 * }
 *
 * When we try to determine which one is better we mostly talk about which one is ~faster~ and which one is ~less memory-intensive~.
 * While readability is important, it often is pushed aside when Big O comes into play.
 *
 *
 */
