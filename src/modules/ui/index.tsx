import app, { actions as appActions } from './app';
import mainPage, { actions as mainPageActions } from './mainPage';

export const actions = {
    app: appActions,
    mainPage: mainPageActions,
};

export default {
    app,
    mainPage,
};
