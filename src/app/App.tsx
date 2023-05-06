import { Link } from 'react-router-dom'

import { AppRouter } from './providers/router'
import { useTheme } from './providers/ThemeProvider'

import './scss/index.scss'

const App = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <main className={`app ${theme}`}>
      <Link to='/'>Home</Link>
      <Link to='/about/one'>About</Link>
      <button onClick={toggleTheme}>Toggle theme</button>
      <AppRouter />
    </main>
  )
}

export default App
