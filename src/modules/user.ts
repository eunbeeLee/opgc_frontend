import { handleActions, createAction } from 'redux-actions';
import { call, put, takeLatest } from 'redux-saga/effects';
import * as api from '@/apis';
import { createRequestActionTypes } from '@/libs/redux';
import { User } from '@/services/user';

/**
 * interface
 */
interface IState {
    user: User
}

/**
 * actions 
 */

const [GET_USER, GET_USER_SUCCESS, GET_USER_FAILURE] = createRequestActionTypes('user/GET_USER');

/**
 * functions for creating actions
 */
export const getUser = createAction(GET_USER, (username: string): string => username);
export const getUserSuccess = createAction(GET_USER_SUCCESS, (user: User): User => user);
export const getUserFailure = createAction(GET_USER_FAILURE, (error: Error): Error => error);


/**
 * initial state
 */
const initialState: IState = {
    user: new User(),
};

/**
 * action saga
 */
function* getUserSaga ({ payload: username }: { type: typeof GET_USER, payload: string }) {
    try {
        const { data: user }: { data: IUser, [anyProps: string]: any } = yield call(api.getUser, username);
        yield put(getUserSuccess(new User(user)));
    } catch (e) {
        yield put(getUserFailure(e));
        throw e;
    }
}

/** 
 * module saga
 */
export function* userSaga (): Generator {
    yield takeLatest(GET_USER, getUserSaga);
}

/**
 * reducer
 */
const user = handleActions({
    [GET_USER_SUCCESS]: (state: IState, { payload }: { payload: User }): IState => ({ ...state, user: payload }),
    // [GET_USER_FAILURE]: (state: IState, { payload }: { payload: Error }): any => ({ ...state, error: payload })
}, initialState);

export default user;