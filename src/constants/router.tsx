import React from 'react';
import loadable from '@loadable/component';
import Loading from '@/components/Loading';

const routes: I_ROUTE[] = [
    {
        name: 'main',
        path: '/main',
        component: loadable(() => import('@/containers/MainPage'), {
            fallback: <Loading />,
        }),
    },
    {
        name: 'login',
        path: '/login',
        component: loadable(() => import('@/containers/LoginPage'), {
            fallback: <Loading />,
        }),
    },
    {
        name: 'user',
        path: '/users/:userId',
        component: loadable(() => import('@/containers/UserPage'), {
            fallback: <Loading />,
        }),
    },
    {
        name: 'qna',
        path: '/qna',
        component: loadable(() => import('@/containers/QnaPage'), {
            fallback: <Loading />,
        }),
    },
    {
        name: 'notice',
        path: '/notice',
        component: loadable(() => import('@/containers/NoticePage'), {
            fallback: <Loading />,
        }),
    },
    {
        name: 'rank',
        path: '/rank',
        component: loadable(() => import('@/containers/RankPage'), {
            fallback: <Loading />,
        }),
        children: [
            {
                name: 'rank.tier',
                path: '/rank/tier',
                component: loadable(
                    () => import('@/containers/RankPage/TierView'),
                    {
                        fallback: <Loading />,
                    }
                ),
            },
            {
                name: 'rank.contribution',
                path: '/rank/contribution',
                component: loadable(
                    () => import('@/containers/RankPage/ContributionView'),
                    {
                        fallback: <Loading />,
                    }
                ),
            },
            {
                name: 'rank.followers',
                path: '/rank/followers',
                component: loadable(
                    () => import('@/containers/RankPage/FollowersView'),
                    {
                        fallback: <Loading />,
                    }
                ),
            },
            {
                name: 'rank.followings',
                path: '/rank/followings',
                component: loadable(
                    () => import('@/containers/RankPage/FollowingsView'),
                    {
                        fallback: <Loading />,
                    }
                ),
            },
            {
                name: 'rank.continuousCommit',
                path: '/rank/continuousCommit',
                component: loadable(
                    () => import('@/containers/RankPage/ContinuousCommitView'),
                    {
                        fallback: <Loading />,
                    }
                ),
            },
            // {
            //     name: 'rank.language',
            //     path: '/rank/langauges',
            //     component: loadable(
            //         () => import('@/containers/RankPage/LanguagesView'),
            //         {
            //             fallback: <Loading />,
            //         }
            //     ),
            // },
        ],
    },
];

export default routes;
