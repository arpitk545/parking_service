"use client"

import { useState, useEffect } from "react"
import Navbar from "./components/Navbar"
import HeroSection from "./components/HeroSection"
import HowItWorksSection from "./components/HowItWorksSection"
import FeaturesSection from "./components/FeaturesSection"
import TestimonialsSection from "./components/TestimonialsSection"
import CtaSection from "./components/CtaSection"
import Footer from "./components/Footer"
import "./index.css"

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true"
  })

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
    localStorage.setItem("darkMode", isDarkMode)
  }, [isDarkMode])

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <HeroSection />
      <HowItWorksSection />
      <FeaturesSection />
      <TestimonialsSection />
      <CtaSection />
      <Footer />
    </div>
  )
}

export default App


