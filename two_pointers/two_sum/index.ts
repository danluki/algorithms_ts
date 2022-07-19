function twoSum(numbers: number[], target: number): number[] {
  let res: number[] = [];
  let j = numbers.length - 1;
  let i = 0;
  let sum = 0;
  do{
    sum = numbers[i] + numbers[j];

    if(sum > target) 
      j--;
    else
      i++;
  }while(sum !== target); 

  res.push(i);
  res.push(j + 1);
  return res;
}

//[1,2]
console.log(twoSum([2, 7, 11, 15], 9));

//[1,3]
console.log(twoSum([2, 3, 4], 6));

//[1,2]
console.log(twoSum([-1, 0], -1));
