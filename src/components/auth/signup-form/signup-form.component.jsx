import React, { useState } from 'react';
import Input from '../../UI/input/input.component';
import './signup-form.styles.scss';

const SignupForm = props => {
  const [userCredentials, setUserCredentials] = useState({
    userName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const { userName, email, password, confirmPassword } = userCredentials;

  const onHandleSubmit = async event => {
    event.preventDefault();
    const { signUpStart } = props;

    if (password !== confirmPassword) {
      alert('Password do not match');
      return;
    }

    try {
      signUpStart({ userName, email, password });

      setUserCredentials({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
    } catch (err) {
      console.log(err);
    }
  };

  const onHandleChange = event => {
    const { name, value } = event.target;

    setUserCredentials({ ...userCredentials, [name]: value });
  };
  return (
    <div className='signup-form'>
      <h2 className='title'>I do not have an account</h2>
      <span>Sign Up with your email and password</span>

      <form onSubmit={onHandleSubmit}>
        <Input
          type='text'
          name='displayName'
          value={userName}
          onChange={onHandleChange}
          label='Username'
          required
        />
        <Input
          type='email'
          name='email'
          value={email}
          onChange={onHandleChange}
          label='Email'
          required
        />
        <Input
          type='password'
          name='password'
          value={password}
          onChange={onHandleChange}
          label='Password'
          required
        />
        <Input
          type='password'
          name='confirmPassword'
          value={confirmPassword}
          onChange={onHandleChange}
          label='Confirm Password'
          required
        />

      </form>
    </div>
  );
};

export default SignupForm;
