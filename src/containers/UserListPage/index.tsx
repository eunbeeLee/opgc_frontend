import React, { useEffect, useState } from 'react';
import MainLayout from '@/layouts/MainLayout';
import { useDispatch, useSelector } from 'react-redux';
import { actions, T_ROOT_REDUCER } from '@/modules';
import { Link } from 'react-router-dom';
import Avatar from "@/components/Avatar";
import './style.css';
import {E_ROUND_TYPE} from "@/components/Avatar/type";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft, faArrowRight, faAt, faCode, faStar, faTrophy} from "@fortawesome/free-solid-svg-icons";
import {getTierImage} from "@/services/userInfo";

interface I_PROPS {}

const UserListPage: React.FC<I_PROPS> = () => {
    const { getUsers } = actions.userList;
    const { users, nextPageCursor, prevPageCursor } = useSelector((state: T_ROOT_REDUCER) => state.userList);
    const dispatch = useDispatch();

    // 이전 페이지
    const handleClickNextPage = () => {
        dispatch(getUsers(nextPageCursor));
    };

    // 다음 페이지
    const handleClickPrevPage = () => {
        dispatch(getUsers(prevPageCursor));
    };

    useEffect(() => {
        dispatch(getUsers());
    }, []);

    const renderUserList = () => {
        return (
            <>
                <div className="user-list-base">
                    {users.map((user, idx) => {
                        return (
                            <Link to={`/users/${user.username}`} style={{ cursor: 'pointer' }} key={`${user.date}_${idx}`}>
                                <div className="user-list__profile" >
                                    <Avatar
                                        width={70}
                                        height={70}
                                        imgUrl={user.profileImgUrl || '/assets/imgs/logo.png'}
                                        style={{ margin: '8px 8px 0px 8px' }}
                                    />
                                    <ul style={{fontSize: '20px', fontWeight: 'bold'}}>
                                        <Avatar width={25} height={25} imgUrl={getTierImage(user.tier)}/>
                                        <span style={{ verticalAlign: 'text-top'}}> {user.username}</span>
                                    </ul>
                                    <ul>
                                        <span>{user.name || '-'}</span>
                                    </ul>
                                    <ul>
                                        <FontAwesomeIcon icon={faTrophy}/><span> {user.rank}</span>
                                    </ul>
                                    <ul>
                                        <FontAwesomeIcon icon={faAt}/><span> {user.company}</span>
                                    </ul>
                                    <ul>
                                        <FontAwesomeIcon icon={faCode}/><span> {user.totalContributionCnt}</span>
                                    </ul>
                                    <ul>
                                        <FontAwesomeIcon icon={faStar}/><span> {user.totalStarCnt}</span>
                                    </ul>
                                    <ul>
                                        <span className="user-list__profile__belong-title-title">
                                            a member of
                                        </span>
                                        <div style={{marginTop: '5px'}}>
                                            {user.organizations.length > 0 && (
                                                <div className="user-list__profile__organization">
                                                    {user.organizations.map((organization, idx) => {
                                                        if (idx < 7) return (
                                                            <Avatar
                                                                key={organization.name}
                                                                type={E_ROUND_TYPE.RECTANGLE}
                                                                imgUrl={organization.logoUrl ||  '/assets/imgs/logo.png'}
                                                                width={25}
                                                                height={25}
                                                                title={organization.name}
                                                            />
                                                        )
                                                    })}
                                                    {user.organizations.length >= 7 && (
                                                        <span>...</span>
                                                    )}
                                                </div>
                                            )}
                                        </div>
                                    </ul>
                                </div>
                            </Link>
                        );
                    })}
                </div>
                <div className="page-button">
                    <button onClick={handleClickPrevPage}>
                        <FontAwesomeIcon
                            icon={faArrowLeft}
                        />
                    </button>
                    <button onClick={handleClickNextPage}>
                        <FontAwesomeIcon
                            icon={faArrowRight}
                        />
                    </button>
                </div>
            </>
        );
    };

    return (
        <MainLayout>
            <div className="user-list-base">
                <div>{renderUserList()}</div>
            </div>
        </MainLayout>
    );
};

export default React.memo(UserListPage);
