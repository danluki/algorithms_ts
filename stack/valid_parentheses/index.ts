function isValid(s: string): boolean {  
  let stack: string[] = [];
  for(let i = 0; i < s.length; i++){
    if(s[i] === '(' || s[i] === '[' || s[i] === '{'){
      stack.push(s[i]);
    }
    else if (s[i] === ')'){
      let last = stack.pop();
      if(last !== '(') 
        return false;  
    }
    else if(s[i] === ']') {
      let last = stack.pop(); 
      if(last !== '[') return false;
    }
    else if(s[i] === '}') {
      let last = stack.pop(); 
      if(last !== '{') return false;
    }
  }
  return stack.length === 0;
};
/*Must be true*/
console.log(isValid("()"));

/*Must be true*/
console.log(isValid("()[]{}"));

/*Must be false*/
console.log(isValid("(]"));

