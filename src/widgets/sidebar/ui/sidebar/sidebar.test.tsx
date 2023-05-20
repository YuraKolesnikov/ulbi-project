import { fireEvent, render, screen } from '@testing-library/react'

import { Sidebar } from 'widgets/sidebar'
import { renderWithTranslation } from 'shared/lib'

describe('Sidebar', () => {
	test('Render', () => {
		renderWithTranslation(<Sidebar />)
		expect(screen.getByTestId('sidebar')).toBeInTheDocument()
	})

	test('Toggle', () => {
		renderWithTranslation(<Sidebar />)
		const toggleBtn = screen.getByTestId('sidebar-toggle')
		expect(screen.getByTestId('sidebar')).toBeInTheDocument()
		fireEvent.click(toggleBtn)
		expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
	})
})