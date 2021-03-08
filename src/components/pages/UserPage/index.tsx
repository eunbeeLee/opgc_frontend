import React, { useCallback, useEffect } from 'react';
import { getUser, PATCH_USER, patchUser } from '@/modules/user';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSync } from '@fortawesome/free-solid-svg-icons';
import { useRouteMatch } from 'react-router';
import RepoList from './RepoList';
import './style.css';
import { useDispatch, useSelector } from 'react-redux';
import { T_ROOT_REDUCER } from '@/modules';
import UserInfo from './UserInfo';
import LanguagesPieChart from './LanguagesPieChart';

interface I_PROPS {}

const UserPage: React.FC<I_PROPS> = () => {
    const dispatch = useDispatch();
    const { user: userState, loading: loadingState } = useSelector((state: T_ROOT_REDUCER) => state);
    const { user } = userState;
    const { [PATCH_USER]: isPatchUserLoading } = loadingState;

    const { params: { userId } } = useRouteMatch<{ userId: string }>();

    useEffect(() => {
        dispatch(getUser(userId));
    }, [userId]);

    const handleClickRefresh = () => {
        dispatch(patchUser(userId));
    };

    return user && (
        <div id="user-info">
            <div className="user-info__refresh">
                <button onClick={handleClickRefresh}>
                    <FontAwesomeIcon
                        icon={faSync}
                        className="user-info__refresh-btn"
                    />
                </button>
                <span className="user-info__refresh-date">
                    { isPatchUserLoading ? '업데이트 중입니다.' : `Last updated: ${user.updated}` }
                </span>
            </div>
            {/* Top */}
            <section className="user-info__summary">
                <UserInfo user={user}/>
            </section>

            {/* Bottom */}
            <section className="user-info__detail">
                <section>
                    <h1>Languages</h1>
                    <LanguagesPieChart data={user.languages}/>
                </section>

                <section className="user-info__repositories">
                    <h1>Repositories</h1>
                    <RepoList repos={user?.repositories} />
                </section>
            </section>
        </div>
    );
};

export default React.memo(UserPage);
