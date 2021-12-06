import React from "react";
import Cantact from "../../components/cantact";
import style from "./style";

interface ContactsSection {
  contacts: any[],
}

 const ContactsSection: React.FC<ContactsSection> = ({contacts}) => {
  return (
    <div style={style.contactsSection}>
      {contacts.length ? (
        contacts.map((item: any) => <Cantact
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