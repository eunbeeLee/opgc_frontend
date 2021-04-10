import root, { actions as rootActions} from './root';
import contribution, { actions as contributionActions } from './contribution';
import followings, { actions as followingsActions } from './follwings';
import followers, { actions as followersActions } from './followers';
import continuousCommitDay, { actions as continuousCommitDayActions } from './continuousCommitDay';

export const actions = {
    root: rootActions,
    contribution: contributionActions,
    followings: followingsActions,
    followers: followersActions,
    continuousCommitDay: continuousCommitDayActions,
};

export default {
    root,
    contribution,
    followings,
    followers,
    continuousCommitDay,
}
