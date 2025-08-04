import { useHistory } from "react-router-dom";
import http from "../service/httpService";

const Logout = () => {
	const history = useHistory();
	const handleLogout = async () => {
		localStorage.removeItem("loginStatus");
		await http.get("user/logout");
		history.push("/login");
	};

	return (
		<button
			onClick={handleLogout}
			type="submit"
			className="
            text-base
             w-40 my-4 text-white bg-red-500 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg  px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800">
			Logout
		</button>
	);
};

export default Logout;
