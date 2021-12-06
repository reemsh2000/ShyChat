import React, { useEffect, useState } from "react";
import Cantact from "../../components/cantact";
import http from "../../service/httpService";
import style from "./style";

 const ContactsSection: React.FC = () => {
  // const [userContacts, setUserContacts] = useState([]);
  const userContacts = [
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
  ];

  // useEffect(() => {
  //   const getContacts = async () => {
  //     const { data } = await http.get("/user/contacts");
  //     setUserContacts(data.data);
  //   };
  //   getContacts();
  // }, []);
  console.log(userContacts)
  return (
    <div style={style.contactsSection}>
      {userContacts.length ? (
        userContacts.map((item: any) => <Cantact
            key={item.id}
            name={item.name}
            imageLink={item.photo}
            phoneNumber={item.phoneNumber}
            userId={item.id}
          />
        )
      ) : (
        <p> there is no contacts </p>
      )}
    </div>
  );
};

export default ContactsSection;