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
			<IoSearch className="text-main-font2 absolute text-2xl left-6" />
			<input
				type="text"
				className="bg-transparent outline-0 text-main-font w-full z-10 px-6 py-4 pl-14"
				placeholder="Suchen..."
				value={searchText}
				onInput={inputHandler}
			/>
			{searchText && (
				<MdOutlineClear
					className="text-3xl text-main-font2 mr-8 cursor-pointer"
					onClick={clearHandler}
				/>
			)}
		</div>
	);
};

export default Searchbar;
