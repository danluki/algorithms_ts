/*
  В заадче находим, встречаются ли в массиве повторяющиеся значения
*/
/*First solution O(n^2)*/
function containsDuplicate(nums: number[]): boolean {
  for(let i = 0; i < nums.length - 1; i++)
    for(let j = i + 1; j < nums.length; j++)
      if(nums[i] === nums[j]) return true;

  return false;
}

/*First solution O(nlogn) but */
function containsDuplicate2(nums: number[]): boolean {
  let sortedArr = nums.sort();

  for(let i = 0; i < sortedArr.length - 1; i++){
    if(sortedArr[i+1] === nums[i]) return true;
  }
  return false;
}

/*First solution O(nlogn) but */
function containsDuplicate3(nums: number[]): boolean {
  let hashSet = new Map();

  for(let i = 0; i < nums.length ; i++){
    if(hashSet.has(nums[i])) 
      return true;
    else
      hashSet.set(i, nums[i]);
  }
  return false;
}


/*Must be true*/
console.log(containsDuplicate([1, 2, 3, 1]))

/*Must be false*/
console.log(containsDuplicate([1,2,3,4]))

/*Must be true*/
console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]))

console.log('Second solution')

/*Must be true*/
console.log(containsDuplicate2([1, 2, 3, 1]))

/*Must be false*/
console.log(containsDuplicate2([1,2,3,4]))

/*Must be true*/
console.log(containsDuplicate2([1,1,1,3,3,4,3,2,4,2]))

console.log('Third solution')

/*Must be true*/
console.log(containsDuplicate2([1, 2, 3, 1]))

/*Must be false*/
console.log(containsDuplicate2([1,2,3,4]))

/*Must be true*/
console.log(containsDuplicate2([1,1,1,3,3,4,3,2,4,2]))