import React, { useEffect, useState } from "react";
import ContactsSection from "./ContactsSection";
import style from "./style";
import UserNav from "../../components/common/userNav";
import Img from "../../components/common/Img";
import logo from "../../util/images/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../../state";
import http from "../../service/httpService";
import { Input } from "../../components/common/Input";
const Home = () => {
  const [chatData, setChatData] = useState({
    name: "",
    phoneNumber: "",
    photo: "",
  });
  const [userContacts, setUserContacts] = useState([
    {
      id: 1,
      name: "ahmed",
      phoneNumber: "0599585854",
      photo:
        "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGhvdG98ZW58MHx8MHx8&w=1000&q=80",
    },
    {
      id: 2,
      name: "mohammed",
      phoneNumber: "0592574654",
      photo:
        "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGhvdG98ZW58MHx8MHx8&w=1000&q=80",
    },
    {
      id: 3,
      name: "master",
      phoneNumber: "0598687226",
      photo:
        "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGhvdG98ZW58MHx8MHx8&w=1000&q=80",
    },
  ]);
  const dispatch = useDispatch();
  const { handleCurrentChat } = bindActionCreators(actionCreators, dispatch);
  const currentChatId = useSelector((state: State) => state.currentChat);
  useEffect(() => {
    // const getContacts = async () => {
    //   const { data } = await http.get("/user/contacts");
    //   setUserContacts(data.data);
    // };
    // getContacts();
  }, []);

  const getCurrentReceiver = (currentId: number) => {
    return userContacts.filter((item) => item.id === currentId);
  };
  useEffect(() => {
    const userReciver = getCurrentReceiver(1)[0];
    const updateChatData = { ...chatData, ...userReciver };
    setChatData(updateChatData);
  }, [currentChatId]);

  return (
    <div style={style.homeContainer}>
      <ContactsSection contacts={userContacts} />
      {1 ? (
        <div style={style.chat}>
          <UserNav
            name={chatData.name}
            imageLink={chatData.photo}
            userId={currentChatId}
          />
          <div style={style.messages}>here chat messages</div>
          <Input
            name="currentMessage"
            label="Message"
            type="string"
            styleName={style.currentMessage}
            value="Message..."
            // onChange?: React.ChangeEventHandler<HTMLInputElement>;
            labelStyle={style.none}
            inputStyle={style.messageTyping}
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
