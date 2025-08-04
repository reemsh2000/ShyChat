import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import React, { useEffect } from "react";
import jwt_decode from "jwt-decode";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../state";
import { theme } from "../util/customizeStyle";
import "./style.css";
import { SignUp } from "../pages/signUp";
import CustomizedSnackbars from "../service/ErrorAlert";
import Login from "../pages/login";
import Verify from "../pages/verify";
import Home from "../pages/home";
import ProtectedRoute from "./ProtectedRoute";
import { EditProfile } from "../pages/profile";
import Sidebar from "../components/Sidebar";

const App = () => {
	const dispatch = useDispatch();
	const { getUserData } = bindActionCreators(actionCreators, dispatch);
	const isLoggedState = useSelector((state: State) => state.isLogged);
	useEffect(() => {
		if (isLoggedState) {
			getUserData(jwt_decode(document.cookie));
		}
	}, [isLoggedState, getUserData]);

	return (
		<ThemeProvider theme={theme}>
			<div className="app">
				<Router>
					<Switch>
						<Route path="/signup" component={SignUp} />
						<Route path="/verfiy" component={Verify} />
						<Route exact path="/login" component={Login} />
						<ProtectedRoute isLogged={isLoggedState} path="/editprofile">
							<Sidebar />

							<EditProfile />
						</ProtectedRoute>
						<ProtectedRoute isLogged={isLoggedState} path="/">
							<Sidebar />

							<Home />
						</ProtectedRoute>

						{/* <Route path="/notfound" component={Error} /> */}
						{/* <Redirect to="/Not-Found" /> */}
					</Switch>
				</Router>
				<CustomizedSnackbars />
			</div>
		</ThemeProvider>
	);
};
export default App;
