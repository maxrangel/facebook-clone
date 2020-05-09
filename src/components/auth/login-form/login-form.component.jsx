import React, { useRef } from 'react';
import { connect } from 'react-redux';
import { login } from '../../../store/actions/auth.actions';

import Input from '../../UI/input/input.component';
import Button from '../../UI/button/button.component';
import Spinner from '../../UI/spinner/spinner.component';

import './login-form.styles.scss';

const LoginForm = props => {
  const { onShowSignup, loginUser, isLoading } = props;

  const emailRef = useRef('');
  const passwordRef = useRef('');

  const onLoginSubmit = event => {
    event.preventDefault();
    const emailInput = emailRef.current.value;
    const passwordInput = passwordRef.current.value;
    // TODO: ERROR HANDLING
    if (!emailInput.length || !passwordInput.length) return;

    loginUser(emailInput, passwordInput);
  };

  return isLoading ? (
    <Spinner message='Logging in...' />
  ) : (
    <div className='login-form'>
      <h2>I already have an account</h2>
      <span>Log in with your email and password.</span>

      <Input
        type='email'
        name='login-email'
        label='Email'
        id='login-email'
        inputRef={emailRef}
      />
      <Input
        type='password'
        name='login-password'
        label='Password'
        id='login-password'
        inputRef={passwordRef}
      />

      <div className='btns-container'>
        <Button label='Log In' onClick={onLoginSubmit} />
        <Button label="I don't have an account..." onClick={onShowSignup} />
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  isLoading: state.authReducer.isLoading
});

const mapDispatchToProps = dispatch => ({
  loginUser: (email, password) => dispatch(login(email, password))
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
