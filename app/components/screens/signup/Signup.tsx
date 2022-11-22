import { FC } from "react"

import Meta from "@components/SEO/Meta"
import LoginForm from "@components/common/LoginForm/LoginForm"
import { IUser } from "@services/Auth/AuthService.type"
import Wrapper from "@layouts/Wrapper"

interface ISignup {
	userData: IUser
}

const Signup: FC<ISignup> = ({ userData }) => {
	return (
		<>
			<Meta title='Регистрация' description='Signup' />
			<Wrapper>{!userData ? <LoginForm /> : <h1>Вы уже авторизованны</h1>}</Wrapper>
		</>
	)
}

export default Signup
