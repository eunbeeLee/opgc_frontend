import React, { useEffect, useState } from 'react';
import MainLayout from '@/layouts/MainLayout';
import { useDispatch, useSelector } from 'react-redux';
import { actions, T_ROOT_REDUCER } from '@/modules';
import { Link } from 'react-router-dom';
import Avatar from '@/components/Avatar';
import './style.css';
import { E_ROUND_TYPE } from '@/components/Avatar/type';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowLeft,
    faArrowRight,
    faBuilding,
    faCode,
    faStar,
    faTrophy,
} from '@fortawesome/free-solid-svg-icons';
import { getTierImage } from '@/services/userInfo';
import { GET_USERS } from '@/modules/userList';
import UserFilter from '@/components/UserFilter';

interface I_PROPS {}

const UserListPage: React.FC<I_PROPS> = () => {
    const { getUsers } = actions.userList;
    const uiActions = actions.ui.app;
    const dispatch = useDispatch();
    const { users, nextPageCursor, prevPageCursor } = useSelector(
        (state: T_ROOT_REDUCER) => state.userList
    );
    const { loading: loadingState } = useSelector(
        (state: T_ROOT_REDUCER) => state
    );
    const pateSize = 30;

    // 이전 페이지
    const handleClickNextPage = () => {
        // dispatch(
        //     getUsers({
        //         page_size: pateSize,
        //         cursor: nextPageCursor,
        //         company: company,
        //         username: username,
        //         tier: tier,
        //     })
        // );
    };

    // 다음 페이지
    const handleClickPrevPage = () => {
        // dispatch(
        //     getUsers({
        //         page_size: pateSize,
        //         cursor: prevPageCursor,
        //         company: company,
        //         username: username,
        //         tier: tier,
        //     })
        // );
    };

    // 필터 적용
    const applyFilter = (data) => {
        dispatch(
            getUsers({
                page_size: pateSize,
                company: data.company,
                username: data.username,
                tier: data.tier,
            })
        );
    };

    useEffect(() => {
        dispatch(getUsers({ page_size: pateSize }));
    }, []);

    useEffect(() => {
        dispatch(uiActions.setLoading(loadingState[GET_USERS]));
    }, [loadingState[GET_USERS]]);

    // 페이지 상단으로 이동
    window.scrollTo(0, 0);

    const renderUserList = () => {
        return (
            <>
                <div className="user-list-base">
                    {users.map((user, idx) => {
                        return (
                            <Link
                                to={`/users/${user.username}`}
                                style={{ cursor: 'pointer' }}
                                key={`${user.date}_${idx}`}
                            >
                                <div className="user-list__profile">
                                    <Avatar
                                        width={70}
                                        height={70}
                                        imgUrl={
                                            user.profileImgUrl ||
                                            '/assets/imgs/logo.png'
                                        }
                                        style={{ margin: '8px 8px 0px 8px' }}
                                    />
                                    <div
                                        style={{
                                            fontSize: '20px',
                                            fontWeight: 'bold',
                                        }}
                                    >
                                        <Avatar
                                            width={25}
                                            height={25}
                                            imgUrl={getTierImage(user.tier)}
                                        />
                                        <span
                                            style={{
                                                verticalAlign: 'text-top',
                                            }}
                                        >
                                            {' '}
                                            {user.username}
                                        </span>
                                    </div>
                                    <div className="user-list__profile__inform">
                                        <span>{user.name || '-'}</span>
                                    </div>
                                    <div className="user-list__profile__inform">
                                        <FontAwesomeIcon icon={faTrophy} />
                                        <span> {user.rank}</span>
                                    </div>
                                    <div className="user-list__profile__inform">
                                        <FontAwesomeIcon icon={faBuilding} />
                                        <span> {user.company || '-'}</span>
                                    </div>
                                    <div className="user-list__profile__inform">
                                        <FontAwesomeIcon icon={faCode} />
                                        <span>
                                            {' '}
                                            {user.totalContributionCnt}
                                        </span>
                                    </div>
                                    <div className="user-list__profile__inform">
                                        <FontAwesomeIcon icon={faStar} />
                                        <span> {user.totalStarCnt}</span>
                                    </div>
                                    <div className="user-list__profile__inform">
                                        <span className="user-list__profile__belong-title-title">
                                            a member of
                                        </span>
                                        <div style={{ marginTop: '5px' }}>
                                            {user.organizations.length > 0 && (
                                                <div className="user-list__profile__organization">
                                                    {user.organizations.map(
                                                        (organization, idx) => {
                                                            if (idx < 7)
                                                                return (
                                                                    <Avatar
                                                                        key={
                                                                            organization.name
                                                                        }
                                                                        type={
                                                                            E_ROUND_TYPE.RECTANGLE
                                                                        }
                                                                        imgUrl={
                                                                            organization.logoUrl ||
                                                                            '/assets/imgs/logo.png'
                                                                        }
                                                                        width={
                                                                            25
                                                                        }
                                                                        height={
                                                                            25
                                                                        }
                                                                        title={
                                                                            organization.name
                                                                        }
                                                                    />
                                                                );
                                                        }
                                                    )}
                                                    {user.organizations
                                                        .length >= 7 && (
                                                        <span>...</span>
                                                    )}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </>
        );
    };

    return (
        <MainLayout>
            <button className="button-left" onClick={handleClickPrevPage}>
                <FontAwesomeIcon icon={faArrowLeft} />
            </button>
            <div className="user-list-base">
                <UserFilter onApplyFilter={applyFilter} />
                <div>{renderUserList()}</div>
            </div>
            <button className="button-right" onClick={handleClickNextPage}>
                <FontAwesomeIcon icon={faArrowRight} />
            </button>
        </MainLayout>
    );
};

export default React.memo(UserListPage);
