import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import { ThemeProvider } from './theme/theme-provider'

import App from './app'

render(
  <BrowserRouter>
    <ThemeProvider>
      <App/>
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById('app'),
)
