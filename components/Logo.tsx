import Link from "next/link";

const Logo = () => {
	return (
		<Link href="/">
			<a className="text-4xl mt-2">
				<span className="text-main-green">Dżaj</span>
				<span className="text-main-font">dal</span>
			</a>
		</Link>
	);
};

export default Logo;
