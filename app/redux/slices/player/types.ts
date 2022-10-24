export type StatusType = "on" | "off"

export interface IPlayState {
	status: StatusType
	name: string
	nameLink: string
	artist: string
	artistLink: string
}
