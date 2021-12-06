import React, { useEffect, useState } from "react";
import ContactsSection from "./ContactsSection";
import style from "./style";
import UserNav from "../../components/common/userNav";
import Img from "../../components/common/Img";
import logo from "../../util/images/logo.png";
import { useSelector } from "react-redux";
import { State } from "../../state";
import http from "../../service/httpService";
import { Input } from "../../components/common/Input";
const Home = () => {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messagesList, setMessagesList] = useState([]);
  const [chatData, setChatData] = useState({
    name: "",
    phoneNumber: "",
    photo: "",
  });
  const [userContacts, setUserContacts] = useState([]);
  const currentChatId = useSelector((state: State) => state.currentChat);
  useEffect(() => {
    const getContacts = async () => {
      const { data } = await http.get("/user/contacts");
      setUserContacts(data.data);
    };
    getContacts();
  }, []);

  const getCurrentReceiver = (currentId: number) => {
    return userContacts.filter((item: any) => item.id === currentId);
  };

  const handleChange = ({
    currentTarget: input,
  }: React.FormEvent<HTMLInputElement>) => {
    setCurrentMessage(input.value);
  };

  useEffect(() => {
    const userReciver: any = getCurrentReceiver(1)[0];
    const updateChatData = { ...chatData, ...userReciver };
    setChatData(updateChatData);

    const getMessages = async () => {
      const { data } = await http.post("/user/messages", {
        receiverId: currentChatId,
      });
      const updateMessages: any = [...messagesList, ...data.data];
      setMessagesList(updateMessages);
    };
    getMessages();
  }, [currentChatId]);
  console.log(messagesList)
  return (
    <div style={style.homeContainer}>
      <ContactsSection contacts={userContacts} currentChatId={currentChatId} />
      {currentChatId ? (
        //seperate it into  a new component
        <div style={style.chat}>
          <UserNav
            name={chatData?.name}
            imageLink={chatData?.photo}
            userId={currentChatId}
          />

          <div style={style.messages}>
            


          </div>

          <Input
            name="currentMessage"
            label="Message"
            type="text"
            styleName={style.currentMessage}
            value={currentMessage}
            onChange={handleChange}
            labelStyle={style.none}
            inputStyle={style.messageTyping}
            placeholder="Message..."
            autoComplete="off"
          />
        </div>
      ) : (
        <div style={style.noChat}>
          <Img src={logo} alt="logo-Shy-chat" styleName={style.logo} />
        </div>
      )}
    </div>
  );
};
export default Home;
