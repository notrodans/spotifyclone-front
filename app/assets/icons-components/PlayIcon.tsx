import React, { FC } from 'react'

import { IconType } from './IconType'

const PlayIcon: FC<IconType> = ({ ...props }) => {
	return (
		<svg {...props} width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'>
			<path d='M15.3333 19.4667L19.08 16L15.3333 12.5333V19.4667Z' fill='#FFF' />
			<path
				d='M16 2.66663C13.3629 2.66663 10.7851 3.44861 8.59242 4.9137C6.39977 6.37878 4.6908 8.46116 3.68163 10.8975C2.67246 13.3339 2.40842 16.0147 2.92289 18.6012C3.43736 21.1876 4.70724 23.5633 6.57194 25.428C8.43664 27.2927 10.8124 28.5626 13.3988 29.0771C15.9852 29.5916 18.6661 29.3275 21.1025 28.3184C23.5388 27.3092 25.6212 25.6002 27.0863 23.4076C28.5514 21.2149 29.3334 18.637 29.3334 16C29.3334 14.249 28.9885 12.5152 28.3184 10.8975C27.6484 9.27984 26.6662 7.80998 25.4281 6.57187C24.19 5.33375 22.7201 4.35163 21.1025 3.68157C19.4848 3.0115 17.751 2.66663 16 2.66663V2.66663ZM21.3334 17.5733L16.48 22.0666C16.056 22.4504 15.5052 22.6641 14.9334 22.6666C14.616 22.6659 14.3024 22.5977 14.0134 22.4666C13.6201 22.3075 13.2832 22.0348 13.0457 21.6833C12.8082 21.3318 12.6809 20.9175 12.68 20.4933V11.5066C12.6809 11.0824 12.8082 10.6681 13.0457 10.3166C13.2832 9.96508 13.6201 9.69237 14.0134 9.53329C14.4185 9.35089 14.8682 9.29156 15.3068 9.36267C15.7453 9.43379 16.1533 9.63222 16.48 9.93329L21.3334 14.4266C21.5516 14.6265 21.7259 14.8696 21.8451 15.1404C21.9644 15.4113 22.026 15.704 22.026 16C22.026 16.2959 21.9644 16.5886 21.8451 16.8595C21.7259 17.1303 21.5516 17.3734 21.3334 17.5733V17.5733Z'
				fill='#FFF'
			/>
		</svg>
	)
}

export default PlayIcon
