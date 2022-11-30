export interface IUploadAlbum {
	tracks: Track[]
}

export type Track = { name: string; size: number; type: string; link: string; id: number }
