function dailyTemperatures(temperatures: number[]): number[] {
  let warm: number[] = [];
  let res: number[] = [];
  for (let i = 0; i < temperatures.length; i++) {
    res.push(0);
  }
  let i = 0,
    j = i;

  while (j < temperatures.length) {
    while (warm && temperatures[j] > temperatures[warm[warm.length - 1]]) {
      const prevDay = warm.pop() ?? 0;
      res[prevDay] = j - prevDay;
    }
    warm.push(j);
    j++;
  }
  return res;
}

/*[1,1,4,2,1,1,0,0]*/
console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));

/*[1,1,1,0]*/
console.log(dailyTemperatures([30, 40, 50, 60]));

/*[1,1,0]*/
console.log(dailyTemperatures([30, 60, 90]));
