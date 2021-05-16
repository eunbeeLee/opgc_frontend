import ContributionView from './ContributionView';
import FollowersView from './FollowersView';
import FollowingsView from './FollowingsView';
import LanguagesView from './LanguagesView';

export const RANK_MENUS: I_MENU[] = [
    {
        display: '기여도',
        name: 'contribution',
        path: '/rank/contribution',
        component: ContributionView,
        visible: true,
    },
    {
        display: '팔로워',
        name: 'followers',
        path: '/rank/followers',
        component: FollowersView,
        visible: true,
    },
    {
        display: '팔로잉',
        name: 'followings',
        path: '/rank/followings',
        component: FollowingsView,
        visible: true,
    },
    {
        display: '언어',
        name: 'langauges',
        path: '/rank/langauges',
        component: LanguagesView,
        visible: false,
    },
];
