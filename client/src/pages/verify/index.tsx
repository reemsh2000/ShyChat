import React from "react";
import Img from "../../components/common/Img";
import { VerifyForm } from "./VerifyForm";
import signup from "../../util/images/auth-img.png";
import  "../signUp/style.css";

const Verify: React.FC = () => (
  <div className='page'>
    <div className='signUpContainer'>
      <div className='imageContainer'>
        <Img src={signup} alt="image-chat" styleName='image' />
      </div>
      <VerifyForm />
    </div>
  </div>
);

export default Verify;
