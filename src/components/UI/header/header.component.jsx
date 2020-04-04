import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.styles.scss';

const Header = (props) => {
  return (
    <div className='header'>
      <NavLink to='/home' className='logo-container'>
        <h2 className='logo'>Facebook</h2>
      </NavLink>

      <div className='options'>
        <NavLink to='/home' className='option' activeClassName='active-link'>
          Home
        </NavLink>
        <NavLink to='/profile' className='option' activeClassName='active-link'>
          Profile
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
