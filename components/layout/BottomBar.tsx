import CurrentSong from "../BottomBar/CurrentSong";
import Player from "../BottomBar/Player";

const BottomBar = () => {
	return (
		<section className="bottom-bar">
			<CurrentSong />
			<Player />
		</section>
	);
};

export default BottomBar;
