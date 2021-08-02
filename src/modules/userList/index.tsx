/**
 * 유저 리스트 관련
 */
import * as api from '@/apis';
import { createRequestSaga } from '@/utils/redux';
import { handleActions, createAction } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import {I_API_GET_USER_LIST_RES} from "@/apis/userApi/types";

/**
 * interface
 */
interface I_STATE {
    nextPageCursor: string;
    prevPageCursor: string;
    users: I_API_GET_USER_LIST_RES[];
}

/**
 * actions
 */
export const GET_USERS = 'users/GET_USERS';
export const GET_USERS_SUCCESS = 'users/GET_USERS_SUCCESS';
export const GET_USERS_FAILURE = 'users/GET_USERS_FAILURE';

/**
 * functions for creating actions
 */
export const actions = {
    getUsers: createAction(GET_USERS),
};

/**
 * initial state
 */
const initialState: I_STATE = {
    users: [],
    nextPageCursor: '',
    prevPageCursor: '',
};

/**
 * action saga
 */
const getUserListSaga = createRequestSaga(GET_USERS, api.getUserList);

/**
 * module saga
 */
export function* userListSaga(): Generator {
    yield takeLatest(GET_USERS, getUserListSaga);
}

/**
 * reducer
 */
const userList = handleActions(
    {
        [GET_USERS_SUCCESS]: (
            state: I_STATE,
            { payload }: { payload: I_PAGE<I_LIST_USER[]> }
        ) => {
            const { nextPageCursor, prevPageCursor, data } = payload;

            return {
                ...state,
                nextPageCursor,
                prevPageCursor,
                users: data,
            };
        },
        [GET_USERS_FAILURE]: (state: I_STATE /*{ payload: Error }*/): any => ({
            ...state,
            users: [],
            nextPageCursor: null,
            prevPageCursor: null,
        }),
    },
    initialState
);

export default userList;
