import React, { useState } from "react";
import Joi from "joi-browser";
import { Input } from "../../components/common/Input";
import  "./style.css";
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

  const handleChange = ({
    currentTarget: input,
  }: React.FormEvent<HTMLInputElement>) => {
    const updateAccountState = { ...account };
    //@ts-ignore
    updateAccountState[input.name] = input.value;
    setAccount(updateAccountState);
  };

  const doSubmit = async () => {
    try {
      await http.post("/user/signup", account);
      history.push("/verfiy");
    } catch (error: any) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status < 500
      ) {
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
    <form onSubmit={handleSubmit} className='FormContainer'>
      <Input
        name="userName"
        label="User Name"
        value={account.userName}
        onChange={handleChange}
        type="text"
        styleName='inputContainer'
        labelStyle='labelStyle'
        inputStyle='inputStyle'
        error={errors.userName}
        errorStyle='errorMessage'
      />
      <Input
        name="email"
        label="Email"
        value={account.email}
        onChange={handleChange}
        type="text"
        styleName='inputContainer'
        labelStyle='labelStyle'
        inputStyle='inputStyle'
        error={errors.email}
        errorStyle='errorMessage'
      />
      <Input
        name="password"
        label="Password"
        value={account.password}
        onChange={handleChange}
        type="password"
        styleName='inputContainer'
        labelStyle='labelStyle'
        inputStyle='inputStyle'
        error={errors.password}
        errorStyle='errorMessage'
      />
      <Input
        name="confirmPassword"
        label="Confirm Password"
        value={account.confirmPassword}
        onChange={handleChange}
        type="password"
        styleName='inputContainer'
        labelStyle='labelStyle'
        inputStyle='inputStyle'
        error={errors.confirmPassword}
        errorStyle='errorMessage'
      />
      <input value="Sign up" type="submit" className='submit' />
      <p>
        <Link to="/">go to LOGIN</Link>
      </p>
    </form>
  );
};
