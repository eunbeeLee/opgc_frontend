import { handleActions, createAction } from 'redux-actions';

interface IState {
    searchId: string;
    totalUsersCnt: number;
    users: any[];
}

const GET_USERS = 'ranking/GET_USERS';
const CHANGE_SEARCH_ID = 'ranking/CHANGE_SEARCH_ID';

export const getUsers = createAction(GET_USERS, (userId: string): string => userId);
export const changeSearchId = createAction(CHANGE_SEARCH_ID);

const initialState: IState = {
    searchId: '',
    totalUsersCnt: 535325,
    users: []
};

const users = [
    { rank: 1, id: 'jay', commitCnt: 35 },
    { rank: 3, id: 'ginameee', commitCnt: 34 },
    { rank: 2, id: 'ginameee2', commitCnt: 33 },
    { rank: 4, id: 'ginameee3', commitCnt: 31 },
    { rank: 5, id: 'ginameee4', commitCnt: 20 },
    
];

const ranking = handleActions({
    [GET_USERS]: (state: IState, { payload: userId }: { payload: string }) => ({
        ...state,
        users: (userId) ? users.filter(user => user.id === userId) : users
    })
}, initialState);

export default ranking;