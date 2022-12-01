export const convertTime = (timestamps = 0) => {
	if (timestamps > 1) {
		const hours = Math.floor(timestamps / 60 / 60)
		const minutes = Math.floor(timestamps / 60)
		const seconds = timestamps % 60
		const date = new Date(timestamps * 1000)

		if (seconds >= 1 && minutes < 1) {
			return date.toISOString().substring(15, 19)
		} else if (minutes < 1 && hours >= 1) {
			return date.toISOString().substring(11, 19)
		} else if (minutes >= 1 && minutes < 10 && hours < 1) {
			return date.toISOString().substring(15, 19)
		} else if (minutes >= 1 && hours < 1) {
			return date.toISOString().substring(14, 19)
		} else if (hours < 1) {
			return date.toISOString().substring(11, 19)
		} else if (hours >= 1) {
			return date.toISOString().substring(11, 19)
		}
	}
	return "0:00"
}
