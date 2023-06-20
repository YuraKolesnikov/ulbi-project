import { screen } from '@testing-library/react'

import { Sidebar } from './sidebar'
import { renderWithTranslation } from 'shared/lib'

describe('Sidebar', () => {
  test('Rendering sidebar', () => {
    renderWithTranslation(<Sidebar/>)
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
  })
});
