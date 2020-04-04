import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import Header from './components/UI/header/header.component';
import HomePage from './pages/home/home.page';
import ProfilePage from './pages/profile/profile.page';
import AuthPage from './pages/auth/auth.page';
import NotFoundPage from './pages/not-found/404.page';

import PrivateRoute from './hoc/private-route/private-route.hoc';

import './App.styles.scss';

const App = (props) => {
  const [isAuth, setIsAuth] = useState(true);

  const loginHandler = () => {
    setIsAuth(true);
  };
  const logoutHandler = () => setIsAuth(false);

  return (
    <div className='app'>
      <Router>
        <Header />

        <Switch>
          <PrivateRoute isAuth={isAuth} path='/home' exact>
            <HomePage />
          </PrivateRoute>

          <PrivateRoute isAuth={isAuth} path='/profile' exact>
            <ProfilePage onLogout={logoutHandler} />
          </PrivateRoute>

          <Route path='/auth'>
            {!isAuth ? (
              <AuthPage onLogin={loginHandler} />
            ) : (
              <Redirect to='home' />
            )}
          </Route>

          <Route path='*'>
            <NotFoundPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
