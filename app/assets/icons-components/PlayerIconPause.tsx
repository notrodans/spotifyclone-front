import React, { FC } from "react"

import { IconType } from "./IconType"

const PlayerIconPause: FC<IconType> = ({ ...props }) => (
	<svg {...props} height='16' width='16' aria-hidden='true' viewBox='0 0 17 17'>
		<path d='M3 1.713a.7.7 0 011.05-.607l10.89 6.288a.7.7 0 010 1.212L4.05 14.894A.7.7 0 013 14.288V1.713z'></path>
	</svg>
)

export default PlayerIconPause
