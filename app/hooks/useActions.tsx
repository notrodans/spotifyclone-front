import { useAppDispatch } from "@redux/hooks";
import { rootAction } from "@redux/storeAction";
import { bindActionCreators } from "redux";

export const useActions = () => {
	const dispatch = useAppDispatch();

	return bindActionCreators(rootAction, dispatch);
};
