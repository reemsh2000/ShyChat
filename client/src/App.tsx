import React from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "./state";

function App() {
  const dispatch = useDispatch();
  const { logIn, logout } = bindActionCreators(actionCreators, dispatch);
  const isLoggedState = useSelector((state: State) => state.isLogged)

  return (
    <div className="App">
      <button onClick={() => {logIn()}}>login</button>
      <button onClick={() => {logout()}}>logout</button>
    </div>
  );
}

export default App;
