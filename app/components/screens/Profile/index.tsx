import { useUser } from "@context/UserContext";
import { FC } from "react";

const ProfileComponent: FC = () => {
	const { user } = useUser();

	return <div>{user.login}</div>;
};

export default ProfileComponent;
