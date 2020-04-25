import React from 'react';
import SignupForm from '../../components/auth/signup-form/signup-form.component';
import './auth.styles.scss';

const AuthPage = props => {
  return (
    <div className='auth-page'>
      <SignupForm />
    </div>
  );
};

export default AuthPage;
