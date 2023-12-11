import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/LOGO.svg';
import NavigationBar from './NavigationBar';

const Header = () => {
  return (
    <header>
      <figure>
        <Link to="/" aria-label="Logo">
          <img src={Logo} alt="Logo" />
        </Link>
      </figure>
      <NavigationBar />
    </header>
  );
};

export default Header;
