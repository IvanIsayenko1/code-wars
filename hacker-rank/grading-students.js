/**
 * @see https://www.hackerrank.com/challenges/grading/problem?isFullScreen=true
 * @param {number[]} grades
 * @returns {number[]}
 */
export function gradingStudents(grades) {
  grades.shift();
  return grades.map((grade) => {
    if (grade < 38) return grade;
    if (grade % 5 === 0) return grade;

    let rounded = grade;
    while (true) {
      rounded++;
      if (rounded % 5 === 0) break;
    }

    if (rounded - grade >= 3) {
      return grade;
    } else {
      return rounded;
    }
  });
}
