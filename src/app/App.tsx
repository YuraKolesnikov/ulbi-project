import { type ReactElement, Suspense } from 'react'

import { Navbar } from 'widgets/Navbar'

import { Sidebar } from 'widgets/Sidebar'

import { AppRouter } from './providers/router'
import { useTheme } from './providers/ThemeProvider'

import './scss/index.scss'

const App = (): ReactElement => {
  const { theme } = useTheme()

  return (
    <main className={`app ${theme}`}>
      <Suspense fallback=''>
        <Navbar />
        <main className='main'>
          <Sidebar />
          <div className='content'>
            <AppRouter />
          </div>
        </main>
      </Suspense>
    </main>
  )
}

export default App
