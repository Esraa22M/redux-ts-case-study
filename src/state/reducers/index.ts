import { combineReducers } from "redux";
import reposiriesReducer from "./repositoriesReducer";
const reducers = combineReducers({ repositories: reposiriesReducer });
export default reducers;
