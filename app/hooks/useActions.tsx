import { rootAction } from "@redux/storeAction";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

export const useActions = () => {
	return bindActionCreators(rootAction, useDispatch());
};
