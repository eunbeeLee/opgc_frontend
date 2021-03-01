import { handleActions, createAction } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import * as api from '@/apis';
import { createRequestActionTypes, createRequestSaga } from '@/libs/redux';
import { I_USER } from '@/types/user';

/**
 * interface
 */
interface I_STATE {
    user: I_USER | null;
    error?: string | null;
}

/**
 * actions
 */
const [GET_USER, GET_USER_SUCCESS, GET_USER_FAILURE] = createRequestActionTypes(
    'user/GET_USER'
);

/**
 * functions for creating actions
 */
export const getUser = createAction(
    GET_USER,
    (username: string): string => username
);
export const getUserSuccess = createAction(
    GET_USER_SUCCESS,
    (user: I_USER) => user
);
export const getUserFailure = createAction(
    GET_USER_FAILURE,
    (error: Error): Error => error
);

/**
 * initial state
 */
const initialState: I_STATE = {
    user: null,
};

/**
 * action saga
 */
const getUserSaga  = createRequestSaga(GET_USER, api.getUser);

/**
 * module saga
 */
export function* userSaga(): Generator {
    yield takeLatest(GET_USER, getUserSaga);
}

/**
 * reducer
 */
const user = handleActions(
    {
        [GET_USER_SUCCESS]: (state: I_STATE, { payload }: { payload: I_USER }): I_STATE => ({ ...state, user: payload }),
        [GET_USER_FAILURE]: (state: I_STATE, { payload }: { payload: Error }): any => ({
            ...state,
            user: null,
        }),
    },
    initialState
);

export default user;
