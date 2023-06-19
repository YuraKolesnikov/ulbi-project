import { Link } from 'react-router-dom'

import { AppRouter } from 'app/providers/router-provider'

import { useTheme } from './providers/theme-provider/lib/use-theme'

import './styles/index.scss'

const App = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className={`app ${theme}`}>
      <Link to={'/'}>Home</Link>
      <Link to={'/about'}>About</Link>
      <button onClick={toggleTheme}>Toggle theme</button>
      <AppRouter/>
    </div>
  )
}

export default App
