import React, { useState } from "react";
import Joi from "joi-browser";
import { Input } from "../../components/common/Input";
import style from "../signUp/style";
import { schema } from "./schema";
import http from "../../service/httpService";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../../state";
import { useHistory } from "react-router-dom";

export const VerifyForm: React.FC = () => {
  const [account, setAccount] = useState({
    phoneNumber: "",
    code: "",
  });
  const [errors, setErrors] = useState({
    phoneNumber: "",
    code: "",
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
      await http.post("/user/verify", account);
      logIn();
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
    <form onSubmit={handleSubmit} style={style.FormContainer}>
      <Input
        name="phoneNumber"
        label="Phone Number"
        value={account.phoneNumber}
        onChange={handleChange}
        type="text"
        styleName={style.inputContainer}
        labelStyle={style.labelStyle}
        inputStyle={style.inputStyle}
        error={errors.phoneNumber}
        errorStyle={style.errorMessage}
      />
      <Input
        name="code"
        label="Code"
        value={account.code}
        onChange={handleChange}
        type="text"
        styleName={style.inputContainer}
        labelStyle={style.labelStyle}
        inputStyle={style.inputStyle}
        error={errors.code}
        errorStyle={style.errorMessage}
      />
      <input value="Confirm" type="submit" style={style.submit} />
      <p> go to LOGIN</p>
    </form>
  );
};
