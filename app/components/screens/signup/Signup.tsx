import { FC } from "react"

import Meta from "@components/SEO/Meta"
import WrapperWithoutPlayer from "@layouts/WrapperWithoutPlayer"
import LoginForm from "@components/common/LoginForm/LoginForm"

const Signup: FC = () => {
	return (
		<>
			<Meta title='Регистрация' description='Signup' />
			<WrapperWithoutPlayer>
				<LoginForm />
			</WrapperWithoutPlayer>
		</>
	)
}

export default Signup
