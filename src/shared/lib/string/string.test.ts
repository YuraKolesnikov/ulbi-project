import { capitalize } from 'shared/lib'

describe('capitalize', () => {
  test('default', () => {
    expect(capitalize('lolkek')).toBe('Lolkek')
  })

  test('empty', () => {
    expect(capitalize('')).toBe('')
  })
})
