import React from 'react'
import './style.css';
import { Link } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import { Input } from '../../components/common/Input';
interface EditProfileSectionProps {
  name: string,
  email: string,
  bio: string,
  handleBioChang?: React.ChangeEventHandler<HTMLInputElement>,
  changeHandler: React.ChangeEventHandler<HTMLInputElement>,
  handleSubmit: React.FormEventHandler<HTMLButtonElement>
  image: string
}

export const EditProfileSection: React.FC<EditProfileSectionProps> = ({
  name,
  email,
  bio,
  handleBioChang,
  changeHandler,
  handleSubmit,
  image
}) => {
  return (
    <div className='editProfileSection'>
      <nav className='profileNav'>
        <ArrowBackIcon />
        <h3 className='profileTitle'>Profile</h3>
      </nav>
      <div className='userInfoSection'>
        <div className='profileImgContainer'>
          <img alt={`${name} profile`} src={image} className='profileImg' />
          <label htmlFor="User Image" className='imageInputLabel'><ModeEditOutlineIcon /></label>
        </div>
        <div className='userInformation'>
          <Input name={name} value={name} type='text' label='Name' disabled={true} styleName='divStyle' inputStyle='inputStyle' />
          <Input name={email} value={email} type='text' label='Email' disabled={true} styleName='divStyle' inputStyle='inputStyle' />
          <Input onChange={handleBioChang} name={bio} value={bio} type='text' label='Bio' styleName='divStyle' inputStyle='inputStyle' />
        </div>
        <div className='divStyle'>
          <input
            onChange={changeHandler}
            name="User Image"
            id="User Image"
            type='file'
            className='imageInput'
          />
        </div>
        <button className='updateButton' onSubmit={handleSubmit}>Update Profile</button>
      </div>
    </div>
  );
}