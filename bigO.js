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
 */
