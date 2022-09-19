import PlayListItem from "./PlaylistItem";
import { IoMdAddCircleOutline } from "react-icons/io";
import Link from "next/link";
const Playlist = () => {
	return (
		<div className="ml-9 mt-12">
			<h2 className="text-main-font text-[17px] font-bold">Your Playlists</h2>
			<ul className="mt-5">
				<PlayListItem followers={45890} href="/" image="/zeit.png" title="Zeit" />
				<PlayListItem
					followers={83321}
					href="/"
					image="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/The_Dark_Side_of_the_Moon_Cover.svg/1200px-The_Dark_Side_of_the_Moon_Cover.svg.png"
					title="Dark Side of the Moon"
				/>
				<PlayListItem
					followers={45564}
					href="/"
					image="https://ecsmedia.pl/c/a-head-full-of-dreams-b-iext116501741.jpg"
					title="A Head Full of Dreams"
				/>
				<PlayListItem
					followers={55434}
					href="/"
					image="https://image.ceneostatic.pl/data/products/26382746/i-imagine-dragons-night-visions-deluxe-cd.jpg"
					title="Night Visions"
				/>
			</ul>
			<Link href="/">
				<a className="text-main-font inline-flex items-center gap-2 text-lg mt-6">
					<IoMdAddCircleOutline className="text-2xl" />
					<span>Create new playlist</span>
				</a>
			</Link>
		</div>
	);
};

export default Playlist;
