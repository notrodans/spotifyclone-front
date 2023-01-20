import { useAppDispatch } from "@redux/hooks";
import { rootAction } from "@redux/storeAction";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

export const useActions = () => {
	const dispatch = useAppDispatch();

	return bindActionCreators(rootAction, useDispatch());
};
