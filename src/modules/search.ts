import { handleActions, createAction } from 'redux-actions';

interface IState {}

const ACTION1 = 'search/ACTION1';

export const action1 = createAction(ACTION1);

const initialState: IState = {};

const search = handleActions({
    [ACTION1]: (state, action) => ({ ...state })
}, initialState);

export default search;