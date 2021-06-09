import MainPage from '@/containers/MainPage';
import RankPage from '@/containers/RankPage';
import IntroPage from '@/containers/IntroPage';
import UserPage from '@/containers/UserPage';

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
        visible: false,
    },
    {
        display: 'User',
        name: 'user',
        path: '/users/:userId',
        component: UserPage,
        visible: false,
    },
];
