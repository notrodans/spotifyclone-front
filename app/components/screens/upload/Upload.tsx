import Wrapper from "@layouts/Wrapper"
import { IUser } from "@services/Auth/AuthService.type"
import React, { FC } from "react"

interface IUpload {
	userData: IUser
}

const Upload: FC<IUpload> = ({ userData }) => {
	return (
		<Wrapper userData={userData}>
			<h1>Upload</h1>
		</Wrapper>
	)
}

export default Upload
