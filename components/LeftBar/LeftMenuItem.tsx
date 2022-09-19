import Link from "next/link";
import { useRouter } from "next/router";

const LeftMenuItem = ({
	href,
	name,
	icon,
}: {
	href: string;
	name: string;
	icon: JSX.Element;
}) => {
	const router = useRouter();

	return (
		<Link href={href}>
			<a
				className={`flex relative items-center text-main-font gap-4 text-3xl py-3 mb-3 px-10 hover:text-main-green duration-150 hover:duration-150 hover:after:content-[''] hover:after:block hover:after:absolute hover:after:w-1.5 hover:after:h-3/5 hover:after:bg-main-green hover:after:rounded-2xl hover:after:right-0 ${
					router.asPath === href
						? "text-main-green duration-150 duration-150after:content-[''] after:block after:absolute after:w-1.5 after:h-3/5 after:bg-main-green after:rounded-2xl after:right-0"
						: ""
				}`}
			>
				{icon} <span className="text-xl">{name}</span>
			</a>
		</Link>
	);
};

export default LeftMenuItem;
