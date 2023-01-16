import { useAppSelector } from "@redux/hooks";
import { selectAuth } from "@redux/slices/auth/auth.slice";
import { FC } from "react";

const ProfileComponent: FC = () => {
	const { user } = useAppSelector(selectAuth);

	return <div>{user?.login}</div>;
};

export default ProfileComponent;
