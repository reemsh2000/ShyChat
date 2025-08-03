import React, { useEffect, useRef, useState } from "react";
import ContactsSection from "./ContactsSection";
import UserNav from "../../components/common/userNav";
import Img from "../../components/common/Img";
import logo from "../../util/images/logo.png";
import { useSelector } from "react-redux";
import { State } from "../../state";
import http from "../../service/httpService";
import { Input } from "../../components/common/Input";
import { io } from "socket.io-client";
import SendIcon from "@mui/icons-material/Send";
import ScrollableFeed from "react-scrollable-feed";
import Sidebar from "../../components/Sidebar";
// import login from "../../util/images/";

const socket = io("http://localhost:9000", {
	withCredentials: false,
});

const Home = () => {
	const [currentMessage, setCurrentMessage] = useState("");

	const [messagesList, setMessagesList] = useState([]);

	const [chatData, setChatData] = useState({
		name: "",
		Email: "",
		photo: "",
	});
	const bottomRef = useRef<HTMLDivElement | null>(null);

	// Scroll to bottom when messagesList changes
	useEffect(() => {
		bottomRef.current?.scrollIntoView({ behavior: "smooth" });
	}, [messagesList]);

	const [userContacts, setUserContacts] = useState([]);
	const currentChatId = useSelector((state: State) => state.currentChat);
	const { id } = useSelector((state: State) => state.userInfromation);

	const sendMessage = async () => {
		if (currentMessage.trim() !== "") {
			const data = {
				userid: id,
				receiverId: currentChatId,
				content: currentMessage,
				messagetime: `${new Date(Date.now()).getHours()}:${new Date(Date.now()).getMinutes()}`,
				id: messagesList.length + 1,
			};
			await socket.emit("send_message", data);
			const updateMessages: any = [...messagesList, data];
			setMessagesList(updateMessages);
			setCurrentMessage("");
		}
	};
	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Enter" && !e.shiftKey) {
			e.preventDefault(); // prevent new line
			sendMessage();
			console.log("hi");
		}
	};

	useEffect(() => {
		socket.on("receive_message", (data: any) => {
			const updateMessages: any = [...messagesList, data];
			setMessagesList(updateMessages);
		});
		// return ()=>
	}, [messagesList]);

	useEffect(() => {
		const getContacts = async () => {
			const { data } = await http.get("/user/contacts");
			setUserContacts(data.data);
		};
		getContacts();
	}, []);

	const handleChange = ({ currentTarget: input }: React.FormEvent<HTMLInputElement>) => {
		setCurrentMessage(input.value);
	};

	useEffect(() => {
		const getCurrentReceiver = (currentId: number) => {
			return userContacts.filter((item: any) => item.id === currentId);
		};
		const userReciver: any = getCurrentReceiver(currentChatId)[0];
		const updateChatData = { ...chatData, ...userReciver };
		setChatData(updateChatData);

		const getMessages = async () => {
			const { data } = await http.post("/user/messages", {
				receiverId: currentChatId,
			});
			const updateMessages: any = data.data;
			setMessagesList(updateMessages);
		};
		getMessages();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentChatId]);

	return (
		<div className="flex w-full h-full">
			<Sidebar className="w-20 border-green-300 border-2" />
			<ContactsSection contacts={userContacts} currentChatId={currentChatId} className="w-1/4" />
			<div className="w-3/4 ">
				{currentChatId ? (
					//seperate it into  a new component
					<div className="chat h-full">
						<UserNav name={chatData?.name} imageLink={chatData?.photo} userId={currentChatId} />

						<div className="messages w-full h-5/6 p-2">
							<div className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow  h-full overflow-auto ">
								{Array.isArray(messagesList) &&
									messagesList.length > 0 &&
									messagesList.map((message: any, index) => (
										<div className="max-full mx-auto p-4 " key={index}>
											{/* <!-- Chat Container --> */}
											<div className="space-y-4 w-full">
												{/* <!-- Incoming message --> */}
												{message.userid === currentChatId && (
													<div className="flex items-start gap-3 w-full">
														<img src={chatData.photo || "https://i.pravatar.cc/40?img=1"} alt={`${chatData.name} photo`} className="w-10 h-10 rounded-full" />
														<div className="bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 p-3 rounded-xl rounded-tl-none max-w-sm">
															<p>{message.content}</p>
															<span className="block text-xs text-gray-400 mt-1">{message.messagetime}</span>
														</div>
													</div>
												)}

												{/* <!-- Outgoing message --> */}
												{message.userid !== currentChatId && (
													<div className="flex items-start gap-3 justify-end w-full">
														<div className="bg-green-500 text-white p-3 rounded-xl rounded-tr-none max-w-sm">
															<p>{message.content}</p>
															<span className="block text-xs text-green-100 mt-1 text-right">{message.messagetime}</span>
														</div>
														<img src={chatData.photo || "https://i.pravatar.cc/40?img=2"} alt={`${chatData.name} photo`} className="w-10 h-10 rounded-full" />
													</div>
												)}
											</div>
										</div>
									))}
								<div ref={bottomRef} />
							</div>
						</div>
						<div className="flex w-full justify-center items-center">
							<input
								name="currentMessage"
								type="text"
								id="currentMessage"
								className={` bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500 py-4`}
								onKeyDown={handleKeyDown}
								placeholder="Message..."
								onChange={handleChange}
								value={currentMessage}
							/>
							<SendIcon onClick={() => sendMessage()} className="sendBtn text-green-500" />
						</div>
					</div>
				) : (
					//  no char
					<div className="flex justify-center items-center w-full h-full">
						<Img src={logo} alt="logo-Shy-chat" styleName="logo" />
					</div>
				)}
			</div>
		</div>
	);
};
export default Home;
