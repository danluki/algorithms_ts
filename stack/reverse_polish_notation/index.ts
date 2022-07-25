function evalRPN(tokens: string[]): number {
  let stack: number[] = [];
  for (let i = 0; i < tokens.length; i++) {
    if (tokens[i] === "+") {
      let a = stack.pop();
      let b = stack.pop();
      stack.push((Number(a) + Number(b)));
    } else if (tokens[i] === "*") {
      let a = stack.pop();
      let b = stack.pop();
      stack.push((Number(a) * Number(b)));
    } else if (tokens[i] === "/") {
      let a = stack.pop();
      let b = stack.pop();
      
      stack.push(Math.trunc(Number(b) / Number(a)));
    } else if (tokens[i] === "-") {
      let a = stack.pop() ?? 0;
      let b = stack.pop() ?? 0;
      stack.push((Number(b) - Number(a)));
    } else {
      stack.push(Number(tokens[i]));
    }
  }
  return Number(stack[0]);
}
/*0*/
console.log(evalRPN(["0", "3", "/"]));
/*9*/
console.log(evalRPN(["2", "1", "+", "3", "*"]));

/*6*/
console.log(evalRPN(["4", "13", "5", "/", "+"]));

/*22*/
console.log(
  evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"])
);
