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
 *  for(let i = 1; i <= n; i++){
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
 * We can use a timer to time how long our execution is taking, however, this is not ideal:
 * -Different machines will record different execution time.
 * -The same machine will record different time.
 * -Speed measurements might not be precise enough for fast algorithms.
 *
 * Instead of using time for measurement we will use the number of simple operations it takes to preform.
 * An operation is: addition, subtraction, assignments, multiplication, comparison etc.
 *
 * In funcA we have:
 * n additions (sum+=1)
 * n assignments (sum+=1)
 * n comparisons (i<=n)
 * n additions and assignments (i++)
 * 2 assignments (sum = 0, i = 1)
 *
 * in this case we should get big o of 5n+2 which can, in more complex cases be overwhelming to calculate.
 * This is why we only care about the general trend.
 *
 * Basically, Big O allows us to formally talk about how the runtime of an algorithm grows as the input grows.
 *
 * Our best case scenario is constant time - O(1). We know exactly how many operations it will take to execute. It will always remain the same.
 *
 * When the number of operations is determined by the input we call it O(n), even if we have several operations that will repeat n times, we will not specify O(2n) but simplify to just O(n).
 *
 *
 * Things can get even worse:
 *
 * function funcC(n){
 *  for(let i = 0; i < n; i++){
 *    for(let j = 0; j > n; j++){
 *      console.log(i,j);
 *    }
 *  }
 * }
 *
 * funcC is using a nested loop. Which means we have O(n*n), and simplified to O(n^2) - (O of n squared).
 * The O(N^2) is significantly worse than O(n) because the growth of n^2 operations grows substantially quicker with larger values on n.
 *
 *
 * Some general guidelines:
 * -Arithmetic operations are constant O(1)
 * -Variable assignment is also constant
 * -Accessing elements in an array or object is constant
 * -In a loop, the complexity is the length of the loop times the complexity of what happens inside of the loop (sometimes it can be nested loops).
 * -We usually care about the worst possible case.
 *
 *
 * Space complexity:
 * ----------------
 *
 * Determine how much memory is taken as the size of the input grows.
 * We only care about the additional space our algorithm will require and not the space required for the inputs.
 *
 * Some general rules:
 * - Most primitives (booleans, numbers, undefined, null) are **constant time**.
 * - Strings are **O(n)** space - n represents the length of the string.
 * - Reference types (objects and arrays) are generally O(n) - n represents the number of keys or length of array.
 *
 * Example:
 * function sum(arr){
 *  let total = 0;
 *  for(let i = 0; i < arr.length; i++){
 *    total+=arr[i];
 *  }
 *  return total;
 * }
 *
 * In the function above we use additional space for "total" and "i" - sins they only refer to primitive data types (both are numbers) the space complexity here is O(1).
 */
