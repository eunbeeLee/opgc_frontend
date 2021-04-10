import { combineReducers } from 'redux';
import loading from '@/modules/loading';
import error from '@/modules/error';
import user, { userSaga } from '@/modules/user';
import rank, { actions as rankActions } from '@/modules/rank';
import { all } from 'redux-saga/effects';
import { contributionSaga } from './rank/contribution';

const rootReducer = combineReducers({
    rank: combineReducers({
        root: rank.root,
        contribution: rank.contribution,
        followers: rank.followers,
        followings: rank.followings,
        continuous_commit_day: rank.continuousCommitDay
    }),
    user,
    loading,
    error,
});

export function* rootSaga(): Generator {
    yield all([
        userSaga(),
        contributionSaga(),
    ]);
}

export const actions = {
    rank: rankActions
}

export type T_ROOT_REDUCER = ReturnType<typeof rootReducer> 
export default rootReducer;
