import { SearchPage, RankingPage, UserPage } from '@/pages';

export const MAIN_MENU_LIST: IMenu[] = [
    { display: 'Search', name: 'search', path: '/main/search', component: SearchPage, visible: true },
    { display: 'Ranking', name: 'ranking', path: '/main/ranking', component: RankingPage, visible: true },
    { display: 'User', name: 'user', path: '/main/user/:userId', component: UserPage, visible: false },
];