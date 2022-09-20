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
import { signOut } from "next-auth/react";

const LeftBar = () => {
	return (
		<section className="left-bar">
			<Logo />

			<div className="mt-16">
				<h3 className="uppercase ml-10 text-l mb-4 text-main-font font-extrabold">
					Menu
				</h3>
				<LeftMenuItem href="/" name="Home" icon={<HiHome />} />
				<LeftMenuItem href="/trends" name="Trends" icon={<HiTrendingUp />} />
			</div>
			<div className="mt-12">
				<h3 className="uppercase ml-10 text-l mb-4 text-main-font font-extrabold">
					Library
				</h3>
				<LeftMenuItem href="/recent" name="Recent" icon={<HiOutlineMusicNote />} />
				<LeftMenuItem href="/fav" name="Liked Song" icon={<HiOutlineHeart />} />
				<LeftMenuItem href="/playlists" name="Playlist" icon={<RiPlayListLine />} />
			</div>
			<div className="mt-12">
				<h3 className="uppercase ml-10 text-l mb-4 text-main-font font-extrabold">
					Account
				</h3>
				<LeftMenuItem href="/settings" name="Settings" icon={<RiSettings5Line />} />
				<LeftMenuItem
					onClick={() => {
						signOut();
					}}
					name="Logout"
					icon={<TbLogout />}
				/>
			</div>
		</section>
	);
};

export default LeftBar;
