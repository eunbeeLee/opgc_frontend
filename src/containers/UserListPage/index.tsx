import React, { useEffect, useState } from 'react';
import MainLayout from '@/layouts/MainLayout';
import { useDispatch, useSelector } from 'react-redux';
import { actions, T_ROOT_REDUCER } from '@/modules';
import './style.css';
import { GET_USERS } from '@/modules/userList';
import UserFilter from '@/components/UserFilter';
import UserListCard from '@/components/UserListCard';
import ErrorLayout from '@/layouts/ErrorLayout';

interface I_PROPS {}

const UserListPage: React.FC<I_PROPS> = () => {
    // 페이지 상단으로 이동
    window.scrollTo(0, 0);
    const { getUsers } = actions.userList;
    const uiActions = actions.ui.app;
    const dispatch = useDispatch();

    const [company, setCompany] = useState<string>('');
    const [tier, setTier] = useState<string>('');
    const [userName, setUserName] = useState<string>('');

    const { users, nextPageCursor, prevPageCursor } = useSelector(
        (state: T_ROOT_REDUCER) => state.userList
    );
    const { loading: loadingState } = useSelector(
        (state: T_ROOT_REDUCER) => state
    );
    const pageSize = 30;

    // 이전 페이지
    const handleClickNextPage = () => {
        if (!nextPageCursor) {
            return;
        }
        dispatch(
            getUsers({
                page_size: pageSize,
                cursor: nextPageCursor,
                company: company,
                username: userName,
                tier: tier,
            })
        );
    };

    // 다음 페이지
    const handleClickPrevPage = () => {
        if (!prevPageCursor) {
            return;
        }

        dispatch(
            getUsers({
                page_size: pageSize,
                cursor: prevPageCursor,
                company: company,
                username: userName,
                tier: tier,
            })
        );
    };

    // 필터 적용
    const applyFilter = ({ company, userName, tier }) => {
        setUserName(userName);
        setCompany(company);
        setTier(tier);

        dispatch(
            getUsers({
                page_size: pageSize,
                company,
                username: userName,
                tier,
            })
        );
    };

    const renderPageBtnGroup = users.length >= pageSize && (
        <div className="user-list__page-btns">
            <span onClick={handleClickPrevPage} data-disabled={!prevPageCursor}>
                PREV
            </span>{' '}
            /
            <span onClick={handleClickNextPage} data-disabled={!nextPageCursor}>
                NEXT
            </span>
        </div>
    );

    useEffect(() => {
        dispatch(getUsers({ page_size: pageSize }));
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
                    {users.length === 0 && (
                        <ErrorLayout showHistoryBack={false} height="300px">
                            검색된 개발자가 없습니다.
                        </ErrorLayout>
                    )}
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
