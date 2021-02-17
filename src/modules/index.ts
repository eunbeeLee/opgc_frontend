import { combineReducers } from 'redux';
import ranking from '@/modules/ranking';
import loading from '@/modules/loading';
import error from '@/modules/error';
import user, { userSaga } from '@/modules/user';
import { all } from 'redux-saga/effects';

const rootReducer = combineReducers({
    ranking,
    user,
    loading,
    error,
});

export function* rootSaga(): Generator {
    yield all([userSaga()]);
}

export default rootReducer;
