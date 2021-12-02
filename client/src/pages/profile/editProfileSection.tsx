import React from 'react'
import style from './style';
import {Link} from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import { Input } from '../../components/common/Input';
interface EditProfileSectionProps {
  name:string,
  phoneNumber:string,
  bio:string,
  handleBioChang?: React.ChangeEventHandler<HTMLInputElement> ,
  changeHandler: React.ChangeEventHandler<HTMLInputElement> ,
  handleSubmit:React.FormEventHandler<HTMLButtonElement> 
  image:string
}

export const EditProfileSection: React.FC<EditProfileSectionProps> = ({
   name,
  phoneNumber,
  bio,
  handleBioChang,
  changeHandler,
  handleSubmit,
  image
}) => {
    return (
      <div style={style.editProfileSection}>
        <nav style={style.profileNav}>
          {/* <Link to= '/'> */}
        <ArrowBackIcon/>
        {/* </Link> */}
        <h3 style={style.profileTitle}>Profile</h3>
        </nav>
        <div style={style.userInfoSection}>
      <div style={style.profileImgContainer} >
      <img alt={`${name} profile`} src='https://www.kindpng.com/picc/m/78-785827_user-profile-avatar-login-account-male-user-icon.png'style={style.profileImg}/>
      <label htmlFor="User Image" style={style.imageInputLabel}><ModeEditOutlineIcon/></label>
      </div>
      <div style={style.userInformation}>
      <Input  name={name}  value={name} type='text' label='Name' disabled={true} styleName={style.divStyle} labelStyle={style.labelStyle}inputStyle={style.inputStyle}/>
      <Input  name={phoneNumber}  value={phoneNumber} type='text' label='Phone Number' disabled={true} styleName={style.divStyle}labelStyle={style.labelStyle}inputStyle={style.inputStyle}/>
      <Input onChange={handleBioChang} name={bio}  value={bio} type='text' label='Bio'styleName={style.divStyle}labelStyle={style.labelStyle} inputStyle={style.inputStyle}/>
      </div>
      <div style={style.divStyle}>
      <input
        onChange={changeHandler}
        name="User Image"
        id="User Image"
        type='file'
        style={style.imageInput}
      />
    </div>
    <button style={style.updateButton} onSubmit={handleSubmit}>Update Profile</button> 
    </div>
    </div>
    );
}