import React, { useState } from 'react';
import Input from '../../UI/input/input.component';
import './login-form.styles.scss';

const LoginForm = props => {
  const [userCredentials, setUserCredentials] = useState({
    email: '',
    password: ''
  });
  const { email, password } = userCredentials;

  const handleChange = event => {
    const { value, name } = event.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <div className='login-form'>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form>
        <Input
          name='email'
          type='email'
          handleChange={handleChange}
          value={email}
          label='Email'
          required
        />
        <Input
          name='password'
          type='password'
          handleChange={handleChange}
          value={password}
          label='Password'
          required
        />
      </form>
    </div>
  );
};

export default LoginForm;
