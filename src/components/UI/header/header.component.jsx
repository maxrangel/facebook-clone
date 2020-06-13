import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import './header.styles.scss';

const Header = props => {
  const { isAuth, currentUser } = props;

  return (
    <div className='header'>
      <NavLink to='/home' className='header__logo-text'>
        Facebook
      </NavLink>

      {isAuth ? (
        <div className='header__options'>
          <NavLink
            to='/home'
            className='header__option'
            activeClassName='active-link'>
            Home
          </NavLink>
          <NavLink
            to={`/profile/${currentUser._id}`}
            className='header__option'
            activeClassName='active-link'>
            Profile
          </NavLink>
        </div>
      ) : null}
    </div>
  );
};

const mapStateToProps = state => ({
  currentUser: state.authReducer.currentUser,
  isAuth: state.authReducer.isAuth
});

export default connect(mapStateToProps)(Header);
