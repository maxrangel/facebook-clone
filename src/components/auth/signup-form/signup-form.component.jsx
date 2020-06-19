import React, { useRef } from 'react';
import { connect } from 'react-redux';
import { signup } from '../../../store/actions/auth.actions';

import Input from '../../UI/input/input.component';
import Button from '../../UI/button/button.component';

import './signup-form.styles.scss';

const SignupForm = props => {
  const { signupUser } = props;

  const usernameRef = useRef('');
  const emailRef = useRef('');
  const passwordRef = useRef('');
  const passwordConfirmRef = useRef('');
  const formRef = useRef('');

  const onSignupHandler = event => {
    event.preventDefault();

    const usernameInput = usernameRef.current.value;
    const emailInput = emailRef.current.value;
    const passwordInput = passwordRef.current.value;
    const passwordConfirmInput = passwordConfirmRef.current.value;

    signupUser(usernameInput, emailInput, passwordInput, passwordConfirmInput);

    formRef.current.reset();
  };

  return (
    <div className='signup-form'>
      <div className='signup-form__text'>
        <h2 className='title'>I'm a new user!</h2>
        <span>Create a new account now!</span>
      </div>

      <form action='#' method='post' onSubmit={onSignupHandler} ref={formRef}>
        <Input
          type='text'
          name='displayName'
          label='Username'
          id='username'
          placeholder='username123'
          inputRef={usernameRef}
        />
        <Input
          type='email'
          name='email'
          label='Email'
          id='signin-email'
          placeholder='user@mail.com'
          inputRef={emailRef}
        />
        <Input
          type='password'
          name='password'
          label='Password'
          id='signin-password'
          placeholder='Password'
          inputRef={passwordRef}
        />
        <Input
          type='password'
          name='confirmPassword'
          label='Confirm Password'
          id='confirmPassword'
          placeholder='Confirm password'
          inputRef={passwordConfirmRef}
        />

        <Button type='submit' label='Create account' />
      </form>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  signupUser: (username, email, password, passwordConfirm) =>
    dispatch(signup(username, email, password, passwordConfirm))
});

export default connect(null, mapDispatchToProps)(SignupForm);
