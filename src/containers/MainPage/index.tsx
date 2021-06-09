import React from 'react';
import './style.css';
import Search from './Search';
import Typer from '@/components/Typer';
import Ranking from './Ranking';

interface I_PROPS {}

const MainPage: React.FC<I_PROPS> = () => {
    return (
        <div id="main-page">
            <section className="main-page__column">
                <h1 className="main-page__title">
                    Over <br />
                    Programmed <br />
                    Good <br />
                    Coding
                </h1>
                <p className="main-page__desc">
                    <span className="main-page__typer">
                        Ranking By{' '}
                        <Typer
                            contents={[
                                'Tier',
                                'Followers',
                                'Followings',
                                'Daily Commit',
                            ]}
                        />
                    </span>
                    <br />
                    OPGC만의 다양한 개발자 순위를 만나보세요.
                </p>
                <div className="main-page__search">
                    <Search />
                </div>
            </section>
            <section className="main-page__column pc-only">
                <Ranking />
            </section>
        </div>
    );
};

export default React.memo(MainPage);
