import useSpotify from "../../hooks/useSpotify";

const Home = () => {
	const spotifyApi = useSpotify();

	console.log(spotifyApi.getAccessToken() || "after");

	return <div>Home</div>;
};

export default Home;
