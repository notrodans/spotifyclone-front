import Footer from "@components/common/Footer";
import Header from "@components/common/Header";
import Sidebar from "@components/common/Sidebar";
import { IUser } from "@services/Auth/AuthService.type";
import cn from "classnames";
import { DetailedHTMLProps, FC, HTMLAttributes, PropsWithChildren } from "react";

interface IWrapper
	extends PropsWithChildren,
		DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	user: IUser;
}

const Wrapper: FC<IWrapper> = ({ user, className, children }) => {
	return (
		<>
			<div className='wrapper'>
				<Header />
				<div className='wrapper__body'>
					{user && <Sidebar />}
					<main className={cn("page", className)}>{children}</main>
				</div>
				{user && <Footer />}
			</div>
		</>
	);
};

export default Wrapper;
