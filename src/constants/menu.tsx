import { SearchPage, RankingPage, UserPage } from '@/pages';

export const MAIN_MENU_LIST = [
    { display: 'Search', name: 'search', path: '/main/search', component: SearchPage },
    { display: 'Ranking', name: 'ranking', path: '/main/ranking', component: RankingPage },
    { display: 'User', name: 'user', path: '/main/user/:userId', component: UserPage },
];