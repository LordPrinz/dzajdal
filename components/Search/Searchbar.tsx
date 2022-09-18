import { IoSearch } from "react-icons/io5";

const Searchbar = () => {
	return (
		<div className="search-bar">
			<IoSearch className="text-main-font absolute text-2xl left-6" />
			<input
				type="text"
				className="bg-transparent outline-0 text-main-font w-full z-10 px-6 py-4 pl-14"
				placeholder="Suchen..."
			/>
		</div>
	);
};

export default Searchbar;
