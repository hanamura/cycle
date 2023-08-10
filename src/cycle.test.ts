import { cycle } from './cycle'

describe('cycle', () => {
  test('It converts the value to a looping value within the range from 0 to end.', () => {
    expect(cycle(0, 10)).toBe(0)
    expect(cycle(10, 10)).toBe(0)
    expect(cycle(5, 10)).toBe(5)
    expect(cycle(23, 10)).toBe(3)
    expect(cycle(-1, 10)).toBe(9)
    expect(cycle(-3, 10)).toBe(7)
    expect(cycle(-13, 10)).toBe(7)
    expect(cycle(-512, 10)).toBe(8)
    expect(cycle(5, 0)).toBe(0)
  })

  test('It converts the value to a looping value within the range from start to end.', () => {
    expect(cycle(0, 0, 10)).toBe(0)
    expect(cycle(0, -5, 5)).toBe(0)
    expect(cycle(3, -5, 5)).toBe(3)
    expect(cycle(5, -5, 5)).toBe(-5)
    expect(cycle(10, -5, 5)).toBe(0)
    expect(cycle(13, -5, 5)).toBe(3)
    expect(cycle(-3, -5, 5)).toBe(-3)
    expect(cycle(-6, -5, 5)).toBe(4)
    expect(cycle(-12, -5, 5)).toBe(-2)
    expect(cycle(-512, -5, 5)).toBe(-2)
    expect(cycle(5, 0, 0)).toBe(0)
  })
})
