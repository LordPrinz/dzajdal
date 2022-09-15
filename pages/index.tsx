import type { NextPage } from "next";
import BottomBar from "../components/layout/BottomBar";
import Layout from "../components/layout/Layout";
import LeftBar from "../components/layout/LeftBar";
import Main from "../components/layout/Main";
import RightBar from "../components/layout/RightBar";
const Home: NextPage = () => {
	return (
		<Layout>
			<LeftBar />
			<Main />
			<RightBar />
			<BottomBar />
		</Layout>
	);
};

export default Home;
