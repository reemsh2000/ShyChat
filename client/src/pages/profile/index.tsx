import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators, State } from "../../state";
import previewFile from "../../util/previewFile";
import { EditProfileSection } from "./editProfileSection";
import Img from "../../components/common/Img";
import logo from "../../util/images/logo.png";
import http from "../../service/httpService";
import jwt_decode from "jwt-decode";
import { bindActionCreators } from "redux";

export const EditProfile: React.FC = () => {
	const userInfromation = useSelector((state: State) => state.userInfromation);
	const { id, name, email } = userInfromation;
	const [bioText, setBioText] = useState(userInfromation.bio);
	const [isProfileChanged, setProfileChanged] = useState(false);
	const [image, setImage] = useState(userInfromation?.photo);
	const handleBioChang = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setBioText(e.target.value);
	};
	const changeHandler = (e: any) => {
		const file = e.target.files[0];
		previewFile(file, setImage);
	};
	const handleSubmit = async () => {
		try {
			await http.put("/user/editProfile", {
				bioText,
				image,
				id,
			});
			setProfileChanged(true);
		} catch {
			console.log("an error happened ");
		}
	};
	const dispatch = useDispatch();
	const { getUserData } = bindActionCreators(actionCreators, dispatch);
	useEffect(() => {
  if(isProfileChanged){
    	getUserData(jwt_decode(document.cookie));
  }
  setProfileChanged(false);
  setBioText(userInfromation.bio)
  setImage(userInfromation.photo)
  
}, [isProfileChanged, getUserData,userInfromation]);

console.log({userInfromation})
	return (
		<div className="flex w-full h-full">
			<div className="w-full md:w-1/3">
				<Img styleName="logoImage" alt="logo" src={logo} />
			</div>
			<EditProfileSection name={name} bio={bioText} email={email} handleBioChang={handleBioChang} changeHandler={changeHandler} handleSubmit={handleSubmit} image={image} />
		</div>
	);
};
