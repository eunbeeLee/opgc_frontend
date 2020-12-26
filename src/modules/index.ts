import { combineReducers } from 'redux';
import ranking from '@/modules/ranking';
import search from '@/modules/search';
import user from '@/modules/user';

const rootReducer = combineReducers({
    ranking,
    search,
    user
});

export default rootReducer;