import React, { useEffect, useState } from 'react';
import MainLayout from '@/layouts/MainLayout';
import { useDispatch, useSelector } from 'react-redux';
import { actions, T_ROOT_REDUCER } from '@/modules';
import NotiCard from '@/components/NotiCard';
import './style.css';
import { getNotis } from '@/apis/notiApi';

interface I_PROPS {}

const NotiPage: React.FC<I_PROPS> = () => {
    const { getNotis } = actions.noti;
    const dispatch = useDispatch();

    const { notis } = useSelector((state: T_ROOT_REDUCER) => state.noti);

    useEffect(() => {
        dispatch(getNotis());
    }, []);

    const renderNotis = () => {
        return (
            <ul className="noti-page__notis notis">
                {notis.map((noti, idx, notis) => {
                    const isLast = idx === notis.length - 1;

                    return (
                        <li
                            className="notis__noti noti"
                            key={`${noti.date}_${idx}`}
                        >
                            {!isLast && <div className="noti__time-line"></div>}
                            <div className="noti__time-node"></div>
                            <div className="noti__item">
                                <NotiCard
                                    date={noti.date}
                                    title={noti.title}
                                    content={noti.content}
                                />
                            </div>
                        </li>
                    );
                })}
            </ul>
        );
    };

    return (
        <MainLayout>
            <div className="noti-page">
                <div className="noti-page__items">{renderNotis()}</div>
            </div>
        </MainLayout>
    );
};

export default React.memo(NotiPage);
