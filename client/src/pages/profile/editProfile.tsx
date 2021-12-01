import React, { useState } from "react";
import { useSelector } from "react-redux";
import { State } from "../../state";
import style from "./style";
import previewFile from "../../util/previewFile";
import { EditProfileSection } from "./editProfileSection";
import { Img } from "../../components/common/Img";
import logo from "../../util/images/logo.png";
import http from "../../service/httpService";
export const EditProfile: React.FC = () => {
  const userInfromation = useSelector((state: State) => state.userInfromation);
  const { id, name, phoneNumber, photo, bio } = userInfromation;
  const [bioText, setBioText] = useState("");
  const [image, setImage] = useState(photo);
  const handleBioChang = (e: any) => {
    setBioText(e.target.value);
  };
  const changeHandler = (e: any) => {
    const file = e.target.files[0];
    previewFile(file, setImage);
  };
  const handleSubmit=async()=>{
   await http.put('/user/editProfile',{
    bioText,
    image,
    id
   })
  }
  return (
    <div style={style.editProfileContainer}>
      <EditProfileSection
        name={name}
        bio={bio}
        phoneNumber={phoneNumber}
        handleBioChang={handleBioChang}
        changeHandler={changeHandler}
        handleSubmit={handleSubmit}
        image={image}
      />
      <div style={style.logoSection}>
        <Img styleName={style.logoImage} alt="logo" src={logo} />
      </div>
    </div>
  );
};
