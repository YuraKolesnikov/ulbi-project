import { Suspense } from 'react'
import { Route, Routes, Link } from 'react-router-dom'

import HomePageAsync from './pages/HomePage/HomePage.lazy'
import AboutPageAsync from './pages/AboutPage/AboutPage.lazy'

import { useTheme } from './pages/theme/useTheme'

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
          <Route path='/' element={<HomePageAsync />} />
          <Route path='/about' element={<AboutPageAsync />} />
        </Routes>
      </Suspense>
    </main>
  )
}

export default App
