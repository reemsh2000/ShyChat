import { useEffect, useState } from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import http from '../service/httpService'
import { useDispatch, useSelector } from "react-redux";
import { actionCreators, State } from "../state";
import { bindActionCreators } from "redux";
import { CoPresentOutlined } from '@mui/icons-material';
import Cantact from './cantact'

interface SearchProps {

}

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '100%',
    },
  },
}));

const SearchAppBar: React.FC<SearchProps> = ({ }) => {
  const [searchInput, setSearchInput] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const dispatch = useDispatch();
  const { handleCurrentChat } = bindActionCreators(actionCreators, dispatch);
  const userInfromation = useSelector((state: State) => state.userInfromation);
  const { id } = userInfromation;
  const searchRequest = async () => {
    if (searchInput) {
      try {
        const users = await http.get('user/search/' + searchInput)
        setSearchResults(users.data);

      } catch (ex) {
        setSearchResults([]);
      }
    } else {
      setSearchResults([]);
    }
  }

  return (
    <>
      <Box sx={{ height: '10vh', width: '100%', }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
            >
            </IconButton>
            <Typography
              variant="h2"
              noWrap
              component="div"
              sx={{ display: { xs: 'none', sm: 'block' } }}
            >
              Shy Chat
            </Typography>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
                onChange={(e) => {
                  setSearchInput(e.target.value)
                  searchRequest()
                }}
                value={searchInput}
              />
            </Search>
          </Toolbar>
        </AppBar>
      </Box>
      {searchResults.map((user) => (
        id !== user['id'] &&
        <Cantact key={user['email']} name={user['name']} imageLink={user['photo']} email={user['email']} userId={user['id']} setId={() => {handleCurrentChat(user['id']);setSearchResults([]);setSearchInput('');}} />))}
    </>
  );
}


export default SearchAppBar