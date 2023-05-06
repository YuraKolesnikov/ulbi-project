import { Navbar } from 'widgets/Navbar'

import { AppRouter } from './providers/router'
import { useTheme } from './providers/ThemeProvider'

import './scss/index.scss'

const App = () => {
  const { theme } = useTheme()

  return (
    <main className={`app ${theme}`}>
      <Navbar />
      <AppRouter />
    </main>
  )
}

export default App
