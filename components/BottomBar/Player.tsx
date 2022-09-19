import { BsFillPauseCircleFill, BsFillPlayCircleFill } from "react-icons/bs";
import { FaRandom } from "react-icons/fa";
import { MdSkipNext, MdSkipPrevious } from "react-icons/md";
import { ImLoop } from "react-icons/im";
import { HiOutlineHeart } from "react-icons/hi";
import Play from "./Buttons/Play";
const Player = () => {
	return (
		<div className="player">
			<div className="top-bar">
				<FaRandom />
				<MdSkipPrevious />
				<Play />
				<MdSkipNext />
				<ImLoop />
			</div>
			<div className="bottom-bar">v</div>
			<HiOutlineHeart />
		</div>
	);
};

export default Player;
