import ContinuousCommitView from './ContinuousCommitView';
import ContributionView from './ContributionView';
import FollowersView from './FollowersView';
import FollowingsView from './FollowingsView';
import LanguagesView from './LanguagesView';
import TierView from './TierView';

export const RANK_MENUS: I_MENU[] = [
    {
        display: '종합',
        name: 'tier',
        path: '/rank/tier',
        component: TierView,
        visible: true,
    },
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
        display: '꾸준함',
        name: 'langauges',
        path: '/rank/continuousCommit',
        component: ContinuousCommitView,
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
