import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import { ErrorBoundary } from 'app/providers/error-boundary'
import { ThemeProvider } from 'app/providers/theme-provider'

import App from 'app/app'

import 'shared/config/i18n/i18n'

render(
  <BrowserRouter>
    <ErrorBoundary>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </ErrorBoundary>
  </BrowserRouter>,
  document.getElementById('app')
)
