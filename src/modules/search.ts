import { handleActions, createAction } from 'redux-actions';

const ACTION1 = 'search/ACTION1';

export const action1 = createAction(ACTION1);

const initialState = {};

const search = handleActions({
    [ACTION1]: (state, action) => ({ ...state })
}, initialState);

export default search;