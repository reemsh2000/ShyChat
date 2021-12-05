import React from "react";
import { ContactsSection } from "./ContactsSection";
import style from './style'
const Home = () => {
  return ( <div style={style.homeContainer}>
    <ContactsSection/>
     <div  style={style.chat}></div>

  </div>
  )}
export default Home;
