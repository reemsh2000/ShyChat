import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';
interface Props {
    name: string;
    imageLink: string;
    lastMessage: string;
}
const useStyles = makeStyles({
  imageContainer: {
    width: '8rem',
    height: '100%',
    borderRadius: '50%',
  },
  image: {
    backgroundColor: 'red',
    width: '100%',
    height: '100%',
    borderRadius: '50%',

  },
  textContainer: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly'
  
  },
  BoxContainer: {
    display: 'flex',
  }
});

const Cantact:React.FC<Props> = ({name,imageLink,lastMessage}) => {
  const classes = useStyles();
  return (
      <Box
      sx={{
        width: '100%',
        height: '7rem',
        '&:hover': {
          backgroundColor: 'text.disabled',
          opacity: '0.9',
        },
        display: 'flex',
      }}
    >
      <div className={classes.imageContainer}>
      <img
        src={imageLink}
        alt={'ass'}
        loading="lazy"
        className={classes.image}
        />
        </div>
        <div className={classes.textContainer}>
        <h3>
          {name}
        </h3>
        <p>
          {lastMessage}
        </p>
        </div>
        </Box>

  );
}
export default Cantact; 