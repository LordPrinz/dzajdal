import { HiOutlineHeart } from "react-icons/hi";
import Play from "./Buttons/Play";
import Previous from "./Buttons/Previous";
import Next from "./Buttons/Next";
import Random from "./Buttons/Random";
import Loop from "./Buttons/Loop";
const Player = () => {
	return (
		<div className="player">
			<div className="topBar max-w-[650px] ">
				<Random />
				<Previous />
				<Play />
				<Next />
				<Loop />
			</div>
			<div className="bottomBar max-w-[650px] w-full">
				<input type="range" className="w-full" />
			</div>
			{/* <HiOutlineHeart /> */}
		</div>
	);
};

export default Player;
