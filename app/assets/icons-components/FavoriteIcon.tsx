import React, { FC } from "react"

import { IconType } from "./IconType"

const FavoriteIcon: FC<IconType> = ({ ...props }) => {
	return (
		<svg
			{...props}
			width='32'
			height='32'
			viewBox='0 0 28 23'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'>
			<path d='M14 23C13.8246 23.001 13.6506 22.9674 13.4882 22.901C13.3257 22.8347 13.178 22.7369 13.0534 22.6133L2.69337 12.24C1.39385 10.9269 0.664917 9.15408 0.664917 7.30666C0.664917 5.45923 1.39385 3.68642 2.69337 2.37333C4.00305 1.06734 5.77714 0.333954 7.6267 0.333954C9.47626 0.333954 11.2504 1.06734 12.56 2.37333L14 3.81333L15.44 2.37333C16.7497 1.06734 18.5238 0.333954 20.3734 0.333954C22.2229 0.333954 23.997 1.06734 25.3067 2.37333C26.6062 3.68642 27.3351 5.45923 27.3351 7.30666C27.3351 9.15408 26.6062 10.9269 25.3067 12.24L14.9467 22.6133C14.8221 22.7369 14.6744 22.8347 14.5119 22.901C14.3495 22.9674 14.1755 23.001 14 23ZM7.6267 2.99999C7.06227 2.99744 6.50294 3.1069 5.98111 3.32204C5.45928 3.53718 4.98533 3.85372 4.5867 4.25333C3.78145 5.06282 3.32941 6.15819 3.32941 7.29999C3.32941 8.4418 3.78145 9.53716 4.5867 10.3467L14 19.7733L23.4134 10.3467C24.2186 9.53716 24.6707 8.4418 24.6707 7.29999C24.6707 6.15819 24.2186 5.06282 23.4134 4.25333C22.5916 3.47694 21.5039 3.04439 20.3734 3.04439C19.2428 3.04439 18.1551 3.47694 17.3334 4.25333L14.9467 6.65333C14.8227 6.7783 14.6753 6.87749 14.5128 6.94518C14.3503 7.01287 14.176 7.04772 14 7.04772C13.824 7.04772 13.6497 7.01287 13.4873 6.94518C13.3248 6.87749 13.1773 6.7783 13.0534 6.65333L10.6667 4.25333C10.2681 3.85372 9.79412 3.53718 9.27229 3.32204C8.75046 3.1069 8.19113 2.99744 7.6267 2.99999V2.99999Z' />
		</svg>
	)
}

export default FavoriteIcon
