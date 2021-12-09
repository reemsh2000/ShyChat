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
  localStorage.setItem('loginStatus', '');
  const [account, setAccount] = useState({
    phoneNumber: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    phoneNumber: "",
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
      await http.post("/user/login", account);
      logIn();
      localStorage.setItem('loginStatus', 'true');
      history.push("/");
    } catch (error: any) {
      console.log(error);
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status < 500
      ) {
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
    <form onSubmit={handleSubmit} className='FormContainer'>
      <Input
        name="phoneNumber"
        label="Phone Number"
        value={account.phoneNumber}
        onChange={handleChange}
        type="text"
        styleName='inputContainer'
        labelStyle='labelStyle'
        inputStyle='inputStyle'
        error={errors.phoneNumber}
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
      <input value="Login" type="submit" className='submit' />
      <p> 
      <Link to="/signup">Go To SIgn UP</Link>
      </p>
    </form>
  );
};
