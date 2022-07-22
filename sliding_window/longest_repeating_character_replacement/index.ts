function characterReplacement(s: string, k: number): number {
  let i = 0,
    j = 0,
    res = 0;
  let counts = new Map();

  while (j < s.length) {
    let length = j - i + 1;
    counts.set(s[j], counts.get(s[j]) ? counts.get(s[j]) + 1 : 1);
    let mostFreq = Math.max.apply(null, Array.from(counts.values()));

    if (length - mostFreq <= k) {
      res = length;
      j++;
    } else {
      counts.set(s[i], counts.get(s[i]) - 1);
      i++;


      j++;
    }
  }
  return res;
}
//4
console.log(characterReplacement("ABAB", 2));
//4
console.log(characterReplacement("AABABBA", 1));
