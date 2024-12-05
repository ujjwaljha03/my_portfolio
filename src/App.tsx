import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import AboutMe from './pages/AboutMe'
import Projects from './pages/Projects'

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-amber-500 via-purple-400 to-purple-300 dark:from-gray-900 dark:via-gray-900 dark:to-gray-900 text-gray-900 dark:text-white transition-all duration-500">
        <Navbar />
        <main className="pt-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}