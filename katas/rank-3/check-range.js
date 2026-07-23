// One Line Task: Check Range
// You're given an array of integers a and two integers x and y.
// Count the number of elements in the array such that `x ≤ a[i] ≤ y, where i is the 0-based index of the element.
//
// For a = [2, 5, 6, 7, 1, 3, 4, 11, 56, 49], x = 1 and y = 7,
// the output should be 7.
// elements 2, 5, 6, 7, 1, 3, 4 should be counted.
//
// Code Limit: Less than 48 characters.

export const checkRange = (a, x, y) => a.filter((v) => x <= v && v <= y).length;
// export const checkRange = (a, x, y) =>
//   a.map((v) => (i += x > v == v > y), (i = 0)) | i;
