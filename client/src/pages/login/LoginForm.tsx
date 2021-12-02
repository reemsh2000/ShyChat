import React, { useState } from "react";
import Joi from "joi-browser";
import { Input } from "../../components/common/Input";
import style from "./style";
import { schema } from "./schema";

export const LoginForm: React.FC = () => {
  const [account, setAccount] = useState({
    phoneNumber: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    phoneNumber: "",
    password: "",
  });

  const validate = (values: any, schema: any) => {
    const { error } = Joi.validate(values, schema);
    if (!error) return null;
    const { path, message } = error.details[0];
    const updateErrorsState: any = {};
    updateErrorsState[path] = message;
    return updateErrorsState;
  };

  const handleChange = ({
    currentTarget: input,
  }: React.FormEvent<HTMLInputElement>) => {
    const updateAccountState = { ...account };
    //@ts-ignore
    updateAccountState[input.name] = input.value;
    setAccount(updateAccountState);
  };

  const doSubmit = () => {
    //call server request
    console.log("submitted");
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
        name="password"
        label="Password"
        value={account.password}
        onChange={handleChange}
        type="password"
        styleName={style.inputContainer}
        labelStyle={style.labelStyle}
        inputStyle={style.inputStyle}
        error={errors.password}
        errorStyle={style.errorMessage}
      />
      <input value="Login" type="submit" style={style.submit} />
      <p> go to LOGIN</p>
    </form>
  );
};
