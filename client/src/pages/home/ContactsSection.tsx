import React from "react";
import Cantact from "../../components/cantact";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../../state";
import SearchAppBar from '../../components/Search';
import ScrollableFeed from 'react-scrollable-feed'

interface ContactsSection {
  contacts: any[],
  currentChatId?: number,

}

const ContactsSection: React.FC<ContactsSection> = ({ contacts, currentChatId }) => {
  const dispatch = useDispatch();
  const { handleCurrentChat } = bindActionCreators(actionCreators, dispatch);
  return (
    <div className='contactsSection'>
      <SearchAppBar />
      <ScrollableFeed className='scrollBar'>
        {contacts.length ? (
          contacts.map((item: any) => <Cantact
            setId={() => handleCurrentChat(item.id)}
            key={item.id}
            name={item.name}
            imageLink={item.photo}
            email={item.email}
            current={item.id === currentChatId}
          />
          )
        ) : (
          <p> there is no contacts </p>
        )}
      </ScrollableFeed>
    </div>
  );
};

export default ContactsSection;