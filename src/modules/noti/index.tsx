/**
 * 공지사항과 관련된 store
 */
import * as api from '@/apis';
import { I_NOTI } from '@/types/noti';
import { createRequestSaga } from '@/utils/redux';
import { handleActions, createAction } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';

/**
 * interface
 */
interface I_STATE {
    nextPageCursor: string;
    prevPageCursor: string;
    notis: I_NOTI[];
}

/**
 * actions
 */
export const GET_NOTIS = 'noti/GET_NOTIS';
export const GET_NOTIS_SUCCESS = 'noti/GET_NOTIS_SUCCESS';
export const GET_NOTIS_FAILURE = 'noti/GET_NOTIS_FAILURE';

/**
 * functions for creating actions
 */
export const actions = {
    getNotis: createAction(GET_NOTIS),
};

/**
 * initial state
 */
const initialState: I_STATE = {
    notis: [],
    nextPageCursor: '',
    prevPageCursor: '',
};

/**
 * action saga
 */
const getNotisSaga = createRequestSaga(GET_NOTIS, api.getNotis);

/**
 * module saga
 */
export function* notiSaga(): Generator {
    yield takeLatest(GET_NOTIS, getNotisSaga);
}

/**
 * reducer
 */
const search = handleActions(
    {
        [GET_NOTIS_SUCCESS]: (
            state: I_STATE,
            { payload }: { payload: I_PAGE<I_NOTI[]> }
        ) => {
            const { nextPageCursor, prevPageCursor, data } = payload;

            return {
                ...state,
                nextPageCursor,
                prevPageCursor,
                notis: data,
            };
        },
        [GET_NOTIS_FAILURE]: (state: I_STATE /*{ payload: Error }*/): any => ({
            ...state,
            notis: [],
            nextPageCursor: null,
            prevPageCursor: null,
        }),
    },
    initialState
);

export default search;
