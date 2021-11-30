<<<<<<< HEAD:client/src/App.tsx
// import { BrowserRouter as Router, Route } from 'react-router-dom';
=======
import { BrowserRouter as Router, Route } from "react-router-dom";
>>>>>>> 003269df4ec5b15378d2c2c09660368537a14657:client/src/App/index.tsx
import { ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";
import ErrorAlert from "../service/errorAlert";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
<<<<<<< HEAD:client/src/App.tsx
import { actionCreators, State } from "./state";
import userInfo from "./util/userInfo";
import { ChatIntro } from "./chat.intro";
import { theme } from "./util/customizeStyle";
import { EditProfile } from './pages/profile/editProfile';

=======
import { actionCreators, State } from "../state";
import userInfo from "../util/userInfo";
import { ChatIntro } from "../chat.intro";
import { theme } from "../util/customizeStyle";
import style from "./style";
import { SignUp } from "../pages/signUp";
>>>>>>> 003269df4ec5b15378d2c2c09660368537a14657:client/src/App/index.tsx

function App() {
  const dispatch = useDispatch();
  const { logIn, logout, getUserData } = bindActionCreators(
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
<<<<<<< HEAD:client/src/App.tsx
    <div className="App">
      {!isLoggedState?
      <div>
        <Button variant="contained" color="success">
=======
    <ThemeProvider theme={theme}>
      <div style={style.app}>
        <SignUp />

        {/* <Button variant="contained" color="success">
>>>>>>> 003269df4ec5b15378d2c2c09660368537a14657:client/src/App/index.tsx
          Success
          </Button>
          <ErrorAlert></ErrorAlert>
        <button onClick={logIn}>login</button>
        <button onClick={logout}>logout</button>
<<<<<<< HEAD:client/src/App.tsx
        <ChatIntro />
        </div>
        :
        <EditProfile />
}
    </div>
=======
        <ChatIntro /> */}
      </div>
    </ThemeProvider>
>>>>>>> 003269df4ec5b15378d2c2c09660368537a14657:client/src/App/index.tsx
  );
}
export default App;
