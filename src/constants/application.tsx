import { SearchPage, RankingPage, UserPage } from '@/pages'

export const MAIN_MENU_LIST: I_MENU[] = [
    {
        display: 'Search',
        name: 'search',
        path: '/search',
        component: SearchPage,
        visible: true,
    },
    {
        display: 'Ranking',
        name: 'ranking',
        path: '/ranking',
        component: RankingPage,
        visible: true,
    },
    {
        display: 'User',
        name: 'user',
        path: '/user/:userId',
        component: UserPage,
        visible: false,
    },
]
