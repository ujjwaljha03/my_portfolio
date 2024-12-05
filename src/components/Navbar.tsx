import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Sun, Moon, Home, Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const isDark = localStorage.getItem('darkMode') === 'true'
    setIsDarkMode(isDark)
    document.documentElement.classList.toggle('dark', isDark)
  }, [])

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode
    setIsDarkMode(newDarkMode)
    localStorage.setItem('darkMode', newDarkMode.toString())
    document.documentElement.classList.toggle('dark', newDarkMode)
  }

  const isActiveLink = (path: string): string => {
    return location.pathname === path ? 'font-bold text-xl' : ''
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="dark:bg-gray-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-center h-16">
          <div className="absolute left-0 flex items-center sm:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
          <div className="flex items-center justify-center space-x-4">
            <Link to="/" className={`text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 ${isActiveLink('/')}`}>
              <Home className="h-6 w-6 font-bold " />
            </Link>
            <Link to="/about" className={`hidden sm:inline-block font-bold text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 ${isActiveLink('/about')}`}>
              About Me
            </Link>
            <Link to="/projects" className={`hidden sm:inline-block font-bold text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 ${isActiveLink('/projects')}`}>
              Projects
            </Link>
            <button
              onClick={toggleDarkMode}
              className=" inline p-2 rounded-full bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="sm:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/about"
              className={`block px-3 py-2 rounded-md text-base font-medium text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 ${isActiveLink('/about')}`}
              onClick={toggleMenu}
            >
              About Me
            </Link>
            <Link
              to="/projects"
              className={`block px-3 py-2 rounded-md text-base font-medium text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 ${isActiveLink('/projects')}`}
              onClick={toggleMenu}
            >
              Projects
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
} 