import { FC } from "react"

import Meta from "@components/SEO/Meta"
import LoginForm from "@components/common/LoginForm/LoginForm"
import WrapperWithoutPlayer from "@layouts/WrapperWithoutPlayer"

const Login: FC = () => {
	return (
		<>
			<Meta title='Авторизация' description='authorization' />
			<WrapperWithoutPlayer>
				<LoginForm />
			</WrapperWithoutPlayer>
		</>
	)
}

export default Login
