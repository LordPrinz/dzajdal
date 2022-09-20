import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const PlayListItem = ({
	href,
	image,
	title,
	isPublic,
}: {
	href: string | undefined;
	image: string | undefined;
	title: string | undefined;
	isPublic: boolean | undefined;
}) => {
	const loader = ({ url }: { url: string }) => {
		return url;
	};

	const router = useRouter();

	return (
		<li className="playListItem">
			<Link href={href || router.asPath}>
				<a className="inline-flex items-center ">
					<div className="select-none rounded-xl min-w-[38px]  text-ellipsis whitespace-nowrap overflow-hidden">
						<Image
							loader={loader.bind(null, { url: image || "/" })}
							src={image || "/"}
							className="rounded-xl"
							height="38"
							width="38"
						/>
					</div>
					<div className="ml-6 mr-7">
						<div className="text-2xl mb-0.5 font-bold">{title || ""}</div>
						<div className="text-base text-main-font2 select-none">
							{isPublic ? "Publiczna" : "Prywatna"}
						</div>
					</div>
				</a>
			</Link>
		</li>
	);
};

export default PlayListItem;
