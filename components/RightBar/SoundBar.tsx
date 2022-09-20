import {
	BiVolume,
	BiVolumeFull,
	BiVolumeLow,
	BiVolumeMute,
} from "react-icons/bi";
import { useState, useEffect } from "react";
import useSpotify from "../../hooks/useSpotify";

const SoundBar = ({ className }: { className: string }) => {
	const [volume, setVolume] = useState(50);
	const [prevVolume, setPrevVolume] = useState(50);
	const [isMuted, setIsMuted] = useState(false);
	const volumeChangeHandler = ({ target }: React.BaseSyntheticEvent) => {
		setVolume(+target.value);
	};

	const spotifyApi = useSpotify();

	const toggleMute = () => {
		setIsMuted((prevState) => !prevState);
	};

	let icon = <BiVolumeFull onClick={toggleMute} className="cursor-pointer" />;

	if (+volume > 80) {
		icon = <BiVolumeFull onClick={toggleMute} className="cursor-pointer" />;
	} else if (+volume < 80 && +volume >= 33) {
		icon = <BiVolumeLow onClick={toggleMute} className="cursor-pointer" />;
	} else if (+volume < 33 && +volume !== 0) {
		icon = <BiVolume onClick={toggleMute} className="cursor-pointer" />;
	} else if (+volume === 0) {
		icon = <BiVolumeMute onClick={toggleMute} className="cursor-pointer" />;
	}

	useEffect(() => {
		if (isMuted) {
			setPrevVolume(volume);
			setVolume(0);
		}
		if (!isMuted) {
			setVolume(prevVolume);
		}
	}, [isMuted]);

	spotifyApi.setVolume(+volume);

	return (
		<div className={`sound-bar ${className || ""}`}>
			{icon}
			<input
				type="range"
				className="w-full cursor-pointer"
				onInput={volumeChangeHandler}
				value={volume}
			/>
		</div>
	);
};

export default SoundBar;
