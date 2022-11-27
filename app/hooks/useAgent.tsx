export const useAgent = () => {
	if (typeof window !== "undefined") {
		const { userAgent } = navigator

		const isAndroid = () => Boolean(userAgent.match(/Android/i))
		const isIos = () => Boolean(userAgent.match(/iPhone|iPad|iPod/i))
		const isOpera = () => Boolean(userAgent.match(/Opera Mini/i))
		const isWindows = () => Boolean(userAgent.match(/IEMobile/i))

		const isMobile = isAndroid() || isIos() || isOpera() || isWindows()

		return { isMobile }
	}
	return null
}
