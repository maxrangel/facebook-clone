import React from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import Header from './components/UI/header/header.component';
import HomePage from './pages/home/home.page';
import ProfilePage from './pages/profile/profile.page';
import AuthPage from './pages/auth/auth.page';
import NotFoundPage from './pages/not-found/404.page';

import PrivateRoute from './hoc/with-private-route/with-private-route.hoc';

import './App.styles.scss';

const App = props => {
  const { isAuth } = props;

  return (
    <div>
      <Router>
        <Header />

        <Switch>
          {/* Protected routes using custom PrivateRoute HOC */}
          <PrivateRoute isAuth={isAuth} path='/home' exact>
            <HomePage />
          </PrivateRoute>

          <PrivateRoute isAuth={isAuth} path='/profile/:id' exact>
            <ProfilePage />
          </PrivateRoute>

          {/* Only make Auth page accesible when user is not logged in */}
          <Route path='/auth'>
            {!isAuth ? <AuthPage /> : <Redirect to='home' />}
          </Route>

          {/* For initial loading page */}
          <Route path='/' exact>
            <Redirect to='home' />
          </Route>

          {/* Error page that shows only when a user access a page that doesn't exist */}
          <Route path='*'>
            <NotFoundPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

const mapStateToProps = state => ({
  isAuth: state.authReducer.isAuth
});

export default connect(mapStateToProps)(App);
