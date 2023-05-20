import { render, screen } from '@testing-library/react'

import { Button, ButtonDesign } from 'shared/ui/button'

describe('Button', () => {
  test('Default', () => {
    render(<Button>Test</Button>)
    expect(screen.getByText('Test')).toBeInTheDocument()
  })

  test('With design', () => {
    render(<Button design={ButtonDesign.CLEAR}>Test</Button>)
    expect(screen.getByText('Test')).toHaveClass('clear')
  })
})
