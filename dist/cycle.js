/**
 * Converts the value to a looping value within the range from `start` to `end`. If `end` is not provided, the range is considered to be from 0 to `start`.
 */
export const cycle = (value, start, end) => {
    if (end === undefined) {
        end = start;
        start = 0;
    }
    if (start === end)
        return start;
    const range = end - start;
    const mod = (value - start) % range;
    return mod < 0 ? end + mod : start + mod;
};
