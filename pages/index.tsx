import type { NextPage } from "next";
import LeftBar from "../components/layout/sidebar/LeftBar";
import Main from "../components/layout/sidebar/Main";
import RightBar from "../components/layout/sidebar/RightBar";
const Home: NextPage = () => {
	return (
		<>
			<LeftBar />
			<Main />
			<RightBar />
		</>
	);
};

export default Home;
