import Image from "next/image";
import { HiOutlineHeart } from "react-icons/hi";

const CurrentSong = () => {
	return (
		<div className="flex ml-3 items-center flex-shrink-0 max-w-s">
			<div className="rounded-2xl ml-7">
				<Image
					src="https://i1.sndcdn.com/artworks-000134411874-8yipeh-t500x500.jpg"
					width={75}
					height={75}
					className="rounded-2xl"
					loader={() => "https://i1.sndcdn.com/artworks-000134411874-8yipeh-t500x500.jpg"}
				/>
			</div>
			<div className="mb-7">
				<div className="ml-7 text-2xl text-main-font font-bold overflow-hidden	whitespace-nowrap text-ellipsis">
					Never gonna give you up
				</div>
				<div className="ml-7 text-large text-main-font2 mt-1">Rick Astley</div>
			</div>
			<HiOutlineHeart className="text-4xl text-main-font translate-x-6 -translate-y-6 cursor-pointer" />
		</div>
	);
};

export default CurrentSong;
