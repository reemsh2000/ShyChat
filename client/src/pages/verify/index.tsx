import React from 'react';
import Img from '../../components/common/Img';
import { VerifyForm } from './VerifyForm';
import signup from '../../util/images/signup.jpg';
import style from '../signUp/style';

const Verify: React.FC = () => (
  <div style={style.signUpContainer}>
    <div style={style.imageContainer}>
      <Img src={signup} alt="image-chat" styleName={style.image} />
    </div>
    <VerifyForm />
  </div>
);

export default Verify;
