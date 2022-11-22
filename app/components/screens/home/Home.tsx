import { FC } from "react"

import Meta from "@components/SEO/Meta"
import Main from "@components/common/Main/Main"
import Wrapper from "@layouts/Wrapper"
import { IUser } from "@services/Auth/AuthService.type"

interface IHome {
	userData: IUser
}

const Home: FC<IHome> = ({ userData }) => {
	return (
		<>
			<Meta title='Главная' description='Best team is Asirix' />
			<Wrapper userData={userData}>
				<Main />
			</Wrapper>
		</>
	)
}

export default Home
