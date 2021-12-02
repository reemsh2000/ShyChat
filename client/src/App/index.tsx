import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../state";
import userInfo from "../util/userInfo";
import { theme } from "../util/customizeStyle";
import style from "./style";
import { SignUp } from "../pages/signUp";
import CustomizedSnackbars from "../service/ErrorAlert";
import { Login } from "./Login";
import { Verify } from "../pages/verify";
import { Home } from "./Home";
function App() {
  const dispatch = useDispatch();
  const { getUserData } = bindActionCreators(
    actionCreators,
    dispatch
  );
  const isLoggedState = useSelector((state: State) => state.isLogged);
  useEffect(() => {
    if (isLoggedState) {
      const user = userInfo();
      getUserData(user);
    }
  }, [isLoggedState, getUserData]);
  
  return (
    <ThemeProvider theme={theme}>
      <div style={style.app}>
      <Router>
      <Switch>
        <Route path="/signup" component={SignUp} />
        <Route path="/verfiy" component={Verify} />
        <Route path="/home" component={Home} />
        <Route exact path="/" component={Login} />
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
