/**
 * Converts the value to a looping value within the range from `start` to `end`. If `end` is not provided, the range is considered to be from 0 to `start`.
 */
export const cycle: Cycle = (
  value: number,
  start: number,
  end?: number
): number => {
  if (end === undefined) {
    end = start
    start = 0
  }

  if (start === end) return start

  const range = end - start
  const mod = (value - start) % range
  return mod < 0 ? end + mod : start + mod
}

interface Cycle {
  (value: number, start: number, end: number): number
  (value: number, end: number): number
}
