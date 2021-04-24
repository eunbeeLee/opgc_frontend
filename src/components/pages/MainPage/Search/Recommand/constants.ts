import Favorite from './Favorite';
import History from './History';
import { I_TAB } from './types';

export const TABS: I_TAB[] = [
    {
        display: '최근검색',
        name: 'history',
        component: History,
    },
    {
        display: '즐겨찾기',
        name: 'favorite',
        component: Favorite,
    },
];
