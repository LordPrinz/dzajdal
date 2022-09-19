import { BiVolumeFull } from "react-icons/bi";

const SoundBar = () => {
	return (
		<div className="sound-bar">
			<BiVolumeFull />
			<input type="range" className="w-full" />
		</div>
	);
};

export default SoundBar;
