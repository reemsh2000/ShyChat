import React from "react";
import Cantact from "../../components/cantact";
import  "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../../state";
import SearchAppBar from '../../components/Search';

interface ContactsSection {
  contacts: any[],
  currentChatId?: number,

}

 const ContactsSection: React.FC<ContactsSection> = ({contacts, currentChatId}) => {
  const dispatch = useDispatch();
  const { handleCurrentChat } = bindActionCreators(actionCreators, dispatch);
  return (
    <div className='contactsSection'>
          <SearchAppBar />
      {contacts.length ? (
        contacts.map((item: any) => <Cantact    
            setId={() => handleCurrentChat(item.id)}
            key={item.id}
            name={item.name}
            imageLink={item.photo}
            phoneNumber={item.phoneNumber}
            current = {item.id === currentChatId}
          />
        )
      ) : (
        <p> there is no contacts </p>
      )}
    </div>
  );
};

export default ContactsSection;