export function sigma(
  start: number,
  end: number,
  callback: (i: number) => number
): number {
  let result = 0;
  for (let i = start; i <= end; i++) {
    result += callback(i);
  }
  return result;
}
