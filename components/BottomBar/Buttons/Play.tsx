import { useState } from "react";
import { BsFillPauseCircleFill, BsFillPlayCircleFill } from "react-icons/bs";

const Play = () => {
	const [isPlaying, setIsPlaying] = useState(false);

	const togglePlayer = () => {
		setIsPlaying((prevState) => !prevState);
	};

	return (
		<>
			{isPlaying ? (
				<BsFillPauseCircleFill
					onClick={togglePlayer}
					className="text-main-green text-5xl"
				/>
			) : (
				<BsFillPlayCircleFill
					onClick={togglePlayer}
					className="text-main-green  text-5xl"
				/>
			)}
		</>
	);
};

export default Play;
