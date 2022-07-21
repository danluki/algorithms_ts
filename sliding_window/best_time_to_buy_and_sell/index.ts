function maxProfit(prices: number[]): number {
  let i = 0,
    j = i + 1,
    maxProfit = 0;

  while (j < prices.length) {
    if (prices[i] > prices[j]) {
      i = j;
      j++;
    } else {
      let currentProfit = prices[j] - prices[i];
      if (currentProfit > maxProfit) maxProfit = currentProfit;
      j++;
    }
  }

  return maxProfit;
}

//9
console.log(maxProfit([1, 2, 4, 2, 5, 7, 2, 4, 9, 0, 9]));

//3
console.log(maxProfit([1, 4, 2]));

//5
console.log(maxProfit([7, 1, 5, 3, 6, 4]));

//0
console.log(maxProfit([7, 6, 4, 3, 1]));
