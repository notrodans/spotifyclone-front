import React, { FC } from "react"

import { IconType } from "./IconType"

const FavoriteIconActive: FC<IconType> = ({ ...props }) => {
	return (
		<svg {...props} width='32' height='32' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'>
			<path d='M16 28C15.8245 28.001 15.6505 27.9674 15.4881 27.901C15.3256 27.8347 15.1779 27.7369 15.0533 27.6133L4.69331 17.24C3.39379 15.9269 2.66486 14.1541 2.66486 12.3067C2.66486 10.4592 3.39379 8.68642 4.69331 7.37333C6.00299 6.06734 7.77708 5.33395 9.62664 5.33395C11.4762 5.33395 13.2503 6.06734 14.56 7.37333L16 8.81333L17.44 7.37333C18.7497 6.06734 20.5237 5.33395 22.3733 5.33395C24.2229 5.33395 25.997 6.06734 27.3066 7.37333C28.6062 8.68642 29.3351 10.4592 29.3351 12.3067C29.3351 14.1541 28.6062 15.9269 27.3066 17.24L16.9466 27.6133C16.8221 27.7369 16.6743 27.8347 16.5118 27.901C16.3494 27.9674 16.1754 28.001 16 28Z' />
		</svg>
	)
}

export default FavoriteIconActive
