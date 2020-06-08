import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import './header.styles.scss';

const Header = props => {
  const { isAuth, currentUser } = props;

  return (
    <div className='header'>
      <NavLink to='/home' className='logo-container'>
        <h2>Facebook</h2>
      </NavLink>

      {isAuth ? (
        <div className='options'>
          <NavLink to='/home' className='option' activeClassName='active-link'>
            Home
          </NavLink>
          <NavLink
            to={`/profile/${currentUser._id}`}
            className='option'
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
