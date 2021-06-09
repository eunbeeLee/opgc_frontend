import { createRequestSaga } from '@/utils/redux';
import { handleActions, createAction } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import * as api from '@/apis';
import { I_TIER_RANK } from '@/types/rank';
import { E_TIER } from '@/constants/user';

interface I_STATE {
    ranks: I_TIER_RANK[];
    nextPageKey?: string | null;
    prePageKey?: string | null;
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
const getRanksSaga = createRequestSaga(GET_RANKS, api.getUsersTier);

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
            { payload }: { payload: I_API_TIERS }
        ) => {
            const { next, previous, results } = payload;

            const ranks: I_TIER_RANK[] = results.map((tierInfo, idx) => ({
                rank: idx + 1,
                id: tierInfo.id,
                username: tierInfo.username,
                name: tierInfo.name,
                profileImageUrl: tierInfo.avatar_url,
                tier: tierInfo.tier,
                desc: tierInfo.bio,
                company: tierInfo.company,
                continuousCommit: tierInfo.continuous_commit_day,
            }));

            return {
                ...state,
                nextPageKey: next,
                prePageKey: previous,
                ranks,
            };
        },
        [GET_RANKS_FAILURE]: (state: I_STATE /*{ payload: Error }*/): any => ({
            ...state,
            ranks: [],
            nextPageKey: null,
            prePageKey: null,
        }),
    },
    initialState
);

export default tier;
