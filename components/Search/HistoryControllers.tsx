import { useRouter } from "next/router";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import useHistory from "../../hooks/useHistory";

const HistoryControllers = () => {
	const { history, back, forward, current } = useHistory();

	const forwardHandler = () => {
		if (current === history.length) return;
		forward();
	};

	const backHandler = () => {
		if (current === 0) return;
		back();
	};

	return (
		<div className="flex mr-8 gap-5 justify-between items-center text-4xl text-main-font font-extrabold">
			<BsChevronLeft
				className={`hover:text-main-font2 transition cursor-pointer ${
					current === 0 ? "text-main-font2 cursor-not-allowed" : ""
				}`}
				onClick={backHandler}
			/>
			<BsChevronRight
				onClick={forwardHandler}
				className={`hover:text-main-font2 transition cursor-pointer ${
					current === history.length ? "text-main-font2 cursor-not-allowed" : ""
				}`}
			/>
		</div>
	);
};

export default HistoryControllers;
