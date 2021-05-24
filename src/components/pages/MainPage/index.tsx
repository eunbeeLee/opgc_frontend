import React, { useEffect } from 'react';
import './style.css';
import { CONTRI_COLUMNS } from './constants';
import { T_ROOT_REDUCER } from '@/modules';
import { actions } from '@/modules';
import { useDispatch, useSelector } from 'react-redux';
import Table from '@/components/common/Table';
import Search from './Search';
import Typer from '@/components/common/Typer';

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
            <section className="main-page__column">
                <h1>
                    Open <br />
                    Programmed <br />
                    Good <br />
                    Coding
                </h1>
                <p>
                    <span className="main-page__typing typing">
                        Ranking of{' '}
                        <Typer
                            contents={[
                                'Tier',
                                'Followers',
                                'Followings',
                                '1 Day 1 Commit',
                            ]}
                        />
                    </span>
                    <br />
                    OPGG만의 다양한 개발자 순위를 만나보세요.
                </p>
                <img
                    className="main-page__logo"
                    src="/assets/imgs/search/index-logo.png"
                />
                <Search />
            </section>
            <section className="main-page__column"></section>
        </div>
    );
};

export default React.memo(MainPage);
