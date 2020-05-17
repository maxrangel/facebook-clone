import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { fetchUserProfile } from '../../../store/actions/user.actions';
import './header.styles.scss';

const Header = props => {
  const { isAuth, currentUser } = props;

  const onNavigateUserProfile = () => {};

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
            onClick={onNavigateUserProfile}>
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

const mapDispatchToProps = dispatch => ({
  goToProfile: userId => dispatch(fetchUserProfile(userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
