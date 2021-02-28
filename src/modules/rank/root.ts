import { handleActions, createAction } from 'redux-actions';

/**
 * interface
 */
interface I_STATE {
    searchId: string;
}

/**
 * actions
 */
const CHANGE_SEARCH_ID = 'rank/CHANGE_SEARCH_ID';

/**
 * functions for creating actions
 */
export const actions = {
    changeSearchId: createAction(
        CHANGE_SEARCH_ID,
        (id: string) => id
    )
}

/**
 * initial state
 */
const initialState: I_STATE = {
    searchId: '',
};


/**
 * reducer
 */
const root = handleActions(
    {
        [CHANGE_SEARCH_ID]: (state: I_STATE, { payload: userId }): any => ({
            ...state,
            searchId: userId
        }),
    },
    initialState
);

export default root;
