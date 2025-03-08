"use client"

import { useState, useEffect } from "react"
import { IconCar, IconMenu2, IconX, IconSun, IconMoon } from "@tabler/icons-react"



function Navbar({ isDarkMode, toggleDarkMode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-1 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md"
          : "py-3 bg-white dark:bg-gray-900 shadow-lg"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div
          className={`flex items-center justify-between ${
            scrolled ? "h-12" : "h-16"
          } transition-all duration-300 rounded-full ${
            scrolled ? "px-4" : "px-6"
          } bg-white dark:bg-gray-800 shadow-[0_0_15px_rgba(26,221,134,0.3)] dark:shadow-[0_0_15px_rgba(26,221,134,0.2)] hover:shadow-[0_0_20px_rgba(26,221,134,0.5)]`}
        >
          <div className="flex items-center space-x-2">
            <IconCar className={`text-[#11C675] transition-all duration-300 ${scrolled ? "h-6 w-6" : "h-8 w-8"}`} />
            <span className={`font-bold transition-all duration-300 gradient-text ${scrolled ? "text-lg" : "text-xl"}`}>
              ParkEase
            </span>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center space-x-2 md:hidden">
            <button
              className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              onClick={toggleDarkMode}
            >
              {isDarkMode ? (
                <IconSun className="h-5 w-5 text-yellow-400" />
              ) : (
                <IconMoon className="h-5 w-5 text-gray-700" />
              )}
            </button>
            <button
              className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <IconX className="h-5 w-5" /> : <IconMenu2 className="h-5 w-5" />}
            </button>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-6">
            <NavLink href="#features" scrolled={scrolled}>
              Features
            </NavLink>
            <NavLink href="#how-it-works" scrolled={scrolled}>
              How It Works
            </NavLink>
            <NavLink href="#testimonials" scrolled={scrolled}>
              Testimonials
            </NavLink>
            <NavLink href="#contact" scrolled={scrolled}>
              Contact
            </NavLink>
            <button
              className={`rounded-full gradient-primary gradient-primary-hover text-white transition-all duration-300 shadow-[0_0_10px_rgba(26,221,134,0.5)] hover:shadow-[0_0_15px_rgba(26,221,134,0.8)] ${
                scrolled ? "h-8 px-4 text-xs" : "h-10 px-6 text-sm"
              }`}
            >
              Book Now
            </button>
            <button
              className={`rounded-full bg-black text-white hover:bg-gray-800 transition-all duration-300 shadow-[0_0_10px_rgba(0,0,0,0.3)] hover:shadow-[0_0_15px_rgba(0,0,0,0.5)] ${
                scrolled ? "h-8 px-4 text-xs" : "h-10 px-6 text-sm"
              }`}
            >
              Download App
            </button>
            <button
              className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              onClick={toggleDarkMode}
            >
              {isDarkMode ? (
                <IconSun className="h-5 w-5 text-yellow-400" />
              ) : (
                <IconMoon className="h-5 w-5 text-gray-700" />
              )}
            </button>
          </nav>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 mt-2 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
            <nav className="flex flex-col space-y-4 pb-4">
              <MobileNavLink href="#features" onClick={() => setIsMenuOpen(false)}>
                Features
              </MobileNavLink>
              <MobileNavLink href="#how-it-works" onClick={() => setIsMenuOpen(false)}>
                How It Works
              </MobileNavLink>
              <MobileNavLink href="#testimonials" onClick={() => setIsMenuOpen(false)}>
                Testimonials
              </MobileNavLink>
              <MobileNavLink href="#contact" onClick={() => setIsMenuOpen(false)}>
                Contact
              </MobileNavLink>
              <div className="px-4">
                <button className="w-full h-10 rounded-full gradient-primary gradient-primary-hover text-white transition-all duration-300 shadow-[0_0_10px_rgba(26,221,134,0.5)] hover:shadow-[0_0_15px_rgba(26,221,134,0.8)]">
                  Book Now
                </button>
              </div>
              <div className="px-4">
                <button className="w-full h-10 rounded-full bg-black text-white hover:bg-gray-800 transition-all duration-300 shadow-[0_0_10px_rgba(0,0,0,0.3)] hover:shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                  Download App
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

function NavLink({ href, scrolled, children }) {
  return (
    <a
      href={href}
      className={`text-gray-800 dark:text-gray-200 font-medium hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#11C675] hover:to-[#1ADD86] transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-gradient-to-r after:from-[#11C675] after:to-[#1ADD86] after:transition-all hover:after:w-full ${
        scrolled ? "text-sm" : "text-base"
      }`}
    >
      {children}
    </a>
  )
}

function MobileNavLink({ href, onClick, children }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="text-gray-800 dark:text-gray-200 font-medium px-4 py-2 hover:bg-gradient-to-r hover:from-[#11C675]/10 hover:to-[#1ADD86]/10 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#11C675] hover:to-[#1ADD86] transition-colors duration-300"
    >
      {children}
    </a>
  )
}

export default Navbar

