// export function longest_palindrome(s) {
//   if (s === s.split("").reverse().join("")) return s;

//   const polidromes = new Set();

//   for (let i = 0; i <= s.length; i++) {
//     for (let x = i + 1; x <= s.length; x++) {
//       const checking = s.substring(i, x);
//       if (polidromes.has(checking)) continue;
//       if (checking === checking.split("").reverse().join("")) {
//         polidromes.add(checking);
//       }
//     }
//   }

//   return [...polidromes].sort((a, b) => b.length - a.length)[0] || "";
// }

export function longest_palindrome(s) {
  function checkPalindrome(left, right) {
    let newPalindromeLength = 1;
    let keepChecking = true;

    while (keepChecking) {
      const leftChar = s[left];
      const rightChar = s[right];

      if (leftChar === rightChar && leftChar && rightChar) {
        newPalindromeLength = (left === right ? 1 : 2) + newPalindromeLength;
        right++;
        left--;
      } else {
        keepChecking = false;
      }
    }

    if (newPalindromeLength > longestPalidromeLength) {
      start = left + 1;
      longestPalidromeLength = newPalindromeLength;
    }
  }

  if (s.length === 0) return "";

  var start = 0;
  var longestPalidromeLength = 1;

  for (let index = 0; index < s.length; index++) {
    checkPalindrome(index, index);
    checkPalindrome(index, index + 1);
  }

  return s.substring(start, start + longestPalidromeLength - 1);
}
