import { IntroPage, RankPage, UserPage, SearchPage} from '@/components/pages';

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
        display: '인싸가 되고싶은 OPGC 개발자 소개',
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