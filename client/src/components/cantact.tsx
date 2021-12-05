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
    width: "20%",
    height: "20%",
    borderRadius: "50%",
    marginRight:'15px'
  },
  image: {
    backgroundColor: "red",
    width: "90%",
    height: "90%",
    borderRadius: "50%",
  },
  textContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
  BoxContainer: {
    display: "flex",
  },
  contactName:{
    margin:'0',
    padding:'0'
  },
  chatLink:{
    textDecoration:'none',
    color:'#000',
    width:'100%'
  }
});

const Cantact: React.FC<Props> = ({ name, imageLink, phoneNumber, userId }) => {
  const classes = useStyles();
  return (<Link to='/chat' className={classes.chatLink}>
      <Box
        sx={{
          width: "100%",
          backgroundColor: "#fff",
          "&:hover": {
            backgroundColor: "#3E9D8A",
            opacity: "0.9",
          },
          display: "flex",
          padding: "10px",
          alignItems: 'center',
          border:'2px solid #f6f6f6',
          boxSizing:'border-box'
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
    </Link>
  );
};
export default Cantact;
