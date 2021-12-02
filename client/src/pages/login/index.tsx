import React from "react";
import { Img } from "../../components/common/Img";
import { LoginForm } from "./LoginForm";
import signup from "../../util/images/signup.jpg";
import style from "./style";

export const Login: React.FC = () => {
  return (
    <div style={style.signUpContainer}>
      <div style={style.imageContainer}>
        <Img src={signup} alt="image-chat" styleName={style.image} />
      </div>
        <LoginForm />
    </div>
  );
};
