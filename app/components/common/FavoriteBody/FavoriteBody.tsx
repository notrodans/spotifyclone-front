import Image from "next/image"
import { FC } from "react"
import logo from "@assets/logo.jpeg"

const FavoriteBody: FC = () => {
	return (
		<div>
			<Image src={logo} width={1000} height={1200} alt={"logo"}  />
		</div>
	)
}
export default FavoriteBody
