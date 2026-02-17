import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsApp from './components/WhatsApp'


import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

function App() {

  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [])

  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Contact />
      <Footer />
      <WhatsApp />
    </>
  )
}

export default App
