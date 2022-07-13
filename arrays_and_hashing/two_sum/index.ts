
/*n^2 solution */
function twoSum(nums: number[], target: number): number[] {
  const res: number[] = [];
  for (let i = 0; i < nums.length - 1; i++){
    for (let j = i + 1; j < nums.length; j++){
      if(nums[i] + nums[j] === target){
        res.push(i);
        res.push(j);
      } 
    }
  }

  return res;
};

function twoSum2(nums: number[], target: number): number[] {
  const hashMap = new Map();

  for(let i = 0; i < nums.length; i++){
    let diff = target - nums[i];

    if(hashMap.has(diff)){
      return [hashMap.get(diff), i];
    }
    hashMap.set(nums[i], i);
  
  }

  return [];
};


/*Must be 0 1*/
console.log(twoSum([2,7,11,15], 9))

/*Must be 1 2*/
console.log(twoSum([3, 2, 4], 6))

/*Must be 0 1*/
console.log(twoSum([3, 3], 6))


/*Must be 0 1*/
console.log(twoSum2([2,7,11,15], 9))

/*Must be 1 2*/
console.log(twoSum2([3, 2, 4], 6))

/*Must be 0 1*/
console.log(twoSum2([3, 3], 6))

