/**
 * Converts the value to a looping value within the range from `start` to `end`. If `end` is not provided, the range is considered to be from 0 to `start`.
 */
export declare const cycle: Cycle;
interface Cycle {
    (value: number, start: number, end: number): number;
    (value: number, end: number): number;
}
export {};
