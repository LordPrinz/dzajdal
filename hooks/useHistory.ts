import { useDispatch, useSelector } from "react-redux";
import {
	push as pushState,
	back as backState,
	forward as forwardState,
} from "../store/slices/historySlice";
const useHistory = () => {
	const historyState = (useSelector((state) => state) as any).history;
	const dispatch = useDispatch();
	const history = historyState.routesHistory;
	const currentIndex = historyState.currentRoute;
	const currentRoute = history[currentIndex];

	const canGoBack = currentIndex - 1 >= 0;
	const canGoForward = currentIndex + 1 <= history.length - 1;

	const push = (route: string) => {
		if (currentRoute === route) {
			return;
		}
		dispatch(pushState(route));
	};

	const back = () => {
		dispatch(backState());
	};

	const forward = () => {
		dispatch(forwardState());
	};

	console.log(currentRoute, history);

	return {
		history,
		currentRoute,
		canGoBack,
		canGoForward,
		push,
		back,
		forward,
	};
};

export default useHistory;
