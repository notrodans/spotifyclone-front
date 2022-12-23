export interface IUploadAlbum {
	tracks: Track[]
}

export type Track = { id: number; link: string; name: string; size: number; type: string }
