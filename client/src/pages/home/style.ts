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
    display: "flex",
    flexDirection: "column" as "column",
    padding: "2.5rem",
    borderRadius: "1.5rem"
  },
  currentMessage: {
    height: "10vh",
    width: "100%",
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
    width: "100%",
    padding: "0.5rem",
    outline: "none",
    border: "2px solid #f7f7f7",
    borderRadius: "1rem"
    
    
  }

};
export default style;
