import CurrentSong from "../RightBar/CurrentSong";
import Playlist from "../RightBar/Playlist";
import Profile from "../RightBar/Profile";

const RightBar = () => {
	return (
		<section className="right-bar">
			<Profile />
			<Playlist />
			<CurrentSong />
		</section>
	);
};

export default RightBar;
