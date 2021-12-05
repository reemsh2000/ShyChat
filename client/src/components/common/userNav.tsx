import React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";

interface UserNavProps {
  name: string;
  imageLink: string;
  userId: number;
  key?: number;
}
const useStyles = makeStyles({
  imageContainer: {
    width: "10%",
    height: "100%",
    borderRadius: "50%",
  },
  image: {
    backgroundColor: "red",
    width: "70%",
    height: "auto",
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
  contactName: {
    margin: "0",
    padding: "0",
  },
  contactsSection: {
    width: "100%",
    height:'20vh'
  },
});

const UserNav: React.FC<UserNavProps> = ({
  name,
  imageLink,
  userId,
}) => {
  const classes = useStyles();
  const getChat = (id: number) => {};
  return (
      <Box
        sx={{
          width: "100%",
          height:'5rem',
          backgroundColor: "#fff",
          display: "flex",
          padding: "10px",
          alignItems: "center",
          border: "2px solid #f6f6f6",
          boxSizing: "border-box",
        }}
      >
        <div className={classes.imageContainer}>
          <img
            src={imageLink}
            alt={`${name} photo`}
            className={classes.image}
          />
        </div>
        <div className={classes.textContainer}>
          <h3 className={classes.contactName}>{name}</h3>
        </div>
      </Box>
  );
};

export default UserNav;
