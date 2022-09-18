import Link from "next/link";

const LeftMenuItem = ({
	href,
	name,
	icon,
}: {
	href: string;
	name: string;
	icon: JSX.Element;
}) => {
	return (
		<Link href={href}>
			<a className="flex items-center text-main-font">
				{icon} <span>{name}</span>
			</a>
		</Link>
	);
};

export default LeftMenuItem;
