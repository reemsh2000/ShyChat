const style = {
  homeContainer: {
    display: "flex",
    justifyContent: "flex-start",
    width: "100%",
  },
  contactsSection: {
    backgroundColor: "#F8F9FA",
    width: "35%",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "column" as "column",
  },
  chat: {
    backgroundColor: "rgb(243, 243, 243)",
    width: "65%",
    height: "100vh",

  },
  noChat: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: "30%",
    height: "auto",
  },
  messages: {
    height: "80vh",
    width: "100%",
    background: " linear-gradient(to bottom, #74c1b2 37%,#94eff7 70%)",
    // background: "#b5ccff",
    display: "flex",
    flexDirection: "column" as "column",
    padding: "2.5rem",
    // borderRadius: "1.5rem",
    },
  currentMessage: {
    height: "10vh",
    width: "90%",
    background: "#f3f3f3",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

  },
  none: {
    display: "none"
  }, 
  messageTyping: {
    height: "8vh",
    width: "90%",
    padding: "0.5rem",
    outline: "none",
    border: "2px solid #f7f7f7",
    borderRadius: "1rem"
  },
  footer: {
    display:"flex",
  },
  sendBtn: {
    width: "10%",
    fontSize: "1.5rem",
    border: "none",
    outline: "none", 
    color: "rgb(0, 60, 87)",
    cursor: "pointer",
    alignSelf: "center",
  },
  yoursMessage:{
    margin:'10px',
    display:'flex',
    justifyContent:'flex-end',
    flexDirection: "column" as "column",
    alignItems:'center',
    alignSelf: 'flex-start',
    position:'relative',
    
  },
  mineMessage:{
    display:'flex',
    justifyContent:'flex-end',
    margin:'10px',
    alignSelf: 'flex-end',
    alignItems:'center',
    flexDirection: "column" as "column",
  },

  userImage:{
   width:'30px',
   hight:'30px',
   borderRadius:'50%',
   marginRight:'7px',
  }

};
export default style;
