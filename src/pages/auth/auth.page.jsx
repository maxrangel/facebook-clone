import React from 'react';
import { connect } from 'react-redux';

import SignupForm from '../../components/auth/signup-form/signup-form.component';
import LoginForm from '../../components/auth/login-form/login-form.component';
import Toast from '../../components/UI/toast/toast.component';

import './auth.styles.scss';

const AuthPage = props => {
  const { authError, authSuccess } = props;

  let message = authError || authSuccess;

  return (
    <div className='auth-page'>
      {message && (
        <Toast message={message} color={authError ? 'danger' : 'success'} />
      )}
      <SignupForm />

      <LoginForm />
    </div>
  );
};

const mapStateToProps = state => ({
  authError: state.authReducer.error,
  authSuccess: state.authReducer.success
});

export default connect(mapStateToProps)(AuthPage);
