import { combineReducer } from "redux";
import AmountReducer from "./AmountReducer";

const reducers = combineReducer({
  amount: AmountReducer,
});
export default reducers;
