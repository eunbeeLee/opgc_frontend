import React, { useEffect } from 'react';
import { PATCH_USER, GET_USER } from '@/modules/user';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSync } from '@fortawesome/free-solid-svg-icons';
import { useRouteMatch } from 'react-router';
import RepoList from './RepoList';
import './style.css';
import { useDispatch, useSelector } from 'react-redux';
import { actions, T_ROOT_REDUCER } from '@/modules';
import UserInfo from './UserInfo';
import LanguagesPieChart from './LanguagesPieChart';

interface I_PROPS {}

const UserPage: React.FC<I_PROPS> = () => {
    const uiActions = actions.ui.app;
    const userActions = actions.user;

    const dispatch = useDispatch();
    const { user: userState, loading: loadingState } = useSelector(
        (state: T_ROOT_REDUCER) => state
    );
    const { user } = userState;

    useEffect(() => {
        dispatch(uiActions.setLoading(loadingState[GET_USER]));
    }, [loadingState[GET_USER]]);

    const {
        params: { userId },
    } = useRouteMatch<{ userId: string }>();

    useEffect(() => {
        dispatch(userActions.getUser(userId));
    }, [userId]);

    const handleClickRefresh = () => {
        dispatch(userActions.patchUser(userId));
    };

    return (
        user && (
            <>
                <div id="user-info">
                    <div className="user-info__refresh">
                        <button onClick={handleClickRefresh}>
                            <FontAwesomeIcon
                                icon={faSync}
                                className={`user-info__refresh-btn${
                                    loadingState[PATCH_USER]
                                        ? ' refreshing'
                                        : ''
                                }`}
                            />
                        </button>
                        <span className="user-info__refresh-date">
                            {loadingState[PATCH_USER]
                                ? '업데이트 중입니다.'
                                : `최근업데이트: ${user.updated}`}
                        </span>
                    </div>
                    {/* Top */}
                    <section className="user-info__summary">
                        <UserInfo user={user} />
                    </section>

                    {/* Bottom */}
                    <section className="user-info__detail">
                        <section>
                            <h1>Languages</h1>
                            <LanguagesPieChart data={user.languages} />
                        </section>

                        <section className="user-info__repositories">
                            <h1>Repositories</h1>
                            <RepoList repos={user?.repositories} />
                        </section>
                    </section>
                </div>
            </>
        )
    );
};

export default React.memo(UserPage);
