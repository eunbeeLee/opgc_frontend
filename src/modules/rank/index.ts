import { E_RANK_TYPE } from '@/apis/rankApi/type';
import { createRequestActionTypes } from '@/libs/redux';
import { handleActions, createAction } from 'redux-actions';

interface I_STATE {
    searchId: string;
    totalUsersCnt: number;
    ranks: any[];
}

const [GET_RANKS, GET_RANKS_SUCCESS, GET_RANKS_FAILURE] = createRequestActionTypes('rank/GET_USERS');
const CHANGE_SEARCH_ID = 'rank/CHANGE_SEARCH_ID';

export const getUsers = createAction(
    GET_RANKS,
    (userId: string): string => userId
);

export const changeSearchedId = createAction(
    CHANGE_SEARCH_ID,
    (id: string) => id
);

const initialState: I_STATE = {
    searchId: '',
    totalUsersCnt: 0,
    ranks: [],
};

const users = [
    { rank: 1, id: 'jay', commitCnt: 35 },
    { rank: 3, id: 'ginameee', commitCnt: 34 },
    { rank: 2, id: 'ginameee2', commitCnt: 33 },
    { rank: 4, id: 'ginameee3', commitCnt: 31 },
    { rank: 5, id: 'ginameee4', commitCnt: 20 },
];

const rank = handleActions(
    {
        [GET_RANKS_SUCCESS]: (state: I_STATE) => ({
            ...state,
            ranks: state.searchId ? users.filter((user) => user.id === state.searchId) : users,
        }),
        [GET_RANKS_FAILURE]: (state: I_STATE, { payload: Error }): any => ({
            ...state,
            ranks: []
        }),
        [CHANGE_SEARCH_ID]: (state: I_STATE, { payload: userId }): any => ({
            ...state,
            searchId: userId
        })
    },
    initialState
);

export default rank;
