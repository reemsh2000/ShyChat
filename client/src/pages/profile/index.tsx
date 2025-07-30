import React, { useState } from "react";
import { useSelector } from "react-redux";
import { State } from "../../state";
import "./style.css";
import previewFile from "../../util/previewFile";
import { EditProfileSection } from "./editProfileSection";
import Img from "../../components/common/Img";
import logo from "../../util/images/logo.png";
import http from "../../service/httpService";
export const EditProfile: React.FC = () => {
  const userInfromation = useSelector((state: State) => state.userInfromation);
  const { id, name, email, photo, bio } = userInfromation;
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
    <div className='editProfileContainer'>
      <EditProfileSection
        name={name}
        bio={bio}
        email={email}
        handleBioChang={handleBioChang}
        changeHandler={changeHandler}
        handleSubmit={handleSubmit}
        image={image}
      />
      <div className='logoSection'>
        <Img styleName='logoImage' alt="logo" src={logo} />
      </div>
    </div>
  );
};
