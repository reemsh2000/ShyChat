import React, { useState } from "react";
import Joi from "joi-browser";
import { Input } from "../../components/common/Input";
import { schema } from "./schema";
import http from "../../service/httpService";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../state";
import { useHistory, Link } from "react-router-dom";

export const SignUpForm: React.FC = () => {
	const [account, setAccount] = useState({
		userName: "",
		email: "",
		password: "",
		confirmPassword: "",
	});
	const [errors, setErrors] = useState({
		userName: "",
		email: "",
		password: "",
		confirmPassword: "",
	});
	const history = useHistory();
	const dispatch = useDispatch();
	const { handleErrorMessage } = bindActionCreators(actionCreators, dispatch);

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
			await http.post("/user/signup", account);
		    localStorage.setItem('loginStatus', 'true');
            history.push("/");
		} catch (error: any) {
			if (error.response && error.response.status >= 400 && error.response.status < 500) {
				if (error.response.data.errorCode === "AS_1002") {
					setErrors(updateErrorState(error.response.data.details) || {});
				} else {
					handleErrorMessage({
						errState: true,
						errMessage: "incorrect username or password",
					});
				}
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
			<Input name="email" label="Email" value={account.email} onChange={handleChange} type="text" inputStyle="w-full" error={errors.email} errorStyle="errorMessage" />
			<Input name="userName" label="Name" styleName="mt-4" value={account.userName} onChange={handleChange} type="text" inputStyle="w-full" error={errors.userName} errorStyle="errorMessage" />

			<Input name="password" label="Password" value={account.password} onChange={handleChange} type="password" styleName="mt-4" inputStyle="w-full" error={errors.password} errorStyle="errorMessage" />
			<Input name="confirmPassword" label="Confirm Password" value={account.confirmPassword} onChange={handleChange} type="password" styleName="mt-4" inputStyle="w-full" error={errors.confirmPassword} errorStyle="errorMessage" placeholder="Re-enter Password" />
			<button type="submit" className="w-full my-4 text-white bg-green-500 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800">
				Sign Up
			</button>
			<p>
				<Link to="/" className="my-2 text-sm">
					<span className="text-gray-500">Already have an account ? </span>
					<span className="text-green-500 hover:border-green-500 hover:border-b-2">Login</span>
				</Link>
			</p>
			<div className="mt-6 md:mt-20 text-center text-sm text-gray-500">&copy; 2025 Chatter. All rights reserved.</div>
		</form>
	);
};
