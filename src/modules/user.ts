import { handleActions, createAction } from 'redux-actions';

const ACTION1 = 'user/ACTION1';

export const action1 = createAction(ACTION1);

const initialState = {};

const user = handleActions({
    [ACTION1]: (state, action) => ({ ...state })
}, initialState);

export default user;