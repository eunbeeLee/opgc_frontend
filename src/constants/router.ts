import LoginPage from '@/containers/LoginPage';
import MainPage from '@/containers/MainPage';
import UserPage from '@/containers/UserPage';
import RankPage from '@/containers/RankPage';

import ContinuousCommitView from '@/containers/RankPage/ContinuousCommitView';
import ContributionView from '@/containers/RankPage/ContributionView';
import FollowersView from '@/containers/RankPage/FollowersView';
import FollowingsView from '@/containers/RankPage/FollowingsView';
import LanguagesView from '@/containers/RankPage/LanguagesView';
import TierView from '@/containers/RankPage/TierView';
import QnaPage from '@/containers/QnaPage';

const routes: I_ROUTE[] = [
    {
        name: 'main',
        path: '/main',
        component: MainPage,
    },
    {
        name: 'login',
        path: '/login',
        component: LoginPage,
    },
    {
        name: 'user',
        path: '/users/:userId',
        component: UserPage,
    },
    {
        name: 'qna',
        path: '/qna',
        component: QnaPage,
    },
    {
        name: 'rank',
        path: '/rank',
        component: RankPage,
        children: [
            {
                name: 'rank.tier',
                path: '/rank/tier',
                component: TierView,
            },
            {
                name: 'rank.contribution',
                path: '/rank/contribution',
                component: ContributionView,
            },
            {
                name: 'rank.followers',
                path: '/rank/followers',
                component: FollowersView,
            },
            {
                name: 'rank.followings',
                path: '/rank/followings',
                component: FollowingsView,
            },
            {
                name: 'rank.continuousCommit',
                path: '/rank/continuousCommit',
                component: ContinuousCommitView,
            },
            // {
            //     name: 'rank.tier',
            //     path: '/rank/langauges',
            //     component: LanguagesView,
            // },
        ],
    },
];

export default routes;
