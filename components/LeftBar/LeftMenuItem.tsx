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
			<a className="flex relative items-center text-main-font gap-4 text-3xl py-3 mb-3 px-10 hover:text-main-green duration-150 hover:duration-150 hover:after:content-[''] hover:after:block hover:after:absolute hover:after:w-1.5 hover:after:h-3/5 hover:after:bg-main-green hover:after:rounded-2xl hover:after:right-0">
				{icon} <span className="text-xl">{name}</span>
			</a>
		</Link>
	);
};

export default LeftMenuItem;
