import { handleActions, createAction } from 'redux-actions';
import { call, put, takeLatest } from 'redux-saga/effects';
import * as api from '@/apis';
import { User } from '@/constants/user.class';
import { createRequestActionTypes, createRequestSaga } from '@/libs/redux';

/**
 * interface
 */
interface I_STATE {
    user: User | null;
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
    (user: User): User => user
);
export const getUserFailure = createAction(
    GET_USER_FAILURE,
    (error: Error): Error => error
);

/**
 * initial state
 */
const initialState: I_STATE = {
    user: new User(),
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
        [GET_USER_SUCCESS]: (state: I_STATE, { payload }: { payload: User }): I_STATE => ({ ...state, user: payload }),
        [GET_USER_FAILURE]: (state: I_STATE, { payload }: { payload: Error }): any => ({
            ...state,
            user: null,
        }),
    },
    initialState
);

export default user;
