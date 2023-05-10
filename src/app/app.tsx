import { type ReactElement, Suspense } from 'react'

import { Navbar } from 'widgets/navbar'

import { Sidebar } from 'widgets/sidebar'

import { AppRouter } from './providers/router'
import { useTheme } from './providers/theme-provider'

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
