import React, { useState } from 'react'
import { useSelector } from "react-redux";
import { Input } from '../../components/common/Input';
import { State } from "../../state";
import BorderColorIcon from '@mui/icons-material/BorderColor';
import style from './style';
import previewFile
 from '../../util/previewFile';
export const EditProfile: React.FC = () => {
const [userBio,setUserBio]=useState('')
const [userImage,setUserImage]=useState('')
  const handleBioChang=(e:any) =>{
    setUserBio(e.target.value)
  }
  const changeHandler = (e:any) => {
    const file = e.target.files[0];
    previewFile(file, setUserImage);

	};

  const  userInfromation= useSelector((state:State) => state.userInfromation);
  const {id,name,phoneNumber,photo,bio}=userInfromation

  console.log(userInfromation)
    return (
    <div style={style.editProfileContainer}>
      <div >
      <img alt={`${name} profile`} src='https://www.kindpng.com/picc/m/78-785827_user-profile-avatar-login-account-male-user-icon.png'style={style.profileImg}/>
      {/* <button onClick={handleClick} >  <BorderColorIcon/> </button> */}
      </div>
      <Input  name={name}  value={name} type='text' label='Name' disabled/>
      <Input  name={phoneNumber}  value={phoneNumber} type='text' label='Phone Number'disabled/>
      <Input onChange={handleBioChang} name={bio}  value={bio} type='text' label='Bio'/>
      <Input onChange={changeHandler} name="User Image" type='file' label=''/> 
    
    </div>
    );
}