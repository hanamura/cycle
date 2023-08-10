import { sample } from './sample'

describe('sample function', () => {
  test('-', () => {
    expect(sample()).toBe('sample')
  })
})
