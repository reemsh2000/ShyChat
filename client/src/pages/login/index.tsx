import React from "react";
import Img from "../../components/common/Img";
import { LoginForm } from "./LoginForm";
import login from "../../util/images/auth-img.png";
import { MessageSquareText } from "lucide-react";
const Login: React.FC = () => {
	return (
		<div className="flex flex-col md:flex-row md:items-start items-center bg-green-500 h-full w-full justify-center md:p-10 p-3">
			<div className="md:w-1/4 w-25 flex flex-col md:h-full relative  my-4 ">
				<div className="font-bold text-white py-4 md:text-3xl text-2xl flex items-center">
					<MessageSquareText /><span className="mx-3 ">Chatter </span>
				</div>
        <span className="text-white text-sm opacity-70"> Responsive TailwindCss Chat App</span>
				<Img src={login} alt="image-chat" styleName="invisible   md:visible absolute bottom-0 -right-1/2 max-w-md" />
			</div>
			<div className="w-full pt-15 h-full flex flex-col md:w-3/4 items-center p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
				<div className="py-12 text-center">
					<h2 className="font-bold text-2xl text-gray-600">Welcome Back!</h2>
					<p className="text-gray-400 text-sm py-2">Sign in to continue to Chatter</p>
				</div>
				<LoginForm />
			</div>
		</div>
	);
};

export default Login;
