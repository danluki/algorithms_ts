// function maxSlidingWindow(nums: number[], k: number): number[] {
//   let max = -10000;
//   const res: number[] = [];
//   for (let i = 0; i < nums.length - k + 1; i++) {
//     for (let j = i; j < i + k; j++) {
//       if (nums[j] > max) {
//         max = nums[j];
//       }
//     }
//     res.push(max);
//     max = -10000;
//   }
//   return res;
// }

function maxSlidingWindow(nums: number[], k: number): number[] {
  let i = 0, j = 0;
  const res: number[] = [];
  const deque: number[] = [];
  while(j < nums.length){

    while(nums[deque[deque.length - 1]] < nums[j]){
      deque.pop();
    }
    deque.push(j);

    if(i > deque[0]){
      deque.shift();
    }
    
    if(j + 1 >= k){
      res.push(nums[deque[0]]);  
      i++;
    }
    j++;
  }
  return res;
}

//[3,3,5,5,6,7]
console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3));

//[8, 7, 9]
console.log(maxSlidingWindow([8, 7, 6, 9], 2));

//[1, -1]
console.log(maxSlidingWindow([1, -1], 1));

//[1]
console.log(maxSlidingWindow([1], 1));
