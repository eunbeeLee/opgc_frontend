import { combineReducers } from 'redux';
import loading, { actions as loadingActions } from '@/modules/loading';
import error, { actions as errorActions } from '@/modules/error';
import ui, { actions as uiActions } from '@/modules/ui';
import search, { actions as searchActions } from '@/modules/search';
import user, { actions as userActions, userSaga } from '@/modules/user';
import rank, { actions as rankActions } from '@/modules/rank';
import { all } from 'redux-saga/effects';
import { contributionSaga } from './rank/contribution';

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
    }),
    user,
    loading,
    error,
});

export function* rootSaga(): Generator {
    yield all([userSaga(), contributionSaga()]);
}

export const actions = {
    search: searchActions,
    user: userActions,
    loading: loadingActions,
    error: errorActions,
    rank: rankActions,
    ui: uiActions,
};

export type T_ROOT_REDUCER = ReturnType<typeof rootReducer>;
export default rootReducer;
