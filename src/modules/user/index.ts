/**
 * 검색한 user의 정보를 관리하는 store
 */
import { handleActions, createAction } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import * as api from '@/apis';
import { createRequestSaga } from '@/utils/redux';
/**
 * interface
 */
interface I_STATE {
    user: I_USER;
    error?: string | null;
}

/**
 * actions
 */
export const PATCH_USER = 'user/PATCH_USER';
export const PATCH_USER_SUCCESS = 'user/PATCH_USER_SUCCESS';
export const PATCH_USER_FAILURE = 'user/PATCH_USER_FAILURE';

export const UPDATE_USER = 'user/UPDATE_USER';
export const UPDATE_USER_SUCCESS = 'user/UPDATE_USER_SUCCESS';
export const UPDATE_USER_FAILURE = 'user/UPDATE_USER_FAILURE';

/**
 * functions for creating actions
 */
export const actions = {
    updateUser: createAction(
        UPDATE_USER,
        (username: string): string => username
    ),
    patchUser: createAction(PATCH_USER, (username: string): string => username),
    patchUserSuccess: createAction(PATCH_USER_SUCCESS, (user: I_USER) => user),
    patchUserFailure: createAction(
        PATCH_USER_FAILURE,
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
const patchUserSaga = createRequestSaga(PATCH_USER, api.getUser);
const updateUserSaga = createRequestSaga(UPDATE_USER, api.patchUser);

/**
 * module saga
 */
export function* userSaga(): Generator {
    yield takeLatest(PATCH_USER, patchUserSaga);
    yield takeLatest(UPDATE_USER, updateUserSaga);
}

/**
 * reducer
 */
const user = handleActions(
    {
        [PATCH_USER_SUCCESS]: (
            state: I_STATE,
            { payload }: { payload: I_USER }
        ): I_STATE => ({
            ...state,
            user: payload,
        }),
        [PATCH_USER_FAILURE]: (
            state: I_STATE /*{ payload }: { payload: Error }*/
        ): any => ({
            ...state,
            user: null,
        }),
        [UPDATE_USER_SUCCESS]: (
            state: I_STATE,
            { payload }: { payload: I_USER }
        ): I_STATE => ({
            ...state,
            user: payload,
        }),
        [UPDATE_USER_FAILURE]: (
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
