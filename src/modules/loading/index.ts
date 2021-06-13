/**
 * 모든 API의 로딩상태를 관리하는 store
 */
import { createAction, handleActions } from 'redux-actions';

interface I_STATE {
    [requestType: string]: boolean;
}

const START_LOADING = 'loading/START_LOADING';
const FINISH_LOADING = 'loading/FINISH_LOADING';

export const actions = {
    startLoading: createAction(
        START_LOADING,
        (requestType: string): string => requestType
    ),
    finishLoading: createAction(
        FINISH_LOADING,
        (requestType: string): string => requestType
    ),
};

const initialState: I_STATE = {};

const loading = handleActions(
    {
        [START_LOADING]: (
            state,
            action: { type: typeof START_LOADING; payload: string }
        ) => ({
            ...state,
            [action.payload]: true,
        }),
        [FINISH_LOADING]: (
            state,
            action: { type: typeof FINISH_LOADING; payload: string }
        ) => ({
            ...state,
            [action.payload]: false,
        }),
    },
    initialState
);

export default loading;
