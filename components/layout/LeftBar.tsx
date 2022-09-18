import { HiHome } from "react-icons/hi";
import LeftMenuItem from "../LeftMenuItem";
import Logo from "../Logo";

const LeftBar = () => {
	return (
		<section className="left-bar">
			<Logo />

			<div>
				<h3 className="uppercase">Menu</h3>
				<LeftMenuItem href="/" name="Home" icon={<HiHome />} />
				<LeftMenuItem href="/" name="Home" icon={<HiHome />} />
			</div>
		</section>
	);
};

export default LeftBar;
