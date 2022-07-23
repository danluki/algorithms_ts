function checkInclusion(s1: string, s2: string): boolean {
  if(s1.length > s2.length) return false;
  let i = 0, j = s1.length, matches = 0, res = false;
  let s1Map = new Map();
  let s2Map = new Map();

  for(let i = 0; i < s1.length; i++) {
    s1Map.set(s1[i], s1Map.get(s1[i]) ? s1Map.get(s1[i]) + 1 : 1);
  }

  while(j < s2.length + 1){
    i = j - s1.length;
    while(i < j){
      s2Map.set(s2[i], s2Map.get(s2[i]) ? s2Map.get(s2[i]) + 1 : 1);
      i++;
    }
    for(let k = 0; k < s1.length; k++){
      if(s1Map.get(s1[k]) === s2Map.get(s1[k])){
        matches++;
      }
      else{
        matches = 0;
        s2Map.clear();
        break;
      }
    }
    if(matches === s1.length) {
      res = true;
      break;
    }
    i++; j++;
  }

  return res;
};
//false
console.log(checkInclusion("ab", "eidboaoo"));

//false
console.log(checkInclusion("hello", "ooolleoooleh"));

//true
console.log(checkInclusion("adc", "dcda"));

//true
console.log(checkInclusion("ab", "eidbaooo"));

//true
console.log(checkInclusion("a", "ab"));


