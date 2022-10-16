import { FC } from 'react'

import LoginForm from '@/components/common/LoginForm/LoginForm'
import WrapperWithoutPlayer from '@/layouts/WrapperWithoutPlayer'

const Login: FC = () => {
	return (
		<WrapperWithoutPlayer>
			<LoginForm />
		</WrapperWithoutPlayer>
	)
}

export default Login
