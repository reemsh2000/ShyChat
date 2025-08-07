import React from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../state";
import { ChevronLeft } from "lucide-react";
interface UserNavProps {
	name: string;
	imageLink: string;
	userId: number;
	key?: number;
}


const UserNav: React.FC<UserNavProps> = ({ name, imageLink, userId }) => {
	const dispatch = useDispatch();

	const { handleCurrentChat } = bindActionCreators(actionCreators, dispatch);

	const getChat = (id: number) => {};
	return (
		<div className="flex items-center w-full mx-2  p-3 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
			<ChevronLeft onClick={() => handleCurrentChat(0)} />
			<div className="flex items-center ">
				<div className="radious">
					<img src={imageLink} alt="user's image" loading="lazy" className="w-16 rounded-full mx-2" />
				</div>
				<div className="flex flex-col mx-3">
					<h3 className="font-bold text-l text-green-500">{name}</h3>
				</div>
			</div>
		</div>
	);
};

export default UserNav;
