/**
 * 모든 API 요청의 에러상태를 관리하는 store
 */
import { createAction, handleActions } from 'redux-actions';

interface IError {
    requestType: string;
    error: Error | null;
}
interface IState {
    [requestType: string]: Error | null;
}

const initialState: IState = {};
const SET_ERROR = 'error/SET_ERROR';

export const actions = {
    setError: createAction(
        SET_ERROR,
        (requestType: string, error: Error): IError => ({ requestType, error })
    ),
};

const error = handleActions(
    {
        [SET_ERROR]: (
            state: IState,
            { payload }: { type: typeof SET_ERROR; payload: IError }
        ) => ({
            ...state,
            [payload.requestType]: payload.error,
        }),
    },
    initialState
);

export default error;
