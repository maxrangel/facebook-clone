import React, { useRef } from 'react';
import { connect } from 'react-redux';
import { login } from '../../../store/actions/auth.actions';
import './login-form.styles.scss';

const LoginForm = props => {
  const { loginUser } = props;
  const userRef = useRef('');
  const passwordRef = useRef('');

  const onLoginHandler = event => {
    event.preventDefault();
    const userInput = userRef.current.value;
    const passwordInput = passwordRef.current.value;

    // Validate input, can't be empty
    if (!userInput || !passwordInput) {
      console.log('Fields can not be empty!');
      return;
    }

    console.log(userInput);
    console.log(passwordInput);
    loginUser(userInput, passwordInput);
  };

  return (
    <div className='login-container'>
      <form className='login-form'>
        <div className='form-group'>
          <label htmlFor='user'>Email or username</label>
          <input
            type='text'
            id='user'
            placeholder='Email or username'
            ref={userRef}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            required
            placeholder='Password'
            ref={passwordRef}
          />
        </div>
        <button type='submit' className='login-btn' onClick={onLoginHandler}>
          Log In
        </button>
      </form>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  loginUser: (user, password) => dispatch(login(user, password))
});

export default connect(null, mapDispatchToProps)(LoginForm);
