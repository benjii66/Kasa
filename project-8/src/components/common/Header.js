import React from 'react';
import { Link } from 'react-router-dom';
import {NavigationBar} from './NavigationBar';

//importing logo image
import Logo from '../../assets/images/LOGO.svg';

//header component
export const Header = () => {
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

 
