import { MessageSquareText, User, MessageSquareMore, BookUser } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
	return (
		<div className="md:w-20 bg-gray-300 md:h-full flex flex-row w-full md:flex-col justify-between  px-20 md:px-2 md:justify-start h-20 flex-wrap">
			<Link to="/" className="md:py-10 font-bold text-green-500 md:text-4xl text-2xl flex items-center justify-center">
				<MessageSquareText />
			</Link>
			<Link to="/editprofile" className="font-bold text-gray-500 py-4 pt-6 md:text-4xl text-2xl flex items-center justify-center hover:border-green-500 hover:border-l-4">
				<User />
			</Link>
			<Link to="/" className="font-bold text-gray-500 py-4 md:text-4xl text-2xl flex items-center justify-center">
				<MessageSquareMore />
			</Link>
		</div>
	);
};

export default Sidebar;
