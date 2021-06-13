/**
 * 페이지단위 혹은 앱 공용으로 사용되는 UI 컴포넌트의 showing 상태값을 관리하는 store
 */
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
