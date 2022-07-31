function minEatingSpeed(piles: number[], h: number): number {
  //cus piles can be unsorted, let's sort them to use bs
  piles.sort((a, b) => a - b);

  let left = 0,
    right = Math.max(...piles),
    minK = Number.MAX_VALUE;

  while (left <= right) {
    let middle = (left + right) >> 1;

    let totalH = 0;
    for (let i = 0; i < piles.length; i++) {
      let needH = Math.ceil(piles[i] / middle);
      totalH += needH;
    }

    if (totalH > h) {
      left = middle + 1;
    } else if (totalH <= h) {
      if (middle < minK) minK = middle;
      right = middle - 1;
    }
  }
  return minK;
}
//4
console.log(minEatingSpeed([3, 6, 7, 11], 8));

//30
console.log(minEatingSpeed([30, 11, 23, 4, 20], 5));

//23
console.log(minEatingSpeed([30, 11, 23, 4, 20], 6));
