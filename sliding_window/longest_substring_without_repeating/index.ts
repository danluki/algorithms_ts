function lengthOfLongestSubstring(s: string): number {
  if (s.length === 0) return 0;

  let i = 0,
    j = i + 1,
    longest = 1,
    current = 1;
  let subs = new Set(s[i]);
  while (j < s.length) {
    if (subs.has(s[j])) {
      subs.delete(s[i]);
      i++;
    } else {
      subs.add(s[j]);
      current = subs.size;
      j++;
    }
    if (current > longest) {
      longest = current;
    }
  }
  return longest;
}

//3
console.log(lengthOfLongestSubstring("dvdf"));

//3
console.log(lengthOfLongestSubstring("abcabcbb"));

//1
console.log(lengthOfLongestSubstring("bbbbb"));

//3
console.log(lengthOfLongestSubstring("pwwkew"));
