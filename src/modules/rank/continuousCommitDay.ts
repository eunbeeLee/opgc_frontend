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
const [GET_RANKS, GET_RANKS_SUCCESS, GET_RANKS_FAILURE] = createRequestActionTypes('rank/GET_RANKS');

/**
 * functions for createing actions
 */
export const actions = {
    getRanks: createAction(
        GET_RANKS,
        (searchId: string) => ({ searchId, type: E_RANK_TYPE.CONTINUOUS_COMMIT_DAY })
    )
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
const getRanksSaga  = createRequestSaga(GET_RANKS, api.getRanks);

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
        [GET_RANKS_SUCCESS]: (state: I_STATE, { payload: ranks }: { payload: I_RANK[] }) => ({
            ...state,
            totalUsersCnt: ranks.length,
            ranks
        }),
        [GET_RANKS_FAILURE]: (state: I_STATE, { payload: Error }): any => ({
            ...state,
            ranks: []
        })
    },
    initialState
);

export default contribution;