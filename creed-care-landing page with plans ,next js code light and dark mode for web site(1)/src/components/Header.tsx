"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import ThemeToggle from "./ThemeToggle"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary-500 dark:bg-primary-600 rounded-full flex items-center justify-center">
              <span className="text-gray-900 dark:text-white font-bold text-lg">C</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900 dark:text-white">Creed</h1>
              <p className="text-xs text-gray-600 dark:text-gray-400">a personal health care</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a
              href="#home"
              className="text-gray-900 dark:text-gray-100 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-900 dark:text-gray-100 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
            >
              About Us
            </a>
            <a
              href="#services"
              className="text-gray-900 dark:text-gray-100 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
            >
              Services
            </a>
            <a
              href="#why-us"
              className="text-gray-900 dark:text-gray-100 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
            >
              Why Us
            </a>
            <a
              href="#faq"
              className="text-gray-900 dark:text-gray-100 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
            >
              FAQ
            </a>
            <a
              href="#contact"
              className="text-gray-900 dark:text-gray-100 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
            >
              Contact
            </a>
          </nav>

          {/* CTA Button and Theme Toggle */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <button className="text-primary-500 dark:text-primary-400 border border-primary-500 dark:border-primary-400 px-4 py-2 rounded-lg hover:bg-primary-500 hover:text-white dark:hover:bg-primary-400 dark:hover:text-gray-900 transition-colors">
              Sign In
            </button>
            <button className="bg-primary-500 dark:bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-600 dark:hover:bg-primary-700 transition-colors">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <button className="text-gray-900 dark:text-gray-100" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-700">
            <nav className="flex flex-col space-y-4">
              <a
                href="#home"
                className="text-gray-900 dark:text-gray-100 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-gray-900 dark:text-gray-100 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
              >
                About Us
              </a>
              <a
                href="#services"
                className="text-gray-900 dark:text-gray-100 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
              >
                Services
              </a>
              <a
                href="#why-us"
                className="text-gray-900 dark:text-gray-100 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
              >
                Why Us
              </a>
              <a
                href="#faq"
                className="text-gray-900 dark:text-gray-100 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
              >
                FAQ
              </a>
              <a
                href="#contact"
                className="text-gray-900 dark:text-gray-100 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
              >
                Contact
              </a>
              <div className="flex flex-col space-y-2 pt-4">
                <button className="text-primary-500 dark:text-primary-400 border border-primary-500 dark:border-primary-400 px-4 py-2 rounded-lg hover:bg-primary-500 hover:text-white dark:hover:bg-primary-400 dark:hover:text-gray-900 transition-colors">
                  Sign In
                </button>
                <button className="bg-primary-500 dark:bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-600 dark:hover:bg-primary-700 transition-colors">
                  Get Started
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
