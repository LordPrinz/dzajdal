import Image from "next/image";
import Link from "next/link";

const PlayListItem = ({
	href,
	image,
	title,
	followers,
}: {
	href: string;
	image: string;
	title: string;
	followers: number;
}) => {
	const loader = ({ url }: { url: string }) => {
		return url;
	};

	return (
		<li className="playListItem">
			<Link href={href}>
				<a className="inline-flex items-center ">
					<div className="select-none rounded-xl min-w-[38px] break-all">
						<Image
							loader={loader.bind(null, { url: image })}
							src={image}
							className="rounded-xl"
							height="38"
							width="38"
						/>
					</div>
					<div className="ml-6 mr-7">
						<div className="text-2xl mb-0.5 font-bold">{title}</div>
						<div className="text-base text-main-font2 select-none">
							{followers} followers
						</div>
					</div>
				</a>
			</Link>
		</li>
	);
};

export default PlayListItem;
