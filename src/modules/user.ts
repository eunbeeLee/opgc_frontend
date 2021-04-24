import { handleActions, createAction } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import * as api from '@/apis';
import { createRequestSaga } from '@/libs/redux';
/**
 * interface
 */
interface I_STATE {
    user: User;
    error?: string | null;
}

/**
 * actions
 */
export const GET_USER = 'user/GET_USER';
export const GET_USER_SUCCESS = 'user/GET_USER_SUCCESS';
export const GET_USER_FAILURE = 'user/GET_USER_FAILURE';

export const PATCH_USER = 'user/PATCH_USER';
export const PATCH_USER_SUCCESS = 'user/PATCH_USER_SUCCESS';
export const PATCH_USER_FAILURE = 'user/PATCH_USER_FAILURE';

/**
 * functions for creating actions
 */
export const actions = {
    patchUser: createAction(PATCH_USER, (username: string): string => username),
    getUser: createAction(GET_USER, (username: string): string => username),
    getUserSuccess: createAction(GET_USER_SUCCESS, (user: User) => user),
    getUserFailure: createAction(
        GET_USER_FAILURE,
        (error: Error): Error => error
    ),
};

/**
 * initial state
 */
const initialState: I_STATE = {
    user: null,
};

/**
 * action saga
 */
const getUserSaga = createRequestSaga(GET_USER, api.getUser);
const patchUserSaga = createRequestSaga(PATCH_USER, api.patchUser);

/**
 * module saga
 */
export function* userSaga(): Generator {
    yield takeLatest(GET_USER, getUserSaga);
    yield takeLatest(PATCH_USER, patchUserSaga);
}

/**
 * reducer
 */
const user = handleActions(
    {
        [GET_USER_SUCCESS]: (
            state: I_STATE,
            { payload }: { payload: User }
        ): I_STATE => ({
            ...state,
            user: payload,
        }),
        [GET_USER_FAILURE]: (
            state: I_STATE /*{ payload }: { payload: Error }*/
        ): any => ({
            ...state,
            user: null,
        }),
        [PATCH_USER_SUCCESS]: (
            state: I_STATE,
            { payload }: { payload: User }
        ): I_STATE => ({
            ...state,
            user: payload,
        }),
        [PATCH_USER_FAILURE]: (
            state: I_STATE
            /*{ payload }: { payload: Error }*/
        ): any => ({
            ...state,
            user: null,
        }),
    },
    initialState
);

export default user;
