import { Link } from 'react-router-dom'

import { useTheme } from './providers/ThemeProvider'

import './scss/index.scss'
import { AppRouter } from './providers/router'

const App = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <main className={`app ${theme}`}>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <button onClick={toggleTheme}>Toggle theme</button>
      <AppRouter />
    </main>
  )
}

export default App
