Array.prototype.sameStructureAs = function (other) {
  // Return 'true' if and only if 'other' has the same
  // nesting structure as 'this'.
  //
  // Note: You are given a function isArray(o) that returns
  // whether its argument is an array.
  const original = this;

  if (original.length !== other.length) return false;

  let result = true;

  for (let i = 0; i < original.length; i++) {
    if (
      (!Array.isArray(original[i]) && Array.isArray(other[i])) ||
      (Array.isArray(original[i]) && !Array.isArray(other[i]))
    ) {
      return false;
    } else if (Array.isArray(other[i]) && Array.isArray(original[i])) {
      result = original[i].sameStructureAs(other[i]);
    }
  }

  return result;
};
