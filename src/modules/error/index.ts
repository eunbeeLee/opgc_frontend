/**
 * 모든 API 요청의 에러상태를 관리하는 store
 */
import { deepCopy } from '@/utils/object';
import { AxiosError } from 'axios';
import { createAction, handleActions } from 'redux-actions';

interface IError {
    requestType: string;
    error: AxiosError | null;
}
interface IState {
    [requestType: string]: AxiosError | null;
}

const initialState: IState = {};
const SET_ERROR = 'error/SET_ERROR';

export const actions = {
    setError: createAction(
        SET_ERROR,
        (requestType: string, error: AxiosError): IError => ({
            requestType,
            error,
        })
    ),
};

const error = handleActions(
    {
        [SET_ERROR]: (
            state: IState,
            { payload }: { type: typeof SET_ERROR; payload: IError }
        ) => {
            let result = deepCopy(state);

            result[payload.requestType] = payload.error;

            for (const key in result) {
                if (!result[key]) {
                    delete result[key];
                }
            }

            return result;
        },
    },
    initialState
);

export default error;
