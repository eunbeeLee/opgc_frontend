import React, { useEffect, useState } from 'react';
import MainLayout from '@/layouts/MainLayout';
import { useDispatch, useSelector } from 'react-redux';
import { actions, T_ROOT_REDUCER } from '@/modules';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { GET_USERS } from '@/modules/userList';
import UserFilter from '@/components/UserFilter';
import UserListCard from '@/components/UserListCard';

interface I_PROPS {}

const UserListPage: React.FC<I_PROPS> = () => {
    // 페이지 상단으로 이동
    window.scrollTo(0, 0);

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

    const renderPageBtnGroup = (
        <div className="user-list__page-btns">
            <span onClick={handleClickPrevPage}>PREV</span>/
            <span onClick={handleClickNextPage}>NEXT</span>
        </div>
    );

    useEffect(() => {
        dispatch(getUsers({ page_size: pateSize }));
    }, []);

    useEffect(() => {
        dispatch(uiActions.setLoading(loadingState[GET_USERS]));
    }, [loadingState[GET_USERS]]);

    return (
        <MainLayout>
            <div className="user-list">
                <div className="user-list__top">
                    <UserFilter onApplyFilter={applyFilter} />
                </div>
                <div className="user-list__bottom">
                    {renderPageBtnGroup}
                    <div className="user-list__list">
                        {users.map((user) => {
                            return (
                                <UserListCard data={user} key={user.username} />
                            );
                        })}
                    </div>
                    {renderPageBtnGroup}
                </div>
            </div>
        </MainLayout>
    );
};

export default React.memo(UserListPage);
