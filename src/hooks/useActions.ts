import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import ActionsCreators from "../store/actions-creater/index";

export const UseActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(ActionsCreators, dispatch);
};
