import React from 'react';
import SignupForm from '../../components/auth/signup-form/signup-form.component';
import LoginForm from '../../components/auth/login-form/login-form.component';
import './auth.styles.scss';

const AuthPage = props => {
  return (
    <div className='auth-page'>
      <SignupForm />

      <LoginForm />
    </div>
  );
};

export default AuthPage;
