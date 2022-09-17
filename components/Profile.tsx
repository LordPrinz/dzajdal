import Image from "next/image";
import { IoNotificationsOutline } from "react-icons/io5";

const Profile = () => {
	return (
		<div className="profile flex justify-center items-center">
			<Image
				className="rounded-full"
				src="/profile_picture.png"
				height="38"
				width="38"
			/>
			<div className="ml-4 mr-8">
				<div className="text-2xl">Lord Prinz</div>
				<div className="text-base text-main-font2">Premium</div>
			</div>
			<IoNotificationsOutline className="text-4xl" />
		</div>
	);
};

export default Profile;
