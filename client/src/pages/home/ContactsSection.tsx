import React, { useState } from "react";
import Cantact from "../../components/cantact";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../state";
import SearchAppBar from "../../components/Search";
import ScrollableFeed from "react-scrollable-feed";

interface ContactsSection {
	contacts: any[];
	className: string;
	currentChatId?: number;
}

const ContactsSection: React.FC<ContactsSection> = ({ contacts, currentChatId, className }) => {
	const dispatch = useDispatch();
	const { handleCurrentChat } = bindActionCreators(actionCreators, dispatch);
	const [search,setSearch] = useState('')
	return (
		<div className={className}>
			<SearchAppBar setSearch={setSearch} />
			{search}
			{!search&&<ScrollableFeed className="scrollBar">
				{contacts.length ? (
					contacts.map((item: any) => <Cantact setId={() => handleCurrentChat(item.id)} key={item.id} name={item.name} imageLink={item.photo} email={item.email} current={item.id === currentChatId} />)
				) : (
					<p className="font-bold text-sm text-gray-500 p-6"> There is no contacts,Search To find Your friends ! </p>
				)}
			</ScrollableFeed>}
		</div>
	);
};

export default ContactsSection;
