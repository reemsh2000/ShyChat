import React from 'react';
import { Route, Redirect } from 'react-router-dom';

interface ProtectedRouteProps {
  children: any;
  isLogged: boolean;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
  isLogged,
}) => (isLogged ? (
  <Route exact path="/">
    {children}
  </Route>
) : (
  <Redirect to="/login" />
));

export default ProtectedRoute;
