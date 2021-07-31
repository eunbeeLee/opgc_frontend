import React, { useEffect, useState } from 'react';
import MainLayout from '@/layouts/MainLayout';
import { useDispatch, useSelector } from 'react-redux';
import { actions, T_ROOT_REDUCER } from '@/modules';
import './style.css';
import { I_NOTI } from '@/types/noti';
import Notice from '@/components/Notice';
import Overlay from '@/components/Overlay';

interface I_PROPS {}

const NotiPage: React.FC<I_PROPS> = () => {
    const dispatch = useDispatch();
    const [selectedNoti, setSelectedNoti] = useState<I_NOTI>(null);

    const { getNotis } = actions.noti;

    const { notis } = useSelector((state: T_ROOT_REDUCER) => state.noti);

    useEffect(() => {
        dispatch(getNotis());
    }, []);

    const handleClickNoti = (noti: I_NOTI) => {
        setSelectedNoti(noti);
    };

    const handleCloseNoti = () => {
        setSelectedNoti(null);
    };

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
                            <div className="noti-item__date">{noti.date}</div>
                            <div
                                className="noti__item noti-item"
                                onClick={() => handleClickNoti(noti)}
                            >
                                <div className="noti-item__title">
                                    {noti.title}
                                </div>
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
                {selectedNoti && (
                    <Overlay onClick={handleCloseNoti}>
                        <Notice data={selectedNoti} onClose={handleCloseNoti} />
                    </Overlay>
                )}
            </div>
        </MainLayout>
    );
};

export default React.memo(NotiPage);
