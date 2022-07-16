// function productExceptSelf(nums: number[]): number[] {
//   let res: number[] = [];
//   for(let i = 0; i < nums.length; i++){
//     let temp = nums.slice();
//     temp.splice(i, 1);
//     console.log(nums);
//     let prRes = temp.reduce(function(product, element){
//       return product * element;
//     }, 1);
//     res.push(prRes);
//   }

//   return res;
// };

function productExceptSelf(nums: number[]): number[] {
  let res: number[] = [1];
  let pre = 1;

  for(let i = 0; i < nums.length - 1; i++){
    pre *= nums[i]
    res.push(pre);
  }

  let post =  1;
  for(let i = nums.length - 1; i >= 0; i--){
    res[i] *= post;
    post *= nums[i];
  }
  return res;
};


/*[24,12,8,6]*/
console.log(productExceptSelf([1,2,3,4]))

/*[0,0,9,0,0]*/
console.log(productExceptSelf([-1,1,0,-3,3]))