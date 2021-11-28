import "./App.css";
import { io } from "socket.io-client";
import { useState } from "react";
import {Chat} from "./Chat";
import { useSelector } from "react-redux";
import { State } from "./state";
 const socket = io("http://localhost:7000");
console.log(socket);

export function ChatIntro() {
  const [reveier, setReceiver] = useState("");
  const  userInfromation= useSelector((state:State) => state.userInfromation);
  console.log(userInfromation);

  return (
    <div className="App">
        <div className="joinChatContainer">
          <h3>Join A Chat</h3>
          <input
            type="text"
            placeholder=" receiver phone ..."
            onChange={(event) => {
              setReceiver(event.target.value);
            }}
          />
          
        <Chat socket={socket} reveier={reveier} id={userInfromation.id}/>
      </div>
      </div>)
      }