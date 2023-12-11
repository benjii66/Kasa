import React from 'react'
import { Link } from 'react-router-dom' 

const NavigationBar = () => {
  return (
    <nav>
    <Link to="/" aria-label="Home Page">
      Accueil
    </Link>
    <Link to="/About" aria-label="About Page">
      A Propos
    </Link>
  </nav>
  )
}

export default NavigationBar