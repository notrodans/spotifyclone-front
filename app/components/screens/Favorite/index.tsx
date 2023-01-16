import { useAppSelector } from "@redux/hooks";
import { selectAuth } from "@redux/slices/auth/auth.slice";
import { useRouter } from "next/router";
import { FC, useEffect } from "react";

const FavoriteComponent: FC = () => {
	const { user } = useAppSelector(selectAuth);
	const router = useRouter();
	useEffect(() => {
		if (!user) {
			router.push("/login");
		}
	}, [user]);
	return <div>favorite</div>;
};

export default FavoriteComponent;
