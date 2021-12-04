import React from 'react';
import { Route, Redirect } from 'react-router-dom';

interface ProtectedRouteProps {
  children: any;
  isLogged: boolean;
  path:string;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
  isLogged,
  path,
}) => (isLogged ? (
  <Route exact path={path}>
    {children}
  </Route>
) : (
  <Redirect to="/login" />
));

export default ProtectedRoute;
