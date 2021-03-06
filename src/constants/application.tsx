import { SearchPage, RankPage, UserPage } from '@/components/pages';

export const MAIN_MENU_LIST: I_MENU[] = [
    {
        display: 'Search',
        name: 'search',
        path: '/search',
        component: SearchPage,
        visible: true,
    },
    {
        display: 'Rank',
        name: 'rank',
        path: '/rank',
        component: RankPage,
        visible: true,
    },
    {
        display: 'User',
        name: 'user',
        path: '/users/:userId',
        component: UserPage,
        visible: false,
    },
];


export const GITHUB_BASE_URL = 'https://github.com';