import { useEffect, useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import http from "../service/httpService";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators, State } from "../state";
import { bindActionCreators } from "redux";
import { CoPresentOutlined } from "@mui/icons-material";
import Cantact from "./cantact";

interface SearchProps {
	setSearch:Function
}

const Search = styled("div")(({ theme }) => ({
	position: "relative",
	borderRadius: theme.shape.borderRadius,
	backgroundColor: alpha(theme.palette.common.white, 0.15),
	"&:hover": {
		backgroundColor: alpha(theme.palette.common.white, 0.25),
	},
	marginLeft: 0,
	width: "100%",
	[theme.breakpoints.up("sm")]: {
		marginLeft: theme.spacing(1),
		width: "auto",
	},
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
	padding: theme.spacing(0, 2),
	height: "100%",
	position: "absolute",
	pointerEvents: "none",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
	color: "inherit",
	"& .MuiInputBase-input": {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)})`,
		transition: theme.transitions.create("width"),
		width: "100%",
		[theme.breakpoints.up("sm")]: {
			width: "100%",
		},
	},
}));

const SearchAppBar: React.FC<SearchProps> = ({setSearch}) => {
	const [searchInput, setSearchInput] = useState("");
	const [searchResults, setSearchResults] = useState([]);
	const dispatch = useDispatch();
	const { handleCurrentChat } = bindActionCreators(actionCreators, dispatch);
	const userInfromation = useSelector((state: State) => state.userInfromation);
	const { id } = userInfromation;
	const searchRequest = async () => {
		if (searchInput) {
			try {
				const users = await http.get("user/search/" + searchInput);
				setSearchResults(users.data);
			} catch (ex) {
				setSearchResults([]);
			}
		} else {
			setSearchResults([]);
		}
	};

	return (
		<>
			<div className="">
				<div className="font-bold text-2xl py-5 px-2 text-green-500">Chats</div>
				<form className="max-w-sm mx-auto p-2">
					<label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
						Search
					</label>
					<div className="relative">
						<input
							type="search"
							id="default-search"
							className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
							placeholder="Search here..."
							required
							onChange={(e) => {
								setSearchInput(e.target.value);
								setSearch(e.target.value);
								searchRequest();
							}}
						/>
						<div className="absolute inset-y-0 right-4 flex items-center ps-3 pointer-events-none">
							<svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
								<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
							</svg>
						</div>
					</div>
				</form>
			</div>
			{searchResults.map(
				(user) =>
					id !== user["id"]&& !!searchInput && (
						<Cantact
							key={user["email"]}
							name={user["name"]}
							imageLink={user["photo"]}
							email={user["email"]}
							userId={user["id"]}
							setId={() => {
								handleCurrentChat(user["id"]);
								setSearchResults([]);
								setSearchInput("");
							}}
						/>
					)
			)}
		</>
	);
};

export default SearchAppBar;
