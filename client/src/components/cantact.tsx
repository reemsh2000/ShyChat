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
    width: "8rem",
    height: "100%",
    borderRadius: "50%",
  },
  image: {
    backgroundColor: "red",
    width: "90%",
    height: "90%",
    borderRadius: "50%",
  },
  textContainer: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
  BoxContainer: {
    display: "flex",
  },
});

const Cantact: React.FC<Props> = ({ name, imageLink, phoneNumber, userId }) => {
  const classes = useStyles();
  return (
    <div>
      <Box
        sx={{
          width: "100%",
          height: "6rem",
          backgroundColor: "#fff",
          "&:hover": {
            backgroundColor: "#3E9D8A",
            opacity: "0.9",
          },
          display: "flex",
          justifyContent: "space-evenly",
          padding: "10px",
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
          <h3>{name}</h3>
          <p>{phoneNumber}</p>
        </div>
      </Box>
    </div>
  );
};
export default Cantact;
