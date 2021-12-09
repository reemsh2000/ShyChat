import React, { useEffect, useState } from "react";
import ContactsSection from "./ContactsSection";
import "./style.css";
import UserNav from "../../components/common/userNav";
import Img from "../../components/common/Img";
import logo from "../../util/images/logo.png";
import { useSelector } from "react-redux";
import { State } from "../../state";
import http from "../../service/httpService";
import { Input } from "../../components/common/Input";
import { io } from "socket.io-client";
import SendIcon from "@mui/icons-material/Send";
import ScrollableFeed from 'react-scrollable-feed'
import { makeStyles } from "@mui/styles";
import './messages.css';

const socket = io('https://shychatapp.herokuapp.com', {
  withCredentials: true,
});

const useStyles = makeStyles({
  scrollBar: {
    display: "flex",
    justifyContent: 'space-between',
    flexDirection: "column" as "column",
    width: '100%',
    alignItems: 'flex-end',

    '&::-webkit-scrollbar': {
      width: '0.4em',
      // display:'none'
    },
    '&::-webkit-scrollbar-track': {
      '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: 'rgba(0,0,0,.1)',
      outline: '1px solid slategrey'
    },

  },

}
);

const Home = () => {
  const [currentMessage, setCurrentMessage] = useState("");

  const [messagesList, setMessagesList] = useState([]);

  const [chatData, setChatData] = useState({
    name: "",
    phone: "",
    photo: "",
  });

  const [userContacts, setUserContacts] = useState([]);
  const currentChatId = useSelector((state: State) => state.currentChat);
  const { id } = useSelector((state: State) => state.userInfromation);

  const sendMessage = async () => {
    if (currentMessage.trim() !== "") {
      const data = {
        userid: id,
        receiverId: currentChatId,
        content: currentMessage,
        messagetime: `${new Date(Date.now()).getHours()}:${new Date(
          Date.now()
        ).getMinutes()}`,
        id: messagesList.length + 1,
      };
      await socket.emit("send_message", data);
      const updateMessages: any = [...messagesList, data];
      setMessagesList(updateMessages);
      setCurrentMessage("");
    }
  };

  useEffect(() => {
    socket.on("receive_message", (data: any) => {
      const updateMessages: any = [...messagesList, data];
      setMessagesList(updateMessages);
    });
    // return ()=>
  }, [messagesList]);

  useEffect(() => {

    const getContacts = async () => {
      const { data } = await http.get("/user/contacts");
      setUserContacts(data.data);
    };
    getContacts();
  }, []);

  const handleChange = ({
    currentTarget: input,
  }: React.FormEvent<HTMLInputElement>) => {
    setCurrentMessage(input.value);
  };

  useEffect(() => {
    const getCurrentReceiver = (currentId: number) => {
      return userContacts.filter((item: any) => item.id === currentId);
    };
    const userReciver: any = getCurrentReceiver(currentChatId)[0];
    const updateChatData = { ...chatData, ...userReciver };
    setChatData(updateChatData);

    const getMessages = async () => {
      const { data } = await http.post("/user/messages", {
        receiverId: currentChatId,
      });
      const updateMessages: any = data.data;
      setMessagesList(updateMessages);
    };
    getMessages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentChatId]);
  const classes = useStyles();
  return (
    <div className='homeContainer'>
      <ContactsSection contacts={userContacts} currentChatId={currentChatId} />
      {currentChatId ? (
        //seperate it into  a new component
        <div className='chat'>
          <UserNav
            name={chatData?.name}
            imageLink={chatData?.photo}
            userId={currentChatId}
          />

          <div className='messages'>
            <ScrollableFeed className='scrollBar'>
              {messagesList.length && messagesList.map((message: any, index) => (
                <div key={index} className={message.userid === currentChatId ? 'yoursMessage' : 'mineMessage'}>
                  <div className='reMessage'>
                    {message.userid === currentChatId ? <Img src={chatData.photo} alt={`${chatData.name} photo`} styleName='userImage' /> : ''}
                    <p className={message.userid === currentChatId ? 'receivedMessage' : 'sentMessages'}>{message.content}</p>
                  </div>
                  <p className='message'>{message.messagetime}</p>
                </div>
              ))}
            </ScrollableFeed>
          </div>
          <div className='footer'>
            <Input
              name="currentMessage"
              label="Message"
              type="text"
              styleName='currentMessage'
              value={currentMessage}
              onChange={handleChange}
              labelStyle='none'
              inputStyle='messageTyping'
              placeholder="Message..."
              autoComplete="off"
              onSend={(e: any) => {
                if (e.keyCode === 13) {
                  e.preventDefault();
                  sendMessage()
                }
              }}
            />
            <SendIcon onClick={() => sendMessage()} className='sendBtn' />
          </div>
        </div>
      ) : (
        <div className='noChat'>
          <Img src={logo} alt="logo-Shy-chat" styleName='logo' />
        </div>
      )}
    </div>
  );
};
export default Home;
