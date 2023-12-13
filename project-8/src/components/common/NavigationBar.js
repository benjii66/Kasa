import React from 'react'
import { Link } from 'react-router-dom' 


//navbar component to display the links
export const NavigationBar = () => {
    return (
      <nav>
        {/* GOTO home page  */}
      <Link to="/" aria-label="Home Page">
        Accueil
      </Link>
      {/* GOTO About page  */}
      <Link to="/About" aria-label="About Page">
        A Propos
      </Link>
    </nav>
    )
}