const style = {
  editProfileContainer: {
    color: "#000",
    display:'flex',
    justifyContent: 'space-evenly',
    width:'100%',
    margin:'0 auto',
    outline:'none',
  
  },
  editProfileSection: {
    width:'24%',
    display:'flex',
    flexDirection: 'column' as "column",
  },
  userInfoSection:{
    display:'flex',
     justifyContent: 'space-evenly',
     alignItems: 'center',
     flexDirection: 'column' as "column",
     width:'100%',
     height:'70vh'
  },
  profileImgContainer:{
    display:'flex',
    justifyContent: 'center',
    padding:'30px',
    marginTop:'60px'
  },
  profileImg: {
    width: "140px",
    height: "140px",
    borderRadius: "50%",
  },
  divStyle:{
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
    width: '100%',
    flexDirection: 'column' as "column",
    // height:'40px',
  },
  labelStyle:{
    width:'180px',
    margin:'15px 0',
    color:'#187189'
  },
  inputStyle:{
    backgroundColor:'#fff',
    width:'80%',
    padding:'10px',
    outline:'none',
    border:'none',
    boxShadow: "1px 1px 2px 1px #787878",
  },
  logoSection:{
    width:'77%',
    display:'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column' as "column",
  },
  logoImage:{
   width:'50%',
  },
  imageInput:{
    display:'none'
  },  
  imageInputLabel:{
    height:'60px',
    width:'20px',
  },
  profileNav:{
    display:'flex',
    alignItems: 'center' ,
    justifyContent: 'flex-start',
    backgroundColor:'#65BBD4',
    width:'100%',
    height:'13vh',
    paddingLeft:'18px'
  },
  profileTitle:{
    paddingLeft:'15px'
  },
  userInformation:{
    display:'flex',
    alignItems: 'center' ,
    justifyContent: 'space-evenly',
    flexDirection: 'column' as "column",
    height:'70vh',
    width:'85%',
    marginLeft:'30px',
  },
  updateButton:{
    marginTop:'30px',
    backgroundColor:'#65BBD4',
    padding:'10px 13px',
    border:'none',
    borderRadius:'5px'
  }
};

export default style;
