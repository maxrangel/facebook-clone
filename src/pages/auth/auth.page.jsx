import React from 'react';
import './auth.styles.scss';

const AuthPage = (props) => {
  const { onLogin } = props;
  return (
    <div>
      <h2>Auth page</h2>
      <button onClick={onLogin}>Login</button>
    </div>
  );
};

export default AuthPage;
