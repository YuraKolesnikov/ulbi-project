import { capitalize } from './string'

describe('capitalize', () => {
  test('default', () => {
    expect(capitalize('lolkek')).toBe('Lolkek')
  })

  test('empty', () => {
    expect(capitalize('')).toBe('')
  })
})
