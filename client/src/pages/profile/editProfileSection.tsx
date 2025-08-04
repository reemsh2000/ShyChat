import React from "react";

import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import { Input } from "../../components/common/Input";
interface EditProfileSectionProps {
	name: string;
	email: string;
	bio: string;
	handleBioChang?: React.ChangeEventHandler<HTMLTextAreaElement>;
	changeHandler: React.ChangeEventHandler<HTMLInputElement>;
	handleSubmit: React.FormEventHandler<HTMLButtonElement>;
	image: string;
}

export const EditProfileSection: React.FC<EditProfileSectionProps> = ({ name, email, bio, handleBioChang, changeHandler, handleSubmit, image }) => {
	return (
		<div className="w-full md:w-2/3 h-full">
			{/* <nav className=''>
        <ArrowBackIcon />
        <h3 className=''>Profile</h3>
      </nav> */}
			<div className="flex justify-evenly items-center flex-col w-3/4 h-44 py-20">
				<div className="flex p-15">
					<img alt={`${name} profile`} src={image || "https://i.pravatar.cc/40?img=2"} className="w-32 h-32 rounded-full" />
					<label htmlFor="User Image" className="h-20 w-15">
						<ModeEditOutlineIcon />
					</label>
				</div>
				<div className="flex flex-col w-full px-24">
					<Input name={name} value={name} type="text" label="Name" styleName="my-4" disabled={true} inputStyle="w-full" />
					<Input name={email} value={email} type="text" label="Email" disabled={true} styleName="my-4" inputStyle="w-full" />
					<label htmlFor="bio" className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white">
						Bio
					</label>
					<textarea
						placeholder="Enter your bio here...."
						id="bio"
						name="bio"
						value={bio}
						onChange={handleBioChang} // 👈 now properly typed
						rows={4}
						className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
					/>
				</div>
				<div className="flex flex-col justify-evenly items-start w-full invisible" >
					<input onChange={changeHandler} name="User Image" id="User Image" type="file" className="invisible" />
				</div>
				<div className="flex flex-end w-full justify-end px-20">
					<button
						onClick={handleSubmit}
						type="submit"
						className="
             w-40 my-4 text-white bg-green-500 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800">
						Update
					</button>
				</div>
			</div>
		</div>
	);
};
