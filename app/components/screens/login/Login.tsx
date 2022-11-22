import { FC } from "react"

import Meta from "@components/SEO/Meta"
import LoginForm from "@components/common/LoginForm/LoginForm"
import Wrapper from "@layouts/Wrapper"

const Login: FC = () => {
	return (
		<>
			<Meta title='Авторизация' description='Authorization' />
			<Wrapper>
				<LoginForm />
			</Wrapper>
		</>
	)
}

export default Login
