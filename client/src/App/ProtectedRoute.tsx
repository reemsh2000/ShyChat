import React from "react";
import { Route, Redirect } from "react-router-dom";

interface ProtectedRouteProps {
  children: any;
  isLogged: boolean;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
  isLogged,
}) => {
  return isLogged ? (
    <Route exact path="/">
      {children}
    </Route>
  ) : (
    <Redirect to={"/login"} />
  );
};
