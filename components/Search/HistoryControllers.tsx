import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import useHistory from "../../hooks/useHistory";

const HistoryControllers = () => {
	const { back, forward, canGoBack, canGoForward } = useHistory();

	const forwardHandler = () => {
		if (!canGoForward) return;
		forward();
	};

	const backHandler = () => {
		if (!canGoBack) return;
		back();
	};

	return (
		<div className="flex mr-8 gap-5 justify-between items-center text-4xl text-main-font font-extrabold">
			<BsChevronLeft
				className={`hover:text-main-font2 transition cursor-pointer ${
					!canGoBack ? "text-main-font2 cursor-not-allowed" : ""
				}`}
				onClick={backHandler}
			/>

			<BsChevronRight
				onClick={forwardHandler}
				className={`hover:text-main-font2 transition cursor-pointer ${
					!canGoForward ? "text-main-font2 cursor-not-allowed" : ""
				}`}
			/>
		</div>
	);
};

export default HistoryControllers;
