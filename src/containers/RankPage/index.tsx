import React, { ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './style.css';
import './TierView/style.css';
import FilterNav from './FilterNav';
import { actions, T_ROOT_REDUCER } from '@/modules';

import MainLayout from '@/layouts/MainLayout';

interface I_PROPS {}

const RankPage: React.FC<I_PROPS> = ({ children }) => {
    const action = actions.rank.root;
    const dispatch = useDispatch();
    const { rank: rankState } = useSelector((state: T_ROOT_REDUCER) => state);
    const { root: searchId } = rankState;

    const handleSearch = (e) => {
        e.preventDefault();
        console.log('::: handleSearch');
    };

    const handleChangeSearchedId = ({
        target: { value },
    }: ChangeEvent<HTMLInputElement>) => {
        dispatch(action.changeSearchId(value));
    };

    return (
        <MainLayout>
            <div id="ranking">
                <div className="ranking__nav">
                    <FilterNav />
                </div>
                {children}
            </div>
        </MainLayout>
    );
};

export default React.memo(RankPage);
