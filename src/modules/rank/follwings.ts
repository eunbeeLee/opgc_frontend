import { createRequestActionTypes, createRequestSaga } from '@/libs/redux';
import { handleActions, createAction } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import * as api from '@/apis';
import { E_RANK_TYPE } from '@/apis/rankApi/type';
import { I_RANK } from '@/types/rank';

interface I_STATE {
    totalUsersCnt: number;
    ranks: I_RANK[];
}

/**
 * actions
 */
export const GET_RANKS = 'rank/GET_RANKS';
export const GET_RANKS_SUCCESS = 'rank/GET_RANKS_SUCCESS';
export const GET_RANKS_FAILURE = 'rank/GET_RANKS_FAILURE';

/**
 * functions for createing actions
 */
export const actions = {
    getRanks: createAction(GET_RANKS, (searchId: string) => ({
        searchId,
        type: E_RANK_TYPE.FOLLOWINGS,
    })),
};

/**
 * initial State
 */
const initialState: I_STATE = {
    totalUsersCnt: 0,
    ranks: [],
};

/**
 * action saga
 */
const getRanksSaga = createRequestSaga(GET_RANKS, api.getRanks);

/**
 * module saga
 */
export function* contributionSaga(): Generator {
    yield takeLatest(GET_RANKS, getRanksSaga);
}

/**
 * Reducer
 */
const contribution = handleActions(
    {
        [GET_RANKS_SUCCESS]: (
            state: I_STATE,
            { payload: ranks }: { payload: I_RANK[] }
        ) => ({
            ...state,
            totalUsersCnt: ranks.length,
            ranks,
        }),
        [GET_RANKS_FAILURE]: (state: I_STATE, { payload: Error }): any => ({
            ...state,
            ranks: [],
        }),
    },
    initialState
);

export default contribution;
