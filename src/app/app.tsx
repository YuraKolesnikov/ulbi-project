import { Suspense } from 'react'

import { AppRouter } from 'app/providers/router-provider'
import { Navbar, Sidebar } from 'widgets'

import { useTheme } from './providers/theme-provider'

import './styles/index.scss'

const App = () => {
  const { theme } = useTheme()

  return (
    <div className={`app ${theme}`}>
      <Suspense fallback="">
        <Navbar/>
        <div className="content-page">
          <Sidebar/>
          <AppRouter/>
        </div>
      </Suspense>
    </div>
  )
}

export default App
