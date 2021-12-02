import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import React, { useEffect } from "react";
import jwt_decode from "jwt-decode";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../state";
import { theme } from "../util/customizeStyle";
import style from "./style";
import { SignUp } from "../pages/signUp";
import CustomizedSnackbars from "../service/ErrorAlert";
import { Login } from "./Login";
import { Verify } from "../pages/verify";
import { Home } from "./Home";
import { ProtectedRoute } from "./ProtectedRoute";
function App() {
  const dispatch = useDispatch();
  const { getUserData } = bindActionCreators(
    actionCreators,
    dispatch
  );
  const isLoggedState = useSelector((state: State) => state.isLogged);
  useEffect(() => {
    if (isLoggedState) {
      getUserData(jwt_decode(document.cookie));
    }
  }, [isLoggedState, getUserData]);
  
  return (
    <ThemeProvider theme={theme}>
      <div style={style.app}>
      <Router>
      <Switch>
        <Route path="/signup" component={SignUp} />
        <Route path="/verfiy" component={Verify} />
        <Route path="/login" component={Login} />
        <ProtectedRoute isLogged={isLoggedState}>
            <Home />
            </ProtectedRoute>
        {/* <Route exact path="/editprofile" component={} /> */}
        {/* <Route path="/notfound" component={Error} /> */}
        {/* <Redirect to="/Not-Found" /> */}
      </Switch>
    </Router>
        <CustomizedSnackbars/>
      </div>
    </ThemeProvider>
  );
}
export default App;
