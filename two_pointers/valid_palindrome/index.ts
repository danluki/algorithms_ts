function isPalindrome(s: string): boolean {
  let regExp = /[a-zA-Z0-9]/g;
  let res = Array.from(s.matchAll(regExp)).join("").toLowerCase();

  let j = res.length - 1;
  for (let i = 0; i < j; i++, j--) {
    if (res[i] !== res[j]) return false;
  }
  return true;
}
/*Must be false*/
console.log(isPalindrome("0P"));

/*Must be true*/
console.log(isPalindrome("ab_a"));

/*Must be false*/
console.log(isPalindrome("race a car"));

/*Must be true*/
console.log(isPalindrome("A man, a plan, a canal: Panama"));

/*Must be true*/
console.log(isPalindrome(" "));
