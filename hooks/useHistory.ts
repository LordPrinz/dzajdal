import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";

const useHistory = () => {
	const router = useRouter();

	const [history, setHistory] = useState<string[]>([]);
	const [currentPlace, setCurrentPlace] = useState(0);

	const goBack = useCallback(() => {
		if (currentPlace === 0) {
			return;
		}

		setCurrentPlace((place) => place - 1);
		router.push(history[currentPlace]);
	}, [currentPlace]);

	const goForward = useCallback(() => {
		if (!history[currentPlace + 1]) {
			return;
		}

		setCurrentPlace((place) => place + 1);

		router.push(history[currentPlace]);
	}, [currentPlace, history]);

	useEffect(() => {
		setHistory((prevSate) => {
			return [...prevSate, router.asPath];
		});
	}, [router.asPath]);

	return {
		history: history.slice(2),
		back: goBack,
		forward: goForward,
		current: currentPlace,
	};
};

export default useHistory;
