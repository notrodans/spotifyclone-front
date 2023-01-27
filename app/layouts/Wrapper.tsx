import Header from "@components/common/Header";
import Sidebar from "@components/common/Sidebar";
import { useUser } from "@context/UserContext";
import cn from "classnames";
import dynamic from "next/dynamic";
import { DetailedHTMLProps, FC, HTMLAttributes, PropsWithChildren } from "react";

const Footer = dynamic(() => import("@components/Footer"), {
	ssr: false
});

interface IWrapper
	extends PropsWithChildren,
		DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const Wrapper: FC<IWrapper> = ({ className, children }) => {
	const { user } = useUser();
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
