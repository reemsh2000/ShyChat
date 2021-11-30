import React from "react";
import { Img } from "../../components/common/Img";
import { SignUpForm } from "./SignUpForm";
import signup from "../../util/images/signup.jpg";
import style from "./style";

export const SignUp: React.FC = () => {
  return (
    <div style={style.signUpContainer}>
      <div style={style.imageContainer}>
        <Img src={signup} alt="image-chat" styleName={style.image} />
      </div>
        <SignUpForm />
    </div>
  );
};
