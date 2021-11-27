import React, { useEffect } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "./state";
import userInfo from "./util/userInfo";

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
      <button onClick={logIn}>login</button>
      <button onClick={logout}>logout</button>
    </div>
  );
}

export default App;
