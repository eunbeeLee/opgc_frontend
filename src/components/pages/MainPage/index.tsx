import React, { useEffect } from 'react';
import './style.css';
import { CONTRI_COLUMNS } from './constants';
import { T_ROOT_REDUCER } from '@/modules';
import { actions } from '@/modules';
import { useDispatch, useSelector } from 'react-redux';
import Table from '@/components/common/Table';
import Search from './Search';

interface I_PROPS {}

const MainPage: React.FC<I_PROPS> = () => {
    const { getRanks } = actions.rank.ContinousCommit;
    const dispatch = useDispatch();
    const {
        root: { searchId },
        continuousCommit: { ranks },
    } = useSelector((state: T_ROOT_REDUCER) => state.rank);

    useEffect(() => {
        dispatch(getRanks(searchId));
    }, []);

    return (
        <div id="main-page">
            <img
                className="main-page__logo"
                src="/assets/imgs/search/index-logo.png"
            />
            <section>
                <Search />
            </section>
        </div>
    );
};

export default React.memo(MainPage);
