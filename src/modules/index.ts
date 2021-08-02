import { combineReducers } from 'redux';
import loading, { actions as loadingActions } from '@/modules/loading';
import error, { actions as errorActions } from '@/modules/error';
import ui, { actions as uiActions } from '@/modules/ui';
import search, { actions as searchActions } from '@/modules/search';
import user, { actions as userActions, userSaga } from '@/modules/user';
import userList, {actions as userListActions, userListSaga} from '@/modules/userList';
import rank, { actions as rankActions } from '@/modules/rank';
import noti, { actions as notiActions, notiSaga } from '@/modules/noti';
import { all } from 'redux-saga/effects';
import { contributionRankSaga } from './rank/contribution';
import { tierRankSaga } from './rank/tier';
import { continuousCommitRankSaga } from './rank/continuousCommit';
import { followersRankSaga } from './rank/followers';
import { followingsRankSaga } from './rank/followings';

const rootReducer = combineReducers({
    search,
    ui: combineReducers({
        app: ui.app,
        mainPage: ui.mainPage,
    }),
    rank: combineReducers({
        root: rank.root,
        contribution: rank.contribution,
        followers: rank.followers,
        followings: rank.followings,
        continuousCommit: rank.continuousCommitDay,
        tier: rank.tier,
    }),
    user,
    userList,
    noti,
    loading,
    error,
});

export function* rootSaga(): Generator {
    yield all([
        userSaga(),
        userListSaga(),
        continuousCommitRankSaga(),
        contributionRankSaga(),
        followingsRankSaga(),
        followersRankSaga(),
        tierRankSaga(),
        notiSaga(),
    ]);
}

export const actions = {
    search: searchActions,
    user: userActions,
    userList: userListActions,
    loading: loadingActions,
    error: errorActions,
    rank: rankActions,
    ui: uiActions,
    noti: notiActions,
};

export type T_ROOT_REDUCER = ReturnType<typeof rootReducer>;
export default rootReducer;
