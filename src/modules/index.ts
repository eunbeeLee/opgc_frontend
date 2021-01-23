import { combineReducers } from 'redux';
import ranking from '@/modules/ranking';
import search from '@/modules/search';
import loading from '@/modules/loading';
import user, { userSaga } from '@/modules/user';
import { all } from 'redux-saga/effects';

const rootReducer = combineReducers({
    ranking,
    search,
    user,
    loading,
});

export function* rootSaga() {
    yield all([ userSaga() ]);
}

export default rootReducer;