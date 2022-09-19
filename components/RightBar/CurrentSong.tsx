import Image from "next/image";
import SoundBar from "./SoundBar";

const CurrentSong = () => {
	return (
		<div className="absolute w-full bottom-[52px] ">
			<div className="rounded-2xl ml-7">
				<Image
					src="https://i1.sndcdn.com/artworks-000134411874-8yipeh-t500x500.jpg"
					width={185}
					height={185}
					className="rounded-2xl"
					loader={() => "https://i1.sndcdn.com/artworks-000134411874-8yipeh-t500x500.jpg"}
				/>
			</div>
			<div className="ml-7 text-2xl text-main-font font-bold mt-2">
				Never gonna give you up
			</div>
			<div className="ml-7 text-large text-main-font2 mt-1 ">Rick Astley</div>
			<SoundBar className="translate-y-2" />
		</div>
	);
};

export default CurrentSong;
