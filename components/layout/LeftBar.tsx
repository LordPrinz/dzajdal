import {
	HiHome,
	HiTrendingUp,
	HiOutlineMusicNote,
	HiOutlineHeart,
} from "react-icons/hi";
import { TbLogout } from "react-icons/tb";
import { RiPlayListLine, RiSettings5Line } from "react-icons/ri";
import LeftMenuItem from "../LeftBar/LeftMenuItem";
import Logo from "../LeftBar/Logo";

const LeftBar = () => {
	return (
		<section className="left-bar">
			<Logo />

			<div className="mt-20">
				<h3 className="uppercase ml-10 text-l mb-4 text-main-font font-extrabold">
					Menu
				</h3>
				<LeftMenuItem href="/" name="Home" icon={<HiHome />} />
				<LeftMenuItem href="/" name="Trends" icon={<HiTrendingUp />} />
			</div>
			<div className="mt-12">
				<h3 className="uppercase ml-10 text-l mb-4 text-main-font font-extrabold">
					Library
				</h3>
				<LeftMenuItem href="/" name="Recent" icon={<HiOutlineMusicNote />} />
				<LeftMenuItem href="/" name="Liked Song" icon={<HiOutlineHeart />} />
				<LeftMenuItem href="/" name="Playlist" icon={<RiPlayListLine />} />
			</div>
			<div className="mt-12">
				<h3 className="uppercase ml-10 text-l mb-4 text-main-font font-extrabold">
					Account
				</h3>
				<LeftMenuItem href="/settings" name="Settings" icon={<RiSettings5Line />} />
				<LeftMenuItem href="/" name="Logout" icon={<TbLogout />} />
			</div>
		</section>
	);
};

export default LeftBar;
