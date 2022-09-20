import { useSession } from "next-auth/react";
import Image from "next/image";
import { IoNotificationsOutline } from "react-icons/io5";

const Profile = () => {
	const { data: session, status } = useSession();

	const user = session?.user;

	return (
		<div className="profile items-center mt-0.5">
			<Image
				loader={() => user?.image || "/user.png"}
				className="rounded-full select-none"
				src="/profile_picture.png"
				height="37"
				width="37"
			/>
			<div className="ml-3 mr-7">
				<div className="text-2xl font-bold">{user?.name || "User"}</div>
				<div className="text-base text-main-font2 select-none">Premium</div>
			</div>
			<IoNotificationsOutline className="text-4xl cursor-pointer hover:text-main-font2 transition" />
		</div>
	);
};

export default Profile;
