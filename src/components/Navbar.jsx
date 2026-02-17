import { useState, useEffect } from "react"

function Navbar() {

  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)


  useEffect(() => {

    function handleScroll() {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)

  }, [])


  function toggleMenu() {
    setMenuOpen(!menuOpen)
  }


  return (
    <nav className={scrolled ? "nav scrolled" : "nav"}>

      <img src="/logo.png" className="logo" />

      <div className="hamburger" onClick={toggleMenu}>
        ☰
      </div>

      <ul className={menuOpen ? "nav-links active" : "nav-links"}>

        <li><a href="#inicio">Inicio</a></li>

        <li><a href="#servicios">Servicios</a></li>

        <li><a href="#sobre">Sobre Nosotros</a></li>

        <li><a href="#contacto">Contacto</a></li>

      </ul>

    </nav>
  )
}

export default Navbar
