import React, { useState } from 'react';
import SignupForm from '../../components/auth/signup-form/signup-form.component';
import LoginForm from '../../components/auth/login-form/login-form.component';
import './auth.styles.scss';

const AuthPage = props => {
  const [showSignup, setShowSignup] = useState(false);

  const showPageHandler = () => {
    setShowSignup(!showSignup);
  };

  return (
    <div className='auth-page'>
      {showSignup ? (
        <SignupForm onShowSignup={showPageHandler} />
      ) : (
        <LoginForm onShowSignup={showPageHandler} />
      )}
    </div>
  );
};

export default AuthPage;
