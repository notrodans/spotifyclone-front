import * as authAsyncActions from "./slices/auth/auth.actions"
import { audioActions } from "./slices/audio/audio.slice"
import { authActions } from "./slices/auth/auth.slice"
import { uploadAlbumActions } from "./slices/uploadAlbum/uploadAlbum.slice"

export const rootAction = {
	...authAsyncActions,
	...authActions,
	...audioActions,
	...uploadAlbumActions
}
