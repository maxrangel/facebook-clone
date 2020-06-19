import React, { useRef } from 'react';
import { connect } from 'react-redux';
import { login } from '../../../store/actions/auth.actions';

import Input from '../../UI/input/input.component';
import Button from '../../UI/button/button.component';

import './login-form.styles.scss';

const LoginForm = props => {
  const { loginUser } = props;

  const emailRef = useRef('');
  const passwordRef = useRef('');
  const formRef = useRef('');

  const onLoginSubmit = event => {
    event.preventDefault();

    const emailInput = emailRef.current.value;
    const passwordInput = passwordRef.current.value;

    loginUser(emailInput, passwordInput);

    formRef.current.reset();
  };

  return (
    <div className='login-form'>
      <div className='login-form__text'>
        <h2>I already have an account</h2>
        <span>Log in with your email and password.</span>
      </div>

      <form action='#' method='post' onSubmit={onLoginSubmit} ref={formRef}>
        <Input
          type='email'
          name='login-email'
          label='Email'
          id='login-email'
          placeholder='Email'
          inputRef={emailRef}
        />
        <Input
          type='password'
          name='login-password'
          label='Password'
          id='login-password'
          placeholder='Password'
          inputRef={passwordRef}
        />

        <Button label='Log In' type='submit' />
      </form>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  loginUser: (email, password) => dispatch(login(email, password))
});

export default connect(null, mapDispatchToProps)(LoginForm);
