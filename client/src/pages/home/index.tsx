import React, { useEffect, useState } from "react";
import ContactsSection from "./ContactsSection";
import style from "./style";
import UserNav from "../../components/common/userNav";
import Img from "../../components/common/Img";
import logo from "../../util/images/logo.png";
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators, State } from '../../state';
const Home = () => {
  //convert this to redux function.
  // const [currentChat, setCurrentChat] = useState(0);
  const dispatch = useDispatch();
  const { handleCurrentChat } = bindActionCreators(
    actionCreators,
    dispatch,
  );
  const currentChat = useSelector((state: State) => state.isLogged);
  useEffect(() => {
    handleCurrentChat(5)
  //   const getContacts = async () => {
  //     const { data } = await http.get("/user/contacts");
  //     setUserContacts(data.data);
  //   };
  //   getContacts();
  }, []);

  return (
    <div style={style.homeContainer}>
      <ContactsSection />

      {currentChat ? (
        <div style={style.chat}>
          <UserNav
            name="niazar"
            imageLink="data:image/png;base64,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"
            userId={1}
          />
        </div>
      ) : (
        <div style={style.noChat}>
          <Img src={logo} alt="logo-Shy-chat" styleName={style.logo}/>
        </div>
      )}
    </div>
  );
};
export default Home;
