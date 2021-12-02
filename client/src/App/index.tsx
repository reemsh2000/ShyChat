import { BrowserRouter as Router, Route } from "react-router-dom";
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
function App() {
  const dispatch = useDispatch();
  const { getUserData } = bindActionCreators(
    actionCreators,
    dispatch
  );
  const isLoggedState = useSelector((state: State) => state.isLogged);
  const errorState = useSelector((state: State) => state.showErr)

  useEffect(() => {
    if (isLoggedState) {
      const user = userInfo();
      getUserData(user);
    }
  }, [isLoggedState, getUserData]);
  return (
    <ThemeProvider theme={theme}>
      <div style={style.app}>
        <SignUp />
        <CustomizedSnackbars/>
      </div>
    </ThemeProvider>
  );
}
export default App;
