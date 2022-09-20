import Home from "./../Main/Home";
import Search from "../Search";
import useHistory from "../../hooks/useHistory";
import Trends from "../Main/Trends";
import Fav from "../Main/Fav";
import Playlists from "../Main/Playlists";
import Recent from "../Main/Recent";
import Settings from "../Main/Settings";

const Main = () => {
	const history = useHistory();

	let component;

	switch (history.currentRoute) {
		case "/":
			component = <Home />;
			break;
		case "/trends":
			component = <Trends />;
			break;
		case "/fav":
			component = <Fav />;
			break;
		case "/playlists":
			component = <Playlists />;
			break;
		case "/recent":
			component = <Recent />;
			break;
		case "/settings":
			component = <Settings />;
			break;
	}

	return (
		<main className="main">
			<Search />
			{component}
		</main>
	);
};

export default Main;
