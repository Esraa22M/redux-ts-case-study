import ActionType from "../action-types";
import { Action } from "../actions";
interface ReposiriesState {
	loading: boolean;
	error: string | null;
	data: string[];
}

const reposiriesReducer = (state: ReposiriesState, action: Action): ReposiriesState => {
	switch (action.type) {
		case ActionType.SEARCH_REPOSITORIES:
			return { loading: true, error: null, data: [] };
		case ActionType.SEARCH_REPOSITORIES_SUCESS:
			return { loading: false, error: null, data: action.payload };

		case ActionType.SEARCH_REPOSITORIES_ERROR:
			return { loading: false, error: action.payload, data: [] };

		default:
			return state;
	}
};
export default reposiriesReducer;
