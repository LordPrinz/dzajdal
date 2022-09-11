import type { NextPage } from "next";
import BottomBar from "../components/layout/BottomBar";
import LeftBar from "../components/layout/LeftBar";
import Main from "../components/layout/Main";
import RightBar from "../components/layout/RightBar";
const Home: NextPage = () => {
	return (
		<>
			<LeftBar />
			<Main />
			<RightBar />
			<BottomBar />
		</>
	);
};

export default Home;
