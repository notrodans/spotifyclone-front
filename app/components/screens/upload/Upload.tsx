import { IUser } from "@services/Auth/AuthService.type"
import React, { FC } from "react"

interface IUpload {
	userData: IUser
}

const Upload: FC<IUpload> = ({ userData }) => {
	console.log(userData)
	return <div>Upload</div>
}

export default Upload
