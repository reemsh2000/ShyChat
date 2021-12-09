import React from "react";
import Img from "../../components/common/Img";
import { SignUpForm } from "./SignUpForm";
import signup from "../../util/images/signup.jpg";
import "./style.css";

export const SignUp: React.FC = () => {
  return (
    <div className='page'>
    <div className='signUpContainer'>
      <div className='imageContainer'>
        <Img src={signup} alt="image-chat" styleName='image' />
      </div>
        <SignUpForm />
    </div>
    </div>
  );
};
