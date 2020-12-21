import { Search, Ranking, User } from '@/pages';

export const MAIN_MENU_LIST = [
    { display: 'Search', name: 'search', path: '/main/search', component: Search },
    { display: 'Ranking', name: 'ranking', path: '/main/ranking', component: Ranking },
    { display: 'User', name: 'user', path: '/main/user', component: User },
];