/**
 * @see https://www.codewars.com/kata/52742f58faf5485cae000b9a/train/javascript
 * @param {*} seconds
 */
export function formatDuration(seconds) {
  if (seconds === 0) return "now";

  let result = [];

  const restSec = seconds % 60;

  const min = Math.floor(seconds / 60);
  const restMin = min % 60;

  const hours = Math.floor(min / 60);
  const restHours = hours % 24;

  const days = Math.floor(hours / 24);
  const restDays = days % 365;

  const years = Math.floor(days / 365);

  if (years) result.push(`${years} ${years > 1 ? "years" : "year"}`);
  if (restDays) result.push(`${restDays} ${restDays > 1 ? "days" : "day"}`);
  if (restHours)
    result.push(`${restHours} ${restHours > 1 ? "hours" : "hour"}`);
  if (restMin) result.push(`${restMin} ${restMin > 1 ? "minutes" : "minute"}`);
  if (restSec) result.push(`${restSec} ${restSec > 1 ? "seconds" : "second"}`);

  if (result.length === 1) return result.slice(-1).join("");
  return result.slice(0, -1).join(", ") + " and " + result.slice(-1);
}
