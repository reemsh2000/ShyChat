<<<<<<< HEAD
import "./App.css";
import { io } from "socket.io-client";
import { useState } from "react";
import {Chat} from "./Chat";

 const socket = io("http://localhost:7000");
console.log(socket);
export function App() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);

  const joinRoom = () => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", room);
      setShowChat(true);
    }
  };

  return (
    <div className="App">
      {!showChat ? (
        <div className="joinChatContainer">
          <h3>Join A Chat</h3>
          <input
            type="text"
            placeholder="John..."
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
          <input
            type="text"
            placeholder="phone number"
            onChange={(event) => {
              setRoom(event.target.value);
            }}
          />
          <button onClick={joinRoom}>Join A Room</button>
        </div>
      ) : (
        <Chat socket={socket} username={username} room={room} />
      )}
=======
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
>>>>>>> 56de2272ae446e0e5401577967520ef336956ece
    </div>
  );
}

// export default App;


