/**
 * Create an array of all numbers in a range. Be cautious: this is eager-evaluated, not lazy as in many languages.
 * If stop is not specified, start is used as the stop value and the start value is 0.
 * @param start The start of the range (or stop if the only argument)
 * @param stop [Optional] The end of the range (exclusive)
 * @param step [Optional] The step size. Defaults to 1.
 * @returns An array containing all numbers in [start, stop) with step size step.
 */
export function range(start: number, stop: number | undefined = undefined, step = 1) {
  if (stop === undefined) {
    stop = start;
    start = 0;
  }
  --stop; // interval: [start, stop)
  return Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step);
}
