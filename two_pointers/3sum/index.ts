// function threeSum(nums: number[]): number[][] {
//   //let i = 0, j = 1, k = 2;
//   let res: number[][] = [];
//   let isFound = false;
//   let triples = new Set();
//   for (let i = 0; i < nums.length - 2; i++) {
//     let temp: number[] = [];
//     for (let j = i + 1; j < nums.length - 1; j++) {
//       for (let k = j + 1; k < nums.length; k++) {
//         if (nums[i] + nums[j] + nums[k] === 0) {
//           temp.push(nums[i], nums[j], nums[k]);
//           temp.sort((a, b) => a >= b ? 1 : -1);
//           let triplet = temp.toLocaleString();
//           if(!triples.has(triplet)){
//             res.push(temp);
//             triples.add(triplet);
//           }
//           temp = [];
//         }
//       }
//     }
//   }
//   return res;
// }
function threeSum(nums: number[]): number[][] {
  nums.sort((a, b) => a - b);
  let res: number[][] = [];
  let triplets = new Set();
  for (let i = 0; i < nums.length - 2; i++) {
    let j = i + 1,
      k = nums.length - 1;
    let sum = 0;
    do {
      sum = nums[i] + nums[j] + nums[k];

      if (sum > 0) {
        k--;
      } else if (sum < 0) {
        j++;
      } else if (i !== j && j !== k) {
        let triplet: number[] = [];
        triplet.push(nums[i], nums[j], nums[k]);
        let tripletStr = triplet
          .sort((a, b) => {
            return a - b;
          })
          .toString();
        if (!triplets.has(tripletStr)) {
          res.push(triplet);
          triplets.add(tripletStr);
        }
        k--;
        j++;
      }
    } while (k > j);
  }
  return res;
}
//[[-2,0,2],[-2,1,1]]
console.log(threeSum([-2, 0, 1, 1, 2]));

/*[[-1,-1,2],[-1,0,1]]*/
console.log(threeSum([-1, 0, 1, 2, -1, -4]));

/*[]*/
console.log(threeSum([0, 1, 1]));

/*[0,0,0]*/
console.log(threeSum([0, 0, 0]));
