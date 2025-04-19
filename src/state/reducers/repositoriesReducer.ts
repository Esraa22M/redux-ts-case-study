interface ReposiriesState {
	loading: boolean;
	error: string | null;
	data: string[];
}
enum ActionType {
    SEARCH_REPOSITORIES = "search_repositories",
    SEARCH_REPOSITORIES_SUCESS="search_repositories_sucess",
    SEARCH_REPOSITORIES_ERROR="search_repositories_error"
};
type Action = SearchRepositoriesAction | SearchRepositoriesSucessAction | SearchRepositoriesErrorAction;
interface SearchRepositoriesAction {
	type:ActionType.SEARCH_REPOSITORIES;
}
interface SearchRepositoriesSucessAction {
	type: ActionType.SEARCH_REPOSITORIES_SUCESS;
	payload: string[];
}
interface SearchRepositoriesErrorAction {
	type: ActionType.SEARCH_REPOSITORIES_ERROR;
	payload: string;
}

const reducer = (
	state: ReposiriesState,
	action:Action
): ReposiriesState => {
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
export default reducer;
