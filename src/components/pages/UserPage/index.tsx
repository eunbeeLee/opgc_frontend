import React, { useEffect } from 'react';
import { getUser } from '@/modules/user';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSync } from '@fortawesome/free-solid-svg-icons';
import { useRouteMatch } from 'react-router';
import RepoList from './RepoList';
import './style.css';
import { useDispatch, useSelector } from 'react-redux';
import { T_ROOT_REDUCER } from '@/modules';
import UserInfo from './UserInfo';

interface I_PROPS {}

const UserPage: React.FC<I_PROPS> = () => {
    const dispatch = useDispatch();
    const { user } = useSelector((state: T_ROOT_REDUCER) => state.user);

    const { params: { userId } } = useRouteMatch<{ userId: string }>();

    useEffect(() => {
        dispatch(getUser(userId));
    }, [userId]);

    const handleClickRefresh = () => {
        console.log('::: handleClickRefresh');
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
                    Last updated: {user.updated}
                </span>
            </div>
            {/* Top */}
            <section className="user-info__summary">
                <UserInfo user={user}/>
            </section>

            {/* Bottom */}
            <section className="user-info__detail">
                <section>
                    <h1>Repositories</h1>
                    <RepoList repos={user?.repositories} />
                </section>
            </section>
        </div>
    );
};

export default React.memo(UserPage);
