import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { MdOutlineClear } from "react-icons/md";

const Searchbar = () => {
	const [searchText, setSearchText] = useState("");

	const inputHandler = (event: React.BaseSyntheticEvent) => {
		setSearchText(event.target.value);
	};

	const clearHandler = () => {
		setSearchText("");
	};

	return (
		<div className="search-bar">
			<IoSearch className="text-main-font absolute text-2xl left-6" />
			<input
				type="text"
				className="bg-transparent outline-0 text-main-font w-full z-10 px-6 py-4 pl-16"
				placeholder="Suchen..."
				value={searchText}
				onInput={inputHandler}
			/>
			{searchText && (
				<MdOutlineClear
					className="text-3xl text-main-font mr-8 cursor-pointer hover:text-main-font2 transition"
					onClick={clearHandler}
				/>
			)}
		</div>
	);
};

export default Searchbar;
