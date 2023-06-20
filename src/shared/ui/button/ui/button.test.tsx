import { render, screen } from '@testing-library/react'

import { Button } from './button'

describe('Button', () => {
  test('Rendering button', () => {
    render(<Button onClick={() => null}>TEST</Button>)
    expect(screen.getByText('TEST')).toBeInTheDocument()
  })
})
