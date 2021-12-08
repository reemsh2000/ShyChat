import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";
import { useEffect, useState } from "react";
interface Props {
  name: string;
  imageLink: string;
  phoneNumber: string;
  key?: number;
  setId: React.MouseEventHandler<HTMLDivElement>;
  current?: boolean;
  userId?:number;
}
const useStyles = makeStyles({
  imageContainer: {
    width: "10vh",
    height: "10vh",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: "50%",
  },
  textContainer: {
    width: "81%",
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

const Cantact: React.FC<Props> = ({ name, imageLink, phoneNumber, setId, current }) => {
  const classes = useStyles();
  const [color, setColor] = useState("#fff")
useEffect(
  () => {
    if (current) {
      setColor("#3E9D8A")
    }
  },[current])
  
  return (
    <div onClick={setId} className={classes.contactsSection}>
      <Box
        sx={{
          width: "100%",
          paddingLeft: '1rem',
          backgroundColor: color,
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
