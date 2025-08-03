import React, { useState } from "react";
import Joi from "joi-browser";
import { Input } from "../../components/common/Input";
import "../signUp/style.css";
import { schema } from "./schema";
import { handleErrorMessage } from "../../state/action-creators";
import http from "../../service/httpService";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../../state";
import { useHistory, Link } from "react-router-dom";

export const LoginForm: React.FC = () => {
	localStorage.setItem("loginStatus", "");
	const [account, setAccount] = useState({
		email: "",
		password: "",
	});
	const [errors, setErrors] = useState({
		email: "",
		password: "",
	});
	const history = useHistory();
	const dispatch = useDispatch();
	const { handleErrorMessage, logIn } = bindActionCreators(actionCreators, dispatch);

	const updateErrorState = (arrError: any) => {
		const errorResult = arrError.reduce((acc: any, curr: any) => {
			acc[curr.path] = curr.message;
			return acc;
		}, {});
		return errorResult;
	};

	const validate = (values: any, schema: any) => {
		const { error } = Joi.validate(values, schema);
		if (!error) return null;
		return updateErrorState(error.details);
	};

	const handleChange = ({ currentTarget: input }: React.FormEvent<HTMLInputElement>) => {
		const updateAccountState = { ...account };
		//@ts-ignore
		updateAccountState[input.name] = input.value;
		setAccount(updateAccountState);
	};

	const doSubmit = async () => {
		try {
			await http.post("/user/login", account);
			logIn();
			localStorage.setItem("loginStatus", "true");
			history.push("/");
		} catch (error: any) {
			console.log(error);
			if (error.response && error.response.status >= 400 && error.response.status < 500) {
				handleErrorMessage({
					errState: true,
					errMessage: "verification failed",
				});
			} else {
				handleErrorMessage({
					errState: true,
					errMessage: "something went wrong",
				});
			}
		}
	};
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const errorResult = validate(account, schema);
		setErrors(errorResult || {});
		if (errorResult) return;
		doSubmit();
	};

	return (
		<form onSubmit={handleSubmit} className="md:w-1/3 w-full ">
			<Input placeholder="Enter Email" name="email" label="Email" value={account.email} onChange={handleChange} type="text" styleName="my-4" labelStyle="labelStyle" inputStyle="inputStyle" error={errors.email} errorStyle="errorMessage" />
			<Input placeholder="Enter Password" name="password" label="Password" value={account.password} onChange={handleChange} type="password" styleName="mt-5" labelStyle="labelStyle" inputStyle="inputStyle" error={errors.password} errorStyle="errorMessage" />
			<button type="submit" className="w-full my-4 text-white bg-green-500 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800">
				Login
			</button>
			<p>
				<Link to="/signup" className="my-2 text-sm">
					<span className="text-gray-500">Don't have an account ? </span>
					<span className="text-green-500 hover:border-green-500 hover:border-b-2"> Sign Up</span>
				</Link>
			</p>
			<div className="mt-6 md:mt-56 text-center text-sm text-gray-500">&copy; 2025 Chatter. All rights reserved.</div>
		</form>
	);
};
