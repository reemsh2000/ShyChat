import React, { useEffect, useState } from "react";
import Cantact from "../../components/cantact";
import http from "../../service/httpService";
import style from './style';

export const ContactsSection: React.FC = () => {
  const [userContacts, setUserContacts] = useState([]);

  useEffect(() => {
    const getContacts = async () => {
      const { data } = await http.get("/user/contacts");
      setUserContacts(data.data);
    };
    getContacts();
  },[]);
  return (
    <div style={style.contactsSection}>
      {userContacts.length? (
        userContacts.map((item: any) => {
          <Cantact
            key={item.id}
            name={item.name}
            imageLink={item.photo}
            phoneNumber={item.phoneNumber}
            userId={item.id}
          />;
        })
      ) :  <p>  </p>
      } 
         
    </div>
  );
};
