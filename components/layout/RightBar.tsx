import Playlist from "../RightBar/Playlist";
import Profile from "../RightBar/Profile";
import SoundBar from "../RightBar/SoundBar";

const RightBar = () => {
	return (
		<section className="right-bar">
			<Profile />
			<Playlist />
			<SoundBar />
		</section>
	);
};

export default RightBar;
