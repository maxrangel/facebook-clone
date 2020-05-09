import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = (props) => {
  const { isAuth, children, ...otherProps } = props;

  return (
    <Route
      {...otherProps}
      render={({ location }) => (isAuth ? children : <Redirect to='/auth' />)}
    ></Route>
  );
};

export default PrivateRoute;
