function carFleet(target: number, position: number[], speed: number[]): number {
  const length = speed.length;
  let j = length - 1;
  let stack: number[] = [];
  let mix: {speed: number, position: number}[] = [];

  for(let i = 0; i < length; i++){
    mix.push({speed: speed[i], position: position[i]});
  }
  mix.sort((a, b) => a.position - b.position);

  while (j >= 0) {
    stack.push((target - mix[j].position) / mix[j].speed);
    if (
      stack.length >= 2 &&
      stack[stack.length - 1] <= stack[stack.length - 2]
    ) {
      stack.pop();
    }
    j--;
  }
  return stack.length;
}

/*1*/
console.log(carFleet(10, [0, 4, 2], [2, 1, 3]));

/*3*/
console.log(carFleet(12, [10, 8, 0, 5, 3], [2, 4, 1, 1, 3]));

/*1*/
console.log(carFleet(10, [3], [3]));

/*1*/
console.log(carFleet(100, [0, 2, 4], [4, 2, 1]));
