import { createRequestSaga } from '@/utils/redux';
import { handleActions, createAction } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import * as api from '@/apis';
import { E_TIER } from '@/constants/user';

interface I_STATE {
    ranks: I_RANK[];
    nextPageCursor?: string | null;
    prePageCursor?: string | null;
    pageSize: number;
}

/**
 * actions
 */
export const GET_RANKS = 'rank/GET_TIER_RANKS';
export const GET_RANKS_SUCCESS = 'rank/GET_TIER_RANKS_SUCCESS';
export const GET_RANKS_FAILURE = 'rank/GET_TIER_RANKS_FAILURE';

/**
 * functions for createing actions
 */
export const actions = {
    getRanks: createAction(GET_RANKS, (params?: { tier: E_TIER }) => ({
        ...params,
    })),
};

/**
 * initial State
 */
const initialState: I_STATE = {
    ranks: [],
    pageSize: 10,
};

/**
 * action saga
 */
const getRanksSaga = createRequestSaga(GET_RANKS, api.getOverallRanks);

/**
 * module saga
 */
export function* tierRankSaga(): Generator {
    yield takeLatest(GET_RANKS, getRanksSaga);
}

/**
 * Reducer
 */
const tier = handleActions(
    {
        [GET_RANKS_SUCCESS]: (
            state: I_STATE,
            { payload }: { payload: I_PAGE<I_RANK[]> }
        ) => {
            const { nextPageCursor, prevPageCursor, data } = payload;

            return {
                ...state,
                nextPageCursor,
                prevPageCursor,
                ranks: data,
            };
        },
        [GET_RANKS_FAILURE]: (state: I_STATE /*{ payload: Error }*/): any => ({
            ...state,
            ranks: [],
            nextPageCursor: null,
            prevPageCursor: null,
        }),
    },
    initialState
);

export default tier;
