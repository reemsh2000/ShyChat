import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";
interface Props {
  name: string;
  imageLink: string;
  phoneNumber: string;
  userId: number;
  key?: number;
}
const useStyles = makeStyles({
  imageContainer: {
    width: "19%",
    height: "auto",
  },
  image: {
    width: "75%",
    height: "3.8rem",
    borderRadius: "50%",
  },
  textContainer: {
    width: "83%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    padding: '0.25rem'
  },
  BoxContainer: {
    display: "flex",
  },
  contactName: {
    paddingBottom:'0.5rem',
    color: '#black'
  },
  contactsSection:{
    width:'100%',
  }
});

const Cantact: React.FC<Props> = ({ name, imageLink, phoneNumber, userId }) => {
  const classes = useStyles();
  const getChat = (id: number) => {};
  return (
    <div onClick={() => getChat(userId)} className={classes.contactsSection}>
      <Box
        sx={{
          width: "100%",
          paddingLeft: '1rem',
          backgroundColor: "#fff",
          "&:hover": {
            backgroundColor: "#3E9D8A",
            opacity: "0.9",
          },
          display: "flex",
          alignItems: "center",
          justifyContent: 'space-between',
          height: '12vh',
          border: "2px solid #f6f6f6",
          boxSizing: "border-box",
        }}
      >
        <div className={classes.imageContainer}>
          <img
            src={imageLink}
            alt="ass"
            loading="lazy"
            className={classes.image}
          />
        </div>
        <div className={classes.textContainer}>
          <h3 className={classes.contactName}>{name}</h3>
          <p>{phoneNumber}</p>
        </div>
      </Box>
    </div>
  );
};
export default Cantact;
