import { IUser } from "@services/Auth/AuthService.type";
import { createContext, FC, PropsWithChildren, useContext, useState } from "react";

export interface UserContext {
	user?: IUser;
	setUser: (user?: IUser) => void;
}

export const UserContextImplement = createContext<UserContext>(null);

export const useUser = () => useContext(UserContextImplement);

interface Props extends PropsWithChildren {
	initialUser?: IUser;
}

export const UserProvider: FC<Props> = ({ children, initialUser }) => {
	const [user, setUser] = useState(initialUser);

	return (
		<UserContextImplement.Provider value={{ user, setUser }}>
			{children}
		</UserContextImplement.Provider>
	);
};
