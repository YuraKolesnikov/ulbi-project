import { AppRouter } from 'app/providers/router-provider'
import { Navbar } from 'widgets'

import { useTheme } from './providers/theme-provider'

import './styles/index.scss'

const App = () => {
  const { theme } = useTheme()

  return (
    <div className={`app ${theme}`}>
      <Navbar/>
      <AppRouter/>
    </div>
  )
}

export default App
