import React, { useEffect, useState } from 'react';
import { UPDATE_USER, PATCH_USER } from '@/modules/user';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSync } from '@fortawesome/free-solid-svg-icons';
import { useRouteMatch } from 'react-router';
import RepoList from './RepoList';
import './style.css';
import { useDispatch, useSelector } from 'react-redux';
import { actions, T_ROOT_REDUCER } from '@/modules';
import UserInfo from './UserInfo';
import LanguagesPieChart from './LanguagesPieChart';
import ErrorLayout from '@/layouts/ErrorLayout';

interface I_PROPS {}

const UserPage: React.FC<I_PROPS> = () => {
    const dispatch = useDispatch();

    const uiActions = actions.ui.app;
    const userActions = actions.user;

    const {
        user: userState,
        loading: loadingState,
        error: errorState,
    } = useSelector((state: T_ROOT_REDUCER) => state);
    const {
        params: { userId },
    } = useRouteMatch<{ userId: string }>();

    const [user, setUser] = useState(null);

    useEffect(() => {
        setUser(userState.user);
    }, [userState.user]);

    useEffect(() => {
        dispatch(uiActions.setLoading(loadingState[PATCH_USER]));
    }, [loadingState[PATCH_USER]]);

    useEffect(() => {
        setUser(null);
        dispatch(userActions.patchUser(userId));
    }, [userId]);

    const handleClickRefresh = () => {
        dispatch(userActions.updateUser(userId));
    };

    if (errorState[PATCH_USER]) {
        return <ErrorLayout>유저를 찾을 수 없습니다.</ErrorLayout>;
    } else if (!user) {
        return null;
    } else {
        return (
            <div id="user-info">
                <div className="user-info__refresh">
                    <button onClick={handleClickRefresh}>
                        <FontAwesomeIcon
                            icon={faSync}
                            className={`user-info__refresh-btn${
                                loadingState[UPDATE_USER] ? ' refreshing' : ''
                            }`}
                        />
                    </button>
                    <span className="user-info__refresh-date">
                        {loadingState[UPDATE_USER]
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
        );
    }
};

export default React.memo(UserPage);
