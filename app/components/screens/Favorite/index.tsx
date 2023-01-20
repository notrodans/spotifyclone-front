import { useUser } from "@context/UserContext";
import { FC } from "react";

const FavoriteComponent: FC = () => {
	const { user } = useUser();
	return <div>favorite, {user.login}</div>;
};

export default FavoriteComponent;
