import { AppRouter } from 'app/providers/router-provider'
import { Navbar, Sidebar } from 'widgets'

import { useTheme } from './providers/theme-provider'

import './styles/index.scss'

const App = () => {
  const { theme } = useTheme()

  return (
    <div className={`app ${theme}`}>
      <Navbar/>
      <div className="content-page">
        <Sidebar/>
        <AppRouter/>
      </div>
    </div>
  )
}

export default App
