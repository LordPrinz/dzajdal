import PlayListItem from "./PlaylistItem";
import { IoMdAddCircleOutline } from "react-icons/io";
import Link from "next/link";
import useSpotify from "../../hooks/useSpotify";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import useHistory from "../../hooks/useHistory";
const Playlist = () => {
	const spotifyApi = useSpotify();
	const { data: session, status } = useSession();
	const [playlists, setPlaylists] = useState([{}]);
	useEffect(() => {
		if (!spotifyApi.getAccessToken()) {
			return;
		}
		spotifyApi.getUserPlaylists().then((data) => {
			setPlaylists(data.body.items);
		});
	}, [session, spotifyApi]);

	const history = useHistory();

	return (
		<div className="ml-5 mt-12">
			<h2 className="text-main-font text-[17px] font-bold">Your Playlists</h2>
			<ul className="mt-5">
				{playlists.map((playlist: any) => {
					return (
						<PlayListItem
							key={playlist?.id}
							href={`/playlists/${playlist?.id}`}
							image={playlist?.images ? playlist?.images[0]?.url : ""}
							title={playlist?.name}
							isPublic={playlist?.owner?.display_name}
						/>
					);
				})}
			</ul>

			<div
				className="text-main-font inline-flex items-center gap-2 text-lg mt-6"
				onClick={() => {
					history.push("/newplaylist");
				}}
			>
				<IoMdAddCircleOutline className="text-2xl" />
				<span>Create new playlist</span>
			</div>
		</div>
	);
};

export default Playlist;
