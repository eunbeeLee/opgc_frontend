/**
 * 순위정보와 관련된 store
 */
import root, { actions as rootActions } from './root';
import contribution, { actions as contributionActions } from './contribution';
import followings, { actions as followingsActions } from './followings';
import followers, { actions as followersActions } from './followers';
import tier, { actions as tierActions } from './tier';
import continuousCommitDay, {
    actions as continousCommitActions,
} from './continuousCommit';

export const actions = {
    root: rootActions,
    contribution: contributionActions,
    followings: followingsActions,
    followers: followersActions,
    tier: tierActions,
    ContinousCommit: continousCommitActions,
};

export default {
    root,
    contribution,
    followings,
    followers,
    tier,
    continuousCommitDay,
};
