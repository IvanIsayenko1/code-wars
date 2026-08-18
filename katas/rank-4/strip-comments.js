/**
 * @see https://www.codewars.com/kata/51c8e37cee245da6b40000bd/train/javascript
 */
export function solution(text, markers) {
  const lines = text.split("\n");

  const result = lines.map((l) => {
    const indexesOfMarkers = markers.map((marker) => {
      if (l.includes(marker)) {
        return l.indexOf(marker);
      }

      return Infinity;
    });

    const minMarker = Math.min(...indexesOfMarkers);

    if (minMarker !== Infinity)
      return (l.slice(0, minMarker) + l.slice(l.length)).trimEnd();

    return l.trimEnd();
  });

  return result.join("\n");
}
