import { makeStyles } from "@mui/styles";
import { useEffect, useState } from "react";
interface Props {
	name: string;
	imageLink: string;
	email: string;
	key?: number;
	setId: React.MouseEventHandler<HTMLDivElement>;
	current?: boolean;
	userId?: number;
}

const Cantact: React.FC<Props> = ({ name, imageLink, email, setId, current }) => {
	const [color, setColor] = useState("#fff");
	useEffect(() => {
		if (current) {
			setColor("#3E9D8A");
		} else {
			setColor("#fff");
		}
	}, [current]);

	return (
		<div className=" max-w-sm p-3 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
			<div onClick={setId} className="flex items-center ">
				<div className="radious">
					<img src={imageLink} alt="user's image" loading="lazy" className="w-16 rounded-full mx-2" />
				</div>
				<div className="flex flex-col mx-3">
					<h3 className="font-bold text-l text-green-500">{name}</h3>
					<p className="truncate w-52 text-xs text-gray-400">{email}</p>
				</div>
			</div>
		</div>
	);
};
export default Cantact;
