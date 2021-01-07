import { combineReducers } from 'redux';
import ranking from '@/modules/ranking';
import search from '@/modules/search';
import user from '@/modules/user';
import { all } from 'redux-saga/effects';

const rootReducer = combineReducers({
    ranking,
    search,
    user
});

export function* rootSaga() {
    yield all([]);
}

export default rootReducer;