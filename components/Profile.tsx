import Image from "next/image";
import { IoNotificationsOutline } from "react-icons/io5";

const Profile = () => {
	return (
		<div className="profile flex justify-center items-center">
			<Image
				className="rounded-full select-none"
				src="/profile_picture.png"
				height="38"
				width="38"
			/>
			<div className="ml-3 mr-7">
				<div className="text-2xl">Lord Prinz</div>
				<div className="text-base text-main-font2 select-none">Premium</div>
			</div>
			<IoNotificationsOutline className="text-4xl cursor-pointer hover:text-main-font2 transition" />
		</div>
	);
};

export default Profile;
