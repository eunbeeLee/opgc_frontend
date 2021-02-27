import { combineReducers } from 'redux';
import rank from '@/modules/rank';
import loading from '@/modules/loading';
import error from '@/modules/error';
import user, { userSaga } from '@/modules/user';
import { all } from 'redux-saga/effects';

const rootReducer = combineReducers({
    rank,
    user,
    loading,
    error,
});

export function* rootSaga(): Generator {
    yield all([userSaga()]);
}

export type T_ROOT_REDUCER = ReturnType<typeof rootReducer> 
export default rootReducer;
