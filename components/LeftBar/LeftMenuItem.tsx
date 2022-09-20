import { useRouter } from "next/router";

const LeftMenuItem = ({
	href,
	name,
	icon,
	onClick,
}: {
	href?: string;
	name: string;
	icon: JSX.Element;
	onClick?: React.MouseEventHandler<HTMLDivElement>;
}) => {
	const router = useRouter();

	const clickHandler = (event: React.SyntheticEvent) => {
		if (href) {
			router.push(href);
		}

		if (onClick) {
			onClick(event as any);
		}
	};

	return (
		<div
			onClick={clickHandler}
			className={`flex cursor-pointer relative items-center text-main-font gap-4 text-3xl py-3 mb-3 px-10 hover:text-main-green duration-150 hover:duration-150 hover:after:content-[''] hover:after:block hover:after:absolute hover:after:w-1.5 hover:after:h-3/5 hover:after:bg-main-green hover:after:rounded-2xl hover:after:right-0 ${
				router.asPath === href
					? "text-main-green duration-150 duration-150after:content-[''] after:block after:absolute after:w-1.5 after:h-3/5 after:bg-main-green after:rounded-2xl after:right-0"
					: ""
			}`}
		>
			{icon} <span className="text-xl">{name}</span>
		</div>
	);
};

export default LeftMenuItem;
