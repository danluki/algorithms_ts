//Memoization + recursion
let dp = new Array(46).fill(0);
function climbStairs(n: number): number {
  if(n < 0)
    return 0;
  if(n === 0)
    return 1;
  
  if(dp[n] !== 0)
    return dp[n];
  
  return dp[n] = climbStairs(n - 1) + climbStairs(n - 2);
};

function climbStairs(n: number): number {
  let one = 1, two = 1;
  
  for(let i = 0; i < n - 1; i++){
    let temp = one;
    one = one + two;
    two = one;
    two = temp;
  }
  return one;
}