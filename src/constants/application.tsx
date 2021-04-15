import { IntroPage, RankPage, UserPage, MainPage } from '@/components/pages';

export const STORAGE_PREFIX = 'opgc';

export const MAIN_MENU_LIST: I_MENU[] = [
    {
        display: '검색',
        name: 'main',
        path: '/main',
        component: MainPage,
        visible: true,
    },
    {
        display: '순위',
        name: 'rank',
        path: '/rank',
        component: RankPage,
        visible: true,
    },
    {
        display: '개발자 소개',
        name: 'intro',
        path: '/intro',
        component: IntroPage,
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
