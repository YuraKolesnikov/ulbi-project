import { Suspense } from 'react'
import { Route, Routes, Link } from 'react-router-dom'

import { HomePage } from 'pages/HomePage'
import { AboutPage } from 'pages/AboutPage'

import { useTheme } from './providers/ThemeProvider'

import './scss/index.scss'

const App = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <main className={`app ${theme}`}>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <button onClick={toggleTheme}>Toggle theme</button>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
        </Routes>
      </Suspense>
    </main>
  )
}

export default App
