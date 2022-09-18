import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const HistoryControllers = () => {
	return (
		<div className="flex mr-8 gap-5 justify-between items-center text-3xl text-main-font font-extrabold">
			<BsChevronLeft className="hover:text-main-font2 transition cursor-pointer" />
			<BsChevronRight className="hover:text-main-font2 transition cursor-pointer" />
		</div>
	);
};

export default HistoryControllers;
