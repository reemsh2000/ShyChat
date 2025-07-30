import React from "react";
import Img from "../../components/common/Img";
import { LoginForm } from "./LoginForm";
import login from "../../util/images/signup.jpg";
import  "../signUp/style.css";
const Login: React.FC = () => {
  return (
    <div className='page'>
      <div className='signUpContainer'>
        <div className='imageContainer'>
          <Img src={signup} alt="image-chat" styleName='image' />
        </div>
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
