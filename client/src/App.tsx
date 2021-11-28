import './App.css';
import ErrorAlert from './service/errorAlert'
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "./state";
import userInfo from "./util/userInfo";
import { ChatIntro } from "./chat.intro";

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
      getUserData(user)
    }
  }, [isLoggedState, getUserData]);
  return (
    <div className="App">
      <ErrorAlert ></ErrorAlert>
      <button onClick={logIn}>login</button>
      <button onClick={logout}>logout</button>
      <ChatIntro/>
    </div>
  );
}

export default App; 


