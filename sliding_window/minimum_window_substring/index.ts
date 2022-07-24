function minWindow(s: string, t: string): string {
  let i = 0, j = i, min = s.length;
  let has = 0, need = t.length;
  let sChars = new Map();
  let tChars = new Map();
  let res: string = "";
  for(let k = 0; k < t.length; k++){
    sChars.set(t[k], sChars.get(t[k]) ? sChars.get(t[k]) + 1 : 1);
  }

  while(j < s.length){
    tChars.set(s[j], tChars.get(s[j]) ? tChars.get(s[j]) + 1 : 1);    
    if(sChars.has(s[j])){
      if(tChars.get(s[j]) <= sChars.get(s[j])){
        has += 1;

        while(has === need){
          let size = j - i + 1;

          if(size <= min){
            min = size;
            res = s.substring(i, j + 1);
          }
          tChars.set(s[i], tChars.get(s[i]) - 1); 
          
          if(tChars.has(s[i]) && tChars.get(s[i]) < sChars.get(s[i])){
            has--;
          }
          i++;
        }
      }
    }
    j++;
  }

  return res;
};
//aa
console.log(minWindow("aa", "aa"));

//BANC
console.log(minWindow("ADOBECODEBANC", "ABC"));

//a
console.log(minWindow("a", "a"));

//""
console.log(minWindow("a", "aa"));