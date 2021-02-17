import { createAction, handleActions } from 'redux-actions';

interface IState {
    [requestType: string]: boolean;
}

const START_LOADING = 'loading/START_LOADING';
const FINISH_LOADING = 'loading/FINISH_LOADING';

export const startLoading = createAction(
    START_LOADING,
    (requestType: string): string => requestType
);

export const finishLoading = createAction(
    FINISH_LOADING,
    (requestType: string): string => requestType
);

const initialState: IState = {};

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
