import { Suspense } from 'react'
import { Link, Route, Routes } from 'react-router-dom'

import { HomePage } from './pages/home/home.lazy'
import { AboutPage } from './pages/about/about.lazy'

import { useTheme } from './theme/use-theme'

import './styles/index.scss'

const App = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className={`app ${theme}`}>
      <Link to={'/'}>Home</Link>
      <Link to={'/about'}>About</Link>
      <button onClick={toggleTheme}>Toggle theme</button>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={'/'} element={<HomePage/>}/>
          <Route path={'/about'} element={<AboutPage/>}/>
        </Routes>
      </Suspense>
    </div>
  )
}

export default App
