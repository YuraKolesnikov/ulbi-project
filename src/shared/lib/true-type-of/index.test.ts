import { trueTypeOf } from './index'

describe('true-type-of', () => {
  test('Корректные значения', () => {
    expect(trueTypeOf('string')).toBe('string')
    expect(trueTypeOf('0')).not.toBe('number')
    expect(trueTypeOf(0)).toBe('number')
    expect(trueTypeOf(false)).toBe('boolean')
    expect(trueTypeOf([])).toBe('array')
    expect(trueTypeOf([])).not.toBe('object')
    expect(trueTypeOf({})).toBe('object')
    expect(trueTypeOf(null)).toBe('null')
    expect(trueTypeOf(null)).not.toBe('object')
    expect(trueTypeOf(undefined)).toBe('undefined')
    expect(trueTypeOf(new Set())).toBe('set')
  })
})
