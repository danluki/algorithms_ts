

function topKFrequent(nums: number[], k: number): number[] {
  const hm = new Map() // key - number, value - frequency

  nums.forEach((num, i, arr) => {
    if(hm.has(num)){
      hm.set(num, hm.get(num) + 1);
    }
    else{
      hm.set(num, 0);
    }
  })
  
  let res : number[][] = Array.from(hm.entries());
  res.sort((a, b) => {
    if(a[1] === b[1])
      return 0;
    else
      return a[1] > b[1] ? -1 : 1;
   });
  let total: number[] = [];
  for(let i = 0; i < k; i++){
    total.push(res[i][0])
  }


  return total;
};


/*[1,2]*/
console.log(topKFrequent([1,1,1,2,2,3], 2))
console.log('===============================')
/*[1]*/
console.log(topKFrequent([1], 1))


