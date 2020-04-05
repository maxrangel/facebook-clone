import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.styles.scss';

const Header = props => {
  const { isAuth } = props;

  return (
    <div className='header'>
      <NavLink to='/home' className='logo-container'>
        <h2 className='logo'>Facebook</h2>
      </NavLink>

      {isAuth ? (
        <div className='options'>
          <NavLink to='/home' className='option' activeClassName='active-link'>
            Home
          </NavLink>
          <NavLink
            to='/profile'
            className='option'
            activeClassName='active-link'
          >
            Profile
          </NavLink>
        </div>
      ) : null}
    </div>
  );
};

export default Header;
